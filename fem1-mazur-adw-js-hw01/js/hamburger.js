
function Hamburger (size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}

Hamburger.SIZE_SMALL = {
    name: 'Small',
    price: 50,
    calories: 20,
};
Hamburger.SIZE_LARGE ={
    name: 'Large',
    price: 100,
    calories: 40,
};
Hamburger.STUFFING_CHEESE = {
    name: 'Cheese',
    price: 10,
    calories: 20,
};
Hamburger.STUFFING_SALAD ={
    name: 'Salad',
    price: 20,
    calories: 5,
};
Hamburger.STUFFING_POTATO = {
    name: 'Potato',
    price: 15,
    calories: 10,
};
Hamburger.TOPPING_MAYO = {
    name: 'Mayo',
    price: 20,
    calories: 5,
};
Hamburger.TOPPING_SPICE = {
    name: 'Spice',
    price: 15,
    calories: 0,
};

// ---------------  Hamburger methods  -------------------

Hamburger.prototype.addTopping = function (topping) {

    let whatToAdd = topping;
    let ourToppings = this.toppings;

    try {
        if (whatToAdd === Hamburger.TOPPING_MAYO || whatToAdd === Hamburger.TOPPING_SPICE) {

            try {
                if (ourToppings.length === 0 || (ourToppings.length === 1 && ourToppings[0].name !== whatToAdd.name)) {
                    ourToppings.push(whatToAdd);
                } else throw new ToppingAmountError
            } catch (amountErr) {
                alert(amountErr.name);
                console.log(`${amountErr.name}: ${amountErr.message}`);
            }

        } else throw new ToppingTypeError
    } catch (typeErr) {
        alert('typeErr.name');
        console.log(`${typeErr.name}: ${typeErr.message}`);
    }
};

Hamburger.prototype.removeTopping = function(topping){

    let whatToRemove = topping;
    let ourToppings = this.toppings;
    let removalTarget = NaN;

    try {
        if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE) {
            for (let i=0; i < ourToppings.length; i++) {
                if (ourToppings[i].name === whatToRemove.name) {
                    removalTarget = ourToppings.indexOf(ourToppings[i]);
                }
            }

            try {
                if (!isNaN(removalTarget)) {
                    ourToppings.splice(removalTarget,1);
                } else {
                    throw new ToppingRemoveError;
                }
            } catch (removeErr) {
                console.log(`${removeErr.name}: ${removeErr.message}`);
            }

        } else throw new ToppingTypeError
    } catch (typeErr) {
        alert('typeErr.name');
        console.log(`${typeErr.name}: ${typeErr.message}`);
    }

    //
    //     try{
    //          if (ourToppings.includes(whatToRemove) && ourToppings[i].name === whatToRemove.name){
    //          console.log("got ya");
    //              console.log('==================================');
    //          } else {
    //              throw new ToppingRemoveError;
    //          }
    //      } catch (removeErr) {
    //          console.log(`${removeErr.name}: ${removeErr.message}
    //          ----------------------------------------------------`);
    //      }
    // }
    // try {
    //     if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE) {
    //         alert ('fine');
    //         console.log('fine');
    //     } else throw new ToppingTypeError
    // } catch (typeErr) {
    //     alert('typeErr.name');
    //     console.log(`${typeErr.name}: ${typeErr.message}`);
    // }
};


// ---------------  My Errors   -------------------
function ToppingAmountError () {
    this.name = 'Topping amount error';
    this.message = 'You can have only 1 of each topping';
}

function ToppingTypeError() {
    this.name = 'Topping Type Error';
    this.message = "It's not a topping. Please, choose one of this: TOPPING_MAYO or TOPPING_SPICE"
}

function ToppingRemoveError() {
    this.name = 'Topping removal error';
    this.message = 'There is no such topping in this burger'
}

// ---------------  My Hamburgers   -------------------

let testHamb = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
testHamb.addTopping(Hamburger.TOPPING_SPICE);
testHamb.addTopping(Hamburger.TOPPING_MAYO);
testHamb.addTopping(Hamburger.TOPPING_MAYO);

testHamb.removeTopping(Hamburger.TOPPING_MAYO);
testHamb.removeTopping(Hamburger.SIZE_LARGE);

testHamb.removeTopping(Hamburger.TOPPING_SPICE);

console.log(testHamb);

// console.log(testHamb.toppings[1].name);