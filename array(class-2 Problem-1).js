/*
you are given an array
Fruits=['Apple' , 'Banana' , 'Orange']

a)Find the index of Banana and replace Banana with Mango
b)Remove Orange and add Watermelon

*/

//solving of problem-a

var Fruits = ['Apple', 'Banana', 'Orange'];
n = Fruits.indexOf('Banana');
console.log(n)




var Fruits = ['Apple', 'Banana', 'Orange'];
console.log(Fruits);


//solving of problem-b
Fruits.pop()
console.log(Fruits);

Fruits.push('Watermelon');
console.log(Fruits);

