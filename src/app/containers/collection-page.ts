import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { Book } from '../models/book';


@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Моя коллекция книг</md-card-title>
    </md-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,

  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPageComponent {
  books$: Observable<Book[]>;

  constructor(store: Store<fromRoot.State>) {
    this.books$ = store.select(fromRoot.getBookCollection);
  }
}
