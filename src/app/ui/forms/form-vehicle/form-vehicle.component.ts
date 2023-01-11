import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

import { VehicleModel } from 'src/app/core/models/vehicle';

@Component({
  selector: 'parking-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormVehicleComponent {
  @Input() canResetForm: boolean;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<VehicleModel> = new Subject();
  @Input() set dataInput(value: VehicleModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<VehicleModel> = new Subject();
  form = createForm<VehicleModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      typeService: new UntypedFormControl(null, Validators.required),
      typeVehicle: new UntypedFormControl(null, Validators.required),
      plate: new UntypedFormControl(null, Validators.required),
      ownerName: new UntypedFormControl(null, Validators.required),
      ownerNumber: new UntypedFormControl(null),
      entryDate: new UntypedFormControl(null, Validators.required),
      departureDate: new UntypedFormControl(null, Validators.required),
      receivableValue: new UntypedFormControl(null, Validators.required),
      moneyPaid: new UntypedFormControl(null, Validators.required),
      remainigMoney: new UntypedFormControl(null, Validators.required),
      serviceState: new UntypedFormControl(null, Validators.required),
      //---
      id: new UntypedFormControl(null),
    },
  });

  ngOnChanges(): void {
    if (!this.canResetForm) {
      return;
    }

    Object.keys(this.form.formGroup.controls).forEach((control) =>
      this.form.formGroup.controls[control].setValue(null)
    );
  }
}
