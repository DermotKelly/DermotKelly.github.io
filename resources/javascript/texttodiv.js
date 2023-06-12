const textbox = document.getElementById('input');
const button = document.getElementById('enter');
const result = document.getElementById('result');
const change = document.getElementById('change');
const remove = document.getElementById('remove');


function enterText (){

    result.innerHTML = textbox.value;
    
}

button.addEventListener('click', enterText);








