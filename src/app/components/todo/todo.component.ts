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


  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.isAvalible = this.tasks.length > 0;
    }
  }

  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks.push(this.newTask);
      this.isAvalible = true;
      this.newTask = "";
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log(this.tasks);
    }
  }

  EditTask(index: number, newTask: string) {
    if (newTask.trim() !== "") {
      this.tasks[index] = newTask;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  RemoveTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.isAvalible = this.tasks.length > 0;
  }
}
