print10()
print5()
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside', i)


function print5(){
    console.log('inside print', 5)
}

const print10 = function(){
    console.log('inside print', 10)
}