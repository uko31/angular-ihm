import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profiles/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  createProfileForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.profileService.addProfile(this.createProfileForm.value).subscribe(
      p => {
        console.log('Profile created: ' + p.name);
        this.router.navigate(['profiles']);
      },
      e => console.warn(e)
    );
  }

  onCancel() {
    this.router.navigate(['profiles']);
  }

}
