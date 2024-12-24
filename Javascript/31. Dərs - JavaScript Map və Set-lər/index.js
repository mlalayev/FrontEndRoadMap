//* 31. Gün - JavaScript Map və Set-lər

//? **Map və Set Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də `Map` və `Set` obyektləri yeni məlumat strukturlarıdır.
//? Bu obyektlər, daha effektiv verilənlər manipulyasiyası və məlumatın saxlanması üçün nəzərdə tutulub.
//? **Map**, açar-qiymət cütlərini (key : value) saxlayır, **Set** isə unikal dəyərləri saxlayır. Hər iki obyekt də yeni və daha səmərəli metodlarla gəlir.

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
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set(1, "one");
myMap.set(true, "isTrue");

// Açar-Qiymət Cütlərini oxumaq
console.log(myMap.get("name")); //? "John"
console.log(myMap.get(1)); //? "one"

// Açarın olub-olmamasını yoxlamaq
console.log(myMap.has("age")); //? true
console.log(myMap.has("gender")); //? false

// Silmək
myMap.delete("age");
console.log(myMap.has("age")); //? false

// Map ölçüsünü öyrənmək
console.log(myMap.size); //? 3 (Silindikdən sonra ölçü)

//* **3. Digər Faydalı Map Metodları**

// Map-də bütün açarları əldə etmək
console.log([...myMap.keys()]); //? ['name', 1, true]

// Map-də bütün dəyərləri əldə etmək
console.log([...myMap.values()]); //? ['John', 'one', 'isTrue']

// Map-də açar-qiymət cütlərini əldə etmək
console.log([...myMap.entries()]); //? [['name', 'John'], [1, 'one'], [true, 'isTrue']]

// Bütün Map-i iterasiya etmək
for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
  //? name => John
  //? 1 => one
  //? true => isTrue
}

// Map-i tamamilə təmizləmək
myMap.clear();
console.log(myMap.size); //? 0 (Map tamamilə təmizləndi)

// Map-i array-a çevirmək
const mapArray = Array.from(myMap);
console.log(mapArray); //? []

// Map-lə birbaşa array yaradan metod
const anotherMap = new Map([
  ["color", "blue"],
  ["size", "large"],
]);
console.log(anotherMap); //? Map(2) {"color" => "blue", "size" => "large"}

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
mySet.add(2); //? Bu təkrarlanacaq, çünki Set yalnız unikal dəyərləri saxlayır

// Dəyərləri oxumaq
console.log(mySet.has(1)); //? true
console.log(mySet.has(4)); //? false

// Dəyər silmək
mySet.delete(3);
console.log(mySet.has(3)); //? false

// Set ölçüsünü öyrənmək
console.log(mySet.size); //? 2 (3 silindikdən sonra ölçü)

// Set üzərində iterasiya
mySet.forEach((value) => console.log(value));
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
mySet.forEach((value) => {
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

// Set
// Set, elementlərin toplusudur. Set yalnız unikal elementlərdən ibarət ola bilər. Aşağıda set yaratmaq üsuluna baxaq.

// Boş bir set yaratmaq
const companies2 = new Set();
console.log(companies); // Set(0) {}

// Array-dən set yaratmaq
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); // Set(4) {"English", "Finnish", "French", "Spanish"}

// Set, iterasiya edilə bilən bir obyekt olduğu üçün elementlər üzərində iterasiya edə bilərik.
const languages3 = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages1 = new Set(languages);

for (const language of setOfLanguages) {
  console.log(language); // English, Finnish, French, Spanish
}

// Set-ə element əlavə etmək
const companies = new Set(); // boş set yaratmaq
console.log(companies.size); // 0

companies.add("Google"); // set-ə element əlavə etmək
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 element var
console.log(companies); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Həmçinin, dövr istifadə edərək set-ə element əlavə edə bilərik.
const companies1 = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Set-dən element silmək
// Set-dən element silmək üçün delete metodundan istifadə edə bilərik.
console.log(companies.delete("Google"));
console.log(companies.size); // 4 element qaldı set-də

// Set-də elementin olub-olmamasını yoxlamaq
// has metodu bir elementin set-də olub-olmamasını yoxlamağa kömək edir.
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

// Set-i təmizləmək
// Bu metod bütün elementləri set-dən silir.
companies.clear();
console.log(companies); // Set(0) {}

// Aşağıdakı nümunəyə baxaraq set istifadə etməyi öyrənin.
const languages1 = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts); // [{ lang: 'English', count: 3 }, { lang: 'Finnish', count: 1 }, { lang: 'French', count: 2 }, { lang: 'Spanish', count: 1 }]

// Digər set istifadə nümunəsi: Məsələn, array-də unikal elementləri saymaq.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers); // Set(5) {5, 3, 2, 9, 4}

// Set-lərin birləşməsi (Union of sets)
// İki set-in birləşməsini tapmaq üçün spread operatorunu istifadə edə bilərik. A və B setlərinin birləşməsi (A U B).
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); // Set(6) {1, 2, 3, 4, 5, 6}

// Set-lərin kəsişməsi (Intersection of sets)
// İki set-in kəsişməsini tapmaq üçün filter metodunu istifadə edə bilərik. A və B setlərinin kəsişməsi (A ∩ B).
let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a);
let B2 = new Set(b);

let c2 = a.filter((num) => B.has(num));
let C2 = new Set(c);

console.log(C); // Set(3) {3, 4, 5}

// Set-lərin fərqi (Difference of sets)
// İki set-in fərqini tapmaq üçün filter metodunu istifadə edə bilərik. A və B setlərinin fərqi (A \ B).
let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let A1 = new Set(a);
let B1 = new Set(b);

let c1 = a.filter((num) => !B.has(num));
let C1 = new Set(c);

console.log(C); // Set(2) {1, 2}

// Map
// Boş bir Map yaratmaq
const map = new Map();
console.log(map); // Map(0) {}

// Array-dən Map yaratmaq
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map1 = new Map(countries);
console.log(map); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size); // 3

// Map-ə dəyərlər əlavə etmək
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size); // 3

// Map-dən dəyər almaq
console.log(countriesMap.get("Finland")); // Helsinki

// Map-də açarın olub-olmamasını yoxlamaq
// has metodu bir açarın map-də olub-olmamasını yoxlamağa kömək edir.
console.log(countriesMap.has("Finland")); // true

// Map-dən bütün dəyərləri dövr ilə almaq
for (const country of countriesMap) {
  console.log(country); // ["Finland", "Helsinki"], ["Sweden", "Stockholm"], ["Norway", "Oslo"]
}

for (const [country, city] of countriesMap) {
  console.log(country, city); // Finland Helsinki, Sweden Stockholm, Norway Oslo
}
