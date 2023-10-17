import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  serviceUrl = environment.servicesUrl || 'http://localhost:3000';

  getAllRooms(){
    return this.http.post(`${this.serviceUrl}/rooms`, []);
  }
}
