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

/*------------------------------------------------------------------------------------------------------- */
// Tìm hiểu về ES6, ES7

// * Variables
// +let : phạm vi sử dụng block scope
// + const : phạm vi khai báo giống let, nhưng giá trị biến sẽ không được thay đổi nữa

// * Arrow function : là cách khai báo rút gọn hàm trong javascript, hàm mũi tên
 
function sum (a, b) {     // Kiểu function truyền thống
  return a + b
}

let sum = (a, b) => a + b   // Arrow function

/* Chú ý: - Arrow function không có bind, không định nghĩa this, không nên sử dụng arrow function làm  method object
          - Arrow function không được hoisted*/
            let print = (string) => {
              console.log(string);
            }
            print("Hello");   // Hello

            sayHi()  //ReferenceError: sayHi is not defined
            let sayHi = () => {}
        /*- Arrow function không thể sử dụng làm hàm Contructor */
            
            let Person = (age, gender) => {
              this.age = age;
              this.gender = gender;
            }
            let minh = new Person(17, "male");
            console.log(minh.age, minh.gender);
            // => TypeError: Person is not a constructor

// * Destructuring :giúp chúng ta tách biến từ thuộc tính của đối tượng hay phần tử trong các đối tượng có thể duyệt với for, như mảng hoặc chuỗi
            food = ['pizza', 'pepsi']
            const [eat, dink] = food  // eat: 'pizza'
                                      // dink: 'pepsi'
            const person = { 
              name: 'Minh', 
              favorites: { 
                food: 'Rice', 
                place: 'Ho Tay' 
              } 
            }
            const { food, place } = person.favorites // tách biến từ thuộc tính của đối tượng

    // + Renaming destructured variables: Tái cấu trúc tên biến
            const {food: favoritesFood, place: favoritesPlace} = person.favorites
            console.log(favoritesFood)  // 'Rice' 
            console.log(favoritesFood)  // 'Ho Tay'

    // + Default values with reassignment: Đặt các giá trị mặc định cho các biến phân rã
            const person = {name: 'Minh', age: 32, game: 'AOE'}
            const { name, age, game, setTime = 0} = person
    // + Easily swap variables : Đổi chỗ biến
            person1 = 'Minh'
            person2 = 'Nam'
            [person1, person2] = [person2, person1]
            //KQ: person2 == 'Nam và person1 == 'Minh'
    // + Automatically destructure information returned from a function : 
            function example(a, b) {
              return [a + b, a - b]
            }
            const [sum, subtract] = example(60, 10)
    // + Destructure as you pass an object into a function
            let fullname = (firstName, lastName) => `${firstName} - ${lastName}`
            fullname("Tam", "Minh")
    // + The spread operator
            arr = ["a", "b", "c"]
            brr = [1, 2, 3]
            const crr = [...arr, ...brr] // ["a", "b", "c", 1, 2, 3]

/* * Template literals */
    let print = (age, name) => {
      console.log(`Ten toi la ${name}, nam nay toi ${age} tuoi !`)
    }
    print(30, "Minh") // Ten toi la Minh, nam nay toi 30 tuoi !
  
/* * Stric mode : Qui tắc nghiêm ngặt về cú pháp */
// Sử dụng chuỗi string "use stric"
/* - Đặt đầu file js để khai báo phạm vi toàn cục 
   - Đặt ở đầu function để khai báo phạm vi cục bộ trong function

   Các quy tắc: 
   + Gán giá trị cho biến chưa được khai báo
   + Báo lỗi khi sử dụng delete
   + Các tham số của hàm không được trùng nhau
   + Không cho phép khai báo biến dưới dạng hệ nhị phân
   + Không đươc phép ghi đè lên thuộc tính chỉ đươc phép đọc
   + Không được sử dụng with
   + Không cho phép khai báo biến bên trong eval()
   + Không chấp nhận khai báo biến bằng tên keyword ở phiên bản cao hơn
   + Hành vi khác của từ khóa this

*/

// * Classes : Khai báo một đối tượng theo chuẩn OOP bằng từ khóa Class
    //vd:
    class Animals {
      setAge(age) {
        this.age = age;
      }
      getAge() {
        return this.age
      }
    }

    // Khai báo 1 đối tượng bằng từ khóa new
    let Dog = new Animals
    Dog.setAge(12)
    let oldDog = Dog.getAge()
    console.log(oldDog)  // 12

    // Trong ES6 cũng hỗ trợ khởi tạo Contructor
    //vd
    class Math {
      constructor(length, width) {
        this.length = length;
        this.width = width
      }
      getPerimeter() {
        return (this.length + this.width)*2
      }
    }

    let Hv = new Math(4, 5)
    let gP = Hv.getPerimeter()
    console.log(gP) // 18
// Class Inheritance:
// Với từ khóa extends ES6 cung cấp công cụ để kế thừa từ đối tượng khác 
//vd:
class maleEmployee extends Employee {
  contructor(name, age, wifeName) {
    super(name, age) // Gọi lại contructor của lớp cha cụ thể maleEmployee
    this.wifeName = wifeName // Khởi tạo contructor riêng của lớp Employee
  }
  getWifeName() {
    return this.wifeName;
  }
}

// Base class access
// Nếu khi gọi lại method của lớp cha khi đang ở lớp con, mà phương thức đã bị ghi đè ở lớp con, dùng cú pháp super.method
class Employee {
  getClassName () {
      return "Class Employee";
  }
};
class MaleEmployee extends Employee {
  getClassName () {
      return "Class MaleEmployee";
  }
  classClassName () {
      return super.getClassName();
  }
}
var employee = new MaleEmployee();
console.log(employee.classClassName());  // Class Employee

// Static method : Không phải là 1 object mà là function liên kết với class. Nó không đc gọi từ instance object
class User {
  constructor(name){
    this.name = name;
      this.age = age;
    }
    increaseAge(){
    this.age += 1; //tăng thêm tuổi
    }
    static staticMethod(){
    return 'Im a static method '
    }
  }
  
  const user1 = new User('Nam', 31)
  
  console.log(User.staticMethod()); // Im a static method 
  
  console.log(user1.staticMethod()) // Uncaught TypeError: user1.staticMethod is not a function

// Chú ý : Tất cả method trong ES6 đều là public, đều có thể chỉnh sửa bên ngoài.

/* Promise : cơ chế sinh ra để thực thi các tác vụ bất đồng bộ, tránh tình trạng rơi vào callback hell*/

// + callback hell: lồng nhiều callback, code khó theo dõi, khó chỉnh sửa ...
//vd: 
function thuc_day(toDo){
  toDo();
}

function danh_rang(toDo){
  toDo();
}

function di_an_sang(toDo){
  toDo();
}

// Code không tối ưu
function main(){
  thuc_day(function(){
    danh_rang(function(){
      di_an_sang(function(){
        console.log('then....');
      });
    });
  });
}

// vd về promise, async-await, Promise.all
let showRequestContact = (receivedID, limit) => {
  return new Promise(async (resolve, reject) => {
    let userSender = [];
    let notifiByUser = await NotificationModel.model.findNotificationByUser(receivedID, limit);
    notifiByUser.forEach((notification) => {
      let sender = UserModel.findUserById(notification.senderId);
      userSender.push(sender)
    });
    resolve(await Promise.all(userSender)); // Lấy mảng gồm các thông tin user
  })
}

//vd: Đọc file 
//callback

const fs = require('fs')
const path = require('path')


fs.readFile(path.join(__dirname, `./Text/text1.txt`), 'utf8', (err, data) => {
  if(err) throw err
  console.log(data);
  fs.readFile(path.join(__dirname, `./Text/text2.txt`), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data);
    fs.readFile(path.join(__dirname, `./Text/text3.txt`), 'utf8', (err, data) => {
      if(err) throw err
      console.log(data);
      fs.readFile(path.join(__dirname, `./Text/text4.txt`), 'utf8', (err, data) => {
        if(err) throw err
        console.log(data);
        fs.readFile(path.join(__dirname, `./Text/text5.txt`), 'utf8', (err, data) => {
          if(err) throw err
          console.log(data);
        })
      })
    })
  })
}) 

// Promise .then.catch
// Chú ý : const fs = require('fs').promises để return ra 1 promise

fs.readFile(path.join(__dirname, `./Text/text1.txt`), 'utf8')
.then(data1 => {
  console.log(data1);
  let data2 = fs.readFile(path.join(__dirname, `./Text/text2.txt`), 'utf8')
  return data2
})
.then(data2 => {
  console.log(data2);
  let data3 = fs.readFile(path.join(__dirname, `./Text/text3.txt`), 'utf8')
  return data3
})
.then(data3 => {
  console.log(data3);
  let data4 = fs.readFile(path.join(__dirname, `./Text/text4.txt`), 'utf8')
  return data4
})
.then(data4 => {
  console.log(data4);
  let data5 = fs.readFile(path.join(__dirname, `./Text/text5.txt`), 'utf8')
  return data5
})
.then(data5 => {
  console.log(data5);
})
.catch(error => {
  console.log(error);
})

// Async-await


let readFile = async () => {
  try {
    let data1 = await fs.readFile(path.join(__dirname, './Text/text1.txt'), 'utf8')
    console.log(data1);
    let data2 = await fs.readFile(path.join(__dirname, './Text/text2.txt'), 'utf8')
    console.log(data2)

    let data3 = await fs.readFile(path.join(__dirname, './Text/text3.txt'), 'utf8')
    console.log(data3)

    let data4 = await fs.readFile(path.join(__dirname, './Text/text4.txt'), 'utf8')
    console.log(data4)

    let data5 = await fs.readFile(path.join(__dirname, './Text/text5.txt'), 'utf8')
    console.log(data5)
  } catch (error) {
    console.log(error)
  }
}
readFile();



          



  


