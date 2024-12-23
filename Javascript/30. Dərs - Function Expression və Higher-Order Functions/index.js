//* 30. Gün - Function Expression və Higher-Order Functions

//? **Function Expression Nədir və Nə Üçün Lazımdır?**
//? Function Expression, bir funksiyanı dəyişənə təyin etməyə imkan verən JavaScript xüsusiyyətidir. Funksiya təyini zaman funksiyanı adla təyin etmək yerinə, onu bir dəyişənə təyin edirik.
//? Bu metod daha dinamik və çevik funksiyaların yaradılmasına imkan verir. Adətən `let`, `const`, və ya `var` ilə istifadə olunur.
//? Function Expression-lər, yalnız təyin edildikləri yerdə mövcuddurlar, yəni funksiyanı istifadə etməyə başlamazdan əvvəl təyin edilməlidir.

//* **1. Function Expression-nın Təyin Edilməsi**
//? Funksiya təyini adətən belə edilir:
const greet = function(name) {  //? `greet` bir function expression-dir
    return `Hello, ${name}!`;
};
console.log(greet("Alice"));  //? "Hello, Alice!"

//* **2. Anonymous Function Expression**
//? Bəzi hallarda funksiyanın adı olmasına ehtiyac yoxdur, yəni adlandırılmamış (anonymous) funksiya istifadə edilə bilər.
//? Anonymous function expression, xüsusilə callback funksiyalarında istifadə olunur.
//? **Nümunə:**
const addNumbers = function(a, b) {
    return a + b;
};
console.log(addNumbers(2, 3));  //? 5

//* **3. IIFE (Immediately Invoked Function Expression)**
//? IIFE, funksiyanın dərhal təyin edilib işə salınmasıdır. Bu metod daha çox modul yaradılmasında və global namespace-i qorumaqda istifadə olunur.
//? **Nümunə:**
(function() {
    console.log("This is an IIFE!");
})();  //? "This is an IIFE!"

//* **4. Function Expression ilə Arrow Function-lar**
//? Arrow function-lar, function expression-lərin daha qısa və müasir yazılış formasıdır. `function` açar sözündən istifadə etmədən bir funksiya təyin edilir.
//? **Nümunə:**
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  //? 20

//* **5. Higher-Order Function (Yüksək Səviyyəli Funksiya) Nədir?**
//? Higher-Order Function, ya digər funksiyaları parametr kimi qəbul edən, ya da digər funksiyalar qaytaran funksiyadır.
//? Yüksək səviyyəli funksiyalar, funksional proqramlaşdırma metodlarını tətbiq etmək üçün istifadə edilir. Bu metodlar daha çox çevik və təkrarlanabilən kod yazmağa imkan verir.

//* **6. Higher-Order Function-a Nümunə**
//? Misal olaraq, aşağıdakı `map` funksiyası bir array-ə tətbiq edilən hər bir funksiya üçün nəticə qaytarır. Bu, bir yüksək səviyyəli funksiyadır, çünki ona başqa bir funksiya təyin edirik.
//? **Nümunə:**
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);  //? [1, 4, 9, 16, 25]

//* **7. Higher-Order Function-lərin İstifadə Sahələri**
//? Higher-order function-lər kodun təkrarlanmasını azaldır və daha çevik və oxunaqlı edir. Funksiyanı birbaşa digər funksiyalara ötürmək çox güclü və faydalıdır.
//? **Nümunə:**
const filterNumbers = numbers.filter(function(num) {
    return num > 2;
});
console.log(filterNumbers);  //? [3, 4, 5]

//* **8. Higher-Order Function-lərin Digər Nümunələri**
//? - **reduce()**: Bu metod array-dəki bütün elementləri bir yerdə toplamaq və ya digər əməliyyatları yerinə yetirmək üçün istifadə olunur.
//? - **forEach()**: Hər bir elementə müəyyən bir funksiya tətbiq etmək üçün istifadə olunur.
//? **Nümunə:**
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);  //? 15

//* **9. Higher-Order Function-lər və Callback Funksiyalar**
//? Callback funksiyaları, bir funksiyanın parametri olaraq verilən digər funksiyalardır. Higher-order function-lər callback-lər qəbul edir və onlarla işləyir.
//? **Nümunə:**
const greetUser = function(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  //? Callback funksiyasını çağırır
};

greetUser("Alice", function() {
    console.log("Welcome to the website!");
});
//? Output:
//? "Hello, Alice!"
//? "Welcome to the website!"

//* **10. Higher-Order Function-lərin Üstünlükləri**
//? Higher-order function-lər bir çox funksiyanı bir araya gətirərək, kodun təkrarını və kompleksliyini azaldır. 
//? Bu yanaşma ilə proqramı daha modul və daha çevik hala gətiririk.
//? Onlar kodun təkrarlanmamasını və yalnız lazım olduğu hissələri dəyişdirməyi təmin edir.

