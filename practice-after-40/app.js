console.log(1)
console.log(2)

console.log(4)
setTimeout(()=>{
    console.log("delay for 5 second")
}, "5000");




    const promoButton = ()=>{
        const number = prompt('please input the numbr');
        const num = JSON.parse(number);
        console.log(typeof num);
        if(num >= 0){
            alert(num + 200)
            
        }
        else{
            alert("Not a number");
        }
    }
