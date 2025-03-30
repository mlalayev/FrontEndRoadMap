//* 3. Dərs – Set Data Structure (JavaScript)

//? **Set nədir?**
//? Set – unikal dəyərlər toplusudur. Yəni eyni dəyər bir neçə dəfə əlavə olunmur.
//? JavaScript-də Set obyektləri sırasız (unordered) və təkrarsız dəyərlər saxlayır.

//? **Set nə zaman istifadə olunur?**
//? - Təkrarlanan dəyərləri aradan qaldırmaq istəyirsənsə
//? - Məlumat üzərində "var ya yox" yoxlaması sürətli olmalıdırsa
//? - Array-lər içindəki unikal dəyərləri çıxarmaq üçün

//* --------------------------------------------
//* Set yaratmaq və əsas metodlar

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // təkrarlanır, amma əlavə olunmur
mySet.add("salam");

console.log(mySet); //? Set(3) {1, 2, "salam"}

mySet.delete(2); //? 2 silinir
console.log(mySet.has(1)); //? true (1 dəyəri mövcuddur?)
console.log(mySet.has(99)); //? false

mySet.clear(); //? bütün dəyərlər silinir
console.log(mySet.size); //? 0

//* --------------------------------------------
//* Array-dən unikal elementlər çıxarmaq üçün:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); //? [1, 2, 3, 4, 5]

//* --------------------------------------------
//* **Set metodlarının zaman mürəkkəbliyi (Time Complexity):**
//? - add(value): O(1)
//? - delete(value): O(1)
//? - has(value): O(1)
//? - clear(): O(1)
//? - iteration (for..of, spread və s.): O(n)

//* **Space Complexity:**
//? - Set-in tutduğu yaddaş: O(n), daxil etdiyin elementlərin sayından asılıdır

//* --------------------------------------------
//* **Set vs Array – nə vaxt hansını seçək?**

//? ✅ Set istifadə et:
//? - Unikal dəyərlər lazımdırsa
//? - contains/search əməliyyatları tez baş verməlidir

//? ❌ Array istifadə edərkən:
//? - includes(), indexOf() kimi metodlar O(n) zaman aparır
//? - təkrarlanan dəyərlər saxlanıla bilər

//* --------------------------------------------
//* **Set ilə maraqlı misal:** Kəlmədəki unikal hərfləri çıxart

function uniqueLetters(word) {
  return [...new Set(word)].join("");
}

console.log(uniqueLetters("muradlalayev")); //? "muradlyev"

//? Nəticə: Set JavaScript-də sadə, amma çox güclü data structure-dir.
//? Unikal məlumatı idarə etmək, təkrarı önləmək və axtarışı sürətli etmək üçün mükəmməldir.

//? Gələn dərsdə: Map – key/value strukturlu data structure ilə tanış olacağıq.F
