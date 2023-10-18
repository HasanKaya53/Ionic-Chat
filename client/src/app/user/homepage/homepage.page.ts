import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    private homeservice: HomeService,
    private rooter: Router,
    private chatService: ChatService
  ) { }

  room:any = [];

  ngOnInit() {
    this.getRooms();
    localStorage.removeItem('room');
  }


  getRooms(){
    this.homeservice.getAllRooms().subscribe((res)=>{
      console.log(res);
      this.room = res;
    });
  }

  joinRoom(room:number){
    let currentRoom = "Room"+room.toString();

    this.chatService.joinChatRoom(currentRoom);
    sessionStorage.setItem('room', currentRoom);


    this.rooter.navigateByUrl('/chat');
  }







}
