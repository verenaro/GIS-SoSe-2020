namespace Pflanzen {
    interface Pflanzenprodukte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    let monstera: Pflanzenprodukte = {
        bild: "Monstera.jpg",
        name: "Monstera",
        beschreibung: "darf in keinem Wohnzimmer fehlen",
        preis: 17.25,
        kategorie: "zimmerpflanzen"
    };
    let sansevieriaZeylanica: Pflanzenprodukte = {
        bild: "SansevieriaZeylanica.png",
        name: "Sansevieria Zeylanica",
        beschreibung: "pflegeleicht und schön anzusehen",
        preis: 24,
        kategorie: "zimmerpflanzen"
    };
    let spathiphyllum: Pflanzenprodukte = {
        bild: "Spathiphyllum.jpg",
        name: "Spathiphyllum",
        beschreibung: "blüht wunderschön",
        preis: 13,
        kategorie: "zimmerpflanzen"
    };
    let zamioculas: Pflanzenprodukte = {
        bild: "Zamioculas.jpg",
        name: "Zamioculas",
        beschreibung: "benötigt viel Sonne und Wasser",
        preis: 19,
        kategorie: "zimmerpflanzen"
    };
    let dieffenbachia: Pflanzenprodukte = {
        bild: "Dieffenbachia.jpg",
        name: "Dieffenbachia",
        beschreibung: "suche ihr einen sonnigen Platz",
        preis: 16.99,
        kategorie: "zimmerpflanzen"
    };
    let strahlenaralie: Pflanzenprodukte =  {
        bild: "Strahlenaralie.jpg",
        name: "Strahlenaralie",
        beschreibung: "richtiges Jungle-Feeling",
        preis: 14.35,
        kategorie: "zimmerpflanzen"
    };
    let oleander: Pflanzenprodukte = {
        bild: "Oleander.jpg",
        name: "Oleander",
        beschreibung: "verleiht ihrem Garten einen schönen Farbtupfer",
        preis: 18,
        kategorie: "außenpflanzen"
    };
    let pampagraß: Pflanzenprodukte = {
        bild: "Pampagraß.jpg",
        name: "Pampagraß",
        beschreibung: "ist sehr weich",
        preis: 15,
        kategorie: "außenpflanzen"
    };
    let rotbuche: Pflanzenprodukte = {
        bild: "Rotbuche.jpg",
        name: "Rotbuche",
        beschreibung: "Buche reicht auch",
        preis: 25,
        kategorie: "außenpflanzen" 
    };
    let drachenbaum: Pflanzenprodukte = {
        bild: "Drachenbaum.jpg",
        name: "Drachenbaum",
        beschreibung: "ist gefährlich",
        preis: 23,
        kategorie: "außenpflanzen"
    };
    let immergrünesPhontiniaStämmchen: Pflanzenprodukte = {
        bild: "ImmergrünesPhontinia-Stämmchen.jpg",
        name: "Immergrünes Phontinia-Stämmchen",
        beschreibung: "ist immer grün",
        preis: 30,
        kategorie: "außenpflanzen"  
    };
    let plumbagozierstrauch: Pflanzenprodukte =  {
        bild: "ZierstrauchPlumbago.jpg",
        name: "Plumbago Zierstrauch",
        beschreibung: "blüht wunerschön",
        preis: 14,
        kategorie: "außenpflanzen" 
    };
    let pflanzenprodukte: Pflanzenprodukte[] = [monstera, sansevieriaZeylanica, spathiphyllum, zamioculas, dieffenbachia, strahlenaralie, oleander, pampagraß, rotbuche, drachenbaum, immergrünesPhontiniaStämmchen, plumbagozierstrauch];
    //Produkte einschleifen
    for (let _index: number = 0; _index < pflanzenprodukte.length; _index++) {
        //Div 
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "Pflanzen-div");
            _newDiv.setAttribute("id", "Pflanzen-produkt" + _index);
         //Produktname
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = pflanzenprodukte[_index].name;
            
        //Bild der Pflanze einfügen
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", pflanzenprodukte[_index].bild);
            _newImg.setAttribute("alt", "Pflanzen-produkt");
            _newImg.setAttribute("class", "produktbild");
            
        //Produktbeschreibung
            let _newP: HTMLParagraphElement = document.createElement("p");
            _newP.innerHTML = pflanzenprodukte[_index].beschreibung;
            
        //Preis 
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = pflanzenprodukte[_index].preis + "€";
            
        //Button 
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            _newButton.addEventListener("click", kaufenButton);
            _newButton.setAttribute("preis", pflanzenprodukte[_index].preis.toString());
            

            switch (pflanzenprodukte[_index].kategorie) {
                case "zimmerpflanzen":
                    document.getElementById("zimmerpflanzen")?.appendChild(_newDiv);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newP);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newButton);
                    break;
    
                case "außenpflanzen":
                    document.getElementById("außenpflanzen")?.appendChild(_newDiv);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newP);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newButton);
                    break;
            }
        }
    let produktezaehler: number = 0;
    let preis: number = 0;
                //Zahl in Bubble anzeigen
    let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
                //Bubble DIV 
    let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";
            

    function kaufenButton(_event: Event): void {
                produktezaehler++;
                console.log(produktezaehler);

                preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
                console.log(preis);

              //Blase erstellen bei min. 1 Artikel
                if (produktezaehler >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlAnzeigen);
                }
             //Zahl in Blase anzeigen
                anzahlAnzeigen.innerHTML = "" + produktezaehler;
                document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);

        
        }

           
    }
        
