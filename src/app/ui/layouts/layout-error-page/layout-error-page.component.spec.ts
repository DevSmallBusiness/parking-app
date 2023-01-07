import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutErrorPageComponent } from './layout-error-page.component';

describe('LayoutErrorPageComponent', () => {
  let component: LayoutErrorPageComponent;
  let fixture: ComponentFixture<LayoutErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutErrorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
