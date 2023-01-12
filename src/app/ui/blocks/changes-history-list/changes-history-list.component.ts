import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { ModalComponent } from 'src/app/ui/elements/modal/modal.component';

@Component({
  selector: 'parking-changes-history-list',
  templateUrl: './changes-history-list.component.html',
  styleUrls: ['./changes-history-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesHistoryListComponent {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @Input() changesHistory: ChangeHistoryModel[];
  @Input() isSidebarClose: boolean;
  @Input() isLoading: boolean;
  @Input() canCloseModal: boolean;
  @Output() deleteHistory: EventEmitter<string> = new EventEmitter();
  private vehicleId: string;
}
