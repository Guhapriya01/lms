import Route from '@ember/routing/route';

export default class LatestBooksRoute extends Route {
    model(){
        return fetch('https://www.googleapis.com/books/v1/volumes?q=publishedDate:2013&maxResults=8')
            .then(response=>response.json())
            .then(data=>{
                return data.items;
            })
    }
}
