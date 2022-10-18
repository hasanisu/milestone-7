function greetings (greetingHandler, person){
    greetingHandler(person);
}
// const name = 'Halim Mama'
// const numbers = [45, 23, 78, 96]
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
function greetingHandler (name){
    console.log('Good Morning', name);
}

function gretingsEvening (name){
    console.log('Good Evening', name)
}

greetings(greetingHandler, 'Hasan Don');
greetings(greetingHandler, 'Hasan Boss');
greetings(greetingHandler, 'Hasan Manager');
greetings(gretingsEvening, 'Manager Hasan');