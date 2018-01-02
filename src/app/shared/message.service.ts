import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: String[] = [];

  constructor() { }

  public add(message: string) {
    this.messages.push(message);
  }

  public clear() {
    this.messages = [];
  }

}
