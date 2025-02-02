//* **Call, Apply, Bind - JavaScript-də `this` İstifadəsi**

//? JavaScript-də `call()`, `apply()` və `bind()` metodları, bir funksiyanın başqa bir obyektin `this`-inə bağlı olmasını təmin etmək üçün istifadə olunur. Bu metodlar, funksiyaların `this` kontekstini dəyişdirməyə və onlara müvafiq obyekt üzərində işləmə imkanı verir. Hər biri fərqli şəkildə işləyir və istifadə edilir.

//* **1. `call()` metodu**
//? `call()` metodu, bir funksiyanı çağırarkən onun `this` kontekstini təyin etməyə imkan verir. Bu metodda, funksiya birbaşa çağırılır və ona argumentlər nöqtə ilə verilir. `call()` metodu ilə funksiyanı dərhal işə sala bilərsiniz.

names
// `greet` funksiyasını `person` obyekti ilə çağırırıq
greet.call(person, person.name, person.age); //? Output: Hello, my name is Murad and I am 30 years old.

//* **2. `apply()` metodu**
//? `apply()` metodu, `call()` metodunun bir növüdür. Fərq ondan ibarətdir ki, `apply()` metodunda, arqumentlər bir array (massiv) olaraq verilir, yəni funksiyanı çağırarkən arqumentləri massiv olaraq təqdim edirsiniz.

greet.apply(person, ["Murad", 30]); //? Output: Hello, my name is Murad and I am 30 years old.

//* **3. `bind()` metodu**
//? `bind()` metodu da funksiyanın `this`-ini təyin edir, amma fərqli olaraq, funksiyanı dərhal çağırmaq yerinə, yeni bir funksiya döndərir. Bu metod, `this`-in düzgün təyin edilməsi üçün istifadə olunur və nəticədə yeni funksiya işə salındıqda `this` düzgün olacaq.

const boundGreet = greet.bind(person, person.name, person.age);
boundGreet(); //? Output: Hello, my name is Murad and I am 30 years old.

//* **Əsas Fərqlər**:
// 1. `call()` və `apply()` funksiyanı dərhal çağırır, amma `bind()` yeni bir funksiya döndərir.
// 2. `call()` metodunda arqumentlər ayrı-ayrı verilir, `apply()` metodunda isə arqumentlər bir array olaraq verilir.
// 3. `call()` və `apply()` metodları funksiyanı birbaşa işə salır, amma `bind()` metodu yalnız `this`-i təyin edir və yeni bir funksiya döndərir.

//* **Nümunə: `this`-i düzgün təyin etmək üçün `call`, `apply`, və `bind` istifadə edilməsi**
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  };
}

const person1 = new Person("Murad", 30);
const person2 = { name: "Ramil", age: 25 };

person1.greet(); //? Hello, I am Murad and I am 30 years old.

// `call()` ilə person2 üçün greet funksiyasını çağırırıq
person1.greet.call(person2); //? Hello, I am Ramil and I am 25 years old.

// `bind()` ilə person2 üçün yeni bir greet funksiyası yaradılır
const greetRamil = person1.greet.bind(person2);
greetRamil(); //? Hello, I am Ramil and I am 25 years old.
