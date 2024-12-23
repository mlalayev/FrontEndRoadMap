//* 33. Gün - JavaScript Obyektləri: Prototype, İrsiyyət və `__proto__`

//? **Prototype Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də hər obyektin öz prototipi vardır və bu prototip digər obyektlərdən miras alınan metodlar və xüsusiyyətlər saxlayır.
//? Prototip obyektləri paylaşmağa və kod təkrarını azaltmağa kömək edir. Obyektin prototipi onun xüsusiyyətləri ilə bağlı verilənləri əlavə edir və bu verilənlər irsiyyət yolu ilə istifadə oluna bilər.

//* **Prototip Obyektinin Dəqiq Anlayışı**
//? Hər JavaScript obyektinin daxili bir `[[Prototype]]` xüsusiyyəti vardır, bu, obyektin prototipi ilə əlaqə qurur. `__proto__` bu xüsusiyyətə daxil olmaq üçün istifadə edilə bilər.
//? `__proto__` metodu vasitəsilə obyektin prototipinə daxil olmaq mümkündür.
//? Prototip obyektlərinin istifadə edilməsi, obyektlər arasında irsiyyət (inheritance) yaratmağa imkan verir.

//* **1. Prototip (Prototype) və `__proto__`**
//? Obyektlər öz prototiplərindən metodları və xüsusiyyətləri miras alır. Hər bir obyektin `__proto__` xüsusiyyəti onun prototipini göstərir.
//? **Sintaksis:**
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// `__proto__` ilə prototipə daxil olmaq:
console.log(person.__proto__); //? Obyektin prototipini göstərir

//* **2. Prototype Chain (Prototip Zənciri)**
//? Prototiplər zəncirvari şəkildə əlaqəlidir. Hər obyektin `__proto__` xüsusiyyəti öz prototipinə, onun prototipi isə daha əvvəlki prototipə bağlıdır.
//? Bu zəncirin sonu `null` ilə bitir, çünki prototip zəncirinin ən üst səviyyəsində heç bir prototip yoxdur.
//? **Sintaksis:**
const obj = {
  a: 1,
};

// `obj` obyektinin prototipinə daxil olmaq
console.log(obj.__proto__); //? Bu, `Object.prototype` olacaq

//* **3. İrsiyyət (Inheritance)**
//? JavaScript-də irsiyyət, obyektlər arasındakı əlaqəni təyin edir. Bir obyektin prototipi digər bir obyekt ola bilər və beləliklə, bir obyektin xüsusiyyətləri digərinə miras verilə bilər.
//? Bu, `prototype` vasitəsilə avtomatik həyata keçir və obyektin metodları və xüsusiyyətləri prototip zəncirinə yönləndirilir.
//? **Sintaksis:**
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

const person1 = new Person("Alice");
person1.greet(); //? "Hello, Alice" - Person obyektindən irsiyyətlə gəldi

//* **4. Basic Object (Əsas Obyekt)**
//? JavaScript-də hər bir obyekt `Object` adlı əsas (basic) obyektin bir instansiyasıdır. `Object` prototipi bütün obyektlər üçün mövcuddur və bu, ümumi metodları təmin edir.
//? `Object.prototype`-dən miras alınan metodlar bütün obyektlərə tətbiq olunur. Məsələn, `toString()`, `hasOwnProperty()` və digər metodlar `Object` prototipində mövcuddur.
//? **Sintaksis:**
const person2 = {
  name: "Bob",
};

// `hasOwnProperty()` metodu `Object` prototipindən gəlir
console.log(person2.hasOwnProperty("name")); //? true

//* **5. `Object.create()` ilə Prototip Qurmaq**
//? `Object.create()` metodu vasitəsilə yeni bir obyekt yaradılır və onun prototipi başqa bir obyektə təyin edilir.
//? Bu metod, obyektlər arasında daha mükəmməl irsiyyət qurmağa imkan verir. `Object.create()` metodunun üstünlüyü, prototipi birbaşa təyin etməyə imkan verməsidir.
//? **Sintaksis:**
const personProto = {
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const person3 = Object.create(personProto);
person3.name = "Charlie";
person3.greet(); //? "Hello, Charlie"

//* **6. Prototip Metodları**
//? JavaScript-də obyektlər prototiplərdən metodlar miras alır. `prototype` vasitəsilə obyektlərə əlavə metodlar əlavə etmək mümkündür.
//? **Sintaksis:**
function Animal(name) {
  this.name = name;
}

// `Animal.prototype`-a metod əlavə edirik
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

const animal1 = new Animal("Dog");
animal1.speak(); //? "Dog makes a sound."

//* **7. `__proto__` ilə Prototipə Daxil Olmaq**
//? JavaScript-də `__proto__` obyektin prototipinə daxil olmaq üçün istifadə olunur. Bu xüsusiyyət, inkişaf etdiricilər tərəfindən prototip zənciri üzərində addım-addım izləmək üçün faydalıdır.
//? `__proto__` vasitəsilə bir obyektdən digərinə irsiyyət ötürülə bilər və prototipin xüsusiyyətlərinə daxil olmaq mümkündür.
//? **Sintaksis:**
console.log(animal1.__proto__); //? Animal.prototype (bu, `Animal` konstruktora aiddir)
console.log(animal1.__proto__ === Animal.prototype); //? true

//* **8. Prototip Zənciri ilə Dərindən Araşdırma**
//? JavaScript-də prototip zənciri ilə işləyərkən obyektlərin necə irsiyyət götürdüyünü və metodların necə miras alındığını başa düşmək vacibdir.
//? Hər obyektin öz `__proto__` xüsusiyyəti vardır və obyektlər arasında irsiyyət bu zəncir vasitəsilə qurulur.
