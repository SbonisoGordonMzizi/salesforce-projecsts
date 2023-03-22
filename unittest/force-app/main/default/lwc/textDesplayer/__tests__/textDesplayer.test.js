import {createElement} from 'lwc';
import TextDesplayer from 'c/textDesplayer';

describe("Positiobe Testing Suite",()=>{
    //when jest run it create a blank page
    //With beforeEach method, we create an  element and append it to jest web blank page
    beforeEach(() =>{
        const textDesplayerComponent = createElement("c-text-desplayer",{
            is:TextDesplayer
        });

        document.body.appendChild(textDesplayerComponent);
    });

    afterEach(() =>{
        while(document.body.firstChild){
           document.body.removeChild(document.body.firstChild);
        }
    });

    test("check the list of users",() =>{
        const textDesplayerContext = document.querySelector('c-text-desplayer');
        const listOfUsers = textDesplayerContext.shadowRoot.querySelectorAll(".userInfor");
        const arrayOfUsers = Array.from(listOfUsers);
        expect(arrayOfUsers.length).toBe(3);
    });

    test("on button click paragraph should show",() =>{
        const textDesplayerContext = document.querySelector('c-text-desplayer');
        const buttonContext = textDesplayerContext.shadowRoot.querySelector(".renderButton");
        //event is dispatch asyc
        buttonContext.dispatchEvent(new CustomEvent('click'));
        return Promise.resolve().then(() =>{
            const newParagraph = textDesplayerContext.shadowRoot.querySelector(".newParagraph");
            expect(newParagraph.textContent).toBe("Wow i love Food");
        });

    });

    test("paragraph bind variable", ()=>{
         const textDesplayerContext = document.querySelector('c-text-desplayer');
         const paragraphText = textDesplayerContext.shadowRoot.querySelector('.textMessage');
         expect(paragraphText.textContent).toBe("My first LWC test");
    });
});