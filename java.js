let addToDoBtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoBtn.addEventListener('click', function(){
    let parag = document.createElement('p');
    parag.classList.add('pragraph');
    parag.innerText = inputField.value;
    toDoContainer.appendChild(parag);
    inputField.value = '';
    parag.addEventListener('click', function(){
        parag.style.textDecoration = 'line-through';
    })
    parag.addEventListener('dblclick', function(){
        toDoContainer.removeChild(parag);
    })
})