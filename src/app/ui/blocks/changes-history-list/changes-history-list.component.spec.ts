import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesHistoryListComponent } from './changes-history-list.component';

describe('ChangesHistoryListComponent', () => {
  let component: ChangesHistoryListComponent;
  let fixture: ComponentFixture<ChangesHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
