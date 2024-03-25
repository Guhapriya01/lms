import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import {action, set,get} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
    @service data;
    @service userPreference;
    @tracked theme;

    constructor(){
        super(...arguments);
        let value = get(this.userPreference,'theme') ;
        this.theme = value ? value : 'light';
        this.changeColour();
    }

    get libraryReq(){
         return this.data.libraryReq;
    }
    
    get booksReq(){
        return this.data.booksReq;
    }

    // get theme(){
    //     console.log("getter");
        
    //     let t = get(this.userPreference,'theme');
    //     // setting body colour
        // let backgroundColour = t == 'dark' ? 'grey' : 'white';
        // let colour = t == 'dark' ? 'white' : 'black';
        // $('body').css('background-color', backgroundColour);
        // $('body').css('color', colour);

    //     // return t;
    //     return get(this.userPreference,'theme');
    // }

    @action
    changeTheme(){
        let t = this.theme == 'dark' ? 'light' : 'dark';
        this.theme = t;
        this.changeColour();
        set(this.userPreference, 'theme' , t);
    }

    @action
    changeColour(){
        let backgroundColour = this.theme  == 'dark' ? 'grey' : 'white';
        let colour = this.theme  == 'dark' ? 'white' : 'black';
        $('body').css('background-color', backgroundColour);
        $('body').css('color', colour);
    }

}
