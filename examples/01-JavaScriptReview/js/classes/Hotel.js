export class Hotel {
    #name;
    #rooms;
    #booked;
    constructor(name, rooms, booked) {
        this.#name = name;
        this.#rooms = rooms;
        this.#booked = booked;
    }

    get rooms() {
        return this.#rooms;
    }

    set rooms(value) {
        this.#rooms = value;
    }

    get name() {
        return (this.#name).toUpperCase();
    }

    set name(value) {
        return this.#name = value;
    }

    get booked() {
        return this.#booked;
    }

    set booked(value) {
        return this.#booked = value;
    }

    checkAvailability() {
        return this.#rooms - this.#booked;
    }
}