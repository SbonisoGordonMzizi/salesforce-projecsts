import { LightningElement, api } from 'lwc';

export default class LwcComponet extends LightningElement {
    @api title;
    number = 0;
    callAura(){
        const auraEvent = new CustomEvent('sendmsg',{
            detail: {
                "msg":"Hello Form LWC Using Event" 
                }
        })
        this.dispatchEvent(auraEvent);
        this.title = "Event Called "+this.number;
        this.number  = this.number + 1;
    }
}