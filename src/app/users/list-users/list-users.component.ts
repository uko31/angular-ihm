import { Component, OnInit } from '@angular/core';
import { User } from 'interfaces/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users?: User[];
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      u => {
        this.users = u;
      },
      e => {
        console.warn(e);
      }
    );
  }

}
