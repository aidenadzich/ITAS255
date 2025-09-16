class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }
    
}

const hotel1 = new Hotel("Westin", 150, 50);
const hotel2 = new Hotel("Grand Legacy", 428, 72);
const hotel3 = new Hotel("Mariot", 230, 89);

console.log(hotel1);
console.log(hotel2.rooms);