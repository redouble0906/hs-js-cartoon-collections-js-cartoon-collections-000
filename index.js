function dwarfRollCall(dwarves) {
var string = [];
	dwarves.forEach(function(name, d) {
		string.push(d+1 +". " + name + " ");
	});
	return string.join("");
  }

function summonCaptainPlanet(planeteerCalls){
 var calls = [];
    planeteerCalls.forEach(function(scp) {
  	scp = scp.toUpperCase() + "!";
  	calls.push(scp);
  });
  return calls;
  
}

function longPlaneteerCalls(words) {
for(var d = 0; d < words.length; d++) {
		if(words[d].length > 4) {
			return true;
		}
	}
	return false;
  
}

function findTheCheese (food) {
 var cheese = ["camembert", "cheddar", "gouda"];
	for(var d = 0; d < food.length; d++) {
		var Itscheese = cheese.indexOf(food[d]);
		if(Itscheese !== -1) {
			return food[d];
		}
	}
	return "no cheese!";
  
}

function wordsWithB (words) {
  var Bwords = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i].startsWith("b")) {}
     Bwords.push(words[i]);
  }
      
      return Bwords;
    
  
  
