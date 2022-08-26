//Store Manager Object
var storeManager = {};
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmart = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";

//Assistant Manager Object
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmart: 30,
    health: 40
};


//purchase object
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var total =  this.shoes*this.stateTax;
        console.log("Total: "+total);
    }
}

purchase1.totalPrice();
//output = 120

//using class and constructor
class Bill {
    constructor(rate, tax) {
        this.rate = rate;
        this.tax = tax;
    }
    totalPrice() {
        return this.rate*this.tax;
    }
}
var bill1 = new Bill(100,1.2);
console.log(bill1.totalPrice());
//output = 120