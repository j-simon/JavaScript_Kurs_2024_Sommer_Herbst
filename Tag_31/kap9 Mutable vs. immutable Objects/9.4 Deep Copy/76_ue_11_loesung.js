'use strict'

function Animal(age, gender, speed) {
    // Attributes of Animal
    if (new.target === Animal)  throw new Error('Du solls keine Instanz von animal bilden')
    this.age = age
    this.gender = gender
    this.speed = speed
    this.getAge = function () {
      return `${this.age} years`
    }
  }
  
  // Methods of Animal
  // Animal.prototype.getAge = function () {
  //   return `${this.age} years`
  // }
  
  Animal.prototype.setAge = function (age) {
    const exp = new RegExp(/\d+/)
    if (!exp.test(age) || age < 0) {
        console.log('Invalid age!')
        return
    }
    this.age = age
  }
  
  Animal.prototype.getGender = function () {
    return this.gender
  }
  
  Animal.prototype.setGender = function (gender) {
    this.gender = gender
  }
  
  Animal.prototype.getSpeed = function () {
    return this.speed
  }
  
  Animal.prototype.move = function  () {
    return `with a maximum speed of ${this.speed} km/h`
  }
  
  Animal.prototype.setSpeed = function (speed) {
    if (typeof speed !== 'number' || speed <= 0) {
        console.log('Invalid speed!')
        return
    }
    this.speed = speed
  }
  
  Animal.prototype.eatAnimal = function (callback) {
    return `The ${this.species} is eating the ${callback()}`
  }
  

  class Bird extends Animal {
    constructor(age, gender, speed) {
        // Constructor of Bird
        super(age, gender, speed)
        this.species = 'Bird'
    }
  
    
  }

  Bird.prototype.fly = function() {
      return `The ${this.species} flys ${this.move()}`
  }
  
  class Fish extends Animal {
    constructor(age, gender, speed) {
        // Constructor of Fish
        super(age, gender, speed)
        this.species = 'Fish'
        // Methods of Fish
        this.swim = function () {
            return `The ${this.species} swims ${this.move()}`
        }
        this.eatFood = function (food) {
            return `The ${this.species} eats ${food}`
        }
        this.getSpecies = this.getSpecies.bind(this)
    }
    getSpecies() {
        return this.species
    }
  }
  
  const food =  {
  //   // Name of food
    name: 'pommes rot weiss',
  }
  
  function getFoodName() {
    return this.name
  }
  

  /////////////////////////////////////////////////////////

  //const animal = new Animal(3,'nothing',30)
  //console.log("nach new Animal(...)")
  //console.log(animal.getAge())
  
  const bird = new Bird(4, 'female', 20)
  
  console.log(bird.getAge()) // 4 years
  
  bird.setSpeed('30 km/h') // Invalid speed!
  
  console.log(bird.fly()) // The bird flys with a maximum speed of 20 km/h
  
  const fish = new Fish(2, 'male', 10)
  
  console.log(fish.getGender()) // male
  console.log(fish.swim()) // The fish swims with a maximum speed of 10 km/h
  console.log(bird.eatAnimal(     fish.getSpecies      )) // The bird is eating the Fish
  console.log(fish.eatFood(getFoodName.call(food))) // The Fish eats the alga