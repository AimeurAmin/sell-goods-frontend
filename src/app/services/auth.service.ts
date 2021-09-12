import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../store/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUrl = environment.baseUrl + '/users/login';

  /**
   * Logs in
   *
   * @param auth
   * @returns login
   */
   login(auth: Auth): Observable<User> {
    return this.http.post<User>(this.loginUrl, auth);
  }
}
