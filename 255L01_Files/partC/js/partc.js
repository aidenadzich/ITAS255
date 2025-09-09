let heroes = [];
heroes[0] = ["Barry", "Allen", 1998, "The Flash", true, 1000];
heroes[1] = ["Oliver", "Queen", 1978, "Green Arrow", false, 2];
heroes[2] = ["Daisy", "Johnson", 2005, "Quake", true, 1350];
heroes[3] = ["Clint", "Barton", 1958, "Hawkeye", false, 200];
heroes[4] = ["James", "Howlett", 1818, "Wolverine", true, 2000];
heroes[5] = ["Tony", "Stark", 1968, "Ironman", false, 3];
heroes[6] = ["Bruce", "Wayne", 1970, "Batman", false, 1];
heroes[7] = ["Victor", "Shade", 1993, "Vision", true, 1800];
heroes[8] = ["Peter", "Parker", 2002, "Spiderman", true, 2000];
heroes[9] = ["Ororo", "Munroe", 1976, "Storm", true, 1200];
heroes[10] = ["Anna Marie", "", 1982, "Rogue", true, 1500];
heroes[11] = ["Eric", "O'Grady", 2007, "Antman", true, 800];
heroes[12] = ["Natasha", "Romanov", 1983, "Black Widow", false, 12];
heroes[13] = ["Ben", "Grimm", 1962, "Thing", true, 1000];
heroes[14] = ["T'Challa", "", 1967, "Black Panther", false, 400];
heroes[15] = ["Daniel", "Rand(-K'ai)", 1975, "Iron Fist", false, 2];

class Person {
    constructor(firstName, lastName, birthYear, occupation, isSuper, rate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.occupation = occupation;
        this.isSuper = isSuper;
        this.rate = rate;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getNumYears() {
        let currYear = new Date().getFullYear();
        return currYear - this.birthYear;
    }

    getTotal() {
        let years = this.getNumYears();
        if (years > 50) {
            return this.rate * 1.5 * years;
        } else {
            return this.rate * years;
        }
    }
}

let heroPerson = [];
for (let i = 0; i < heroes.length; i++) {
    heroPerson.push(new Person(...heroes[i]));
}

document.addEventListener("DOMContentLoaded", function() {
let leftDiv = document.querySelector("#theLeft");
let rightDiv = document.querySelector("#theRight");

for (let person of heroPerson) {
    let paragraph = `
        ${person.getFullName()} aka ${person.occupation} was born ${person.getNumYears()} years ago.<br/>
        They are worth a total of: $${person.getTotal().toLocaleString()}<br/><br/>
    `;

    if (person.isSuper) {
        rightDiv.innerHTML += paragraph;
    } else {
        leftDiv.innerHTML += paragraph;
    }
}
});