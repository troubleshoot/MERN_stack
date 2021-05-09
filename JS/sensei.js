class Ninja {
  constructor(name, health, speed = 3, strength =3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this. strength = strength;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showStats() {
    console.log(`name: ${this.name}\nstrength: ${this.strength}\nspeed: ${this.strength}\nhealth: ${this.health}`);
  }

  drinkSake() {
    this.health += 10;
    console.log(`health: ${this.health}`);
  }
}

const ninja1 = new Ninja("Geo", 100, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
  constructor(name, wisdom = 10, health = 200, speed = 10, strength = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    console.log(`I am wiser`);
    super.drinkSake();
  }
}

const sensei1 = new Sensei("Harry");
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();