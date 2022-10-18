function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
const firstServer1 = kitchen();
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer1())
console.log(firstServer())
console.log(firstServer1())

/*
1. kitchen hosse ekta function er moddhe return kore diyesi onno ekta 
funtion k jokhon emn function diclare korbo tokhon vitore er function ta 
tar opore function er vitore kono value k access korte Parbe

2. jodi ami outer function er onek gulo copy banai 
tahole tara tader man alada alda vabe dhore rakhe joto bar call
kora hobe toto bar she dhore rakhe.
*/ 