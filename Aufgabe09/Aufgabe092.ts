namespace Aufgabe092 {

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", json);
    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", html);


    async function html(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let server: HTMLElement = <HTMLElement>document.getElementById("server");
        server.innerHTML = responseText;

    }
    async function json(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
         
        }
    }



    

