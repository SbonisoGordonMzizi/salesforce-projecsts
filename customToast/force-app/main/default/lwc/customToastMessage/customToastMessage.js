import { LightningElement, api } from 'lwc';

export default class CustomToastMessage extends LightningElement {
    
    timeout = 6000; // si
    
    @api visible = false;
    @api message="my new task";
    isvisible= this.visible?this.visible:true;
    controllVisibility(){
        this.isvisible = false;
    }
    onCloseClick(){
        this.isvisible=false;
    }
    onUndoClick(){
        const undoEvent = new CustomEvent("undo");
        this.dispatchEvent(undoEvent);
    }

    connectedCallback(){
        setTimeout(()=>{
            this.controllVisibility();
        },this.timeout)
    }
    
}