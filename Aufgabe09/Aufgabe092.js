"use strict";
var Aufgabe092;
(function (Aufgabe092) {
    let buttonjson = document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", json);
    let buttonhtml = document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", html);
    async function html() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020vr.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let server = document.getElementById("server");
        server.innerHTML = responseText;
    }
    async function json() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020vr.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe092 || (Aufgabe092 = {}));
//# sourceMappingURL=Aufgabe092.js.map