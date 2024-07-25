import { Component, Input } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { User } from '../type/User';
import { DUMMY_TASK } from '../constant/dummy-task';
import { NewContentComponent } from './new-content/new-content.component';
import { NewTask } from '../type/Task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    ContentComponent,
    DatePipe,
    NewContentComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() user!: User; 
  isAddingTask = false;

  tasks = DUMMY_TASK;

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  onCompletedTask(id : string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  dialogClosed() {
    this.isAddingTask = false;
  }

  addedNewData(data : NewTask) {

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: data.title,
      summary: data.summary,
      dueDate: data.dueDate
    });
    this.isAddingTask = false;
  }

}
