import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { io } from "socket.io-client";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {





  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}


  socket = io(environment.servicesUrl || 'http://localhost:3000',{
    transports: ['websocket', 'polling', 'flashsocket']
  });

  public sendMessage(message:any) {
    this.socket.emit('mesaj', message);
  }

  public leaveChannel(channel: string) {
    this.socket.emit('leave room', channel);
  }

  public joinChatRoom(room: string) {
    this.socket.emit('join room', room);
  }

  public getNewMessage = () => {
    this.socket.on('mesaj', (message) =>{
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

}
