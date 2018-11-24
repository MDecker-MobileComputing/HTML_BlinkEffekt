/*jshint esversion: 6 */

/* This file is licensed under the terms of the BSD 3-Clause License. */

/**
 * Diese Funktion wird periodisch (alle 1,5 Sekunden) aufgerufen und invertiert
 * die Zuweisung der CSS-Klasse "hintergrundFuerEffekt" der mit dem Attribut 
 * data-mide-effekt="blinker" versehenen HTML-Elemente.
 */
function blinken() {  "use strict";
    $("[data-mide-effekt='blinker']").toggleClass( "hintergrundFuerEffekt" );
}


$( document ).ready( function(){ blinken();                         
                                 setInterval(blinken , 1500); 
                               });
