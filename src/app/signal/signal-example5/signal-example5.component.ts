import { NgFor } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example5',
  standalone: true,
  templateUrl: './signal-example5.component.html',
  styleUrls: ['./signal-example5.component.scss'],
  imports: [
    FormsModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export default class SignalExample5Component {
  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    this.todos.update(() => [todo.value, ...this.todos()]);
    todo.value = '';
    todo.focus();
  }
}
