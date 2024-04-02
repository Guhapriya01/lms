import { Server } from 'miragejs';

export default function (server) {
  // server.loadFixtures();
  // server.shutdown();
  
  server.createList('library', 3);
}
