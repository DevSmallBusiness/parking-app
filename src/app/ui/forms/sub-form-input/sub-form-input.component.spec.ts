import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormInputComponent } from './sub-form-input.component';

describe('SubFormInputComponent', () => {
  let component: SubFormInputComponent;
  let fixture: ComponentFixture<SubFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
