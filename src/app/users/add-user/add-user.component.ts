import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'interfaces/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user?: User;
  createUserForm = this.fb.group({
    id: [''],
    username: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    password1: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    password2: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    profileId: [''],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    console.log(this.createUserForm.value);
    this.user = {
      id: Number(''),
      username: this.createUserForm.value['username'],
      password: this.createUserForm.value['password1'],
      profileId: 1
    };

    this.userService.addUser(this.user).subscribe(
      u => {
        console.log("User created: " + u.id);
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
