import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRecordsListContainerComponent } from './vehicles-records-list-container.component';

describe('VehiclesRecordsListContainerComponent', () => {
  let component: VehiclesRecordsListContainerComponent;
  let fixture: ComponentFixture<VehiclesRecordsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesRecordsListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesRecordsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
