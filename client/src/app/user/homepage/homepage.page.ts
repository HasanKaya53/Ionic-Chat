import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    private homeservice: HomeService,
    private rooter: Router
  ) { }

  room:any = [];

  ngOnInit() {
    this.getRooms();
  }


  getRooms(){
    this.homeservice.getAllRooms().subscribe((res)=>{
      console.log(res);
      this.room = res;
    });
  }

  joinRoom(room:number){
    console.log(room);
    sessionStorage.setItem('room', room.toString());
    this.rooter.navigateByUrl('/chat');
  }







}
