import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesHistoryListContainerComponent } from './changes-history-list-container.component';

describe('ChangesHistoryListContainerComponent', () => {
  let component: ChangesHistoryListContainerComponent;
  let fixture: ComponentFixture<ChangesHistoryListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangesHistoryListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangesHistoryListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
