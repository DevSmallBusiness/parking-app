import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestNotificationsContainerFacade } from './request-notifications-container.facade';

@Component({
  selector: 'parking-request-notifications-container',
  templateUrl: './request-notifications-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestNotificationsContainerComponent {
  public notification$: Observable<string>;

  constructor(private facade: RequestNotificationsContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  handleClose(): void {
    this.facade.destroyNotification();
  }

  private initializeSubscriptions(): void {
    this.notification$ = this.facade.notification$();
  }
}
