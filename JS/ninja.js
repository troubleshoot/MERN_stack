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
    console.log(`name: ${this.name}\n-strength: ${this.strength}\n-speed: ${this.strength}\n-health: ${this.health}`);
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