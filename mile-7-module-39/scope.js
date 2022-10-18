// eita hosse ekta scope, eitar perameter shudhu functiion er moddhei kaj korbe
function add(a, b){
    const total = a + b;
    return total;
}
console.log(total); /* ei khane error dibe koraon function er vitor kaj korbe na */
add(5, 7);



/* eita hosse block scope. sum er scope shudhu matro second braket er moddhei */
function add(a, b){
    const total = a + b;
    if(b>5){
        const sum = 25 + a + b;
    }
    console.log(sum)
;    return total;
}
add(5, 7);
