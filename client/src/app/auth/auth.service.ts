
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private servicesUrl = environment.servicesUrl;
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post( `${this.servicesUrl}/register`,user);
  }


  login (user: User): Observable<any> {
    return this.http.post<any>( `${this.servicesUrl}/login`,user);
  }
}
