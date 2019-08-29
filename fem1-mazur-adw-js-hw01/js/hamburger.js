
function Hamburger (size, stuffing){

        const hamburgerSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
        const hamburgerStuffings = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];

        try {
            if (hamburgerSizes.includes(size) && hamburgerStuffings.includes(stuffing)) {
                this.size = size;
                this.stuffing = stuffing;
                this.toppings = [];
            } else {
                throw new HamburgerException('Hamburger Exception', 'Please, choose size first. Then choose stuffing')
            }
        }catch (e) {
            console.log(`${e.name}: ${e.message}`);
        }
}

//---------- consts for sizes, stuffings, toppins:
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

//---------- Add topping
Hamburger.prototype.addTopping = function (whatToAdd) {

    let ourToppings = this.toppings;

    try {
        if (whatToAdd === Hamburger.TOPPING_MAYO || whatToAdd === Hamburger.TOPPING_SPICE) {

            try {
                if (ourToppings.length === 0 || (ourToppings.length === 1 && ourToppings[0].name !== whatToAdd.name)) {
                    ourToppings.push(whatToAdd);
                } else throw new HamburgerException('Topping amount error', 'You can have only 1 of each topping')
            } catch (amountErr) {
                alert(amountErr.name);
                console.log(`${amountErr.name}: ${amountErr.message}`);
            }

        } else throw new HamburgerException ('Topping Type Error', "It's not a topping. Please, choose one of this: TOPPING_MAYO or TOPPING_SPICE")
    } catch (typeErr) {
        // alert('typeErr.name');
        console.log(`${typeErr.name}: ${typeErr.message}`);
    }
};

//---------- Remove topping
Hamburger.prototype.removeTopping = function(whatToRemove){

    let ourToppings = this.toppings;
    let removalTarget = NaN;

    try {
        if (whatToRemove === Hamburger.TOPPING_MAYO || whatToRemove === Hamburger.TOPPING_SPICE) {
            for (let i = 0; i < ourToppings.length; i++) {
                if (ourToppings[i].name === whatToRemove.name) {
                    removalTarget = ourToppings.indexOf(ourToppings[i]);
                }
            }

            try {
                if (!isNaN(removalTarget)) {
                    ourToppings.splice(removalTarget, 1);
                } else {
                    throw new HamburgerException('Topping removal error', 'There is no such topping in this burger' );
                }
            } catch (removeErr) {
                console.log(`${removeErr.name}: ${removeErr.message}`);
            }

        } else throw new HamburgerException ('Topping Type Error', "It's not a topping. Please, choose one of this: TOPPING_MAYO or TOPPING_SPICE")
    } catch (typeErr) {
        alert('typeErr.name');
        console.log(`${typeErr.name}: ${typeErr.message}`);
    }
};

//---------- Calories
Hamburger.prototype.calculateCalories = function () {
    let sizeCalories = this.size.calories;
    let stuffingCalories = this.stuffing.calories;
    let toppingsCalories = 0;
    if (this.toppings.length > 0) {
        toppingsCalories = this.toppings.reduce(function (sum, current) {
            return sum + current.calories
        }, 0);
    }
    let hambCalories = sizeCalories + stuffingCalories + toppingsCalories;
    return (`You eat ${hambCalories} kkal`);
};

//---------- Price
Hamburger.prototype.calculatePrice = function () {
    let sizePrice = this.size.price;
    let stuffingPrice = this.stuffing.price;
    let toppingsPrice = 0;
    if (this.toppings.length > 0) {
        toppingsPrice = this.toppings.reduce(function (sum, current) {
            return sum + current.price
        }, 0);
    }
    let hambPrice = sizePrice + stuffingPrice + toppingsPrice;
    return (`The price is ${hambPrice} uah`);
};

//---------- Size
Hamburger.prototype.getSize = function (size) {
    const hamburgerSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];

    try {
        if (hamburgerSizes.includes(size)){
            return (console.log(this.size === size))
        } else {
            throw new HamburgerException('Size Type Error', "It's not a size. Please, choose one of this: SIZE_SMALL or SIZE_LARGE" )
        }
    } catch(e) {
        console.log( `${e.name}: ${e.message}` )
    }
};


//---------- Stuffing
Hamburger.prototype.getStuffing = function (stuffing) {
    const hamburgerStuffings = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];

    try {
        if (hamburgerStuffings.includes(stuffing)){
            return (console.log(this.stuffing === stuffing))
        } else {
            throw new HamburgerException('Stuffing Type Error', `It's not a stuffing. Please, choose one of this: STUFFING_CHEESE, STUFFING_POTATO, STUFFING_SALAD` )
        }
    } catch(e) {
        console.log( `${e.name}: ${e.message}` )
    }
};

//---------- Topping
Hamburger.prototype.getTopping = function (topping) {
    const hamburgerToppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];

    try {
        if (hamburgerToppings.includes(topping)){
            return (console.log(this.toppings.includes(topping)))
        } else {
            throw new HamburgerException ('Topping Type Error', "It's not a topping. Please, choose one of this: TOPPING_MAYO or TOPPING_SPICE")
        }
    } catch(e) {
        console.log( `${e.name}: ${e.message}` )
    }
};

// ---------------  Hamburger Exception   -------------------

function HamburgerException (name, message) {
    this.name = name;
    this.message = message;
}