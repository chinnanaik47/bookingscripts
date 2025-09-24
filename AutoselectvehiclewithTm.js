// ==UserScript==
// @name         Fetch and Display Data1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fetch data from an API and display it on the webpage
// @author       You
// @match        https://onlinebooking.sand.telangana.gov.in/Order/NEWBOOKING.aspx?KLM=*
// @grant        none
// ==/UserScript==

(function () {
    console.log("Auto Select Vehicles... Loading AutoSelectVehiclesWithCounter.js.js");
    const script = document.createElement("script");
    script.src = "https://chinnanaik47.github.io/bookingscripts/AutoSelectVehiclesWithCounter.js";
    document.body.appendChild(script);
})();
