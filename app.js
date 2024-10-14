
// 1-misol
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];

//   function getNamesByGrade(students, grade) {
//     return students.filter(student => {
//         if (grade === 5) return student.percent >= 85 && student.percent <= 100;
//         if (grade === 4) return student.percent >= 70 && student.percent < 85;
//         if (grade === 3) return student.percent >= 60 && student.percent < 70;
//         return false; 
//       })
//       .map(student => student.name);
//   }

//   console.log(getNamesByGrade(students, 5)); 
//   console.log(getNamesByGrade(students, 4)); 
//   console.log(getNamesByGrade(students, 3)); 



// // 2-misol
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let result = animals.reduce((acc, curr) => {
//     if (acc !== undefined) {
//         if (!(acc[curr])) {
//             acc[curr] = 1;
//         } else {
//             acc[curr]++
//         }
//         return acc
//     }
// }, {})
// console.log(result);



// 3-misol
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map(num => Math.pow(num, 2));
// console.log(result);


// 4-misol 
// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let musbat =  numbers.filter(num => num > 0);
// let yigindi =  musbat.reduce((acc, curr) => acc + curr, 0);
// console.log(yigindi);




// 6-misol
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);
// const young = people[0];
// const old = people[people.length - 1];
// const ageDifference = old.age - young.age;
// console.log(ageDifference); 





// 7-misol
// let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// let juft = numbers.filter(num => num % 2 === 0);
// let toq = numbers.filter(num => num % 2 !== 0);
// console.log(juft);
// console.log(toq);






// 9-misol
// const products = [
//     { id: 1, name: 'Laptop', price: 1000, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Phone', price: 500, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Tablet', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Monitor', price: 300, rating: 4.1, discount: 20 },
//     { id: 5, name: 'Keyboard', price: 100, rating: 4.8, discount: 25 }
// ];


// 10-misol
// const products = [
//     { id: 1, name: 'Laptop', price: 1000, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Phone', price: 500, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Tablet', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Monitor', price: 300, rating: 4.1, discount: 20 },
//     { id: 5, name: 'Keyboard', price: 100, rating: 4.8, discount: 25 }
// ];

// const topRate = products.sort((a, b) => b.rating - a.rating)[0];
// console.log(topRate);



// 11-misol
// const products = [
//     { id: 1, name: 'Laptop', price: 1000, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Phone', price: 500, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Tablet', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Monitor', price: 300, rating: 4.1, discount: 20 },
//     { id: 5, name: 'Keyboard', price: 100, rating: 4.8, discount: 25 }
// ];
// const priceLow = products.sort((a,b) => b.price - a.price)[0];
// console.log(priceLow);


// 12-misol
// const products = [
//     { id: 3, name: 'Laptop', price: 150000, rating: 4.7, discount: 10 },
//     { id: 1, name: 'Smartphone', price: 80000, rating: 4.5, discount: 15 },
//     { id: 4, name: 'Tablet', price: 50000, rating: 4.3, discount: 5 },
//     { id: 2, name: 'Headphones', price: 20000, rating: 4.8, discount: 20 },
//     { id: 5, name: 'Smartwatch', price: 30000, rating: 4.4, discount: 25 },
// ];
// const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
// console.log(`Barcha mahsulotlar narxlari yig'indisi: ${totalPrice} so'm`);


// 13-misol
// const products = [
//     { id: 1, name: 'Laptop', price: 1000, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Phone', price: 500, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Tablet', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Monitor', price: 300, rating: 4.1, discount: 20 },
//     { id: 5, name: 'Keyboard', price: 100, rating: 4.8, discount: 25 }
// ];

// const productNames = products.map(product => product.name);
// console.log(productNames);


// 14-misol
// const products = [
//     { id: 1, name: 'Laptop', price: 1000, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Phone', price: 500, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Tablet', price: 800, rating: 4.2, discount: 5 },
//     { id: 4, name: 'Monitor', price: 300, rating: 4.1, discount: 20 },
//     { id: 5, name: 'Keyboard', price: 100, rating: 4.8, discount: 25 }
// ];
// const product = products.find(product => product.id === 5);
// const productName = product ? product.name : 'Mahsulot topilmadi';
// console.log(productName);


// 15-misol
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];
// const product = products.filter(product => product.id !== 4);
// console.log(product);


// 16-misol


// 17-misol
// const mixArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//     const falsy = arr.filter(item => !item);
//     const truthy = arr.filter(item => item);
//     return {
//         truthy: truthy,
//         falsy: falsy,
//     };
// }

// const result = getTruthyFalsy(mixArray);

// console.log(result);


// 18-misol
// const programmer = "Men Abdulaziz Programmerman";
// function getArrLength(arr) {
//     return arr.split(' ').map(word => word.length);
// }

// const result = getArrLength(programmer);
// console.log(result);





// 21-misol
// function digitSum(a) {
//     if (a === 0) {
//         return 0;
//     }
//     return (a % 10) + digitSum(Math.floor(a / 10));
// }

// console.log(digitSum(123)); 
// console.log(digitSum(456));  
// console.log(digitSum(789)); 
// console.log(digitSum(0)); 
// console.log(digitSum(1001));



// 24-misol
// const pupils = [
//     { name: "Maqsad", percentage: 85 },
//     { name: "Nurik", percentage: 90 },
//     { name: "Demir", percentage: 80 },
//     { name: "Shahzod", percentage: 95 },
// ];

// const updatedPupils = pupils.map(pupil => {
//     let price;
//     if (pupil.percentage >= 90) {
//         price = 5;
//     } else if (pupil.percentage >= 80) {
//         price = 4;
//     } else if (pupil.percentage >= 70) {
//         price = 3;
//     } else {
//         price = 2;
//     }
//     return { ...pupil, price };
// });

// console.log(updatedPupils);


// 25-misol
// const pupils = [
//     { name: "Maqsad", percentage: 85 },
//     { name: "Nurik", percentage: 90 },
//     { name: "Demir", percentage: 80 },
//     { name: "Shahzod", percentage: 95 },
// ];
// const updatedPupils = pupils.map(pupil => ({
//     ...pupil,
//     isPassed: pupil.percentage > 70 
// }));

// console.log(updatedPupils);


