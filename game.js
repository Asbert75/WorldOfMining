// Definear lite variabler som krävs.
var ores = 0;

var shovel = 0;
var basic = 0;
var core = 0;
var artisan = 0;
var advanced = 0;
var legendary = 0;

var commons = 0;
var uncommons = 0;
var rares = 0;
var epics = 0;


// Räknar ut hur många ores man får per klick. Antalet av varje pick * hur mycket extra den ger per klick (plus 1).
var clicks = (shovel*1) + (basic*5) + (core*20) + (artisan*250) + (advanced*1500) + (legendary*4200) + 1;

// Funktionen som går i kraft när man klickar på veinen.
function mine() {
    // Antalet ores man har + antalet ores man får från ett klick.
    ores = ores + clicks;
    // Uppdaterar <p> taggen med ID:t "ores" med hur många ores man har.
    document.getElementById("ores").innerHTML = ores;
};

// Denna funktion är i stort sett samma som föregående förutom att detta är funktionen som bestämmer hur mycket man får per sekund. "Number" är en variabel som bestämms av antalet enchants.
function minePerSecond(number) {
    ores = ores+number;
    document.getElementById("ores").innerHTML = ores;
};



// Här definierar jag funktionerna för att köpa enchants & picks.
function buyCommon(){
    // Räkna ut kostnaden för nästa enchant. Baspris 5 * 1.15 upphöjt till antalet man köpt. Math.pow(bas, exponent) = bas^exponent.
    var commonCost = Math.floor(5 * Math.pow(1.15,commons));
    
    // Om ores är större eller lika med kostnaden av enchanten/picken, gör det följande. I.e: Kollar om man har råd.
    if(ores >= commonCost){
        // commons = commons + 1. Ökar antalet för varje köpt.
        commons = commons + 1;
        // ores = ores - commonCost. Tar bort det man spenderar.
        ores = ores - commonCost;
        
        // Updaterar displayen för hur många man har
        document.getElementById("commons").innerHTML = commons;
        // Updaterar ores.
        document.getElemenyById("ores").innerHTML = ores;
    };
    // Räknar ut och delar ut kostnaden för nästa pick.
    var nextCost = Math.floor(5* Math.pow(1.15,commons));
    document.getElemenyById("commonCost").innerHTML = nextCost;
};
/*
function buyUncommon(){
    var uncommonCost = Math.floor(25 * Math.pow(1.15,uncommons));

    if(ores >= uncommonCost){
        uncommons = uncommons + 1;
        ores = ores - uncommonCost;
        
        document.getElementById("uncommons").innerHTML = uncommons;
        document.getElemenyById("ores").innerHTML = ores;
    };
    var nextCost = Math.floor(25* Math.pow(1.15,uncommons));
    document.getElemenyById("uncommonsCost").innerHTML = nextCost;
};
*/

// Kallar på funktionen "minePerSecond" en gång per enchant varje sekund (1000 millisekunder).
window.setInterval(function(){
	
	minePerSecond((commons*5));
    minePerSecond((uncommons*75));
    minePerSecond((rares*500));
    minePerSecond((epics*2500));
	
}, 1000);




