import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form!: FormGroup;
  isEditModeEnabled: boolean = false;

  constructor(private fb: FormBuilder, private element: ElementRef) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [''],
      typeService: ['', Validators.required],
      typeVehicle: ['', Validators.required],
      plate: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerNumber: ['', Validators.required],
      entryDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      receivableValue: ['', Validators.required],
      moneyPaid: [''],
      remainigMoney: [''],
    });
  }

  private resetForm(): void {
    this.form.reset({
      typeService: '',
      typeVehicle: '',
      plate: '',
      ownerName: '',
      ownerNumber: '',
      entryDate: '',
      departureDate: '',
      receivableValue: '',
      moneyPaid: '',
      remainigMoney: '',
    });
  }

  saveVehicle(): void {
    console.log('saveVehicle');
  }

  editedVehicle(): void {
    console.log('editedVehicle');
  }

  public invalidField(field: string): boolean {
    if (this.form.get(field)?.invalid && this.form.get(field)?.touched) {
      return true;
    }

    return false;
  }

  private validateForm(): void {
    return Object.values(this.form.controls).forEach((control) => {
      control instanceof FormGroup
        ? Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          )
        : control.markAsTouched();
    });
  }

  public openModal(): void {
    this.element.nativeElement
      .querySelector('.modal__container')
      .classList.add('modal__container--active');
  }

  public closeModal(): void {
    this.element.nativeElement
      .querySelector('.modal__container')
      .classList.remove('modal__container--active');

    this.resetForm();
  }
}
