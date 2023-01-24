import { UntypedFormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { createForm, FormType } from 'ngx-sub-form';

@Component({
  selector: 'parking-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSearchComponent {
  private input$: Subject<{ ownerName: string }> = new Subject();
  @Input() set dataInput(ownerName: { ownerName: string }) {
    this.input$.next(ownerName);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<{ ownerName: string }> = new Subject();
  form = createForm<{ ownerName: string }>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    formControls: {
      ownerName: new UntypedFormControl(null),
    },
  });

  @Output() formUpdate = this.form.formGroup.valueChanges.pipe(
    debounceTime(800)
  );
}
