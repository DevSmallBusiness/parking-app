import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { FilterModel } from 'src/app/core/models/filter';
import { OptionModel } from 'src/app/core/models/option';
import { ModalComponent } from 'src/app/ui/elements/modal/modal.component';

@Component({
  selector: 'parking-changes-history-list',
  templateUrl: './changes-history-list.component.html',
  styleUrls: ['./changes-history-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChangesHistoryListComponent implements OnChanges {
  @ViewChild('modalDeleteAllRef') modalDeleteAllRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @ViewChild('modalViewRef') modalViewRef: ModalComponent;
  @Input() changesHistory: ChangeHistoryModel[];
  @Input() changeToView: ChangeHistoryModel;
  @Input() isSidebarClose: boolean;
  @Input() isLoading: boolean;
  @Input() typesServices: OptionModel[];
  @Input() typesVehicles: OptionModel[];
  @Input() canCloseModal: boolean;
  @Input() filter: FilterModel;
  @Output() deleteChangeHistory: EventEmitter<string> = new EventEmitter();
  @Output() deleteAllHistory: EventEmitter<void> = new EventEmitter();
  @Output() loadChangeHistoryToView: EventEmitter<string> = new EventEmitter();
  private changeHistoryId: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(): void {
    if (!this.canCloseModal) {
      return;
    }

    this.modalDeleteAllRef?.close();
    this.modalDeleteRef?.close();
    this.modalViewRef?.close();
    this.cdRef.detectChanges();
  }

  handleDeleteAllHistory(): void {
    this.deleteAllHistory.emit();
  }

  handleDeleteChangeHistory(): void {
    this.deleteChangeHistory.emit(this.changeHistoryId);
  }

  handleLoadChangeHistoryToView(id: string): void {
    this.loadChangeHistoryToView.emit(id);
  }

  setChangeHistoryId(id: string): void {
    this.changeHistoryId = id;
  }
}
