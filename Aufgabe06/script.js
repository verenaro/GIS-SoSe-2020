"use strict";
var Pflanzen;
(function (Pflanzen) {
    let monstera = {
        bild: "Monstera.jpg",
        name: "Monstera",
        beschreibung: "darf in keinem Wohnzimmer fehlen",
        preis: 17.25,
        kategorie: "zimmerpflanzen"
    };
    let sansevieriaZeylanica = {
        bild: "SansevieriaZeylanica.png",
        name: "Sansevieria Zeylanica",
        beschreibung: "pflegeleicht und schön anzusehen",
        preis: 24,
        kategorie: "zimmerpflanzen"
    };
    let spathiphyllum = {
        bild: "Spathiphyllum.jpg",
        name: "Spathiphyllum",
        beschreibung: "blüht wunderschön",
        preis: 13,
        kategorie: "zimmerpflanzen"
    };
    let zamioculas = {
        bild: "Zamioculas.jpg",
        name: "Zamioculas",
        beschreibung: "benötigt viel Sonne und Wasser",
        preis: 19,
        kategorie: "zimmerpflanzen"
    };
    let dieffenbachia = {
        bild: "Dieffenbachia.jpg",
        name: "Dieffenbachia",
        beschreibung: "suche ihr einen sonnigen Platz",
        preis: 16.99,
        kategorie: "zimmerpflanzen"
    };
    let strahlenaralie = {
        bild: "Strahlenaralie.jpg",
        name: "Strahlenaralie",
        beschreibung: "richtiges Jungle-Feeling",
        preis: 14.35,
        kategorie: "zimmerpflanzen"
    };
    let oleander = {
        bild: "Oleander.jpg",
        name: "Oleander",
        beschreibung: "verleiht ihrem Garten einen schönen Farbtupfer",
        preis: 18,
        kategorie: "außenpflanzen"
    };
    let pampagraß = {
        bild: "Pampagraß.jpg",
        name: "Pampagraß",
        beschreibung: "ist sehr weich",
        preis: 15,
        kategorie: "außenpflanzen"
    };
    let rotbuche = {
        bild: "Rotbuche.jpg",
        name: "Rotbuche",
        beschreibung: "Buche reicht auch",
        preis: 25,
        kategorie: "außenpflanzen"
    };
    let drachenbaum = {
        bild: "Drachenbaum.jpg",
        name: "Drachenbaum",
        beschreibung: "ist gefährlich",
        preis: 23,
        kategorie: "außenpflanzen"
    };
    let immergrünesPhontiniaStämmchen = {
        bild: "ImmergrünesPhontinia-Stämmchen.jpg",
        name: "Immergrünes Phontinia-Stämmchen",
        beschreibung: "ist immer grün",
        preis: 30,
        kategorie: "außenpflanzen"
    };
    let plumbagozierstrauch = {
        bild: "ZierstrauchPlumbago.jpg",
        name: "Plumbago Zierstrauch",
        beschreibung: "blüht wunerschön",
        preis: 14,
        kategorie: "außenpflanzen"
    };
    let pflanzenprodukte = [monstera, sansevieriaZeylanica, spathiphyllum, zamioculas, dieffenbachia, strahlenaralie, oleander, pampagraß, rotbuche, drachenbaum, immergrünesPhontiniaStämmchen, plumbagozierstrauch];
    //Produkte einschleifen
    for (let _index = 0; _index < pflanzenprodukte.length; _index++) {
        //Div 
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "Pflanzen-div");
        _newDiv.setAttribute("id", "Pflanzen-produkt" + _index);
        //Produktname
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = pflanzenprodukte[_index].name;
        //Bild der Pflanze einfügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", pflanzenprodukte[_index].bild);
        _newImg.setAttribute("alt", "Pflanzen-produkt");
        _newImg.setAttribute("class", "produktbild");
        //Produktbeschreibung
        let _newP = document.createElement("p");
        _newP.innerHTML = pflanzenprodukte[_index].beschreibung;
        //Preis 
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = pflanzenprodukte[_index].preis + "€";
        //Button 
        let _newButton = document.createElement("button");
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
    let produktezaehler = 0;
    let preis = 0;
    //Zahl in Bubble anzeigen
    let zahlAnzeigen = document.createElement("p");
    //Bubble DIV 
    let anzahlAnzeigen = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";
    function kaufenButton(_event) {
        produktezaehler++;
        console.log(produktezaehler);
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis);
        //Zahl anzeigen bei hinzufuegen eines Artikels
        if (produktezaehler >= 0) {
            document.getElementById("artikelBlase")?.appendChild(anzahlAnzeigen);
        }
        //Zahl anzeigen
        anzahlAnzeigen.innerHTML = "" + produktezaehler;
        document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
    }
    //Ein-/Ausblenden der verschiedenen Produkte
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "zimmerpflanzenbutton":
                zimmerpflanzen();
                break;
            case "außenpflanzenbutton":
                außenpflanzen();
                break;
        }
        function zimmerpflanzen() {
            document.getElementById("zimmerpflanzen").style.display = "inline-grid";
            document.getElementById("außenpflanzen").style.display = "none";
        }
        function außenpflanzen() {
            document.getElementById("außenpflanzen").style.display = "inline-grid";
            document.getElementById("zimmerpflanzen").style.display = "none";
        }
    }
    //neue Varialbe + Verlinkung zu den Button
    let zimmerpflanzenAnzeigen = document.querySelector("#zimmerpflanzenbutton");
    zimmerpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(zimmerpflanzenAnzeigen));
    let außenpflanzenAnzeigen = document.querySelector("#außenpflanzenbutton");
    außenpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(außenpflanzenAnzeigen));
})(Pflanzen || (Pflanzen = {}));
//# sourceMappingURL=script.js.map