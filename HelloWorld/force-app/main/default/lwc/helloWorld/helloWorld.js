import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    firstName="gordon";
    lastName="Mzizi";

    
    updateFirstName(event) {
        this.firstName = event.target.value
    }
}