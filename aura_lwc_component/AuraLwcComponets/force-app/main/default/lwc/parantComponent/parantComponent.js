import { LightningElement, wire } from 'lwc';
import SIMPLE_CHANNEL from '@salesforce/messageChannel/SimpleChannel__c'
import {APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext} from "lightning/messageService";
export default class ParantComponent extends LightningElement {
    dataFromEvent;
    //MessageContext return object that store all components that are listening to a channel 
    @wire(MessageContext)
    context

    inputHanlder(event){
      this.dataFromEvent = event.target.value;
    }

    publishMessageHandler(){
        const message ={
            dataFromLwc:{
                value:this.dataFromEvent
            }
        }
        publish(this.context, SIMPLE_CHANNEL,message)
    }
}