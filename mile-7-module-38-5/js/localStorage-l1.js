document.getElementById('btn-name-area').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    nameField.value='';
    localStorage.setItem('name', nameValue);
})

document.getElementById('btn-age-area').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    ageField.value='';
    localStorage.setItem('age', ageValue);
})

document.getElementById('btn-alert').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    if(ageValue > 39){
        alert('age grater than 39')
    }
})