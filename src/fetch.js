export async function fetchImage() {
  const req = await fetch("https://dog.ceo/api/breeds/image/random");
  return req.json();
}
