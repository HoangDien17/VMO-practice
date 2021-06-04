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
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// While loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Do-while
var i = 10;
do {
  console.log(i);
  i++;
}
while (i > 10 && i < 12)

// forEach
let arr = [2, 3, 5, 'a'];
arr.forEach(item => {
  console.log(item);
});

//Map
let arr = [2, 4, 6, 5];
let arr1 = arr.map(item => item * 2);
console.log(arr1);

//For-in : sử dụng chủ yếu cho object
var obj = { a: 1, b: 2, c: 3 };
for (var prop in obj) {
  console.log('obj.' + prop + '=' + obj[prop]);
};

//For-of
var str = 'alone';
for (var value of str) {
  console.log(value);
}

/*Function */
function sum(a, b) {
  return (a + b)
};

let tong = sum(2, 4)

/* Comparison and Logical Operators: Comparison and Logical operators are used to test for true or false */
let x = 5
let y = 6
console.log(x === y);

let status
let age = 24
  (age >= 40) ? (status = "old") : (status = "young")
console.log(status)

/* Condition(als) */
let x = 5
if (x % 2 === 0) {
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
myNumber = 5;
console.log(myNumber);
var myNumber

/* Chỉ hoisting với lệnh khai báo, còn lệnh khởi tạo sẽ không được hoisting */
function callNumber() {
  console.log(a)
  var a = 35;
}

// Tương tự
function callNumber() {
  var a; // lệnh khai báo sẽ được hoisting

  console.log(a) // giá trị của a sẽ là  undefined vì lúc này chưa được khởi tạo giá trị

  a = 35; // lệnh khởi tạo không được hoisting
}

//Khai báo dữ liệu  kiểu mảng với toán tử new
let arr = new Array(5);
arr.push("a");

//Khai báo dữ liệu kiểu object theo phương thức object literal
let user = {
  username: "Hai",
  password: "123456"
}

// Khởi tạo biến kiểu object với toán tử new
let people = new Object()
people.name = "Hai";
people.age = 25

// Arrow function
let sum = (a, b) => a + b;
console.log(sum(2, 5)) // 7

/* Tương tác với array 
------------------------------------------------------------------------------------
*/

/* Task 2:
- Các kiểu cấu trúc dữ liệu.
- Các làm việc với mảng thêm update xóa tìm kiếm trong mảng
- Bài tập cho 1 mảng bao gồm các phần tử
['1','2','2','1','3','1','4']
Viết func để xóa các phần tử bị trùng lặp sao cho kết quả trả về là
['1','2','3','4']

---------------------------------------------------------------------------------------
 Cách 1: */ 
function filterArray(arr) {
  let brr = []
  for (let i = 0; i < arr.length; i++) {
    if (!brr.includes(arr[i])) {
      brr.push(arr[i])
    }
    continue;
  }
  return brr
}

filterArray(['1', '2', '2', '1', '3', '1', '4']) // [ '1', '2', '3', '4' ]

// Cách 2: reduce
function filterArray(arr) {
  arr.reduce((a, b) => {
    console.log(a, b)
    if(brr.indexOf(a) === -1) {
      brr.push(a)
    }
    if(brr.indexOf(b) === -1) {
      brr.push(b)
    }
    return b
  })
}

filterArray(['1', '2', '2', '1', '3', '1', '4']) // [ '1', '2', '3', '4' ]
// Làm việc với mảng 

// * Update array

let arr = ['one', 'two', 'three']
let brr = [1, 2, 3]

// + concat : nối 2 mảng, chuỗi
let crr = arr.concat(brr) // ['one', 'two', 'three', 1, 2, 3]

// + copyWithin: Copy chuỗi mà k làm thay đổi chiều dài chuỗi
let crr = brr.copyWithin(0, 2) // [3,2,3]

// + fill: Thay đổi chuỗi theo nội dung vào các chỉ mục x -> y hoặc đến phần tử cuối cùng
let crr = brr.fill(0, 1) // [1,0,0]

// + filter: Tạo ra mảng mới thỏa mãn theo 1 điều kiện nào đó
let crr = brr.filter(item => item > 1) // [2,3]
let drr = brr.filter((value, index, array) => value % 2 === 0) // [2]

// + map : tạo mảng mới theo mảng cũ
let crr = brr.map(item => item * 3) // [3,6,9]

// + push : thêm phần tử vào cuối mảng
brr.push("a") // [1,2,3,'a']

// + reduce : nhận vào 1 mảng và tính toán thành một giá trị duy nhất
let arr = ['1','2','2','1','3','1','4']
let brr = []
arr.reduce((a, b) => {
  console.log(a, b)
  if(brr.indexOf(a) === -1) {
    brr.push(a)
  }
  if(brr.indexOf(b) === -1) {
    brr.push(b)
  }
  return b
})

// * Tìm kiếm 
// + find: trả về phần tử đầu tiên thỏa mãn điều kiện
let c = brr.find(item => item > 1)  // 2

// + findIndex: trả về index của giá trị thỏa mãn , nếu không có trả về -1

let indexItem = brr.findIndex(item => item > 2) // 2

// + includes : Nếu tìm thấy trả về true và ngược lại
let a = brr.includes(2) // true

// + indexOf : giống findIndex

// + lastIndexOf: Trả về index cuối cùng mà giá trị thỏa mãn

let brr = [1, 2, 3, 1]
let index = brr.lastIndexOf(1)  // 3

// * Xóa trong mảng

// + pop : lược bỏ phần tử cuối cùng trong mảng và cập nhật lại độ dài mảng
let brr = [1, 2, 3, 4]
let a = brr.pop() // 4
console.log(brr)   // [1, 2, 3]

// + shift : lược bỏ phần tử đầu tiên của mảng và cập nhật lại chiều dài mảng
let brr = [1, 2, 3, 4]
let a = brr.shift() // 1
console.log(brr)   // [2, 3, 4]

/*
   +  Splice có thể được sử dụng để thêm hoặc xóa các phần tử khỏi một mảng.
  Đối số đầu tiên chỉ định vị trí bắt đầu thêm hoặc xóa các phần tử.
  Đối số thứ hai chỉ định số lượng phần tử cần loại bỏ.
  Các đối số thứ ba và tiếp theo là tùy chọn; họ chỉ định các phần tử được thêm vào mảng
 */

let brr = [1, 2, 3, 4, 2, 5]
// xóa 2 phần tử từ vị trí thứ 2
let removed = brr.splice(2,2) // [3, 4]
console.log(brr) // [1, 2, 2, 5]

// + slice : cách sử dụng giống với splice
/* khác nhau : 
    - splice thay đổi trực tiếp lên mảng
    - slice tạo ra 1 mảng mới, mảng cũ không thay đổi
    */
    let removed1 = brr.slice(2,2) // [3, 4]
    console.log(brr) // [1, 2, 3, 4, 2, 5]

  


