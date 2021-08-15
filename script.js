const input = document.querySelector('input');
const button = document.querySelector('#submit');
const ul = document.querySelector('ul');
/*
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
    parent = parent.firstChild;
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
  input.value = "";
  input.focus;
  removeitem();
}
function removeitem() {
  let garbage = document.querySelectorAll('#garbage');
  console.log(garbage);
  garbage.forEach(function(elem){
  elem.addEventListener('click', eventhandler3);
})
}
*/
function onAdd() {
  //1. 타이핑한 값 받아오기
  const new_input = input.value;
  //2. 새로운 아이템 만듦
  const item = createItem(new_input);
  //3. ul에 추가
  ul.appendChild(item);
  //4. 초기화
  input.value = "";
  input.focus();

}
function createItem(new_input) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'text');
  span.innerText = new_input;

  const delete_button = document.createElement('button');
  delete_button.setAttribute('id', 'garbage');
  delete_button.innerHTML = `<i class="fas fa-trash-alt"></i>`
  delete_button.addEventListener('click', ()=>{
    delete_button.parentNode.remove();
  })

  item.appendChild(span);
  item.appendChild(delete_button); 
  return item;
}

button.addEventListener('click', eventhandler1);
input.addEventListener('keydown',eventhandler2);
function eventhandler1() {
  onAdd();
}

function eventhandler2(e) {
  if(e.keyCode === 13) {
    onAdd();
  }
}