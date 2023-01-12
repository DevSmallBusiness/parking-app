import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNotificationsComponent } from './request-notifications.component';

describe('RequestNotificationsComponent', () => {
  let component: RequestNotificationsComponent;
  let fixture: ComponentFixture<RequestNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
