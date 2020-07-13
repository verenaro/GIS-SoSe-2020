namespace Eisdiele {
    let produktezaehler: number = 0;
    let preis: number = 0;

    //Zahl in Bubble anzeigen
    let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
    //Bubble DIV 
    let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";

    let articles: Produkte[] = [];
    window.addEventListener("load", init);

    export interface Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    function init(): void {
        let url: string = ("artikel.json");
        communicate(url);

    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        articles = <Produkte[]>await response.json();
        console.log("Response", response);
        generateArticles();

    }
    function savelocalStorage(_inputArtikel: Produkte): void {

        let itemString: string = JSON.stringify(_inputArtikel);
        let key: string = "" + _inputArtikel.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }


    //Produkte einschleifen
    function generateArticles(): void {
        for (let _index: number = 0; _index < articles.length; _index++) {
            //Div 
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "Produkte-div");
            _newDiv.setAttribute("id", "Produkte-produkt" + _index);
            document.getElementById("behälter")?.appendChild(_newDiv);
            //Produktname
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = articles[_index].name;
            document.getElementById("Produkte-produkt" + _index)?.appendChild(_newH3);

            //Bild ügen
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", articles[_index].bild);
            _newImg.setAttribute("alt", "Produkte-produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Produkte-produkt" + _index)?.appendChild(_newImg);


            //Preis 
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = articles[_index].preis + "€";
            document.getElementById("Produkte-produkt" + _index)?.appendChild(_newPreis);

            //Button 
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            _newButton.addEventListener("click", kaufenButton.bind(articles[_index]));
            _newButton.setAttribute("preis", articles[_index].preis.toString());
            document.getElementById("Produkte-produkt" + _index)?.appendChild(_newButton);


            //"Button" in Warenkorb
            _newButton.setAttribute("name", articles[_index].name);
            _newButton.setAttribute("img", articles[_index].bild);
            _newButton.setAttribute("beschreibung", articles[_index].beschreibung);



            switch (articles[_index].kategorie) {
                case "behälter":
                    let getContainerBehälter: HTMLElement = document.getElementById("behälter")!;

                    getContainerBehälter.appendChild(_newDiv);
                    break;

                case "eissorten":
                    let getContainerEissorten: HTMLElement = document.getElementById("eissorten")!;
                    getContainerEissorten.appendChild(_newDiv);
                    break;

                case "topping":
                    let getContainerTopping: HTMLElement = document.getElementById("topping")!;
                    getContainerTopping.appendChild(_newDiv);
                    break;
            }
        }
    }

    function kaufenButton(this: Produkte, _event: Event): void {
            produktezaehler++;
            console.log(produktezaehler);

            preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preis);
            

            savelocalStorage(this);

            //Zahl anzeigen bei hinzufuegen eines Artikels
            if (produktezaehler >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlAnzeigen);
            }
            //Zahl anzeigen
            anzahlAnzeigen.innerHTML = "" + produktezaehler;
            document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);


        }
    }


