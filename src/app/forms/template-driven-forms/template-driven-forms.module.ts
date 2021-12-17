import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BasicTodoLikeDbzFormComponent } from './basic-todo-like-dbz-form/basic-todo-like-dbz-form.component';

@NgModule({
  declarations: [BasicTodoLikeDbzFormComponent],
  imports: [CommonModule],
  exports: [BasicTodoLikeDbzFormComponent],
})
export class TemplateDrivenFormsModule {}
