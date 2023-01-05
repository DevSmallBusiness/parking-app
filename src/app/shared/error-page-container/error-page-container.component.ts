import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-page-container',
  templateUrl: './error-page-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageContainerComponent {}
