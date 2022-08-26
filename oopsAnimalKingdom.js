class Animal {
    constructor(color = "Yellow",energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy>0) {
            this.energy-=20;
            console.log("Energy is decreasing, currently at: ",this.energy);
        } else {
            this.sleep();
        }
    }
    sleep() {
        this.energy+=20;
        console.log("Energy is increasing, currently at: ",this.energy);
    }
    getColor() {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    } 
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", color,energy,sound,canJumpHigh,canClimbTrees) {
        super(color,energy,sound,canJumpHigh,canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }

}

class Tiger extends Cat {
    constructor(tigerCatSound="Roar!",color,energy,sound,canJumpHigh,canClimbTrees) {
        super(color,energy,sound,canJumpHigh,canClimbTrees);
        this.tigerCatSound = tigerCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerCatSound);
    }
}

class Bird extends Animal {
    constructor(sound = "Chirp",canFly = true, color, energy) {
        super(color,energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false,color,energy,sound,canFly) {
        super(color,energy,sound,canFly);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        if(this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

