export default function (server) {
  console.log('scenerio executed');
  // server.loadFixtures();
  // server.shutdown();

  server.createList('library', 3);
}
