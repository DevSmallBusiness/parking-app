import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() isSidebarClose: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();

  handleToggleMenu(): void {
    this.toggleSidebar.emit(!this.isSidebarClose);
  }

  get iconItemMain(): string {
    return this.isSidebarClose
      ? 'chevrons-right'
      : 'chevrons-left';
  }
}
