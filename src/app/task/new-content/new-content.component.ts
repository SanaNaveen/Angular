import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../type/Task';
import { TaskService } from '../../service/task.service';
import { User } from '../../type/User';

@Component({
  selector: 'app-new-content',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.css'
})
export class NewContentComponent {

  @Input({required: true}) user! : User;

  @Output() close = new EventEmitter<void>(); 


  private taskService = inject(TaskService);

  addTitle = "";
  addSummary = "";
  addDueDate = "";



  submit() {
    this.taskService.addTask({
      title:this.addTitle,
      summary:this.addSummary,
      dueDate:this.addDueDate
    }, this.user);
    this.close.emit();
  }

  closeDialog() {
    this.close.emit();
  }

}
