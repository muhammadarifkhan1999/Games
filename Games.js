var punch ="Punch"
var kick = "Kick"
var superpunch = "Super Punch"
var cover = "Cover"
var headkick ="Head kick"
var leaps ="Leaps"
var count =0
var randontime;
var moves=[punch,kick,superpunch,cover,headkick,leaps]
var players = ["Uamir", "Usman","Ayan"]
var player1 = prompt("Player 1 Name")
var player2 = players[Math.floor(Math.random() * 3)]
alert(player1+ " " + "&" +" "+ player2 +" " + "Fight together")
console.log(player1+ " " + "&" +" "+ player2 +" " + "Fight together")
alert("Get Ready For The Toss")
var con1 = prompt("Please select Heads OR Tails")
var gen = Math.random()*1
var spin = Math.floor(gen);
console.log(spin)
if (con1.toLowerCase() == "heads" || con1.toLowerCase() == "tails") {
   if (spin == "0") {
      alert(player1 +" "+"You Won The Toss You Hit First To"+" "+player2)
      console.log(player1 +" "+"You Won The Toss You Hit First To"+" "+player2)
   }
   else if (spin == "1"){
      alert(player1 +" "+ " You Lost The Toss"+" "+player2+" "+"Will Hit First")
      console.log(player1 +" "+ " You Lost The Toss"+" "+player2+" "+"Will Hit First")
   }
}

var player1health=100;
var player2health=100;
function get() {
       var randomattack = moves[Math.floor(Math.random()*6)]
       if (randomattack === kick){
         return[kick,10]
       }
      else if(randomattack === punch){
         return[punch,20]
      }
      else if(randomattack === superpunch){
         return[superpunch,30]
      }
      else if(randomattack ===headkick ){
         return[headkick,40]

      }
      else if( randomattack === leaps){
         return[leaps,50]
      }
      else{
         return[cover,0]
      }
}
function playeraction(count){
   var fight=get()
   if (count % 2){
      player1health=player1health - fight[1]
      console.log(player1,"Hit To",player2,"is",fight[0],"&",player1,"Remaning Health Is",player1health)
   }
   else{
      player2health=player2health - fight[1]
      console.log(player2,"Hit To",player1,"is",fight[0],"&",player2,"Remaning Health Is",player2health,)
   }
}
function reslut (){
   if(player1health <= 0){
      console.log(player2,"is won")
      alert(player2+" "+"is won")
   }
    if(player2health<= 0){
      console.log(player1,"is Won")
      alert(player1+" "+"is Won")
   }
}
function handlefight(){
   count++
   playeraction(count)
   if(player1health <= 0 || player2health <= 0){
      clearInterval(randontime)
      reslut ()
}

}
randontime = setInterval(handlefight,1000)

