import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../constant/dummy-users';
import { type User } from '../type/User';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //decarator
  @Input({required : true}) user! : User;

  @Input({required : true}) selected : boolean = false;

  @Output() select = new EventEmitter<string>();

   get imagePath() {
    return 'images/users/' + this.user.avatar;
  }

  //signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'images/users/' + this.avatar();
  // });
  

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
 

}
