// Definear lite variabler som krävs.
var ores = 0;

var shovel = {
    cost: 5,
    count: 0,
    perClick: 1
};

var basic = {
    cost: 20,
    count: 0,
    perClick: 5
};

var core = {
    cost: 75,
    count: 0,
    perClick: 20
};

var legendary = {
    cost: 15000,
    count: 0,
    perClick: 4200
};


var common = {
    cost: 5,
    count: 0,
    cps: 5
};

var uncommon = {
    cost: 60,
    count: 0,
    cps: 75
};

var rare = {
    cost: 375,
    count: 0,
    cps: 500
};

var epic = {
    cost: 1500,
    count: 0,
    cps: 2500
};


// Funktionen som går i kraft när man klickar på veinen.
function mine() {
    // Räknar ut hur många ores man får per klick. Antalet av varje pick * hur mycket extra den ger per klick (plus 1).
    clicks = 1 + (shovel.perClick * shovel.count) + (basic.perClick * basic.count) + (core.perClick * core.count) + (legendary.perClick * legendary.count);
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
function buyCommon() {
    // Räkna ut kostnaden för nästa enchant. Baspris 5 * 1.15 upphöjt till antalet man köpt. Math.pow(bas, exponent) = bas^exponent.
    common.cost = Math.floor(5 * Math.pow(1.15,common.count));
    // Om ores är större eller lika med kostnaden av enchanten/picken, gör det följande. I.e: Kollar om man har råd.
    if(ores >= common.cost){
        // commons = commons + 1. Ökar antalet för varje köpt.
        common.count += 1;
        // ores = ores - commonCost. Tar bort det man spenderar.
        ores -= common.cost;
        
        // Updaterar displayen för hur många man har
        document.getElementById("commonCount").innerHTML = common.count;
        // Updaterar ores.
        document.getElementById("ores").innerHTML = ores;
    }
    // Räknar ut och delar ut kostnaden för nästa pick.
    var nextCost = Math.floor(5 * Math.pow(1.15,common.count));
    document.getElementById("commonCost").innerHTML = nextCost;
};


function buyUncommon() {
    uncommon.cost = Math.floor(60 * Math.pow(1.15,uncommon.count));
    
    if(ores >= uncommon.cost){
        uncommon.count += 1;
        ores -= uncommon.cost;

        document.getElementById("uncommonCount").innerHTML = uncommon.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(60 * Math.pow(1.15,uncommon.count));
    document.getElementById("uncommonCost").innerHTML = nextCost;
};

function buyRare() {
    rare.cost = Math.floor(375 * Math.pow(1.15,rare.count));
    
    if(ores >= rare.cost){
        rare.count += 1;
        ores -= rare.cost;

        document.getElementById("rareCount").innerHTML = rare.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(375 * Math.pow(1.15,rare.count));
    document.getElementById("rareCost").innerHTML = nextCost;
};

function buyEpic() {
    epic.cost = Math.floor(1500 * Math.pow(1.15,epic.count));
    
    if(ores >= epic.cost){
        epic.count += 1;
        ores -= epic.cost;

        document.getElementById("epicCount").innerHTML = epic.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(1500 * Math.pow(1.15,epic.count));
    document.getElementById("epicCost").innerHTML = nextCost;
};


function buyShovel() {
    shovel.cost = Math.floor(5 * Math.pow(1.15,shovel.count));
    
    if(ores >= shovel.cost){
        shovel.count += 1;
        ores -= shovel.cost;

        document.getElementById("shovelCount").innerHTML = shovel.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(5 * Math.pow(1.15,shovel.count));
    document.getElementById("shovelCost").innerHTML = nextCost;
};

function buyBasic() {
    basic.cost = Math.floor(20 * Math.pow(1.15,basic.count));
    
    if(ores >= shovel.cost){
        shovel.count += 1;
        ores -= shovel.cost;

        document.getElementById("basicCount").innerHTML = basic.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(20 * Math.pow(1.15,basic.count));
    document.getElementById("basicCost").innerHTML = nextCost;
};

function buyCore() {
    shovel.cost = Math.floor(75 * Math.pow(1.15,core.count));
    
    if(ores >= core.cost){
        core.count += 1;
        ores -= core.cost;

        document.getElementById("coreCount").innerHTML = core.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(75 * Math.pow(1.15,core.count));
    document.getElementById("coreCost").innerHTML = nextCost;
};

function buyLegendary() {
    legendary.cost = Math.floor(15000 * Math.pow(1.15,legendary.count));
    
    if(ores >= legendary.cost){
        legendary.count += 1;
        ores -= core.cost;

        document.getElementById("legendaryCount").innerHTML = legendary.count;
        document.getElementById("ores").innerHTML = ores;
    }
    var nextCost = Math.floor(15000 * Math.pow(1.15,core.count));
    document.getElementById("legendaryCost").innerHTML = nextCost;
};







// Kallar på funktionen "minePerSecond" en gång per enchant varje sekund (1000 millisekunder).
window.setInterval(function() {
	
	minePerSecond((common.count*common.cps));
    minePerSecond((uncommon.count*uncommon.cps));
    minePerSecond((rare.count*rare.cps));
    minePerSecond((epic.count*epic.cps));
	
}, 1000);


