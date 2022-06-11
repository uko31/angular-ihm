import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'interfaces/profile';
import { ProfileService } from 'src/app/services/profiles/profile.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  profile?: Profile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id == undefined) {
      this.router.navigate(['profiles']);
    } else {
      this.profileService.getProfile(id).subscribe(
        p => {
          this.profile = p;
        },
        e => {
          console.warn(e);
        }
      );
    }
  }

  onDelete() {
    this.profileService.deleteProfile(String(this.profile!.id)).subscribe(
      _ => {
        console.log('Profile deleted: ' + this.profile!.id);
        this.router.navigate(['profiles']);
      },
      e => {
        console.warn(e);
      }
    );
  }

  onCancel() {
    this.router.navigate(['profiles']);
  }

}
