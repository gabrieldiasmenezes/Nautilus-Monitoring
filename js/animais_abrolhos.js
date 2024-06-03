const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const animals = document.getElementById('animals');
const img = animals.getElementsByTagName('img')[0];
const img2 = animals.getElementsByTagName('img2')[0];

item1.addEventListener('click', () => {
    img.src = "../animais3/imagem1.png";
  });
item2.addEventListener('click', () => {
    img.src = "../animais3/imagem2.png";
  });
item3.addEventListener('click', () => {
    img.src = "../animais3/imagem3.png";
  });
item4.addEventListener('click', () => {
    img.src = "../animais3/imagem4.png";
  });
item5.addEventListener('click', () => {
    img.src = "../animais3/imagem5.png";
  });
item6.addEventListener('click', () => {
    img.src = "../animais3/imagem6.png";
  });
item7.addEventListener('click', () => {
    img.src = "../animais3/imagem7.png";
  });

