import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent {}
