// // Q.1-

// num = 10;

// if(num%2 === 0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }





// // Q.2-

// num1 = 12;
// num2 = 14;
// num3 = 16;

// if (num1>num2 && num1>num3){
//     console.log("number1 is the largest number")
// }
// else if(num2>num1 && num2>num3){
//     console.log("number2 is the largest number")
// }
// else{
//     console.log("number3 is the largest number")
// }





// // Q.3-

// let marks = +prompt("enter number here")

// if(marks>=90 && marks<=100){
//     console.log("grade A");
// }
// else if(marks >=80 && marks <= 89){
//     console.log("grade B")
// }
// else if(marks >= 70 && marks <=  79){
//     console.log("grade C")
// }
// else if(marks >= 60 && marks <=  69){
//     console.log("grade D" )
// }
// else{
//     console.log("garde F")
// }





// // Q.4-

// num = +prompt("enter number here")

// if(num > 0){
//     console.log("number is positive")
// }
// else if(num < 0){
//     console.log("number is negative")
// }
// else if(num == 0){
//     console.log("number is zero")
// }





// // Q.5-

// age = +prompt("enter age here")

// if(age>=18){
//     console.log("person is eligible to vote")
// }
// else{
//     console.log("person is not eligible to vote")
// }







// // Q.6-

// num = 30;

// if(num % 3 === 0  && num % 5 === 0){
//     console.log("number is divisible by 3 and 5")
// }
// else if(num % 3 === 0){
//     console.log("number is divisible by 3")
// }
// else if(num % 5 === 0){
//     console.log("numnber is divisible by 5")
// }








// //  Q.7-

// unit = +prompt("enter number here")

// if(unit <= 100){
//     total=unit*1
//     console.log(total)
// }
// else if(unit > 100 && unit <= 300){
//     total=unit*2
//     console.log(total)
// }
// else if(unit > 300){
//     total=unit*3
//     console.log(total)
// }









// // Q.8-

// let day;
// switch (+prompt("enter day here")){
//     case 1:
//         day = "sunday";
//         break;
//     case 2:
//         day = "monday";
//         break;
//     case 3:
//         day = "tuesday";
//         break;
//     case 4:
//         day = "wednesday";
//         break;
//     case 5:
//         day = "thrusday";
//         break;
//     case 6:
//         day = "friday";
//         break;
//     case 7:
//         day = "saturday";
// }

// document.getElementById("demo").innerHTML="today is " + day;







// // Q.11-

// num = +prompt("enter number here")

// if(num % 2 == 0){
//     console.log("number is even")
// }
// else if(num % 2 !== 0){
//     console.log("number is odd")
// }
// else if (num > 0){
//     console.log("number is positive")
// }
// else if (num < 0){
//     console.log("number is negative")
// }
// else if (num == 0){
//     console.log("number is zero")

































// // constructor function


// class hero {
//     constructor (name,age){
//         this.name=name
//         this.age=age
//     }
// }

// let first = new hero("batman",20);
// let second = new hero("spider man",30)
// let third = new hero("iron man",40)

// console.log(first)
// console.log(second)
// console.log(third)














// 2. Sort an array of numbers in descending order:
// javascript
// Copy code

const numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => b - a);  // Sorts the array in descending order
console.log(numbers);  // [9, 6, 5, 5, 2, 1]







// 3.  Sort an array of strings in alphabetical order:
// javascript
// Copy code

const strings = ['banana', 'apple', 'orange', 'grape'];
strings.sort();  // Default sorting for strings is in lexicographical (alphabetical) order
console.log(strings);  // ['apple', 'banana', 'grape', 'orange']








function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, message: 'Hello World' };
        resolve(data); // Resolve with data on success
        reject('Error'); // Reject with an error if there's a problem
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('An error occurred:', error));




















// //  shallow copy

//     let person ={
//       name : "rashid",
//       age : 20
//     }



//     let newperson = person

//     newperson.name= "tabrej"
//     newperson.age = 30
//     console.log(newperson)






// deeep copy


let person = {
  name : "rashid",
  age : 20,
  address : {
    city : "gopalganj",
    town : "thawe"
  }
}


let newperson = person

newperson.address.city = "siwan"

console.log(newperson)