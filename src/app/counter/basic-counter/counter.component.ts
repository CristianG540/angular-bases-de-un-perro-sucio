import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  title = 'Basic counter';
  valorAcumulado = 10;
  numeroBase = 5;

  onClickSumHandler(e: MouseEvent, value: number) {
    console.log(
      '🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ onClickSumHandler ~ e',
      e
    );
    console.log(
      '🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ onClickSumHandler ~ value',
      value
    );

    this.valorAcumulado += value;
  }

  onClickSubstractHandler(value: number) {
    this.valorAcumulado -= value;
  }
}
