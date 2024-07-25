import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './constant/dummy-users';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TaskComponent,
    RouterOutlet,
    UserComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'first-angular-app';
  users = DUMMY_USERS;  
  selectedUserId? : string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  } 

  onSelectedUser(id : string) {
    console.log("Selected user :", id)
    this.selectedUserId = id;
  }

}
