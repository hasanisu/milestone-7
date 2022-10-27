console.log('prompt massage');
// alert('ki khobor dosto');


// eigula browser er API er moddhe kaj kore. 

/* alert */
const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('ki khobor dosto');
    }
    
}

/* confirm: eita hosse decision chasse je yes or no */
const askSomething = ()=>{
    const decision = confirm('Are you coming to the picnic?');
    console.log(decision);
    if(decision === true){
        alert('dosto 500 tk bkash kor')
    }
    else{
        console.log('DGM; dure giya mor')
    }
}

/* prompt; eita hosse kono ekta input chai */
const getUserInfo =()=>{
    const name = prompt('Tell us your name.s')
    console.log(name);
    if(!!name){ /* eita shotto kina check korar jonno if(!!name) use hoi */
    console.log('Welcome to here', name);
    } 
}

