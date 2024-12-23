//* 32. Gün - JavaScript Obyektləri, Konstruktor Funksiyaları və Digər Əməliyyatlar

//? **Obyektlər Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də obyektlər verilənləri (xüsusiyyətlər və metodlar) saxlamaq və idarə etmək üçün istifadə olunur.
//? Obyektlər, bir neçə dəyəri (xüsusiyyətləri) bir arada saxlamağa imkan verir, məsələn, bir şəxsin adı, yaşı və ünvanı.
//? Objekte əsasən 3 üsulla yaradılır: Obyekt Litsalı, Konstruktor Funksiyası və `Object.create()` metodu.

//* **1. Obyekt Litsalı (Object Literal)**
//? Obyektlər JavaScript-də ən çox `object literal` üsulu ilə yaradılır. Bu üsul, obyektin xüsusiyyətlərini və qiymətlərini birbaşa təyin etməyə imkan verir.
//? **Sintaksis:**
const person = {
  name: "John", //? Xüsusiyyət (Property)
  age: 30, //? Xüsusiyyət (Property)
  greet: function () {
    //? Metod
    console.log("Hello, " + this.name);
  },
};

// Obyektə daxil olmaq:
console.log(person.name); //? "John"
console.log(person.age); //? 30
person.greet(); //? "Hello, John"

//* **2. Konstruktor Funksiyası (Constructor Function)**
//? Konstruktor funksiyaları obyektləri yaratmaq üçün istifadə edilir. Bu funksiyalar, yeni obyektin xüsusiyyətlərini təyin etməyə imkan verir.
//? Konstruktor funksiyaları, `new` açar sözü ilə çağırıldıqda obyekt yaradır və təyin olunan xüsusiyyətləri həmin obyektə əlavə edir.
//? **Sintaksis:**
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, " + this.name);
  };
}

// Yeni obyekt yaradılması:
const person1 = new Person("John", 30);
console.log(person1.name); //? "John"
console.log(person1.age); //? 30
person1.greet(); //? "Hello, John"

//* **3. `new Object()` Metodu**
//? `new Object()` metodu da obyekt yaratmaq üçün istifadə edilir, amma bu üsul çox istifadə edilmir.
//? Daha çox `object literal` və konstruktor funksiyaları üstünlük təşkil edir.
//? **Sintaksis:**
const person2 = new Object();
person2.name = "Alice";
person2.age = 25;
person2.greet = function () {
  console.log("Hello, " + this.name);
};

// Obyektə daxil olmaq:
console.log(person2.name); //? "Alice"
console.log(person2.age); //? 25
person2.greet(); //? "Hello, Alice"

//* **4. `Object.create()` Metodu**
//? `Object.create()` metodu, yeni obyekt yaratmaq üçün istifadə edilir və həmin obyektin prototipini təyin etməyə imkan verir.
//? Bu metod, başqa bir obyektin prototipinə əsaslanan yeni obyektlər yaratmaq üçün faydalıdır.
//? **Sintaksis:**
const personProto = {
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const person3 = Object.create(personProto);
person3.name = "Bob";
person3.age = 40;

// Obyektə daxil olmaq:
console.log(person3.name); //? "Bob"
console.log(person3.age); //? 40
person3.greet(); //? "Hello, Bob"

//* **5. Dot və Bracket Notation ilə Obyektə Daxil Olmaq**
//? JavaScript-də obyektin xüsusiyyətlərinə iki üsulla daxil ola bilərsiniz: **dot notation** (nöqtə ilə) və **bracket notation** (künc mötərizələri ilə).

//? **Dot Notation (Nöqtə Notasiyası):**
//? Bu üsulda obyektin xüsusiyyətinə birbaşa nöqtə ilə daxil olunurlar.
const person4 = {
  name: "Charlie",
  age: 50,
};

console.log(person4.name); //? "Charlie"
console.log(person4.age); //? 50

//? **Bracket Notation (Künc Mötərizələri Notasiyası):**
//? Bu üsulda obyektin xüsusiyyətinə künc mötərizələri ilə daxil olunur. Bu, xüsusiyyətin adının dəyişən olduğu hallarda faydalıdır.
const person5 = {
  name: "Dave",
  age: 60,
};

const propName = "name";
console.log(person5[propName]); //? "Dave"

// Künc mötərizələri ilə metod çağırışı:
const methodName = "greet";
person5[methodName] = function () {
  console.log("Hello, " + this.name);
};
person5.greet(); //? "Hello, Dave"

//* **6. Əlavə Xüsusiyyətlər:**
//? - Obyektlər JavaScript-də əsas verilənlər strukturudur və xüsusiyyətləri və metodları saxlamağa imkan verir.
//? - Konstruktor funksiyalar və `Object.create()` metodu yeni obyektlər yaratmaq üçün istifadə olunur.
//? - Dot və bracket notation obyektin xüsusiyyətlərinə daxil olmaq üçün ən yaygın üsullardır.
