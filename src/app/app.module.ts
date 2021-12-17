import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
// Modules
import { CounterModule } from './counter/counter.module';
import { FormExamplesModule } from './forms/forms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, FormExamplesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
