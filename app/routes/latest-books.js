import Route from '@ember/routing/route';
import {action} from '@ember/object';

export default class LatestBooksRoute extends Route {
    @action
    loading(transition){
        console.log("loading");
        return true;
    }

    @action
    error(){
        console.log("error");
        return true;
    }

    model() {
        return fetch('https://www.googleapis.com/books/v1/volumes?q=publishedDate:2013&maxResults=8')
            .then(response => response.json())
            .then(data => {
                return data.items;
            })
        // let data=await fetch('https://www.googleapis.com/books/v1/volumes?q=publishedDate:2013&maxResults=8')
        //     .then(response => response.json())
        //     .then(data => {
        //         return data.items;
        //     })
        // return data;
    }
}
