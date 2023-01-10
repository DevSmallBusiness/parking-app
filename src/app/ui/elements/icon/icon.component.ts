import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'parking-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon: string;
}
