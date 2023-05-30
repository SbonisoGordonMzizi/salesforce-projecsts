import { LightningElement } from 'lwc';
import ShowToastEvent from 'lightning/platfromShowToastEvent';

export default class ToastMessageApp extends LightningElement {
    toastHandler(){
        const toast = new ShowToastEvent({
            title:"wining",
            message:"i said wining",
            variant:"success"
        })
        this.dispatchEvent(toast);
        
    }
}