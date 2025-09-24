var button = document.querySelector('.button');
var box = document.getElementById('box');


let form = document.querySelector('.add_list');
let list = document.querySelector(".list")

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  let new_list_item = document.createElement('li');
  let itemInput = document.querySelector('input[value=""]');
  let deleteButton = document.createElement('button')

  deleteButton.textContent = "X"
  new_list_item.className = 'list_item'
  deleteButton.className = 'delete_button'

  deleteButton.addEventListener('click', function () {
    new_list_item.remove()
  })

  text = document.createTextNode(itemInput.value)
  
  new_list_item.appendChild(text)
  new_list_item.appendChild(deleteButton)
  list.appendChild(new_list_item)
}


function deleteEvent(e) {
  e.preventDefault()
  console.log("a8ygfsi7fgysid")
  e.target.parentElement.remove()
}

//aiuhflishfuadwliuh