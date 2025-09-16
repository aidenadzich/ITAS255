import { atoc } from "./countries.js";

const url = 'https://appdev.itas.ca/~amcdonald/airports.json';

async function getAirports() {
    try {
        const res = await fetch(url);
        const airports = await res.json();
        return airports;
    } catch (err) {
        console.log(err);
    }
}

async function main() {
    let airports = await getAirports();
    airports = airports.airports;

    airports.sort((a, b) => {
        if (a.continent < b.continent) return -1;
        if (a.continent > b.continent) return 1;

        if (a.country < b.country) return -1;
        if (a.country > b.country) return 1;

        if (a.city < b.city) return -1;
        if (a.city > b.city) return 1;

        return 0;
    });

    const continentStyles = {
        africa: {
            colors: ["#159410ff", "#ffffff", "#ca0f0fff"]
        },
        asia: {
            colors: ["#ec0909ff", "#ffffff", "#e1bc6e"]
        },
        europe: {
            colors: ["#004494", "#ffffff", "#ffd617"]
        },
        northamerica: {
            colors: ["#ff0000ff", "#ffffff", "#004494"]
        },
        oceania: {
            colors: ["#ffa011ff", "#ffffff", "#1080ffff"]
        },
        southamerica: {
            colors: ["#0c6113ff", "#ffffff", "#dfab1cff"]
        }
    }

    let airportGrid = document.querySelector("#airportList");

    let contSel = document.querySelector("#contSel");
    let cont = contSel.value;

    let airportCodeSearch = document.querySelector("#airportCode");
    let code = airportCodeSearch.value.toLowerCase();

    let errorElement = document.querySelector("#error");

    let filteredAirports = airports;
    if (cont) {
        filteredAirports = airports.filter(airport =>
            airport.continent &&
            airport.continent.replace(/\s/g, '').toLowerCase() === cont
        );
    }

    if (code) {
        filteredAirports = airports.filter(airport =>
            airport.airport_code.toLowerCase().startsWith(code)
        );
    }

    if (!filteredAirports.length) {
        errorElement.innerHTML = "No airports found!";
        return;
    } else {
        errorElement.innerHTML = "";
    }
    
    filteredAirports.forEach (airport => {
        let card = document.createElement("div");

        let countryCode = atoc[airport.country];

        let airportCont = airport.continent.replace(/\s/g, '');
        airportCont = airportCont.toLowerCase();

        let continent = continentStyles[airportCont] || {
            colors: ["#CCCCCC", "#FFFFFF"],
        };

        let gradient = `linear-gradient(135deg, ${continent.colors.join(", ")})`;
        card.style.background = gradient;

        card.className =
        "relative bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center overflow-hidden";



        card.innerHTML = `
        <div class="z-10">
        <h2 class="text-xl font-semibold mb-2">${airport.airport_name} (${airport.airport_code})</h2>
        <p class="text-sm"><span class="font-medium">Location:</span> ${airport.city}, ${airport.country}, ${airport.continent}</p>
        <p class="text-sm"><span class="font-medium">Annual Passengers:</span> ${(airport.passengers_per_year_thousands * 1000).toLocaleString()}</p>
        </div>

        <img src="https://flagsapi.com/${countryCode}/flat/64.png"
         class="w12 h-12 object-contain absolute right-6 bottom-4 rounded outline-solid" />
    `;

    airportGrid.appendChild(card);

  });
}

document.addEventListener("DOMContentLoaded", function() {
    main();
    document.querySelector("#contSel").addEventListener("change", () => {
        document.querySelector("#airportList").innerHTML = "";
        main();
    });
    document.querySelector("#airportCode").addEventListener("input", () => {
        document.querySelector("#airportList").innerHTML = "";
        main();
    });
});