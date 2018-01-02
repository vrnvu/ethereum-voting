import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../shared/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // The messageService property must be public because you're about to bind to it in the template.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
