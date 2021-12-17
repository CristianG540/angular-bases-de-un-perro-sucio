import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CounterComponent } from './basic-counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  // En el imports va cualquier modulo que necesite usar El modulo
  // 'CommonModule' por ejemplo, me permite usar directivas como if, for en los
  // templates html
  imports: [CommonModule],
  // En el exports se incluye todo lo que se usa fuera del modulo, es como crear
  // un metodo publico de una clase
  exports: [CounterComponent],
})
export class CounterModule {}
