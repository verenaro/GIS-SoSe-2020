namespace Aufgabe092 {

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", handlejson);
    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);


    async function handlehtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let server: HTMLElement = <HTMLElement>document.getElementById("server");
        server.innerHTML = responseText;

    }
    async function handlejson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let responseJSON: JSON = JSON.parse(responseText);
        console.log(responseJSON);
        console.log(responseText);

         
        }
    }



    

