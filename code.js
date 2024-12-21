var woundDice;

function rollToHit(){
    numHits = 0;
 const numDice = document.getElementById("numShots").value;
 const bs = document.getElementById("BSkill").value;
 const firstRoll = [];
 for (i=0; i < numDice; i++){
    //random number from 1 to 6
 let dieRoll = Math.floor(Math.random() *6) +1;
 //add them to the Array
 firstRoll.push(dieRoll);
//check to see if it's a hit or not
 if (dieRoll >= bs){
numHits = (numHits + 1);
}
else
console.log(firstRoll);
console.log(numHits);

}
//display results with innerHTML
document.getElementById("yourHits").innerHTML = `You got ${numHits} hits`; 
woundDice = numHits;
}


function rollToWound(){
numWounds = 0;
const S = document.getElementById("Strength").value;
const T = document.getElementById("Toughness").value;
const secondRoll = []
    //calculate number needed to wound
    if (S == T){numberToWound = 4}
    else if (S < T){numberToWound = 5}
    else if (S > T) {numberToWound = 3}

//roll the dice
       for (i=0; i < woundDice; i++){
        let dieRoll = Math.floor(Math.random() *6) +1;
        secondRoll.push(dieRoll);
        if (dieRoll >= numberToWound){
            numWounds = (numWounds + 1);
            }
        
    }  
    console.log(`number of dice ${woundDice}`)
    console.log(`To Wound: ${numberToWound}`);
    console.log(`Wounds: ${numWounds}`);
 document.getElementById("yourWounds").innerHTML = `${numWounds} Wounds`;    
}