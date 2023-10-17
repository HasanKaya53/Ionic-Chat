import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private servicesUrl = environment.servicesUrl;
  constructor(private http: HttpClient) { }

  register(user: User) {
    console.log(user);
    return this.http.post( `${this.servicesUrl}/register`,user);
  }
}
