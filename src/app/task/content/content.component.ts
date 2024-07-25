import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from '../../type/Task';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input() task! : Task;


  private taskService = inject(TaskService);


  onCompletedTask() {
    this.taskService.removeTaks(this.task.id);
  }

}
