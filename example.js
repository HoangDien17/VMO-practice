/* 
  // Variable, scope
  + Local scope: Variables declared within a JavaScript function, become LOCAL to the function
    function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
    }

  + Global scope: A variable declared outside a function
  */ 

  // Loop:
for(var i = 0; i < 10; i++) {
  console.log(i)
}

// While loop
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// Do-while
var i = 10;
do {
    console.log(i);
    i++;
}
while ( i > 10 && i < 12)

// forEach
let arr = [2,3,5,'a'];
arr.forEach(item => {
  console.log(item);
});

//Map
let arr = [2,4,6,5];
let arr1 = arr.map(item => item*2);
console.log(arr1);

//For-in : sử dụng chủ yếu cho object
var obj = {a: 1, b: 2, c: 3};    
for (var prop in obj) {
   console.log('obj.'+prop+'='+obj[prop]);
};

//For-of
var str= 'alone';
for (var value of str) {
console.log(value);
}

/*Function */
function sum (a, b) {
  return (a + b)
};

let tong = sum(2, 4)

/* Comparison and Logical Operators: Comparison and Logical operators are used to test for true or false */
let x = 5
let y = 6
console.log(x===y);

let status
let age = 24
(age >= 40) ? (status = "old") : (status = "young")
console.log(status)

/* Condition(als) */
let x = 5
if(x % 2 === 0) {
  console.log("x: so chan");
}
else {
  console.log("x: so le")
}

/* block scope is the area within if, switch conditions or for and while loops */

/* function scope is the area in function */

/* Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng 
   Phần khai báo hàm được đưa lên trước phần khai báo của biến
*/



