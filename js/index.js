//Декларуємо змінні:
//var-старе,не використовуємо
//let- звичайна змінна
//const-стала змінна

//Primitive Data types:
// Number
// String
// Boolean - true, false
// null - пусто
// undefined - не визначено
// Object - Обєкт
// Symbol - унікальний незмінний індетифікатор

let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript';
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: ' + age);

const nextAge = addOne(age);
alert('Next year you will be: ' + nextAge);

// Logical operators:
// > < >= <= != !== == === && 
if(age >=18){
alert('You are adolt');
} else {
alert('Your are underaged');
}

function addOne(nun){
    const incremented = nun + 1;
    return incremented;
}
