const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = null;
        this.shield = null;
    }

    equipWeapon(weapon){
        this.weapon = weapon
    }

    equipShield(shield){
        this.shield = shield
    }

    // Launch a fight
    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - defender.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }

    getDefense(){
        return this.shield?this.shield.protection + this.dexterity: this.dexterity;
    }

    getDamage(){
        if(this.weapon != null) return this.strength + this.weapon.damage;
        return this.strength;

        // si weapon == undefined / null => evalué à false
        return this.weapon? this.strength + this.weapon.damage:this.strength;
    }

    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;
