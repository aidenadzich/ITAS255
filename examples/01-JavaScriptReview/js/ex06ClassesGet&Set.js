class Hotel {
    constructor(a, rooms, booked) {
        this._name = a;
        this._rooms = rooms;
        this._booked = booked;
    }

    get rooms() {
        return this._rooms;
    }

    set rooms(value) {
        this._rooms = value;
    }

    get name() {
        return (this._name).toUpperCase();
    }

    set name(value) {
        return this._name = value;
    }

    get booked() {
        return this._booked;
    }

    set booked(value) {
        return this._booked = value;
    }
}

const hotel1 = new Hotel("Grand Legacy", 428, 312);

console.log(hotel1);
console.log(hotel1.name);
console.log(hotel1._name);
