async function dogImages() {
  return await fetch("https://dog.ceo/api/breeds/image/random")
    .then((json) => json.json())
    .then((response) => response.message);
}

async function catImages() {
  return await fetch("https://api.thecatapi.com/v1/images/search")
    .then((json) => json.json())
    .then((response) => response[0].url);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function dogOrCat() {
  const random = randomIntFromInterval(1, 2);
  return random === 1 ? dogImages() : catImages();
}
