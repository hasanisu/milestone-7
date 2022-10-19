function sum(a, b, c){ /* a, b, c ei gulo hosse perameter */
// console.log(arguments); /* ei arguments ta hosse ekta special character eita shudhu matro function er moddhei kaj kkorbe bahire hobe na */
const args = [...arguments]; /* arguments k ekta array te convert korar jonno */    
// console.log(args);
const result = a + b +c;
    return result;
}
// console.log(arguments); /* ei arguments ta hosse ekta special character eita shudhu matro function er moddhei kaj kkorbe bahire hobe na */
const total = sum(45, 89, 12, 45, 97, 75); /* r ei gulo k bole arguments */
// console.log(total);

console.log(sum.length); /* sum hosse ekta function and function name .lenght diye amra check korte pari j koita perameter neya ase */

