import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple counter';
  valorAcumulado = 10;
  numeroBase = 5

  onClickSumHandler(e: MouseEvent, value: number) {
    console.log("🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ onClickSumHandler ~ e", e)
    console.log("🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ onClickSumHandler ~ value", value)

    this.valorAcumulado += value;
  }

  onClickSubstractHandler(value: number) {
    this.valorAcumulado -= value;
  }
}
