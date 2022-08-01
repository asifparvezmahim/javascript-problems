/*
Write a Program to calculate average marks of Mathematics,Biology,Chemistry,Physics and Bangla of a student.

Input:
the first line mention the marks of five subjects

Output:
Marks: 75.25,65,80,35.45,99.50
Average: 71.04
*/

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var average = (Mathematics + Biology + Chemistry + Physics + Bangla) / 5;
var avg = average.toFixed(2);


console.log(avg);