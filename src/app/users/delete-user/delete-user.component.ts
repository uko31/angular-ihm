import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'interfaces/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  user?: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id == undefined) {
      this.router.navigate(['']);
    } else {
      this.userService.getUser(id).subscribe(
        u => {
          this.user = u;
        },
        e => {
          console.warn(e);
        }
      );
    }
  }

  onDelete() {
    this.userService.deleteUser(String(this.user!.id)).subscribe(
      _ => {
        console.log('User deleted: ' + this.user!.id);
        this.router.navigate(['']);
      },
      e => {
        console.warn(e);
        this.router.navigate(['']);
      }
    );
  }

  onCancel() {
    this.router.navigate(['']);
  }

}
