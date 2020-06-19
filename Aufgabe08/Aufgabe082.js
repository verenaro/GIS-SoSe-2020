"use strict";
var Aufgabe082;
(function (Aufgabe082) {
    let button = document.getElementById("button");
    button.addEventListener("click", communiacate);
    async function communiacate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020vr.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe082 || (Aufgabe082 = {}));
//# sourceMappingURL=Aufgabe082.js.map