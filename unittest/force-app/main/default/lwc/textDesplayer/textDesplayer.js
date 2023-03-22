import { LightningElement } from 'lwc';

export default class TextDesplayer extends LightningElement {
    textMessage = "My first LWC test";
    showNewParagraph = false;
    
    renderNewParagraph(){
       this.showNewParagraph = true;
    }

    users = [
    {
        id: "user1",
        firstName: "Vice"
    },
    {
        id: "user2",
        firstName: "Blony"
    },
    {
        id: "user3",
        firstName: "Gordon"
    }
];
}