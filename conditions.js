/*
1) You are given three numbers 13,79,45 . Write a program to find the largest number.
2)You are given a tri-angle with sides of 9,8,9. Check that is that triangle is iso-scale or not.
*/

//solving-1
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log("13 is the largest number");
}

else if (num2 > num1 && num2 > num3) {
    console.log("79 is the largest number");
}

else {
    console.log("45 is the largest number");
}

//solving-2

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("This is iso-scale");
}

else {
    console.log("this is not iso-scale");
}