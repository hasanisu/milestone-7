/* primitive type er khetre jodi ami num1 man vitore change kori tahole sheita function er 
bahire call korle ager man takei dhore rakhbe. 
primitive type pass by refference 
*/
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27; /* ei khane a er man ta jodi kono karone alada vabe set kori tahole ei man tai output hoshebe dekhabe */
    const result = a * b ;
    return result;
}
console.log(num1);
multiply(num1, num2);
console.log(output);

/* Non primitive type er khetre jodi ami student1 man vitore change kori tahole sheita function er 
bahire call korle function er age console.log korle ager ta pawa jabe r function call er pore console korle 
amra vitore change koreci shita pabe. 

object an array pass by refference 
*/
let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner= 'mim';
}
console.log(student1, student2)
makeMovie(student1, student2);
console.log(student1, student2);