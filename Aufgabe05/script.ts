console.log("Hallo");
//Zimmerpflanzen
namespace Zimmerpflanzen {
    interface ZimmerpflanzenProdukte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;

    }
    let monstera: ZimmerpflanzenProdukte = {
        bild: "Monstera.jpg",
        name: "Monstera",
        beschreibung: "darf nicht fehlen",
        preis: "17 "
    };
    let sansevieriaZeylanica: ZimmerpflanzenProdukte = {
        bild: "SansevieriaZeylanica.png",
        name: "Sansevieria Zeylanica",
        beschreibung: "pflegeleicht und schön anzusehen",
        preis: "24 "
    };
    let spathiphyllum: ZimmerpflanzenProdukte = {
        bild: "Spathiphyllum.jpg",
        name: "Spathiphyllum",
        beschreibung: "blüht wunderschön",
        preis: "13 "
    };
    let zamioculas: ZimmerpflanzenProdukte = {
        bild: "Zamioculas.jpg",
        name: "Zamioculas",
        beschreibung: "benötigt viel Sonne und Wasser",
        preis: "19 "
    };
    let dieffenbachia: ZimmerpflanzenProdukte = {
        bild: "Dieffenbachia.jpg",
        name: "Dieffenbachia",
        beschreibung: "suche ihr einen sonnigen Platz",
        preis: "16,90 "
    };
    let strahlenaralie: ZimmerpflanzenProdukte =  {
        bild: "Strahlenaralie.jpg",
        name: "Strahlenaralie",
        beschreibung: "richtiges Jungle-Feeling",
        preis: "14,30 "
    };
    let zimmerpflanzenProdukte: ZimmerpflanzenProdukte[] = [monstera, sansevieriaZeylanica, spathiphyllum, zamioculas, dieffenbachia, strahlenaralie]; 
    //Produkte einschleifen
    for (let _index: number = 0; _index < zimmerpflanzenProdukte.length; _index++) {
        //Div erzeugen
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "Zimmerpflanzen-div");
            _newDiv.setAttribute("id", "Zimmerpflanzen-produkt" + _index);
            document.getElementById("Zimmerpflanzen")?.appendChild(_newDiv);
         //Produktbezeichnung hinzufügen
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = zimmerpflanzenProdukte[_index].name;
            document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newH3);
        //Produktbild hinzufügen
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", zimmerpflanzenProdukte[_index].bild);
            _newImg.setAttribute("alt", "Zimmerpflanzen-Produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newImg);
        //Produkt_beschreibung hinzufügen
            let _newP: HTMLParagraphElement = document.createElement("p");
            _newP.innerHTML = zimmerpflanzenProdukte[_index].beschreibung;
            document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newP);
        // preis hinzufügen
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = zimmerpflanzenProdukte[_index].preis + "€";
            document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newPreis);
        //Button hinzufügen
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newButton);
        }
    
}
namespace Außenpflanzen {
    interface AußenpflanzenProdukte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;

    }
    let oleander: AußenpflanzenProdukte = {
        bild: "Oleander.jpg",
        name: "Oleander",
        beschreibung: "verleiht ihrem Garten einen schönen Farbtupfer",
        preis: "18 "
    };
    let pampagraß: AußenpflanzenProdukte = {
        bild: "Pampagraß.jpg",
        name: "Pampagraß",
        beschreibung: "ist sehr weich",
        preis: "15 "
    };
    let rotbuche: AußenpflanzenProdukte = {
        bild: "Rotbuche.jpg",
        name: "Rotbuche",
        beschreibung: "Buche reicht auch",
        preis: "25 "
    };
    let drachenbaum: AußenpflanzenProdukte = {
        bild: "Drachenbaum.jpg",
        name: "Drachenbaum",
        beschreibung: "ist gefährlich",
        preis: "23 "
    };
    let immergrünesPhontiniaStämmchen: AußenpflanzenProdukte = {
        bild: "ImmergrünesPhontinia-Stämmchen.jpg",
        name: "Immergrünes Phontinia-Stämmchen",
        beschreibung: "ist immer grün",
        preis: "30 " 
    };
    let plumbagozierstrauch: AußenpflanzenProdukte =  {
        bild: "ZierstrauchPlumbago.jpg",
        name: "Plumbago Zierstrauch",
        beschreibung: "blüht wunerschön",
        preis: "14 "
    };
    let außenpflanzenProdukte: AußenpflanzenProdukte[] = [oleander, pampagraß, rotbuche, drachenbaum, immergrünesPhontiniaStämmchen, plumbagozierstrauch];
    //Produkte einschleifen
    for (let _index: number = 0; _index < außenpflanzenProdukte.length; _index++) {
        //Div erzeugen
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "Außenpflanzen-div");
            _newDiv.setAttribute("id", "Außenpflanzen-produkt" + _index);
            document.getElementById("Außenpflanzen")?.appendChild(_newDiv);
         //Produktbezeichnung hinzufügen
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = außenpflanzenProdukte[_index].name;
            document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newH3);
        //Produktbild hinzufügen
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", außenpflanzenProdukte[_index].bild);
            _newImg.setAttribute("alt", "Außenpflanzen-Produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newImg);
        //Produkt_beschreibung hinzufügen
            let _newP: HTMLParagraphElement = document.createElement("p");
            _newP.innerHTML = außenpflanzenProdukte[_index].beschreibung;
            document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newP);
        // preis hinzufügen
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = außenpflanzenProdukte[_index].preis + "€";
            document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newPreis);
        //Button hinzufügen
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newButton) ; 
        }}
