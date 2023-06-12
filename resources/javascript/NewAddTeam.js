const list = document.getElementById('team-list');
const hideBox = document.getElementById('hide');


hideBox.addEventListener('input', function() {
  if(hideBox.checked) {
    list.style.display = 'none'
  }else {
    list.style.display = 'block';
  }
});


const addFormInput = document.getElementById('add-form-input'); //input;
const addButton = document.getElementById('add-button'); //button;
const ulList = document.querySelector('#team-list ul');


// add team 
addButton.addEventListener('click', function() {
  const li = document.createElement('li'); //1

  const teamName = document.createElement('span'); //2
  teamName.innerText = addFormInput.value;  
  teamName.classList.add('name');//2

  const deleteBtn = document.createElement('span'); //3
  deleteBtn.innerText = 'delete'; //3
  deleteBtn.classList.add('delete') //3

  li.append(teamName); //4
  li.append(deleteBtn); //4
  
  ulList.append(li) //5
  document.getElementById('add-form-input').value = ''; //6
})


// delete team
ulList.addEventListener('click', function(event) {
   if(event.target.className === 'delete') {
      const li = event.target.parentElement;
      ulList.removeChild(li);
   }
})


const searchInput = document.getElementById('searchBar');

searchInput.addEventListener('keyup', function() {
  const inputValue = searchInput.value.toLowerCase();
  console.log(inputValue, 'input value');
  const liList = document.getElementsByTagName('li');
  for(let i = 0; i < liList.length; i++) {
    const li = liList[i];
    const nameValue = li.firstElementChild.textContent;
    if(nameValue.toLowerCase().includes(inputValue)) { 
      li.style.display = 'block'
    }else {
      li.style.display = 'none';
    }
    
  }

  
})

