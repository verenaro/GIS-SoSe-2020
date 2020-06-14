"use strict";
var Pflanzen;
(function (Pflanzen) {
    let produktezaehler = 0;
    let preis = 0;
    //Zahl in Bubble anzeigen
    let zahlAnzeigen = document.createElement("p");
    //Bubble DIV 
    let anzahlAnzeigen = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";
    let articles = [];
    window.addEventListener("load", init);
    function init() {
        let url = ("artikel.json");
        communicate(url);
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        articles = await response.json();
        console.log("Response", response);
        generateArticles();
    }
    function savelocalStorage(_inputArtikel) {
        let itemString = JSON.stringify(_inputArtikel);
        let key = "" + _inputArtikel.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    //Produkte einschleifen
    function generateArticles() {
        for (let _index = 0; _index < articles.length; _index++) {
            //Div 
            let _newDiv = document.createElement("div");
            _newDiv.setAttribute("class", "Pflanzen-div");
            _newDiv.setAttribute("id", "Pflanzen-produkt" + _index);
            document.getElementById("zimmerpflanzen")?.appendChild(_newDiv);
            //Produktname
            let _newH3 = document.createElement("h3");
            _newH3.innerHTML = articles[_index].name;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newH3);
            //Bild der Pflanze einfügen
            let _newImg = document.createElement("img");
            _newImg.setAttribute("src", articles[_index].bild);
            _newImg.setAttribute("alt", "Pflanzen-produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newImg);
            //Produktbeschreibung
            let _newP = document.createElement("p");
            _newP.innerHTML = articles[_index].beschreibung;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newP);
            //Preis 
            let _newPreis = document.createElement("h4");
            _newPreis.innerHTML = articles[_index].preis + "€";
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newPreis);
            //Button 
            let _newButton = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            _newButton.addEventListener("click", kaufenButton.bind(articles[_index]));
            _newButton.setAttribute("preis", articles[_index].preis.toString());
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newButton);
            //"Button" in Warenkorb
            _newButton.setAttribute("name", articles[_index].name);
            _newButton.setAttribute("img", articles[_index].bild);
            _newButton.setAttribute("beschreibung", articles[_index].beschreibung);
            _newButton.setAttribute("kategorie", articles[_index].kategorie);
            switch (articles[_index].kategorie) {
                case "zimmerpflanzen":
                    let getContainerZimmerpflanzen = document.getElementById("zimmerpflanzen");
                    getContainerZimmerpflanzen.appendChild(_newDiv);
                    break;
                case "außenpflanzen":
                    let getContainerAußenpflanzen = document.getElementById("außenpflanzen");
                    getContainerAußenpflanzen.appendChild(_newDiv);
                    break;
            }
        }
    }
    function kaufenButton(_event) {
        produktezaehler++;
        console.log(produktezaehler);
        preis += parseFloat(_event.target?.getAttribute("preis"));
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
})(Pflanzen || (Pflanzen = {}));
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
    //neue Varialbe + Verlinkung zu den Button
    let zimmerpflanzenAnzeigen = document.querySelector("#zimmerpflanzenbutton");
    console.log(zimmerpflanzenAnzeigen);
    zimmerpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(zimmerpflanzenAnzeigen));
    let außenpflanzenAnzeigen = document.querySelector("#außenpflanzenbutton");
    außenpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(außenpflanzenAnzeigen));
}
//# sourceMappingURL=script.js.map