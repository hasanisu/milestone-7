const getInnerValueById =id=>{
    const quantityArea = document.getElementById(id);
    const getValueById = quantityArea.innerText;
    const getVlaueByIdString = parseFloat(getValueById);
    const setValue = getVlaueByIdString + 1;
    quantityArea.innerText= setValue;
    return setValue
}



document.getElementById('btn-add-quan').addEventListener('click', function(){
    const quantity = getInnerValueById('quantity-area');
    console.log(quantity)
    
    
    addDisplayItem(quantity);

    // set to the local storage
    localStorage.setItem('product Quantity', quantity);
      
})

const addDisplayItem = quantity =>{
    const quantityAreag = document.getElementById('show-some');
    const li = document.createElement('li');
    li.innerText=`${quantity}`;
    quantityAreag.appendChild(li);
}




