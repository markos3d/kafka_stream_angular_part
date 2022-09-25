import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    message = new EventEmitter();
    constructor() { }


}