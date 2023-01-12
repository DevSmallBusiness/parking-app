import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'parking-request-notifications-container',
  templateUrl: './request-notifications-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestNotificationsContainerComponent {}
