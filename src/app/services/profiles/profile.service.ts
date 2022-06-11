import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'interfaces/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = 'http://localhost:3000/profiles';

  constructor(
    private http: HttpClient,
  ) { }

  listProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl);
  }

  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl + '/' + id);
  }

  addProfile(Profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.profileUrl, Profile);
  }

  deleteProfile(id: string): Observable<Profile> {
    return this.http.delete<Profile>(this.profileUrl + '/' + id);
  }

  updateProfile(Profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.profileUrl + '/' + Profile.id, Profile);
  }
}
