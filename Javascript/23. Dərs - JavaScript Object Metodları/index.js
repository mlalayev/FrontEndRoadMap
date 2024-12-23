//* 25. Gün - JavaScript Object Metodları

//? **Object Metodları Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də obyektlər, məlumatları strukturlaşdırılmış şəkildə saxlamaq üçün istifadə edilir. 
//? Obyekt metodları, obyektlər üzərində əməliyyatlar aparmağa imkan verir. Bu metodlar, obyektin xüsusiyyətlərini əldə etmək, dəyişdirmək, silmək və s. kimi əməliyyatları yerinə yetirmək üçün istifadə olunur.

//* **Object Metodlarının Tam Siyahısı və Təsvirləri**:

//* 1. **Object.keys()**
//? Bu metod, obyektin bütün açarlarının (key) massivini qaytarır.
//? **Nümunə:**
let person = { name: "John", age: 30, city: "New York" };
let keys = Object.keys(person);
console.log(keys);  //? ["name", "age", "city"]

//* 2. **Object.values()**
//? Bu metod, obyektin bütün dəyərlərinin massivini qaytarır.
//? **Nümunə:**
let values = Object.values(person);
console.log(values);  //? ["John", 30, "New York"]

//* 3. **Object.entries()**
//? Bu metod, obyektin hər bir açar/dəyər cütünün massivini qaytarır.
//? **Nümunə:**
let entries = Object.entries(person);
console.log(entries);  //? [["name", "John"], ["age", 30], ["city", "New York"]]

//* 4. **Object.hasOwnProperty()**
//? Bu metod, obyektin müəyyən bir açarının özəlliyini yoxlayır (qabağa çıxan prototip xüsusiyyətlərindən asılı olmayaraq).
//? **Nümunə:**
let hasAge = person.hasOwnProperty("age");
console.log(hasAge);  //? true

//* 5. **Object.assign()**
//? Bu metod, bir və ya daha çox obyekti başqa bir obyektə kopyalayır və yeni obyekt qaytarır. 
//? Müxtəlif obyektləri birləşdirmək üçün istifadə edilir.
//? **Nümunə:**
let extraInfo = { gender: "male" };
let fullPerson = Object.assign({}, person, extraInfo);
console.log(fullPerson);  //? { name: "John", age: 30, city: "New York", gender: "male" }

//* 6. **Object.freeze()**
//? Bu metod, obyektin dəyərlərini dəyişdirməyə qarşı qoruma altına alır. Obyektin xüsusiyyətləri dəyişdirilə bilməz.
//? **Nümunə:**
let frozenPerson = Object.freeze(person);
frozenPerson.age = 35;  //? Bu dəyişiklik etməyəcək, çünki obyekt donmuşdur.
console.log(frozenPerson.age);  //? 30

//* 7. **Object.seal()**
//? Bu metod, obyektin xüsusiyyətlərini qoruma altına alır, lakin obyektin yeni xüsusiyyətlər əlavə olunmasına imkan vermir.
//? Mövcud xüsusiyyətlərin dəyərləri dəyişdirilə bilər.
//? **Nümunə:**
let sealedPerson = Object.seal(person);
sealedPerson.city = "Los Angeles";  //? Bu əlavə olunmayacaq, çünki obyekt sızdırılıb.
sealedPerson.age = 35;  //? Bu dəyişiklik olacaq.
console.log(sealedPerson);  //? { name: "John", age: 35, city: "New York" }

//* 8. **Object.create()**
//? Bu metod, müəyyən bir obyektə əsaslanaraq yeni bir obyekt yaradır. Yeni obyekt prototip olaraq verilən obyektə sahib olur.
//? **Nümunə:**
let personPrototype = { greet() { return "Hello " + this.name; } };
let newPerson = Object.create(personPrototype);
newPerson.name = "Alice";
console.log(newPerson.greet());  //? "Hello Alice"

//* 9. **Object.defineProperty()**
//? Bu metod, obyektin müəyyən bir açarına yeni xüsusiyyətlər və davranışlar əlavə edir. Xüsusiyyətlərdən biri dəyişdirilə bilməz, yalnız oxunur ola bilər və s.
//? **Nümunə:**
Object.defineProperty(person, "country", {
  value: "USA",
  writable: false,
  enumerable: true
});
console.log(person.country);  //? "USA"
person.country = "Canada";  //? Bu dəyişiklik edilmir, çünki writable: false
console.log(person.country);  //? "USA"

//* 10. **Object.defineProperties()**
//? Bu metod, bir neçə xüsusiyyəti birdən əlavə edir və ya dəyişdirir.
//? **Nümunə:**
Object.defineProperties(person, {
  age: { value: 30, writable: false },
  gender: { value: "male", writable: true }
});
console.log(person.age);  //? 30
person.age = 40;  //? Bu dəyişiklik olmayacaq, çünki writable: false
console.log(person.age);  //? 30
console.log(person.gender);  //? "male"

//* 11. **Object.getOwnPropertyDescriptor()**
//? Bu metod, obyektin müəyyən bir xüsusiyyətinin təsvirini qaytarır (məsələn, onun yazıla bilər olub olmadığını, əlçatan olub olmadığını və s.)
//? **Nümunə:**
let descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);  //? { value: "John", writable: true, enumerable: true, configurable: true }

//* 12. **Object.getOwnPropertyDescriptors()**
//? Bu metod, obyektin bütün xüsusiyyətlərinin təsvirlərini qaytarır.
//? **Nümunə:**
let descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);
//? { name: { value: "John", writable: true, enumerable: true, configurable: true },
//?   age: { value: 30, writable: false, enumerable: true, configurable: true },
//?   city: { value: "New York", writable: true, enumerable: true, configurable: true } }

//* 13. **Object.getPrototypeOf()**
//? Bu metod, obyektin prototipini (yəni onun əsaslandığı obyektin) qaytarır.
//? **Nümunə:**
let prototype = Object.getPrototypeOf(person);
console.log(prototype);  //? { greet() { return "Hello " + this.name; } }

//* 14. **Object.setPrototypeOf()**
//? Bu metod, obyektin prototipini təyin edir.
//? **Nümunə:**
let newPrototype = { greet() { return "Hi, " + this.name; } };
Object.setPrototypeOf(person, newPrototype);
console.log(person.greet());  //? "Hi, John"

//* 15. **Object.is()**
//? Bu metod, iki dəyərin bərabər olub olmadığını yoxlayır (NaN ilə müqayisə kimi xüsusi hal).
//? **Nümunə:**
let isEqual = Object.is(25, 25);
console.log(isEqual);  //? true

//* 16. **Object.isExtensible()**
//? Bu metod, obyektin əlavə edilməsinə icazə verib-vermədiyini yoxlayır (extend edilə bilərmi).
//? **Nümunə:**
let isExtensible = Object.isExtensible(person);
console.log(isExtensible);  //? true

//* 17. **Object.preventExtensions()**
//? Bu metod, obyektin əlavə edilməsini əngəlləyir (mövcud xüsusiyyətlər dəyişdirilə bilər).
//? **Nümunə:**
Object.preventExtensions(person);
let canAddProperty = Object.isExtensible(person);
console.log(canAddProperty);  //? false

//* 18. **Object.isSealed()**
//? Bu metod, obyektin sızdırılıb-sızdırılmadığını yoxlayır (yəni, yeni xüsusiyyətlər əlavə edilə bilməz, amma mövcud xüsusiyyətlər dəyişdirilə bilər).
//? **Nümunə:**
let isSealed = Object.isSealed(person);
console.log(isSealed);  //? false

//* 19. **Object.isFrozen()**
//? Bu metod, obyektin donmuş olub-olmaması (yəni, dəyişdirilə bilməz) barədə məlumat verir.
//? **Nümunə:**
let isFrozen = Object.isFrozen(person);
console.log(isFrozen);  //? false
