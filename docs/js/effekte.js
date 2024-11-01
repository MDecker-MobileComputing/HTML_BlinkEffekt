"use strict";

/*
 *
 */
window.addEventListener("load", function() {

    blinken();
    setInterval(blinken, 1000);
});


/**
 * Diese Funktion wird periodisch (alle 1,5 Sekunden) aufgerufen und invertiert
 * die Zuweisung der CSS-Klasse "hintergrundFuerEffekt" der mit dem Attribut
 * data-mide-effekt="blinker" versehenen HTML-Elemente.
 */
function blinken() {

    const blinkElemente = document.querySelectorAll("[data-mide-effekt='blinker']");

    blinkElemente.forEach(function(element) {

        element.classList.toggle( "hintergrundFuerEffekt" );
    });
}
