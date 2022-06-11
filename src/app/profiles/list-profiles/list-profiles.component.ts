import { Component, OnInit } from '@angular/core';
import { Profile } from 'interfaces/profile';
import { ProfileService } from 'src/app/services/profiles/profile.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {

  profiles?: Profile[];
  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profileService.listProfiles().subscribe(
      p => {
        this.profiles = p;
      },
      e => {
        console.warn(e);
      }
    );
  }

}
