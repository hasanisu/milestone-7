// 1. Map
// map hosse kkono ekta jinish anushare ami jei jinish ta select korbo oita loop kore
// oi jinish take pathiye dibe
// map hosse oi jinsh take niye ekta array return korbe
const products = [
    {name: 'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price:7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price:320, brand: 'ribon', color: 'black'},
    {name: 'camera', price:9000, brand: 'canon', color: 'gray'},
]

const brands = products.map(products => products.brand);
// console.log(brands);
const prices = products.map(products => products.price);
// console.log(prices);



// 2. forEach
// forEach kono kisu return korbe na
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})


// 3. filter
// filter hosse ami ekta shorto dibo shei shorto ta jodi full fill kore taderk  dibe.
const cheap = products.filter(product => product.price < 5000);
// console.log(cheap);

// filter kore dekhci jader name 'n' ase tader dekhabe.
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find
// find hosse name er moddhe jodi 'n' match kore tahole shudu matro prothom ta dibe ekta object hishebe.
const special = products.find(product => product.name.includes('n'));


/*
note: 1. return hishebe jodi kono array paite chaite tahole map use korbo
2. jodi return hishe kisu na chai but return niye kisu korte chai tahole forEach use korbo 
3. jodi kono shorto hishebe kisu element k or ek ba ekadhik select korbo tahole filter use korbo.
4. r find korle prothom jeita match khabe shudhu oita dekhabe. 
*/