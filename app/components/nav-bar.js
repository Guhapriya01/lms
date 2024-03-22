import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class NavBarComponent extends Component {
    @service data;

    get libraryReq(){
         return this.data.libraryReq;
    }
    
    get booksReq(){
        return this.data.booksReq;
    }

}
