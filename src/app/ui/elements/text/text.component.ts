import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'parking-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() type: 'line' | 'text' | 'paragraph' = 'text';
  @Input() size: 'micro' | 'small' | 'base' | 'medium' | 'extra-large' = 'base';
  @Input() weight: 'light' | 'regular' | 'bold' = 'regular';
  @Input() style: 'none' | 'italic' = 'none';
  @Input() color: 'initial' | 'white' | 'light' = 'initial';
  @Input() clamp: number | undefined;
  @Input() text: string | undefined;
}
