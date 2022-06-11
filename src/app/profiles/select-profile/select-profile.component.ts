import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profile } from 'interfaces/profile';
import { ProfileService } from 'src/app/services/profiles/profile.service';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.scss']
})
export class SelectProfileComponent implements OnInit {

  profiles?: Profile[];
  @Input() selectedProfile?: Profile;
  selectProfileForm = this.fb.group({
    profile: [''],
  });

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.profileService.listProfiles().subscribe(
      p => this.profiles = p,
      e => console.warn(e)
    );
  }

  onChange() {
    this.selectedProfile = this.selectProfileForm.value['profile'];
    console.log(this.selectedProfile);
  }

}
