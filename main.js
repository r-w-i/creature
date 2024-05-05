console.log("Hello World!");

//core of it
function creature(rizz) {
  return rizz[Math.floor(Math.random() * rizz.length)];
}

let rizz1 = [
  "An Aquatic",
  "A Terestrial",
  "A Flying",
  "A Dwelling",
  "A Microbial",
];

let rizz2 = [" Small", " Medium", " Large"];

let rizz3 = [" 4 Legged", " 2 Legged", " 6 Legged", " Winged"];

let rizz4 = [" Creature", " Being", " Organism", " Life Form"];

console.log(
  creature(rizz1) + creature(rizz2) + creature(rizz3) + creature(rizz4)
);

//WEIGHTTTTTT
function weightedRandom(items) {
  // Calculate the total weight
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  // Generate a random number between 0 and totalWeight
  const random = Math.random() * totalWeight;

  // Iterate through the items to find the selected item
  let cumulativeWeight = 0;
  for (const item of items) {
    cumulativeWeight += item.weight;
    if (random < cumulativeWeight) {
      return item;
    }
  }

  // This should not happen, but just in case
  throw new Error("No item selected. Check your weights.");
}

// Example data
let environments = [
  { name: "Aquatic", weight: 4 },
  { name: "Terrestrial", weight: 1 },
  { name: "Flying", weight: 1 },
  { name: "Dwelling", weight: 4 },
];

// Test the function
const selectedTrait = weightedRandom(environments);
console.log(`Selected trait: ${selectedTrait.name}`);

//into the html we go
function pick_creature() {
  let randomCreature =
    creature(rizz1) + creature(rizz2) + creature(rizz3) + creature(rizz4);

  document.getElementById("life").innerHTML = randomCreature;
}

pick_creature();

// button for it
let myButton = document.getElementById("button");

myButton.onclick = pick_creature;
