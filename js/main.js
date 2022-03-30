'use strict';
const form = document.querySelector('.new-form');
// form.classList.remove('collapsed');

const list = document.querySelector('.js-list');

const card1 = `<li class="card">
<article>
  <img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const card2 = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
  moleste. Es una maravilla acariciarle!
</p>
</li>`;

const card3 = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
  moleste. Es una maravilla acariciarle!
</p>
</li>`;

const nav = document.querySelector('.item');

// Constantes del aptdo. validar formulario nuevo gatito
const btnAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMesageError = document.querySelector('.js-label-error');
const btnCancel = document.querySelector('.js-btn-cancel');

// const cardList = card1 + card2 + card3;
// list.innerHTML = cardList;

// Interpolando variables
let kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
// Metodo con el cual eliminamos el https:// según su posición
let kittenImageOne = kittenImage1.slice(8);
console.log(kittenImage1);
console.log(kittenImageOne);

let kittenName1 = 'Anastacio';
// Utilizamos el metodo string toUpperCase para modificar el nombre y convertirlo en mayuscula
const kittenNameOne = kittenName1.toUpperCase();
const kittenDesc1 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace1 = 'British Shorthair';

let kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
let kittenImageTwo = kittenImage2.slice(8);
let kittenName2 = 'Fiona';
kittenName2 = kittenName2.toUpperCase();
const kittenDesc2 =
  'Ruiseño, juguetón,  le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace2 = 'British Shorthair';

let kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
let kittenImageThree = kittenImage3.slice(8);
let kittenName3 = 'Cielo';
kittenName3 = kittenName3.toUpperCase();
const kittenDesc3 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace3 = '';

const cardKitten1 = `<li class="card">
<article>
  <img class="card_img" src=" https://${kittenImageOne}" alt="gatito" />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description"> ${kittenDesc1} </p>
</article>
</li>`;

const cardKitten2 = `<li class="card">
<img class="card_img"src= " https://${kittenImageTwo}"alt="gatito" />
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description" > ${kittenDesc2} </p>
</li>`;

const cardKitten3 = `<li class="card">
<img class="card_img" src= "https://${kittenImageThree}"  alt="gatito" />
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description" > ${kittenDesc3} </p>
</li> `;

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

//  Si en la descripción del gatito aparece la palabra "cariñoso", incluidmos el gato a la lista de gatos en el HTML ( list.innerHTML)
if (kittenDesc1.includes(descrSearchText)) {
  list.innerHTML = cardKitten1;
}
if (kittenDesc2.includes(descrSearchText)) {
  list.innerHTML = cardKitten2;
}
if (kittenDesc3.includes(descrSearchText)) {
  list.innerHTML = cardKitten3;
}
// Pintamos en el HTML el contenido de las variables
const cardList2 = cardKitten1 + cardKitten2 + cardKitten3;
list.innerHTML = cardList2;

// if (form.classList.contains('collapsed')) {
//   form.classList.remove('collapsed');
// } else {
//   form.classList.add('collapsed');
// }

// if (kittenRace3 === '') {
//   kittenRace3.innerHTML += `<h3 class='card_race'>No se ha especificado la raza</h3>`;
// }

// De la constante nav... (Acuérdate '.item'). Si ctrl + clic sobre la palabra nav, ¡te lleva arriba, a la constante!
// nav.addEventListener('click', (event) => {
//   event.preventDefault();
//   form.classList.toggle('collapsed');
// });

function mostrar() {
  form.classList.add('collapsed');
}

// Con esto al pasar el raton mostramos el formulario

if (nav.addEventListener('mouseover', mostrar())) {
} else {
  // Cerramos el formulario cuando clickamos en el boton de cancelar
  btnCancel.addEventListener('click', () => {
    form.classList.add('collapsed');
  });
}

/* btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;
  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueBreed === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  }
}); */

// Funcion manejadora para evitar el eveto que hay por defecto del formulario
// Llamamos a una funcion que borra la clase collapses cuando clickamos sobre el '+' de la barra de navegacion
// Con esto abrimos y cerramos el formulario cuando queremos

function handleClickNewCatForm(event) {
  event.preventDefault();
  const add = hideNewCatForm();
  return add;
}

function hideNewCatForm() {
  if (form.classList.contains('collapsed')) {
    form.classList.remove('collapsed');
  } else {
    form.classList.add('collapsed');
  }
}

nav.addEventListener('click', handleClickNewCatForm);

// 28 mar. Crear un gatito en HTML
function renderKitten(url, desc, name, race) {
  let card = `<li class="card">
  <img
    class="card_img"
    src="${url}"
    alt="gatito" />
  <h3 class="card_title">${name}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">${desc}</p>
  </li>`;
  list.innerHTML += card;
  return list;
}
renderKitten(
  'http://placekitten.com/g/200/300',
  'El mejor gato del mundo',
  'Malky',
  'Común Europeo',
);

// 28 mar. Adicionar nuevo gatito
// Modifica el evento para cumplir una función manejadora

function addNewKitten(event) {
  // Mueve el código que está dentro del evento
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueBreed === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  }
  return console.log('Malky');
}

btnAdd.addEventListener('click', addNewKitten);

// 30 marzo
