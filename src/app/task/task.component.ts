import { Component, inject, Input } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { User } from '../type/User';
import { DUMMY_TASK } from '../constant/dummy-task';
import { NewContentComponent } from './new-content/new-content.component';
import { NewTask } from '../type/Task';
import { DatePipe } from '@angular/common';
import { TaskService } from '../service/task.service';

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

  private taskService = inject(TaskService);


  get selectedUserTask() {
    return this.taskService.getUserTask(this.user);
  }


  addNewTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

  addedNewData(data : NewTask) {
    this.taskService.addTask(data, this.user);
    this.isAddingTask = false;
  }

}
