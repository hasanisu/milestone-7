// const getInputValueById = id =>{
//     const inputField = document.getElementById(id);
//     const inputValue = inputField.value;
//     inputField.value = '';
//     return inputValue;
// }
// const addProduct = () =>{
//     const product = getInputValueById('product-name-field');
//     const quantity = getInputValueById('product-quantity-field');
//     console.log(product, quantity);
//     // display product on UI
//     displayProduct(product, quantity);

//     // set to local storage
//     // simple way
//     localStorage.setItem(product, quantity)

// }

// const displayProduct = (product, quantity) =>{
//     const productContainer = document.getElementById('product-container');
//     const li = document.createElement('li');
//     li.innerText = `${product} : ${quantity}`;
//     productContainer.appendChild(li);
// }

const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () =>{
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);
    // display product on UI
    displayProduct(product, quantity);

    // set to local storage
    // simple way
    localStorage.setItem(product, quantity)

}

const saveItemToLocalStorage = (product, quantity) =>{
    
}

const displayProduct = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}