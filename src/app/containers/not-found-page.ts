import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>404: Не найдено</md-card-title>
      <md-card-content>
        <p>Данной страницы еще нет!</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">Take Me Home</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPageComponent { }
