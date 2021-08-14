const input = document.querySelector('input');
const button = document.querySelector('#submit');

const ul = document.querySelector('ul');
let garbage = [];

button.addEventListener('click', eventhandler1);
input.addEventListener('keydown',eventhandler2);
function eventhandler1() {
  displayitem();
}
function eventhandler2(e) {
  if(e.keyCode === 13) {
    displayitem();
  }
}
function eventhandler3(e) {
  let parent = e.target.parentNode.parentNode;
  if (parent.tagName == 'UL' ) {
    return;
  }
  console.log(parent.tagName);
  parent.remove();
}
function displayitem() {
  const new_item = input.value;
  console.log(new_item);
  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.innerHTML = `
  <span class="text">${new_item}</span>
            <button id= "garbage"><i class="fas fa-trash-alt"></i></button>
  `;
  ul.append(li);
  event.currentTarget.value = "";
  removeitem();
}
function removeitem() {
  let garbage = document.querySelectorAll('#garbage');
  console.log(garbage);garbage.forEach(function(elem){
  elem.addEventListener('click', eventhandler3);
})
}