//* 34. Gün - JavaScript Obyektləri və Yeni Söz Dizimləri: Destructuring, Spread, Rest, Array Destructuring

//? **Destructuring (Şəkilləndirmə)**
//? Destructuring, bir obyekt və ya massivdən verilənləri sadə və təmiz şəkildə çıxarmağa imkan verir. Bu, obyekt və massivlərin xüsusiyyətlərini dəyişkənlərə təyin etməyi asanlaşdırır.

//* **1. Obyekt Destructuring**
//? Obyektlərdən xüsusiyyətləri çıxarmaq üçün `destructuring` istifadə olunur.
//? **Sintaksis:**
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Destructuring ilə obyektin xüsusiyyətlərini əldə etmək
const { name, age, city } = person;
console.log(name);  //? "John"
console.log(age);   //? 30
console.log(city);  //? "New York"

//? **2. Dəyişənləri Yenidən Adlandırmaq**
//? Obyektin açarlarını dəyişkən adları ilə uyğunlaşdırmaq üçün `:` istifadə edilir.
//? **Sintaksis:**
const { name: fullName, age: personAge, city: cityName } = person;
console.log(fullName);   //? "John"
console.log(personAge);  //? 30
console.log(cityName);   //? "New York"

//* **3. Varsayılan Dəyərlər**
//? Əgər obyektin açarlarından biri mövcud deyilsə, ona varsayılan dəyər təyin edilə bilər.
//? **Sintaksis:**
`const { name, age, country = "USA" } = person;`
console.log(country);  //? "USA"

//* **4. Nested (Yuva) Obyektlər**
//? Obyektlər iç içə ola bilər və destructuring ilə yuva obyektlərdən məlumat çıxarmaq mümkündür.
//? **Sintaksis:**
const employee = {
    id: 1,
    name: "Alice",
    address: {
        city: "San Francisco",
        state: "CA"
    }
};

// Nested destructuring
`const { name1, address: { city, state } } = employee;`
console.log(city);  //? "San Francisco"
console.log(state); //? "CA"

//* **5. Spread Operator (`...`) ilə Obyektləri Yaymaq**
//? Spread operatoru obyektin bütün xüsusiyyətlərini bir başqa obyektə yaymağa imkan verir.
//? **Sintaksis:**
const newPerson = { ...person, country: "Canada" };
console.log(newPerson);  //? { name: "John", age: 30, city: "New York", country: "Canada" }

//* **6. Rest Operator (`...`) ilə Obyektdən Qalan Xüsusiyyətləri Yığmaq**
//? Rest operatoru, obyektin müəyyən xüsusiyyətlərini çıxarmağa və qalan xüsusiyyətləri bir obyektə yığmağa imkan verir.
//? **Sintaksis:**
`const { name, ...otherDetails } = person;`
console.log(otherDetails);  //? { age: 30, city: "New York" }

//* **7. Yeni Obyektlər Yaratmaq - Object.assign()**
//? `Object.assign()` metodu, bir neçə obyektin xüsusiyyətlərini birləşdirərək yeni bir obyekt yaradır.
//? **Sintaksis:**
const obj1 = { name: "John" };
const obj2 = { age: 25 };
const obj3 = { city: "Paris" };

// Yeni obyekt yaratmaq
const mergedObject = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObject);  //? { name: "John", age: 25, city: "Paris" }


//* **8. Array Destructuring (Massiv Şəkilləndirmə)**
//? Massivlərdən verilənləri çıxarmaq üçün də destructuring istifadə olunur.
//? **Sintaksis:**
const numbers = [10, 20, 30];

// Array destructuring
const [first, second, third] = numbers;
console.log(first);  //? 10
console.log(second); //? 20
console.log(third);  //? 30

//* **9. Array Destructuring ilə Varsayılan Dəyərlər**
//? Massiv elementləri varsa, amma bir neçə element mövcud deyilsə, varsayılan dəyərlər təyin edilə bilər.
//? **Sintaksis:**
const numbers2 = [10, 20];

const [first2, second2, third2 = 30] = numbers2;
console.log(third2);  //? 30  (varsayılan dəyər)


//* **10. Spread Operator (`...`) ilə Massivləri Yaymaq**
//? Spread operatoru massivləri birləşdirmək və ya kopyalamaq üçün istifadə olunur.
//? **Sintaksis:**
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);  //? [1, 2, 3, 4, 5, 6]

//* **11. Rest Operator (`...`) ilə Massivləri Toplamaq**
//? Rest operatoru massivdən bəzi elementləri çıxarmağa və qalanını bir massivi daxil etməyə imkan verir.
//? **Sintaksis:**
const [first3, second3, ...rest] = numbers;
console.log(rest);  //? [30] (qalan elementlər)

//* **12. Spread Operator ilə Massivlərdən Yeni Elementlər Yaratmaq**
//? Spread operatoru ilə mövcud massivə yeni elementlər əlavə etmək mümkündür.
//? **Sintaksis:**
const arr3 = [1, 2, 3];
const arr4 = [...arr3, 4, 5];
console.log(arr4);  //? [1, 2, 3, 4, 5]

