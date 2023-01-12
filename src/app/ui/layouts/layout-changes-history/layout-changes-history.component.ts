import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'parking-layout-change-history',
  templateUrl: './layout-changes-history.component.html',
  styleUrls: ['./layout-changes-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutChangesHistoryComponent {}
