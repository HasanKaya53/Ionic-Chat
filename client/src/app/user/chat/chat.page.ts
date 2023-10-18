import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import {MessageData} from '../chat.model';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  newMessage: string = '';
  messageList: MessageData[] = [];

  username:any = localStorage.getItem('username');

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: any) => {
      this.messageList.push(message);
    });
  }

  sendMessage() {
    console.log({username: this.username, message:this.newMessage})
    this.chatService.sendMessage({username: this.username, message:this.newMessage});
    this.newMessage = '';
  }
}
