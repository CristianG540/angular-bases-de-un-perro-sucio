import { NgModule } from '@angular/core';

// Modules
import { ReactiveFormExamplesModule } from './reactive-forms/reactive-forms.module';
import { TemplateDrivenFormsModule } from './template-driven-forms/template-driven-forms.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [TemplateDrivenFormsModule, ReactiveFormExamplesModule],
})
export class FormExamplesModule {}
