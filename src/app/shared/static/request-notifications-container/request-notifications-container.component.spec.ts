import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNotificationsContainerComponent } from './request-notifications-container.component';

describe('RequestNotificationsContainerComponent', () => {
  let component: RequestNotificationsContainerComponent;
  let fixture: ComponentFixture<RequestNotificationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNotificationsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNotificationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
