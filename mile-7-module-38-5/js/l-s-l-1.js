const getValueFromInputField = id =>{
    const fieldArea = document.getElementById(id);
    const fieldValue = fieldArea.value;
    fieldArea.value='';
    return fieldValue;
}

document.getElementById('btn-add-product').addEventListener('click', function(){
    const product = getValueFromInputField('product-field');
    const quantity = getValueFromInputField('quantity-field');
    console.log(product, quantity);

    saveItemToLocalStorage(product, quantity);

    addToDisplay(product, quantity);
})

const isCartHaveInLocalStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart)
    } 
    return cart;
}

// set value to the local storage
const saveItemToLocalStorage = (product, quantity)=>{
    const cart = isCartHaveInLocalStorage();
    cart[product] = quantity;
    const cartsStrigified = JSON.stringify(cart);
    localStorage.setItem('cart', cartsStrigified);
}

// show to display
const addToDisplay =(product, quantity)=>{
    const addedProduct = document.getElementById('added-to-display');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    addedProduct.appendChild(li);
}