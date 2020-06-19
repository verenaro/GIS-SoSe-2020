
 import * as Http from "http";

 export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port) //wenn es den Port nicht gibt
  //wird er auf 8100 gesetzt
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);
//Server hört zu, nimmt Aufrufe wahr
  function handleListen(): void {
    console.log("Listening");
  }
//"I hear voices" wird ausgegeben, wenn der Server neu geladen wird / funktion die ausgelöst wird, wenn Listening einen Aufruf wahrnimmt
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}
    


