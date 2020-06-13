namespace Pflanzen {
    let produktezaehler: number = 0;
    let preis: number = 0;

    //Zahl in Bubble anzeigen
    let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
    //Bubble DIV 
    let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";

    let articles: Pflanzenprodukte[] = [];
    window.addEventListener("load", init);

    export interface Pflanzenprodukte {
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
        articles = <Pflanzenprodukte[]>await response.json();
        console.log("Response", response);
        generateArticles();

    }
    function savelocalStorage(_inputArtikel: Pflanzenprodukte): void {

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
            _newDiv.setAttribute("class", "Pflanzen-div");
            _newDiv.setAttribute("id", "Pflanzen-produkt" + _index);
            document.getElementById("zimmerpflanzen")?.appendChild(_newDiv);
            //Produktname
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = articles[_index].name;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newH3);

            //Bild der Pflanze einfügen
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", articles[_index].bild);
            _newImg.setAttribute("alt", "Pflanzen-produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newImg);

            //Produktbeschreibung
            let _newP: HTMLParagraphElement = document.createElement("p");
            _newP.innerHTML = articles[_index].beschreibung;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newP);

            //Preis 
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = articles[_index].preis + "€";
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newPreis);

            //Button 
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            _newButton.addEventListener("click", kaufenButton);
            _newButton.setAttribute("preis", articles[_index].preis.toString());
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newButton);


            //"Button" in Warenkorb
            _newButton.setAttribute("name", articles[_index].name);
            _newButton.setAttribute("img", articles[_index].bild);
            _newButton.setAttribute("beschreibung", articles[_index].beschreibung);
            _newButton.setAttribute("kategorie", articles[_index].kategorie);



            switch (articles[_index].kategorie) {
                case "zimmerpflanzen":
                    let getContainerZimmerpflanzen: HTMLElement = document.getElementById("zimmerpflanzen")!;

                    getContainerZimmerpflanzen.appendChild(_newDiv);
                    break;

                case "außenpflanzen":
                    let getContainerAußenpflanzen: HTMLElement = document.getElementById("außenpflanzen")!;
                    getContainerAußenpflanzen.appendChild(_newDiv);
                    break;
            }
        }
    }
       


    function kaufenButton(this: Pflanzenprodukte, _event: Event): void {
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

        //Ein-/Ausblenden der verschiedenen Produkte
function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
            switch (this.getAttribute("id")) {
                case "zimmerpflanzenbutton":
                    zimmerpflanzen();
                    break;
                case "außenpflanzenbutton":
                    außenpflanzen();
                    break;
            }
        }

function zimmerpflanzen(): void {
                (<HTMLElement>document.getElementById("zimmerpflanzen")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("außenpflanzen")).style.display = "none";

            }

function außenpflanzen(): void {
                (<HTMLElement>document.getElementById("außenpflanzen")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("zimmerpflanzen")).style.display = "none";

            }
    //neue Varialbe + Verlinkung zu den Button
let zimmerpflanzenAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#zimmerpflanzenbutton");
console.log(zimmerpflanzenAnzeigen);
zimmerpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(zimmerpflanzenAnzeigen));

let außenpflanzenAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#außenpflanzenbutton");
außenpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(außenpflanzenAnzeigen));

        
    

    

