const getinnerTextById = id =>{
    const getValueById = document.getElementById(id);
    const getValue = getValueById.value;
    getValueById.value='';
    return getValue;
}
// Name section 
const sendNameToLocal = () =>{
    const getValue = getinnerTextById('name-area');
    console.log(getValue);
    localStorage.setItem('Name', getValue);
}

const deleteNameToLocal = () =>{
    const getValue = getinnerTextById('name-area');
    console.log(getValue);
    localStorage.removeItem('Name', getValue);
}

// Email Section 
const addEmail = () =>{
    const getEmailById = getinnerTextById('addEmailToAdd');
    console.log(getEmailById);
    localStorage.setItem('Email', getEmailById);
} 

const deleteEmailToLocal = () =>{
    const deleteEmail = getinnerTextById('addEmailToAdd');
    console.log(deleteEmail);
    localStorage.removeItem('Email', deleteEmail);
}

// Message Section 
const addMassage = () =>{
    const getMassageById = getinnerTextById('massageArea');
    console.log(getMassageById);
    localStorage.setItem('Massage', getMassageById);
} 

const deleteMessage = () =>{
    const deleteMassage = getinnerTextById('massageArea');
    console.log(deleteMassage);
    localStorage.removeItem('Massage', deleteMassage);
}


const resetBtn = () =>{
    const getValue = getinnerTextById('name-area');
    const getEmailById = getinnerTextById('addEmailToAdd');
    const getMassageById = getinnerTextById('massageArea');

    localStorage.clear(getValue, getEmailById, getMassageById);
}

// click send button and add as an objective

const sendBtn = () =>{
    const names = getinnerTextById('name-area');
    const email = getinnerTextById('addEmailToAdd');
    const massage = getinnerTextById('massageArea');
    console.log(names, email, massage);
    
    addDisplayData(names, email, massage)

    savedCartItemToLocalStorage(names, email, massage)

}

const getShoppingCartIntoTheLocalWStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    } 
    return cart;
} 

const savedCartItemToLocalStorage = (names, email, massage) =>{
    // const cart = getShoppingCartIntoTheLocalWStorage();
    // cart [names] = {names, email, massage};
    const cart = {'name': names, 'email': email, 'massage': massage}
    const cartsStrigified = JSON.stringify(cart);
    localStorage.setItem('cart', cartsStrigified);
}


const addDisplayData = (names, email, massage) =>{

    const displayData = document.getElementById('display-data');
    const li = document.createElement('li');
    li.innerText=`Name: ${names}, Email: ${email}, Massage: ${massage}
    `;
    displayData.appendChild(li);
    console.log('hello')
}

const num = localStorage.getItem('cart');
const num1 = JSON.parse(num);
console.log(num1);

addDisplayData(num1.name, num1.email, num1.massage);


const displayStoredProduct = () =>{

    const cart = savedCartItemToLocalStorage();
    for(let names in cart){
        let value = cart[names];
        console.log(names, value);
        // display te show korar jonno eita 
        addDisplayData(names, email, massage);
    }
    
}
displayStoredProduct();