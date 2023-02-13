import { Component } from '@angular/core';

interface Task {
  text: string;
  check: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  newTaskText: string = '';
  list: Task[] = [];

  addTask() {
    if (this.newTaskText != '') {
      const newTask: Task = {
        text: this.newTaskText,
        check: false,
      };
      this.list.push(newTask);
      this.newTaskText = '';
    } else {
      alert('Introduce algún caracter');
    }
  }

  removeTask(i: number) {
    const task: Task = this.list[i];
    if (task.check) {
      this.list.splice(i, 1);
    } else {
      alert('debes marcar la tarea como finalizada');
    }
  }

  checkTask(i: number) {
    const task: Task = this.list[i];
    task.check = !task.check;
  }
}
