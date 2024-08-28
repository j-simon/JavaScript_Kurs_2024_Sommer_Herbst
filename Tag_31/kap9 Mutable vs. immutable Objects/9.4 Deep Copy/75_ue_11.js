function Animal(age, gender, speed) {
  // Attributes of Animal
}

// Methods of Animal

class Bird extends Animal {
  constructor(age, gender, speed) {
    // Constructor of Bird
    this.species = 'bird';
  }

  // Methods of Bird
}

class Fish extends Animal {
  constructor(age, gender, speed) {
    // Constructor of Fish
    this.species = 'Fish';
    // Functions of Fish
  }
  getSpecies() {
    return this.species;
  }
}

const food = {
  // Name of food
};

function getFoodName() {
  return this.name;
}

const bird = new Bird(4, 'female', 20);

console.log(bird.getAge()); // 4 years

bird.setSpeed('30 km/h'); // Invalid speed!

console.log(bird.fly()); // The bird flys with a maximum speed of 20 km/h

const fish = new Fish(2, 'male', 10);

console.log(fish.getGender()); // male
console.log(fish.swim()); // The fish swims with a maximum speed of 10 km/h
console.log(bird.eatAnimal(fish.getSpecies)); // The bird is eating the Fish
console.log(fish.eatFood(getFoodName.call(food))); // The Fish eats the alga
