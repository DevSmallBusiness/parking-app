import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageContainerComponent {}
