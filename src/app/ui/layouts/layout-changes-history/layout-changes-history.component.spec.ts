import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChangesHistoryComponent } from './layout-changes-history.component';

describe('LayoutChangesHistoryComponent', () => {
  let component: LayoutChangesHistoryComponent;
  let fixture: ComponentFixture<LayoutChangesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutChangesHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutChangesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
