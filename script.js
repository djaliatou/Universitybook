let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2212.PNG?v=1585095516478",
    name: "Djaliattou AKA Djabobo",
    quote: "I hate it here",
    superlative: "Most dramatic"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-1250.JPG?v=1585096419103",
    name: "Muni locx AKA Munira",
    quote: "That's tough",
    superlative: "Most friendly"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-1174.JPG?v=1585160031102",
    name: "Daouda AkA Drissa",
    quote: "say dat",
    superlative: "best cook"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2693.PNG?v=1585162799858",
    name: "Aisha cashh AKA Aisatou",
    quote: "you guys being mad extra",
    superlative: "most sarcastic"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2692.PNG?v=1585162708722",
    name: "kiya baby AKA Worokiya",
    quote: "sheeskabob",
    superlative: "best glowing skin"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-1300.JPG?v=1585162697772",
    name: "Turtle head AKA Baba ",
    quote: "Hard work beats talent when talent fails",
    superlative: "Most Athletic"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2712.PNG?v=1585162748134",
    name: "Rakiya AKA Hummu",
    quote: "I honestly Don't care",
    superlative: "Funniest person"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2695.PNG?v=1585162737211",
    name: "Malian girl AkA Aoussa",
    quote: " Ok and ",
    superlative: " Most Bougiie "
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-1435.JPG?v=1585426679357",
    name: " Tazlima ",
    quote: "ya pa moi ya djadja",
    superlative: "Best Hair"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2694.PNG?v=1585162726900",
    name: "Queen AKA Britney",
    quote: "I cant wait to go home and play video game",
    superlative: "Most Athletic"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2409.JPG?v=1585426696897",
    name: "Mayhelly",
    quote: "Be the Change You Want To See",
    superlative: "Shortest girl ever "
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2751.PNG?v=1585426719778",
    name: "Vianka",
    quote:
      "Don't ever let peopleget into your head and make sure you try your best and be the best you can be ",
    superlative: "Best smile"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2753.PNG?v=1585428721410",
    name: "Eric",
    quote: "High school was just like a poem, confusing,eyeopening, and short",
    superlative: "Best PGC patner"
  },

  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-0489.PNG?v=1585428687739",
    name: "Alexis",
    quote: "you trynna play me",
    superlative: "Most articulate"
  },
  {
    profileImage:
      "https://cdn.glitch.com/c1af399e-88ba-4b96-8f0c-19ad5b049c4f%2FIMG-2752%20(1).PNG?v=1585428671807",
    name: "Andrew",
    quote: "Buenoooo",
    superlative: ""
  }
];

let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =students[count].superlative;
  console.log(count);
  if (count == 14) {
    count = 0;
  }
  console.log(count);
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =students[count].superlative;
  if (count == 0) {
    count = 14;
  }
  console.log(count);
});

let randomButton = document.querySelector("#random");

let random = students[Math.floor(Math.random() * students.lenght)];
randomButton.addEventListener("click", () => {
  document.querySelector("#pic").src = students[random].profileImage;
  document.querySelector("#name").innerHTML = students[random].name;
  document.querySelector("#quote").innerHTML = students[random].quote;
  document.querySelector("#superlative").innerHTML =
    students[random].superlative;
});
