const meals = [
  {
    name: "Owsianka z jabłkiem",
    calories: 320,
    theme: "śniadanie",
    instructions: [
      "Zagotuj 200ml mleka.",
      "Dodaj 5 łyżek płatków owsianych.",
      "Gotuj 5 minut mieszając.",
      "Dodaj starte jabłko i cynamon."
    ]
  },
  {
    name: "Kurczak curry z ryżem (kuchnia indyjska)",
    calories: 580,
    theme: "obiad",
    instructions: [
      "Pokrój kurczaka, obsmaż z cebulą.",
      "Dodaj pastę curry i mleczko kokosowe.",
      "Gotuj 15 minut, podaj z ryżem."
    ]
  },
  {
    name: "Spaghetti z sosem pomidorowym (włoska)",
    calories: 530,
    theme: "obiad",
    instructions: [
      "Ugotuj makaron al dente.",
      "Podsmaż czosnek, dodaj pomidory i przyprawy.",
      "Gotuj 15 minut, dodaj parmezan."
    ]
  },
  {
    name: "Sałatka z ciecierzycy (wege)",
    calories: 420,
    theme: "kolacja",
    instructions: [
      "Wymieszaj ciecierzycę z papryką, ogórkiem i oliwą.",
      "Dodaj sok z cytryny i natkę pietruszki."
    ]
  },
  {
    name: "Łosoś pieczony z warzywami (fit)",
    calories: 490,
    theme: "obiad",
    instructions: [
      "Łososia skrop cytryną i posyp ziołami.",
      "Piecz 20 minut w 180°C z warzywami."
    ]
  }
];

document.getElementById("generate").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  meals.forEach(meal => {
    const box = document.createElement("div");
    box.className = "bg-gray-800 p-4 rounded shadow";

    box.innerHTML = `
      <h2 class="text-xl font-semibold text-indigo-300">${meal.name}</h2>
      <p class="text-sm text-gray-300 mb-1">Temat: <strong>${meal.theme}</strong></p>
      <p class="text-sm text-gray-300 mb-2">Kalorie: ${meal.calories} kcal</p>
      <p class="font-semibold text-sm text-gray-200 mb-1">Jak przygotować:</p>
      <ul class="list-disc list-inside text-gray-300">
        ${meal.instructions.map(step => `<li>${step}</li>`).join('')}
      </ul>
    `;

    output.appendChild(box);
  });

  // pokaż przycisk PDF po wygenerowaniu
  document.getElementById("downloadBtn").classList.remove("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("output");
  html2pdf().set({
    margin: 10,
    filename: 'jadlospis.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save();
});
