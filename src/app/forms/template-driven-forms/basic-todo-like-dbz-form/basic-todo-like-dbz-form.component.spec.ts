import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTodoLikeDbzFormComponent } from './basic-todo-like-dbz-form.component';

describe('BasicTodoLikeDbzFormComponent', () => {
  let component: BasicTodoLikeDbzFormComponent;
  let fixture: ComponentFixture<BasicTodoLikeDbzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTodoLikeDbzFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTodoLikeDbzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
