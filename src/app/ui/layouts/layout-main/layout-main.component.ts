import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'parking-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutMainComponent {}
