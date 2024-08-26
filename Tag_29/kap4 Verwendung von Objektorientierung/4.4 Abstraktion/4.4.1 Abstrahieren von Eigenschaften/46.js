class Enemy {
    constructor(lives, damage) {
      this.lives = lives;
      this.damage = damage;
    }
  }
  
  class EnemyTypeA extends Enemy {
    constructor(lives, damage, cooldown) {
      super(lives, damage);
      this.cooldown = cooldown;
    }
  }
  
  class EnemyTypeB extends Enemy {
    constructor(lives, damage, dropItems) {
      super(lives, damage);
      this.dropItems = dropItems;
    }
  }