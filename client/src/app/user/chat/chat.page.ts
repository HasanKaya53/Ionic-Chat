import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import {MessageData} from '../chat.model';

import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  newMessage: string = '';
  messageList: MessageData[] = [];

  username:any = sessionStorage.getItem('username');
  room:any = sessionStorage.getItem('room');

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && event.navigationTrigger === 'popstate') {
        console.log('Sayfa geriye gitti.');
        this.chatService.leaveChannel(this.room);
      }
    });

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: any) => {
      this.messageList.push(message);
    });



    // this.chatService.joinChatRoom(this.room);

  }

  sendMessage() {
    this.chatService.sendMessage({username: this.username, message:this.newMessage,room:this.room});
    this.newMessage = '';
  }
}
