let cars = JSON.parse(jsonString);

cars.sort((a, b) => {
    if (a.make < b.make) return -1;
    if (a.make > b.make) return 1;
    
    if (a.model < b.model) return -1;
    if (a.model > b.model) return 1;
    
    return 0;
});




let carGrid = document.querySelector("#carsList");


cars.forEach(car => {
  let card = document.createElement("div");

  carMake = car.make.replace(/[ -]/g, '');
  carMake = carMake.toLowerCase();

  let brand = brandStyles[carMake] || {
    colors: ["#CCCCCC", "#FFFFFF"], // fallback gradient
    logo: "logos/default.png"
  };

  let countryCode = atoc[car.country];

  // build gradient (diagonal top-left → bottom-right)
  let gradient = `linear-gradient(135deg, ${brand.colors.join(", ")})`;
    card.style.background = gradient;


  card.className =
    "relative bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center overflow-hidden";



    card.innerHTML = `
    <div class="z-10">
      <h2 class="text-xl font-semibold mb-2">${car.make} ${car.model}</h2>
      <p class="text-sm"><span class="font-medium">Year:</span> ${car.year}</p>
      <p class="text-sm"><span class="font-medium">Colour:</span> ${car.colour}</p>
      <p class="text-sm"><span class="font-medium">Country:</span> ${car.country} </p>
      <p class="text-sm"><span class="font-medium">VIN:</span> ${car.vin}</p>
    </div>
    <img src="/255L01_Files/partD/carLogos/${brand.logo}" alt="${carMake} logo"
         class="w-16 h-16 object-contain opacity-80 absolute right-4 top-4" />
    <img src="https://flagsapi.com/${countryCode}/flat/64.png"
         class="w12 h-12 object-contain absolute right-6 bottom-4 rounded outline-solid" />
  `;

  carGrid.appendChild(card);
});