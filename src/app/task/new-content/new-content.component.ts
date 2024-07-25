import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../type/Task';

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

  @Output() cancel = new EventEmitter<void>(); 

  // @Output() formData = new EventEmitter<{title:string, summary:string, dueDate:string}>();

  @Output() formData = new EventEmitter<NewTask>();

  addTitle = "";
  addSummary = "";
  addDueDate = "";



  submit() {
    this.formData.emit({
      title:this.addTitle,
      summary:this.addSummary,
      dueDate:this.addDueDate
    });
  }

  closeDialog() {
    this.cancel.emit();
  }

}
