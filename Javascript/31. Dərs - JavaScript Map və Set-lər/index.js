//* 31. Gün - JavaScript Map və Set-lər

//? **Map və Set Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də `Map` və `Set` obyektləri yeni məlumat strukturlarıdır. 
//? Bu obyektlər, daha effektiv verilənlər manipulyasiyası və məlumatın saxlanması üçün nəzərdə tutulub.
//? **Map**, açar-qiymət cütlərini saxlayır, **Set** isə unikal dəyərləri saxlayır. Hər iki obyekt də yeni və daha səmərəli metodlarla gəlir.


//* **1. Map (Açar-Qiymət Cütləri)**
//? `Map` obyektləri açar-qiymət cütləri saxlayır. `Map`, obyektlərdən fərqli olaraq hər hansı bir tipdə açar qəbul edə bilər. Bu, istədiyiniz məlumatı daha çevik şəkildə saxlamağa imkan verir.
//? **Map**-in xüsusiyyətləri:
//? - Açarlar hər hansı bir növ ola bilər (obyektlər, array-lar, primitivlər və s.)
//? - Əsasən məlumatı daha sürətli əldə etmək üçün istifadə edilir.
//? - **Set**-ə oxşar olaraq, `Map` təkrarlama və iterasiya əməliyyatları üçün daha güclüdür.

//* **2. Map Təyin Edilməsi və İstifadəsi**
//? `Map` yaratmaq üçün `new Map()` istifadə olunur. 
//? Map üzərindəki məlumatlara `set()`, `get()`, `has()`, və `delete()` metodları ilə daxil ola bilərsiniz.

//* **Nümunə:**
const myMap = new Map();

// Açar-Qiymət Cütləri əlavə etmək
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(1, 'one');
myMap.set(true, 'isTrue');

// Açar-Qiymət Cütlərini oxumaq
console.log(myMap.get('name')); //? "John"
console.log(myMap.get(1));      //? "one"

// Açarın olub-olmamasını yoxlamaq
console.log(myMap.has('age'));  //? true
console.log(myMap.has('gender'));  //? false

// Silmək
myMap.delete('age');
console.log(myMap.has('age'));  //? false

// Map ölçüsünü öyrənmək
console.log(myMap.size);  //? 3 (Silindikdən sonra ölçü)


//* **3. Set (Unikal Dəyərlər)**
//? `Set`, yalnız unikal dəyərləri saxlayır. Bu, təkrarlanan elementlərdən qaçmağa kömək edir.
//? **Set**-in xüsusiyyətləri:
//? - Yalnız bir dəfə təkrarlanmayan dəyərləri saxlayır.
//? - Array-lərdən fərqli olaraq, bir element yalnız bir dəfə daxil ola bilər.
//? - Dəyərlərə daxil olmaq üçün **has()**, əlavə etmək üçün **add()**, silmək üçün **delete()**, və ölçünü öyrənmək üçün **size** xüsusiyyətindən istifadə olunur.

//* **4. Set Təyin Edilməsi və İstifadəsi**
//? `Set` yaratmaq üçün `new Set()` istifadə olunur. Set obyektində olan elementlər yalnız unikal olmalıdır.

//* **Nümunə:**
const mySet = new Set();

// Dəyərləri əlavə etmək
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);  //? Bu təkrarlanacaq, çünki Set yalnız unikal dəyərləri saxlayır

// Dəyərləri oxumaq
console.log(mySet.has(1));  //? true
console.log(mySet.has(4));  //? false

// Dəyər silmək
mySet.delete(3);
console.log(mySet.has(3));  //? false

// Set ölçüsünü öyrənmək
console.log(mySet.size);  //? 2 (3 silindikdən sonra ölçü)

// Set üzərində iterasiya
mySet.forEach(value => console.log(value));
//? Output:
//? 1
//? 2


//* **5. Map və Set Üzərində Iterasiya**
//? Həm `Map`, həm də `Set`, üzərində iterasiya etmək üçün bir neçə metod təmin edir.

//* **Map Üzərində Iterasiya**:
//? `Map` obyektində açar-qiymət cütlərini əldə etmək üçün `forEach()`, `for...of` döngüsü və ya `entries()`, `keys()`, `values()` metodları istifadə edilə bilər.
//? **Nümunə:**
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
//? Output:
//? "name: John"
//? "1: one"
//? "true: isTrue"

//* **Set Üzərində Iterasiya**:
//? `Set` obyektində yalnız unikal dəyərlər olduğu üçün, bu obyektin üzərində iterasiya etmək asandır.
//? `forEach()` və ya `for...of` döngüsünü istifadə edərək Set üzərində iterasiya edə bilərsiniz.
//? **Nümunə:**
mySet.forEach(value => {
    console.log(value);
});
//? Output:
//? 1
//? 2

//* **6. Map vs Set Fərqləri**:
//? - `Map` obyektində açar-qiymət cütləri saxlanılır, amma `Set` yalnız unikal dəyərlər saxlayır.
//? - `Map`-də açarlar istənilən növ ola bilər (primitivlər, obyektlər və s.), amma `Set` yalnız unikal dəyərləri saxlayır.
//? - `Set`-də təkrarlanan dəyərlər yoxdur, `Map`-də isə eyni açara fərqli qiymətlər təyin edilə bilər.
//? - `Map` daha çox açar-qiymət cütləri ilə işləyir, `Set` isə yalnız unikal dəyərlərlə işləyir.

