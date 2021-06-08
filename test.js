// email = "abc2@vmodev.com"

// let a = email.split("@")[0]

// let b = a.replace(/[A-Za-z0-9-]/g, '*')


// function run(email) {
//   let a = email.split("@")[0]
//   let b = a.replace(/[A-Za-z0-9-]/g, '*')

// }

// class Person {
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// // let Nam = new Person
// Nam.setName("Minh")
// let Minh = Nam.getName()
// console.log(Minh)

// class Math {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width
//   }
//   getPerimeter() {
//     return (this.length + this.width)*2
//   }
// }

// let Hv = new Math(4, 5)
// let gP = Hv.getPerimeter()
// console.log(gP)


const fs = require('fs')
const path = require('path')
// fs.readFile(path.join(__dirname, './Text/text1.txt'), 'utf8',(err, data) => {
//   if(err) {
//     console.error(err);
//   }
//   else {
//     console.log(data)
//   }
// });

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

  


