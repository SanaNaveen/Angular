import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../../type/Task';
import { DatePipe } from '@angular/common';

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

  @Output() taskCompleted = new EventEmitter<string>();


  onCompletedTask() {
    this.taskCompleted.emit(this.task.id);
  }

}
