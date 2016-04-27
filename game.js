var ores = 0;

function mine(number){
    ores = ores + number;
    document.getElementById("ores").innerHTML = ores;
};

var picks = 0;

function buyBasicPick(){
    var basicPickCost = Math.floor(10 * Math.pow(1.1,basicPicks));     //works out the cost of this cursor
    if(ores >= basicPickCost){                                   //checks that the player can afford the cursor
        basicPicks = basicPicks + 1;                                   //increases number of cursors
    	ores = ores - basicPickCost;                          //removes the cookies spent
        document.getElementById('BasicPicks').innerHTML = basicPicks;  //updates the number of cursors for the user
        document.getElementById('ores').innerHTML = ores;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,basicPicks));       //works out the cost of the next cursor
    document.getElementById('basicPickCost').innerHTML = nextCost;  //updates the cursor cost for the user
};



window.setInterval(function(){
	
	mine(CommonEnchants /* Amount */);
	
}, 1000);



function hideWelcome(){
    document.getElementById("Welcomer").hide();
}