class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    target.resilience -= this.power;
    console.log(`${this.name} attacked ${target.name} for ${this.power}`);
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if( target instanceof Unit ) {
      target[this.stat] += this.magnitude;
      console.log(`${this.name} was used on ${target.name}`);
      console.log(this.text);
    } 
    else
      console.log(`Target is not a unit`);
  }
}

const red = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);

hardAlgo.play(red);

const black = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", 2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

unhandledPromiseRejection.play(red);
pairProgramming.play(red);
red.attack(black)
