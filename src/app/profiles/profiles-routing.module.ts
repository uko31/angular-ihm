import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { ProfilesComponent } from './profiles.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: '', component: ProfilesComponent },
  { path: 'add', component: AddProfileComponent },
  { path: 'view/:id', component: ViewProfileComponent },
  { path: 'edit/:id', component: UpdateProfileComponent },
  { path: 'delete/:id', component: DeleteProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
