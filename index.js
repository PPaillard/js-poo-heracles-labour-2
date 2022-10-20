const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon");
const Shield = require("./src/Shield")

/** Create Heracles  */
const heraclette = new Fighter("🧔 Heraclette", 20, 6);
const sword = new Weapon("Epee", 10);
heraclette.equipWeapon(sword);
const littleShield = new Shield();
heraclette.equipShield(littleShield)

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};
let round = 1;
do {
  console.log(`🕛 Round #${round}`);

  heraclette.fight(boar);
  console.log(roundDisplay(heraclette, boar));

  if (boar.isAlive()) {
    boar.fight(heraclette);
    console.log(roundDisplay(boar, heraclette));
  }
  round++
}
while (boar.isAlive() && heraclette.isAlive());
/*
{
  winner: ,
  loser: ,
}
*/
const {winner, loser} = score(heraclette,boar)

console.log(`🏆 ${winner.name} wins (💙 ${winner.life} )`)
console.log(`💀 ${loser.name} is dead`);
