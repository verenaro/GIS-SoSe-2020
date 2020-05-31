"use strict";
console.log("Hallo");
//Zimmerpflanzen
var Zimmerpflanzen;
(function (Zimmerpflanzen) {
    let monstera = {
        bild: "Monstera.jpg",
        name: "Monstera",
        beschreibung: "darf in keinem Wohnzimmer fehlen",
        preis: "17 "
    };
    let sansevieriaZeylanica = {
        bild: "SansevieriaZeylanica.png",
        name: "Sansevieria Zeylanica",
        beschreibung: "pflegeleicht und schön anzusehen",
        preis: "24 "
    };
    let spathiphyllum = {
        bild: "Spathiphyllum.jpg",
        name: "Spathiphyllum",
        beschreibung: "blüht wunderschön",
        preis: "13 "
    };
    let zamioculas = {
        bild: "Zamioculas.jpg",
        name: "Zamioculas",
        beschreibung: "benötigt viel Sonne und Wasser",
        preis: "19 "
    };
    let dieffenbachia = {
        bild: "Dieffenbachia.jpg",
        name: "Dieffenbachia",
        beschreibung: "suche ihr einen sonnigen Platz",
        preis: "16,90 "
    };
    let strahlenaralie = {
        bild: "Strahlenaralie.jpg",
        name: "Strahlenaralie",
        beschreibung: "richtiges Jungle-Feeling",
        preis: "14,30 "
    };
    let zimmerpflanzenProdukte = [monstera, sansevieriaZeylanica, spathiphyllum, zamioculas, dieffenbachia, strahlenaralie];
    //Produkte einschleifen
    for (let _index = 0; _index < zimmerpflanzenProdukte.length; _index++) {
        //Div 
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "Zimmerpflanzen-div");
        _newDiv.setAttribute("id", "Zimmerpflanzen-produkt" + _index);
        document.getElementById("Zimmerpflanzen")?.appendChild(_newDiv);
        //Produktname 
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = zimmerpflanzenProdukte[_index].name;
        document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newH3);
        //Bild der Pflanze einfügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", zimmerpflanzenProdukte[_index].bild);
        _newImg.setAttribute("alt", "Zimmerpflanzen-Produkt");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newImg);
        //Produktbeschreibung
        let _newP = document.createElement("p");
        _newP.innerHTML = zimmerpflanzenProdukte[_index].beschreibung;
        document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newP);
        //Preis 
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = zimmerpflanzenProdukte[_index].preis + "€";
        document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newPreis);
        //Button 
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "kaufen";
        document.getElementById("Zimmerpflanzen-produkt" + _index)?.appendChild(_newButton);
    }
})(Zimmerpflanzen || (Zimmerpflanzen = {}));
var Außenpflanzen;
(function (Außenpflanzen) {
    let oleander = {
        bild: "Oleander.jpg",
        name: "Oleander",
        beschreibung: "verleiht ihrem Garten einen schönen Farbtupfer",
        preis: "18 "
    };
    let pampagraß = {
        bild: "Pampagraß.jpg",
        name: "Pampagraß",
        beschreibung: "ist sehr weich",
        preis: "15 "
    };
    let rotbuche = {
        bild: "Rotbuche.jpg",
        name: "Rotbuche",
        beschreibung: "Buche reicht auch",
        preis: "25 "
    };
    let drachenbaum = {
        bild: "Drachenbaum.jpg",
        name: "Drachenbaum",
        beschreibung: "ist gefährlich",
        preis: "23 "
    };
    let immergrünesPhontiniaStämmchen = {
        bild: "ImmergrünesPhontinia-Stämmchen.jpg",
        name: "Immergrünes Phontinia-Stämmchen",
        beschreibung: "ist immer grün",
        preis: "30 "
    };
    let plumbagozierstrauch = {
        bild: "ZierstrauchPlumbago.jpg",
        name: "Plumbago Zierstrauch",
        beschreibung: "blüht wunerschön",
        preis: "14 "
    };
    let außenpflanzenProdukte = [oleander, pampagraß, rotbuche, drachenbaum, immergrünesPhontiniaStämmchen, plumbagozierstrauch];
    //Produkte einschleifen
    for (let _index = 0; _index < außenpflanzenProdukte.length; _index++) {
        //Div 
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "Außenpflanzen-div");
        _newDiv.setAttribute("id", "Außenpflanzen-produkt" + _index);
        document.getElementById("Außenpflanzen")?.appendChild(_newDiv);
        //Produktname
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = außenpflanzenProdukte[_index].name;
        document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newH3);
        //Bild der Pflanze einfügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", außenpflanzenProdukte[_index].bild);
        _newImg.setAttribute("alt", "Außenpflanzen-Produkt");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newImg);
        //Produktbeschreibung
        let _newP = document.createElement("p");
        _newP.innerHTML = außenpflanzenProdukte[_index].beschreibung;
        document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newP);
        //Preis 
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = außenpflanzenProdukte[_index].preis + "€";
        document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newPreis);
        //Button 
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "kaufen";
        document.getElementById("Außenpflanzen-produkt" + _index)?.appendChild(_newButton);
    }
})(Außenpflanzen || (Außenpflanzen = {}));
//# sourceMappingURL=script.js.map