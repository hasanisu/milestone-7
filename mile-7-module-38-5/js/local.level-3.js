const getinnerTextById = id =>{
    const getValueById = document.getElementById(id);
    const getValue = getValueById.value;
    return getValue;
}

const sendNameToLocal = () =>{
    const getValue = getinnerTextById('name-area');
    console.log(getValue);
}