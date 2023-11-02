document.getElementById('getMountains_btn').onclick = getMountains;

console.log('fetch:', fetch('/api/mountains'));

fetch('/api/mountains')
  .then((response) => console.log('fetch to json:', response.json()));

fetch('/api/mountains')
  .then((response) => response.json())
  .then((result) => console.log('response to data:', result.data))
  .catch((error) => console.log(error));

fetch('/api/mountains2')
  .then((response) => response.json())
  .then((result) => console.log('response to data:', result.data))
  .catch((error) => console.log('error:', error));

async function getMountains() {
  const response = await fetch('/api/mountains');
  console.log('async response', response);

  const result = await response.json();
  console.log('async data response', result.data);

  renderMountains(result.data);
}

function renderMountains(mountains) {
  const mountainString = mountains.map((mountain) => `<div class="mountain">${mountain.id}<h4>${mountain.name}</h4></div>`).join('');

  document.getElementById('mountainContainer').innerHTML = mountainString;
}
