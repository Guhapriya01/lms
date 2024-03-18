import Service from '@ember/service';
import { A } from '@ember/array';

export default class LibraryDataService extends Service {
    data=A([
        {
            id:1,
            name:"Library 1",
            location:"Madurai",
            books:[
                {
                    id:1,
                    name:"Motivate to Win",
                    author:"Richard",
                    publisher: "Kogan Page Publishers",
                },
                {
                    id:2,
                    name:"How to Motivate People",
                    author:"Patrick",
                    publisher: "Hills Publishers",
                }
            ]
        },
        {
            id:2,
            name:"Library 2",
            location:"Chennai",
            books:[
                {
                    id:1,
                    name:"Doraemon Adeventures",
                    author:"John",
                    publisher: "BPI Publishers",
                },
                {
                    id:2,
                    name:"Project. Program. Change",
                    author:"Lorenz",
                    publisher: "Hills Publishers",
                }
            ]
        },
        {
            id:3,
            name:"Library 3",
            location:"Bangalore",
            books:[
                {
                    id:1,
                    name:"The best Adeventures",
                    author:"Clipping",
                    publisher: "Jpo Publishers",
                },
                {
                    id:2,
                    name:"That one Change",
                    author:"Jeras Kode",
                    publisher: "Hills Publishers",
                }
            ]
        }
    ])
}
