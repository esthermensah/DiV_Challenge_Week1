/* Author: Esther Dzifa Mensah
Date: 11/04/2020
*/


function dispMax(x,y){
var num1 = parseInt(x);
var num2 = parseInt(y); 
var maxNum = Math.max(num1,num2);
return maxNum.toString();    
}

console.log(dispMax(32, 16));
console.log(dispMax(3, 12));