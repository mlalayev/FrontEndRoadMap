// // const arr = [];
// // for (let i = 0; i < 50000; i++) {
// //   arr.push(i);
// // }

// // arr.sort(() => Math.random() - 0.5);
// // console.log(arr)
// // let count = 0

// // function bubbleSort(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //         count++
// //       if (arr[i] > arr[j]) {
// //         [arr[i], arr[j]] = [arr[j], arr[i]];
// //       }
// //     }
// //   }
// //   console.log("count ", count)
// //   return arr;
// // }

// // console.time();
// // console.log(bubbleSort(arr));
// // console.timeEnd();

// // const arr = [1, 2, 3, 4, 5, 6, 7];

// // for (let i = 0; i < 500; i++) {
// //   arr.push(i);
// // }
// // arr.sort(() => Math.random() - 0.5);
// // console.log(arr)

// // function quickSort(arr) {
// //   if (arr.length <= 1) return arr;
// //   const pivot = arr[arr.length - 1];
// //   const left = [];
// //   const right = [];

// //   for (let i = 0; i < arr.length - 1; i++) {
// //     if (arr[i] > pivot) right.push(arr[i]);
// //     else left.push(arr[i]);
// //   }

// //   return [...quickSort(left), pivot, ...quickSort(right)];
// // }

// // console.time();
// // console.log(quickSort(arr));
// // console.timeEnd();

// // //* Big O Notation (n^2)
// // //* Omega O Notation (n * log n)

// //* Merge Sort

// const arr = [];
// for (let i = 0; i < 5000000; i++) {
//   arr.push(i);
// }
// arr.sort(() => Math.random() - 0.5);

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   const result = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return [...result, ...left.slice(i), ...right.slice(j)];
// }
// console.time();
// console.log(mergeSort(arr));
// console.timeEnd();

// //* Big O (n log n)
// //* Omega O (n log n)
// //* Theta O (n log n)

// const obj = {};
// obj.name = "Murad";
// obj["name"] = "Filankes";

//* Constructor Function
// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// Person.prototype.myFn = function () {
//   return this.name + " " + this.surname + " Salam";
// };

// Person.prototype.friend = ["Eldar", "Ismayil", "Murad"];

// const person1 = new Person("Eldar", "Taghiyev", "27");
// const person2 = new Person("Ismayil", "Quliyev", "20");

// person2.friend.push("Rustam");

// // console.log(person1);
// console.log(person2.myFn());
// console.log(person1.friend);

// function Person1(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.friend = ["x", "y"]
// }

//* Class Constructor

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.myFn = function () {
//       return this.name + " " + this.surname + " Salam";
//     };
//   }
//   friend = ["Eldar", "Ismayil", "Murad"];
// }

// const person1 = new Person("Eldar", "Taghiyev", "27");
// const person2 = new Person("Ismayil", "Quliyev", "20");

// person2.friend.push("Rustam");

// console.log(person1);
// console.log(person2);

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// class Worker extends Person {
//   constructor(name, surname, age, role) {
//     super(name, surname, age);
//     this.role = role;
//   }
// }

// const worker1 = new Worker("Murad", "Lalayev", "23", "Teacher");

// (Object) => (Person) => (Worker) => worker1;

// console.log(Person instanceof Object);       //* TRUE
// console.log(Worker instanceof Object);       //* TRUE
// console.log(worker1 instanceof Object);      //* TRUE

// console.log(Worker instanceof Person);       //* FALSE

// console.log(worker1 instanceof Person);      //* TRUE
// console.log(worker1 instanceof Worker);      //* TRUE

// console.log(worker1);

// class Car{
//     constructor(model, marka,year, benzintype, maxCap, currentCap, money){

//     }

// }
