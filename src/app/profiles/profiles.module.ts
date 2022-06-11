import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectProfileComponent } from './select-profile/select-profile.component';


@NgModule({
  declarations: [
    ProfilesComponent,
    ListProfilesComponent,
    AddProfileComponent,
    DeleteProfileComponent,
    UpdateProfileComponent,
    ViewProfileComponent,
    SelectProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    SelectProfileComponent,
  ]
})
export class ProfilesModule { }
