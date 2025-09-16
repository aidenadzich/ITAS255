class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }

    // Static method must be called using class, not object
    static greetGuests() {
        return 'Welcome to the hotel';
    }
}

class BnB extends Hotel {
    constructor(name, rooms, booked, proprietor) {
        super(name, rooms, booked);
        this.proprietor = proprietor;
    }
}


const bnb = new BnB('Pines Bed n\' Breakfast', 5, 2, 'Little Sadie');
//console.log(bnb.show());
console.log(bnb.checkAvailability());
// console.log(bnb.greetGuests());
// console.log(Hotel.greetGuests());
// console.log(BnB.greetGuests());