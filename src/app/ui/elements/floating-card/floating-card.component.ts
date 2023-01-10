import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'parking-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingCardComponent {
  @Input() isVisible = false;
  @Output() closed: EventEmitter<void> = new EventEmitter();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    // eslint-disable-next-line angular/timeout-service
    setTimeout(() => this.inspectScrolling());
  }

  handleClick(): void {
    this.closed.emit();
  }

  private inspectScrolling(): void {
    const html = this.document.querySelector('html') as HTMLElement;
    const card = this.el.nativeElement.querySelector(
      '.floating-card'
    ) as HTMLElement;

    card?.clientWidth >= html?.clientWidth && this.isVisible
      ? this.renderer.setStyle(html, 'overflow-y', 'hidden')
      : this.renderer.setStyle(html, 'overflow-y', 'scroll');
  }
}
