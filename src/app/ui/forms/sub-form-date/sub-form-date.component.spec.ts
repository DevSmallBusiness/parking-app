import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormDateComponent } from './sub-form-date.component';

describe('SubFormDateComponent', () => {
  let component: SubFormDateComponent;
  let fixture: ComponentFixture<SubFormDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
