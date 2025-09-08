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


const bnb = new BnB('Pines Bed n\' Breakfast', 5, 2, 'Little Sadie');
console.log(bnb.show());
console.log(bnb.checkAvailability());
// console.log(bnb.greetGuests());
console.log(Hotel.greetGuests());
console.log(BnB.greetGuests());