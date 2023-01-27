import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  createForm,
  FormType,
  subformComponentProviders,
  TypedFormGroup,
} from 'ngx-sub-form';
import { VehicleRecordDateModel } from 'src/app/core/models/vehicle-record';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@Component({
  selector: 'parking-sub-form-date',
  standalone: true,
  imports: [CommonModule, TextModule, IconModule, ReactiveFormsModule],
  templateUrl: './sub-form-date.component.html',
  styleUrls: ['./sub-form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: subformComponentProviders(SubFormDateComponent),
})
export class SubFormDateComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;

  private isRequiredField: boolean = false;
  @Input() set isEntryDate(value: boolean) {
    this.isRequiredField = value;
  }

  public form = createForm<string, VehicleRecordDateModel>(this, {
    formType: FormType.SUB,
    formControls: {
      day: new UntypedFormControl(null),
      month: new UntypedFormControl(null),
      year: new UntypedFormControl(null),
    },
    toFormGroup: (value: string): VehicleRecordDateModel => {
      return {
        day: value.split('T')[0].split('-')[2],
        month: value.split('T')[0].split('-')[1],
        year: value.split('T')[0].split('-')[0],
      };
    },
    fromFormGroup: (formValue: VehicleRecordDateModel): string => {
      return `${formValue.year}-${formValue.month}-${formValue.day}`;
    },
    formGroupOptions: {
      validators: this.isRequiredField
        ? [(formGroup) => this.validateDate(formGroup)]
        : null,
    },
  });

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.isRequiredField) {
      Object.keys(this.form.formGroup.controls).forEach((control) =>
        this.form.formGroup.controls[control].setValidators([
          Validators.required,
        ])
      );
    } else {
      Object.keys(this.form.formGroup.controls).forEach((control) =>
        this.form.formGroup.controls[control].clearValidators()
      );
    }
  }

  handleKeypress(key: string): boolean {
    const pattern = new RegExp('[0-9]');
    return pattern.test(key);
  }

  handleFocus(): void {
    this.toggleLabelFocus(true);
  }

  handleBlur(): void {
    this.toggleLabelFocus(false);
  }

  private toggleLabelFocus(toggle: boolean): void {
    const classes = 'sub-form-date__label--focus';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelClass(toggle: boolean, classes: string): void {
    const label = this.el?.nativeElement?.querySelector(
      '.sub-form-date__label'
    );

    if (!label) {
      return;
    }

    toggle
      ? this.renderer.addClass(label, classes)
      : this.renderer.removeClass(label, classes);
  }

  private validateDate(
    formGroup: TypedFormGroup<VehicleRecordDateModel>
  ): ValidationErrors {
    const day = Number(formGroup.controls.day.value);
    const month = Number(formGroup.controls.month.value);
    const year = Number(formGroup.controls.year.value);

    if (day < 0 || day >= 32) {
      return { dayOutRange: true };
    }

    if (month < 0 || month >= 13) {
      return { monthOutRange: true };
    }

    if (!(year < new Date().getFullYear())) {
      return { yearOutRange: true };
    }

    return null;
  }
}
