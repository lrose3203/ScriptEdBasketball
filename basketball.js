function promptForPlayerName (Player){
    var name = prompt("What is "+(Player)+ " " +"name");
    if (name.length > 15) {
        alert ("Wow, thats a long name!");
    }
    return name;
}
function tryTwoPointShot(){
   var number1=Math.random();
   var number2=Math.random();
   if(number1>0.2 && number2>0.2){
   return true;
   }
   else {
      return false;
   }
}
function tryThreePointShot(){
   var number1=Math.random();
   var number2=Math.random();
   if(number1<=0.2 || number2>=0.8){
   return true;
   }
   else {
      return false;
   }
}
function getShotString(name, points, shotgood){
   if (shotgood){
   return name+" attempted a "+points+" pointer. it was good";
   }
   else{
      return name+" attempted a "+points+" pointer. it was not good"; 
   }
}

function updateScore(shotgood,score,points){
   if (shotgood){
      return score + points
      }
      else {
         return score;
      }
}

function isEndOfGame (score, name){
   if(score>=20){
      alert ("the game is over " +name+ " won");
      return true;
   }
   else {
   return   false;
   }
}
