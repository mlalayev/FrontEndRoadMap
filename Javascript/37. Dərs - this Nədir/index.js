//* 33. Gün - "this" Nədir?

//? **"this" nədir?**
//? JavaScript-də `this` xüsusi bir dəyişkəndir və funksiyanın necə çağırıldığına görə fərqli dəyərlərə sahib olur. 
//? Onun dəyəri, funksiyanın harada və necə çağırıldığından asılı olaraq dəyişir. "this" sözünü anlamaq, obyekt yönümlü proqramlaşdırma üçün əhəmiyyətlidir.

//* 1. **Qlobal Kontekst**
//? Əgər `this` qlobal kontekstdə (hər hansı bir funksiyanın və ya obyektin içində deyil) istifadə olunursa, 
//? o zaman global obyektə işarə edir.
//? - Brauzerlərdə `this` global obyekt olaraq `window`-u təmsil edir.
//? - Node.js-də `this` global obyekt olaraq `global`-ı təmsil edir.
console.log(this); // Brauzerdə bu, `window` obyektini göstərəcəkdir.

//* 2. **Funksiya Kontekstində**
//? Əgər `this` bir funksiyada istifadə edilirsə, onun dəyəri `global` obyektinə işarə edəcək (non-strict mode-da).
//? Strict mode-da isə `this` `undefined` olacaq.
function showThis() {
    console.log(this); // Non-strict mode-da global obyektini göstərəcəkdir.
}

showThis(); // `window` (brauzer) obyektini göstərəcək

//* Strict mode istifadə edərək:
"use strict";

function showThisStrict() {
    console.log(this); // Strict mode-da `this` `undefined` olacaq
}

showThisStrict(); // `undefined` olacaq

//* 3. **Obyekt Metodunda "this"**
//? Əgər `this` bir obyekt metodunda istifadə olunarsa, `this` həmin obyekti təmsil edir.
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(this.name); // `this` burada `person` obyektinə işarə edir
    }
};

person.greet(); // "John" olacaq

//* 4. **Konstruktiv Funksiya İçində**
//? Konstruktiv funksiyada `this` yeni yaradılan obyektin özünü təmsil edir.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // "Alice" olacaq

//* 5. **"this" və Arrow Funksiyalar**
//? Arrow funksiyalar `this`-i özləri üçün təyin etmir. Onlar öz `this` dəyərini ancaq ətraf mühitdən miras alırlar.
const person2 = {
    name: 'Bob',
    greet: () => {
        console.log(this.name); // `this` burada global obyektə işarə edəcək (çünki arrow funksiyalar `this`-i özündən götürmür)
    }
};

person2.greet(); // `undefined` olacaq (çünki globalda `name` yoxdur)

//* **Nəticə**
//? "this" əsasən funksiyanın necə çağırıldığından asılıdır. 
//? O, global obyektə, obyektə, yeni yaradılan obyektə və ya başqa mühitlərə işarə edə bilər.
//? "this" ilə əlaqəli düzgün anlayış yazılışın düzgünlüyünü təmin edir.
