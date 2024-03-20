import Service from '@ember/service';
import { A } from '@ember/array';

export default class LibraryDataService extends Service {
    data=A([
        {
            id:1,
            name:"Library 1",
            location:"Madurai",
            timing:"9.00 am TO 6.00 pm",
            books:A([
                {
                    id:1,
                    name:"Motivate to Win",
                    author:"Richard",
                    publisher: "Kogan Page Publishers",
                    publishedDate: "1999-11-30",
                },
                {
                    id:2,
                    name:"How to Motivate People",
                    author:"Patrick",
                    publisher: "Hills Publishers",
                    publishedDate: "2001-12-12",
                },
                {
                    id:3,
                    name:"Agricultural Conservation Program",
                    author:"Kenata",
                    publisher: "Jack Publishers",
                    publishedDate: "2008-08-2",
                },
                {
                    id:4,
                    name:"Learn to Program",
                    author:"Chris Pine",
                    publisher: "Pragmatic Bookshelf",
                    publishedDate: "2000-08-18",
                }
            ])
        },
        {
            id:2,
            name:"Library 2",
            location:"Chennai",
            timing:"10.00 am TO 5.00 pm",
            books:A([
                {
                    id:1,
                    name:"Doraemon Adeventures",
                    author:"John",
                    publisher: "BPI Publishers",
                    publishedDate: "2004-04-11",
                },
                {
                    id:2,
                    name:"Project. Program. Change",
                    author:"Lorenz",
                    publisher: "Hills Publishers",
                    publishedDate: "2019-01-22",
                }
            ])
        },
        {
            id:3,
            name:"Library 3",
            location:"Bangalore",
            timing:"10.00 am TO 6.00 pm",
            books:A([
                {
                    id:1,
                    name:"The best Adeventures",
                    author:"Clipping",
                    publisher: "Jpo Publishers",
                    publishedDate: "2018-06-22",
                },
                {
                    id:2,
                    name:"That one Change",
                    author:"Jeras Kode",
                    publisher: "Hills Publishers",
                    publishedDate: "2018-06-22",
                }
            ])
        }
    ])
}
