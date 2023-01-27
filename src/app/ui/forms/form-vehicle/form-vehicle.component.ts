import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { OptionModel } from 'src/app/core/models/option';

@Component({
  selector: 'parking-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormVehicleComponent implements OnInit {
  @Input() canResetForm: boolean;
  @Input() isEditing: boolean;
  @Input() typesServices: OptionModel[];
  @Input() typesVehicles: OptionModel[];
  showField: boolean = false;
  currentVehicle: VehicleRecordModel;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<VehicleRecordModel> = new Subject();
  @Input() set dataInput(value: VehicleRecordModel) {
    this.currentVehicle = value;
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<VehicleRecordModel> = new Subject();
  form = createForm<VehicleRecordModel>(this, {
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
      ownerNumber: new UntypedFormControl(null, Validators.required),
      entryDate: new UntypedFormControl(null, Validators.required),
      departureDate: new UntypedFormControl(null),
      receivableValue: new UntypedFormControl(null),
      moneyPaid: new UntypedFormControl(null),
      remainigMoney: new UntypedFormControl(null),
      serviceState: new UntypedFormControl(null),
      //---
      _id: new UntypedFormControl(null),
    },
  });

  ngOnInit(): void {
    this.form.formGroup.controls['moneyPaid'].valueChanges.subscribe(
      (value) => {
        const receivableValue =
          this.form.formGroup.controls.receivableValue.value;

        if (value && value > 0 && receivableValue > 0) {
          const moneyPaid = Number(value);
          const remainigMoney = receivableValue - moneyPaid;

          this.form.formGroup.controls.remainigMoney.setValue(remainigMoney);

          if (moneyPaid > receivableValue) {
            this.form.formGroup.controls.moneyPaid.setValue(receivableValue);
          }
        } else {
          this.form.formGroup.controls.remainigMoney.setValue(receivableValue);
        }
      }
    );

    this.form.formGroup.controls['receivableValue'].valueChanges.subscribe(
      (value) => {
        if (!value) {
          this.form.formGroup.controls.remainigMoney.setValue(0);
        } else {
          const moneyPaid = this.form.formGroup.controls.moneyPaid.value;
          const remainigMoney = value - moneyPaid;
          if (moneyPaid > 0) {
            this.form.formGroup.controls.remainigMoney.setValue(remainigMoney);
          }
        }
      }
    );
  }

  cleanForm(): void {
    Object.keys(this.form.formGroup.controls).forEach((control) =>
      this.form.formGroup.controls[control].setValue(null)
    );
  }
}
