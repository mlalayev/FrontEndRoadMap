//* Massivlərdə Big O Analizi

//? **Massivlərdə Big O Nədir?**
//? JavaScript massivləri ardıcıl verilənlərin saxlanması üçün istifadə olunan məlumat strukturlardır.
//? Algoritm analizində massiv əməliyyatlarının sürətini ölçmək üçün Big O notasiya sistemindən istifadə edilir.

//? **Massivlərdə Əməliyyatların Vaxt Mürəkkəbliyi:**
//? - **O(1) - Sabit vaxt**: Sonuna element əlavə etmək (push) və ya son elementı silmək (pop) sürətlidir.
//? - **O(n) - Xətti vaxt**: İlk elementı silmək (shift), öndə yeni element əlavə etmək (unshift) və ya dəyər axtarmaq.

//* **1. Massivlərdə Əsas Əməliyyatların Analizi**

//? **1.1 - Sonuna element əlavə etmək (push) - O(1)**
const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); //? [1, 2, 3, 4]

//? **1.2 - Son elementı silmək (pop) - O(1)**
numbers.pop();
console.log(numbers); //? [1, 2, 3]

//? **1.3 - İlk elementı silmək (shift) - O(n)**
numbers.shift();
console.log(numbers); //? [2, 3]

//? **1.4 - Öndə yeni element əlavə etmək (unshift) - O(n)**
numbers.unshift(0);
console.log(numbers); //? [0, 2, 3]

//* **2. Massivlər Daxilində Axtarış Əməliyyatları**

//? **2.1 - Dəyər axtarmaq (includes, indexOf) - O(n)**
console.log(numbers.includes(3)); //? true
console.log(numbers.indexOf(2)); //? 1

//* **3. Massivlərə Görə Dövr Vaxt Mürəkkəbliyi**

//? **3.1 - For loop (O(n))**
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//? **3.2 - forEach metodu (O(n))**
numbers.forEach((num) => console.log(num));

//? **3.3 - map metodu (O(n))**
const doubled = numbers.map((num) => num * 2);
console.log(doubled); //? [0, 4, 6]
