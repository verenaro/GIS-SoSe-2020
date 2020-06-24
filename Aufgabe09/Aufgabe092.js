"use strict";
var Aufgabe092;
(function (Aufgabe092) {
    let buttonjson = document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", handlejson);
    let buttonhtml = document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let server = document.getElementById("server");
        server.innerHTML = responseText;
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        console.log(responseText);
    }
})(Aufgabe092 || (Aufgabe092 = {}));
//# sourceMappingURL=Aufgabe092.js.map