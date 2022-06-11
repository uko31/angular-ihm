import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
  ) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl + '/' + id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + '/' + user.id, user);
  }

}
