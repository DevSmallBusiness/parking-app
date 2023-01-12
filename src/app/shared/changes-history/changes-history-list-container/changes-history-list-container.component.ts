import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { ChangesHistoryListContainerFacade } from './changes-history-list-container.facade';

@Component({
  selector: 'parking-changes-history-list-container',
  templateUrl: './changes-history-list-container.component.html',
  styleUrls: ['./changes-history-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesHistoryListContainerComponent implements OnInit, OnDestroy {
  changesHistory$: Observable<ChangeHistoryModel[]>;
  isSidebarClose$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private facade: ChangesHistoryListContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadChangesHistory();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyChangesHistory();
    this.facade.destroyIsLoading();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.changesHistory$ = this.facade.changesHistory$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.isLoading$ = this.facade.isLoading$();
  }
}
