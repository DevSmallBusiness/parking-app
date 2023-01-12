import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'parking-request-notifications',
  templateUrl: './request-notifications.component.html',
  styleUrls: ['./request-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestNotificationsComponent {
  @Input() public message: string;
  @Output() public closeClicked: EventEmitter<void> = new EventEmitter();

  get showClose(): boolean {
    return this.message.startsWith('La solicitud falló');
  }

  handleClose(): void {
    this.closeClicked.emit();
  }
}
