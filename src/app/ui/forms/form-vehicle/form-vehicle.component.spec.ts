import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehicleComponent } from './form-vehicle.component';

describe('FormVehicleComponent', () => {
  let component: FormVehicleComponent;
  let fixture: ComponentFixture<FormVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
