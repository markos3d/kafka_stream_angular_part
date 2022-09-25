import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message.service';
import { WebsocketService } from '../shared/services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  message = '';

  constructor(private messageService: MessageService, private websocketService: WebsocketService) { }

  ngOnInit() {
    this.connect();
  }
  connect(): void {
    this.websocketService.connect();

    // subscribe receives the value.
    this.messageService.message.subscribe((data) => {
      this.message = data.MESSAGE;
    });
  }

  disconnect(): void {
    this.websocketService.disconnect();
  }

}
