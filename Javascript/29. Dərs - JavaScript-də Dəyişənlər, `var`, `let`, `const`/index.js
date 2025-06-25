//* 29. Gün - JavaScript-də Dəyişənlər, `var`, `let`, `const`, Hoisting və Scope

//? **Dəyişənlər Nədir və Nə Üçün Lazımdır?**
//? Dəyişənlər proqramlaşdırmada məlumatları saxlamaq üçün istifadə edilir. JavaScript-də məlumatları saxlamaq üçün `var`, `let`, və `const` istifadə edilir.
//? Hər birinin öz xüsusiyyətləri və istifadəsi var. Bu, kodun daha düzgün və effektiv yazılmasına kömək edir.

//* **1. `var`, `let`, və `const` Arasındakı Fərqlər**

//* **`var`**
//? `var` JavaScript-də köhnə dəyişən təyin etmə üsuludur və yalnız funksiyalar və ya qlobal səviyyədə istifadə edilə bilər. `var` ilə təyin edilən dəyişənlər funksional scope-a sahibdirlər.
//? Bu, `var` dəyişənlərinin daxilində olduqları funksiyanı və ya scripti aydın göstərmədiyi zaman problemlərə səbəb ola bilər.
//? **Nümunə:**
var x = 10; //? `var` ilə təyin edilmiş dəyişən
console.log(x); //? 10

//* **`let`**
//? `let` JavaScript-də daha müasir və dinamik dəyişən təyin etmə üsuludur. `let` block scope-a malikdir, yəni yalnız təyin edildiyi blok daxilində keçərlidir.
//? Bu, kodun oxunmasını asanlaşdırır və səhvləri azaldır. `let` ilə dəyişənlərin təkrarlanması (redeclare) mümkün deyil, amma dəyərini dəyişdirmək (reassign) mümkündür.
//? **Nümunə:**
let y = 20;
y = 30; //? Dəyərini dəyişmək mümkündür
console.log(y); //? 30

//* **`const`**
//? `const` ilə təyin edilən dəyişənlər sabitdir və dəyişdirilə bilməz. `const` həmçinin block scope-a malikdir.
//? Yalnız bir dəfə təyin edilə bilər və daha sonra dəyəri dəyişdirilə bilməz. Lakin obyektlər və massivlər kimi kompleks verilənlərdə, onların özəllikləri dəyişdirilə bilər.
//? **Nümunə:**
const z = 50;
// z = 60;  //? Bu sətr səhv verir, çünki `const` ilə təyin edilən dəyişənin dəyəri dəyişdirilə bilməz.
console.log(z); //? 50

//* **2. Hoisting (Qaldırma)**
//? JavaScript-də `var`, `let`, və `const` dəyişənləri və funksiyaları "hoisting" edir, yəni bunlar avtomatik olaraq başa çəkilir. Lakin, `var` ilə təyin edilən dəyişənlər əvvəlcədən təyin olunduğu kimi qəbul edilir, amma `let` və `const` ilə təyin edilən dəyişənlər hoisted olmur və `ReferenceError` verər.
//? **Nümunə:**
console.log(a); //? undefined - `var` ilə təyin edildiyi üçün hoisted oldu
var a = 5;
// console.log(b);  //? ReferenceError - `let` və `const` ilə təyin edildiyi üçün hoisted olmaz

//* **3. Redeklarasiya və Yenidən Təyin Etmə (Redeclare və Reassign)**

//* **Redeclare (Yenidən Təyin Etmək)**
//? `var` ilə təyin edilmiş dəyişənlər təkrarən təyin edilə bilər (redeclare). Lakin `let` və `const` ilə təyin edilən dəyişənlər təkrarən təyin edilə bilməz.
//? **Nümunə:**
var name = "John";
var name = "Jane"; //? `var` ilə təkrar təyin edilə bilər
console.log(name); //? "Jane"

//* **Reassign (Yenidən Dəyər Təyin Etmək)**
//? `let` və `var` ilə təyin edilən dəyişənlərə yeni dəyər təyin edilə bilər, lakin `const` ilə təyin edilən dəyişənlərə dəyər təyin edilə bilməz (sabitdir).
//? **Nümunə:**
let number = 100;
number = 200; //? `let` ilə dəyərini dəyişdirmək mümkündür
console.log(number); //? 200

//* **4. Block Scope və Global Scope**
//? JavaScript-də dəyişənlərin saxlanılacağı "scope" anlayışı var. "Block scope" deyildikdə, bir dəyişənin yalnız müəyyən bir blok daxilində keçərli olması nəzərdə tutulur (məsələn, `if` və ya `for` dövrü).
//? "Global scope" isə dəyişənin kodun hər yerində istifadə oluna bilməsi deməkdir.
//? **Nümunə:**
{
  let blockVar = "Inside Block";
  console.log(blockVar); //? "Inside Block"
}
// console.log(blockVar);  //? Error - `blockVar` yalnız blok daxilində keçərlidir

//? Global scope-də təyin edilmiş dəyişənlər isə hər yerdən istifadə edilə bilər.
//? **Nümunə:**
var globalVar = "I'm global!";
console.log(globalVar); //? "I'm global!"

//* **5. var, let və const Arasındakı Fərqlər**
//? `var` global və ya funksional səviyyədə təyin edilən dəyişənlər üçün istifadə edilir.
//? `let` yalnız müəyyən bir blok daxilində istifadə edilə bilər və təkrar təyin edilməsinə icazə verilmir.
//? `const` isə sabit dəyişənlər üçün istifadə edilir və dəyəri dəyişdirilə bilməz.

//* **6. Code Example - Dəyişənlərin İstifadəsi**
let x1 = 10;
const y1 = 20;
if (x1 < y1) {
  let z1 = 30; //? `let` ilə blok daxilində təyin edilir
  const w1 = 40; //? `const` ilə blok daxilində təyin edilir
  console.log(z1); //? 30
  console.log(w1); //? 40
}
// console.log(z1);  //? Error - `z1` yalnız blok daxilində keçərlidir
// console.log(w1);  //? Error - `w1` yalnız blok daxilində keçərlidir

//* **7. Global Scope və Local Scope**
//? JavaScript-də bir dəyişən ya global (bütün skript daxilində) ya da local (yalnız müəyyən bir blok və ya funksiya daxilində) olmalıdır.
//? Global dəyişənlər, hər yerdən istifadə edilə bilər, lakin local dəyişənlər yalnız təyin edildikləri blok daxilində keçərlidir.
//? **Nümunə:**
var globalVariable = "Global Scope";
function checkScope() {
  let localVariable = "Local Scope";
  console.log(globalVariable); //? "Global Scope"
  console.log(localVariable); //? "Local Scope"
}
// console.log(localVariable);  //? Error - `localVariable` yalnız funksiyada keçərlidir
checkScope();
