import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageContainerComponent } from './error-page-container.component';

describe('ErrorPageContainerComponent', () => {
  let component: ErrorPageContainerComponent;
  let fixture: ComponentFixture<ErrorPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
