import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  title: string = "To DO List App"
  newTask: string = ""
  tasks: string[] = [];
  isAvalible: boolean = false;

  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks.push(this.newTask)
      this.isAvalible = true;
      this.newTask = ""
      console.log(this.tasks)
    }
  }
  RemoveTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvalible = this.tasks.length > 0;

  }
  EditTask(index: number, editnewtask: string): string | void {
    if (editnewtask.trim() !== "") {
      this.tasks[index] = editnewtask;

    }
    else {
      editnewtask = this.tasks[index];
      return this.newTask = editnewtask
    }
    this.newTask = ""

  }
}
