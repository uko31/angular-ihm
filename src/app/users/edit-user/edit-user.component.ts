import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'interfaces/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user?:User;
  updateUserForm = this.fb.group({
    id: [''],
    username: [''],
    password1: [''],
    password2: [''],
    profileId: [''],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id!).subscribe(
      u => {
        this.user = u;
        this.updateUserForm.patchValue({
          id: this.user.id,
          username: this.user.username,
          profileId: this.user.profileId,
        });
      }
    );
  }

  onUpdate() {
    console.log(this.updateUserForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }

}
