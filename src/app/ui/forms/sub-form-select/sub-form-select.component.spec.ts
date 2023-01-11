import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormSelectComponent } from './sub-form-select.component';

describe('SubFormSelectComponent', () => {
  let component: SubFormSelectComponent;
  let fixture: ComponentFixture<SubFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
