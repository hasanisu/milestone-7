const addToLocalStorge = ()=>{
    const idIput = document.getElementById('storage-id');
    const id = idIput.value;
    const valueIput = document.getElementById('storage-value');
    const value = valueIput.value;

    //
    if(id && value){

        localStorage.setItem(id, value);
    }
    idIput.value ='';
    valueIput.value='';
}