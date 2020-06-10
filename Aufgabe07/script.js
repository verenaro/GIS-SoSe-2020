"use strict";
var Pflanzen;
(function (Pflanzen) {
    window.addEventListener("load", init);
    let articles = [];
    function init(_event) {
        communicate("artikel.json");
        buildNavListener();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        articles = await response.json();
        generateArticles(articles);
        console.log("Response", response);
    }
    function generateArticles(_pflanzenprodukte) {
        //Produkte einschleifen
        for (let _index = 0; _index < _pflanzenprodukte.length; _index++) {
            //Div 
            let _newDiv = document.createElement("div");
            _newDiv.setAttribute("class", "Pflanzen-div");
            _newDiv.setAttribute("id", "Pflanzen-produkt" + _index);
            document.getElementById("zimmerpflanzen")?.appendChild(_newDiv);
            //Produktname
            let _newH3 = document.createElement("h3");
            _newH3.innerHTML = _pflanzenprodukte[_index].name;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newH3);
            //Bild der Pflanze einfügen
            let _newImg = document.createElement("img");
            _newImg.setAttribute("src", _pflanzenprodukte[_index].bild);
            _newImg.setAttribute("alt", "Pflanzen-produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newImg);
            //Produktbeschreibung
            let _newP = document.createElement("p");
            _newP.innerHTML = _pflanzenprodukte[_index].beschreibung;
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newP);
            //Preis 
            let _newPreis = document.createElement("h4");
            _newPreis.innerHTML = _pflanzenprodukte[_index].preis + "€";
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newPreis);
            //Button 
            let _newButton = document.createElement("button");
            _newButton.innerHTML = "kaufen";
            _newButton.addEventListener("click", kaufenButton);
            _newButton.setAttribute("preis", _pflanzenprodukte[_index].preis.toString());
            document.getElementById("Pflanzen-produkt" + _index)?.appendChild(_newButton);
            switch (_pflanzenprodukte[_index].kategorie) {
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
    function buildNavListener() {
        let zimmerpflanzenAnzeigen = document.querySelector("#zimmerpflanzenbutton");
        console.log(zimmerpflanzenAnzeigen);
        zimmerpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(zimmerpflanzenAnzeigen));
        let außenpflanzenAnzeigen = document.querySelector("#außenpflanzenbutton");
        außenpflanzenAnzeigen.addEventListener("click", handleCategoryClick.bind(außenpflanzenAnzeigen));
    }
})(Pflanzen || (Pflanzen = {}));
//# sourceMappingURL=script.js.map