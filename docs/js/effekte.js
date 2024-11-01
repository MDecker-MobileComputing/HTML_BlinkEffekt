"use strict";

/**
 * Alle mit Custom-Data-Attribut "data-mide-effekt='blinker'" versehenen
 * HTML-Elemente.
 */
let blinkElemente = null;


/*
 * Diese Funktion wird aufgerufen, wenn das HTML-Dokument vollständig geladen wurde.
 */
window.addEventListener("load", function() {

    blinkElemente = document.querySelectorAll( "[data-mide-effekt='blinker']" );

    blinken();
    setInterval( blinken, 800 );

    console.log( `Anzahl der Elemente mit Blink-Effekt: ${blinkElemente.length}` );
});


/**
 * Diese Funktion wird periodisch (alle 1,5 Sekunden) aufgerufen und invertiert
 * die Zuweisung der CSS-Klasse "hintergrundFuerEffekt" der mit dem Attribut
 * data-mide-effekt="blinker" versehenen HTML-Elemente.
 */
function blinken() {

    blinkElemente.forEach(function(element) {

        element.classList.toggle( "hintergrundFuerEffekt" );
    });
}
