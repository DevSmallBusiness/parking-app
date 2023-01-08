import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() canClose = true;
  @Input() auto = false;
  @Output() updated: EventEmitter<boolean> = new EventEmitter();
  public isOpen = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.updated.emit(this.isOpen);
    this.cdRef.markForCheck();
  }

  open(): void {
    this.isOpen = true;
    this.cdRef.markForCheck();
  }

  close(): void {
    this.isOpen = false;
    this.cdRef.markForCheck();
  }
}
