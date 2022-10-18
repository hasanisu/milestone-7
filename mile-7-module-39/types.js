// JavaScript is a dynamic language
// Prmitive type value
const a =5;
const age = 'samsu kopai na ekhon ar';
const d = true;

// non-primitive type
const ages = [45, 65, 78];
const student = {id: 23, class:7};

// primitive type er memory ta alada alada vabe dhore rakhe
let x = 5;
let y = x;
console.log(x, y);
y = 7; /* ei khane y er man ta reassign kora hoyese */
console.log(x, y); 

// Non Premitive type
let p = {job: 'web developer'};
let q = p;
q.job = 'front end developer';
console.log(p, q);

// non primitive er khetre jodi value reassign kore tahole duitar value alada alada hobe
// ar jodi partially kisu change kori tahole era reffrence dhore rakhe


