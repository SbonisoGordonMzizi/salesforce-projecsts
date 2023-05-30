import { LightningElement } from 'lwc';

export default class MainComponent extends LightningElement {
    called = false;
    clickedMe(){
      if(this.called === false){
       this.called = true;
      }else{
        this.called = false;
      }
    }

    undoTask(){
        console.log("Undo Task from parent");
    }
}