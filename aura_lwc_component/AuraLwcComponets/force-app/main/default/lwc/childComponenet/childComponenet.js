import { LightningElement,wire } from 'lwc';

import SIMPLE_CHANNEL from '@salesforce/messageChannel/SimpleChannel__c'
import {subscribe,MessageContext, APPLICATION_SCOPE} from 'lightning/messageService'

export default class ChildComponenet extends LightningElement {
    dataStore;
    @wire(MessageContext)
    context
    subMessage(){
    subscribe(this.context,SIMPLE_CHANNEL, (message) => {this.handleMassage(message)},{scope:APPLICATION_SCOPE});
    }

    connectedCallback(){
        this.subMessage();
    }

    handleMassage(message){
      this.dataStore = message.dataFromLwc.value? message.dataFromLwc.value : "NO Message publish"
    }
}