import { Injectable } from '@angular/core';


export interface ConfirmParams {
  title: string,
  description: string
}


export interface StatusMessage {
  message: string,
  status: 'SUCCESS' | 'ERROR' | 'WARNING',
  duration?: number
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  messageRef!: any;

  constructor() { }


  raiseMessage(statusMessage: StatusMessage) {
    const clearMessage = () => {
      this.messageRef.remove();
      this.messageRef = undefined;
    }

    if (this.messageRef) {
      clearMessage();
    }
    const statusMessageContainer = document.createElement('div');
    statusMessageContainer.classList.add('status-message');

    const message = document.createElement('div');
    message.innerText = statusMessage.message;
    message.classList.add('message');

    const close = document.createElement('span');
    close.innerText = 'X';
    close.classList.add('close-message');

    close.addEventListener('click', () => {
      clearMessage();
    })


    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');
    messageWrapper.classList.add(statusMessage.status.toLowerCase())


    messageWrapper.appendChild(message);
    messageWrapper.appendChild(close);

    statusMessageContainer.appendChild(messageWrapper);
    document.body.append(statusMessageContainer);
    this.messageRef = statusMessageContainer;
    if (statusMessage.duration) {
      setTimeout(() => {
        clearMessage();
      }, statusMessage.duration)
    }
  }
}
