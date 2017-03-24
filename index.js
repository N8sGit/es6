// function Character (/*integer*/ attackPower, /*integer*/ health) {
//     this.attackPower = attackPower;
//     this.health = health;
// };
//
// Character.prototype.attack = function(/*player instance*/ opposingPlayer){
// //code to attack opposingPlayer if Math.random() is greater than 0.5
// };
//
// var red = new Character(x, y);
// var blue = new Character(a, b);


class Character{
  constructor(attackPower, health){
    this.attackPower = attackPower,
    this.health = health
  }

  attack(opposingPlayer){
    let attackChance = Math.random()

    if(attackChance> .5) opposingPlayer.health -= this.attackPower
  }



}

const player1 = new Character(10, 100)

const player2 = new Character(12,95)

 var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
// Currently, you could write a map function like this:
//
// winnerArr.map(function(item, index){
//     return {winner: item};
// })

  winnerArr.map((item,index) => ({winner:item}))

  // Let's create a battle function,
  // which should have each player swing at each other until one of the
  // players' health is 0 or less. Any specific rules
  // (such as whoever goes first, how much health they have,
  //   how much damage their attacks do) are up to you. Have fun with it.

  // Write this using let and const. Good luck, and may the odds be ever in your favor.

  function battle(player1, player2){
    while(player1.health> 0 || player2.health>0){
      player1.attack(player2)
      player2.attack(player1)
    }
  }
