import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRecordsListComponent } from './vehicles-records-list.component';

describe('VehiclesRecordsListComponent', () => {
  let component: VehiclesRecordsListComponent;
  let fixture: ComponentFixture<VehiclesRecordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesRecordsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesRecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
