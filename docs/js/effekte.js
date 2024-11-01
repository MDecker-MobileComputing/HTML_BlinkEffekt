"use strict";

/** Array aller Elemente, die schnell blinken sollen. */
let blinkElementeSchnell = null;

/** Array aller Elemente, die langsam blinken sollen. */
let blinkElementeLangsam = null;


/*
 * Diese Funktion wird aufgerufen, wenn das HTML-Dokument vollständig geladen wurde.
 */
window.addEventListener("load", function() {

    blinkElementeSchnell = document.querySelectorAll( "[data-mide-blinken='schnell']" );
    console.log( `Anzahl der Elemente mit schnellem Blink-Effekt: ${blinkElementeSchnell.length}` );

    blinkElementeLangsam = document.querySelectorAll( "[data-mide-blinken='langsam']" );
    console.log( `Anzahl der Elemente mit langsamen Blink-Effekt: ${blinkElementeLangsam.length}` );

    setInterval( blinkenSchnell,  800 );
    setInterval( blinkenLangsam, 1500 );
});


/**
 * Diese Funktion lässt alle Elemente aus dem Array `blinkElementeSchnell` schnell blinken.
 */
function blinkenSchnell() {

    blinkElementeSchnell.forEach( function(element) {

        element.classList.toggle( "hintergrundFuerEffekt" );
    });
}


/**
 * Diese Funktion lässt alle Elemente aus dem Array `blinkElementeLangsam` langsam blinken.
 */
function blinkenLangsam() {

    blinkElementeLangsam.forEach( function(element) {

        element.classList.toggle( "hintergrundFuerEffekt" );
    });
}
