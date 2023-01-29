import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { OptionModel } from 'src/app/core/models/option';
import { ChangesHistoryListContainerFacade } from './changes-history-list-container.facade';

@Component({
  selector: 'parking-changes-history-list-container',
  templateUrl: './changes-history-list-container.component.html',
  styleUrls: ['./changes-history-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesHistoryListContainerComponent implements OnInit, OnDestroy {
  changesHistory$: Observable<ChangeHistoryModel[]>;
  changeToView$: Observable<ChangeHistoryModel>;
  isSidebarClose$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  typesServices$: Observable<OptionModel[]>;
  typesVehicles$: Observable<OptionModel[]>;
  canCloseModal$: Observable<boolean>;

  constructor(private facade: ChangesHistoryListContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadChangesHistory();
    this.facade.loadResources();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyChangesHistory();
    this.facade.destroyIsLoading();
    this.facade.destroyResources();
    this.facade.destroySubscriptions();
  }

  handleDeleteChangeHistory(id: string): void {
    this.facade.deleteChangeHistory(id);
  }

  handleDeleteAllHistory(): void {
    this.facade.deleteAllChangesHistory();
  }

  handleLoadChangeHistoryToView(id: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadChangeHistory(id);
  }

  private initializeSubscriptions(): void {
    this.changesHistory$ = this.facade.changesHistory$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.changeToView$ = this.facade.currentChangeHistoryToView$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.isLoading$ = this.facade.isLoading$();
    this.typesServices$ = this.facade.typesServices$();
    this.typesVehicles$ = this.facade.typesVehicles$();
    this.canCloseModal$ = this.facade.canCloseModal$();
  }
}
