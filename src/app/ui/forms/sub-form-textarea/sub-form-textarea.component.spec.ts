import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormTextareaComponent } from './sub-form-textarea.component';

describe('SubFormTextareaComponent', () => {
  let component: SubFormTextareaComponent;
  let fixture: ComponentFixture<SubFormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFormTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
