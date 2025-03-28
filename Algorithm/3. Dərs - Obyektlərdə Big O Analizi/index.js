//* 3. Obyektlərdə Big O Analizi

//? **Obyektlərdə Big O Nədir?**
//? JavaScript-də obyektlər (Objects), açar-dəyər (key-value) cütlərindən ibarət olan məlumat strukturlarıdır.
//? Algoritm analizində obyekt əməliyyatlarının sürətini ölçmək üçün Big O notasiya sistemindən istifadə edilir.

//? **Obyektlərdə Əməliyyatların Vaxt Mürəkkəbliyi:**
//? - **O(1) - Sabit vaxt**: Açar üzrə dəyəri əldə etmək və ya əlavə etmək sürətlidir.
//? - **O(n) - Xətti vaxt**: Obyektin bütün açarlarını əldə etmək və ya axtarış etmək lazımdırsa.

//* **1. Obyektlərdə Əsas Əməliyyatların Analizi**
//? **1.1 - Açar üzrə dəyər əldə etmək (O(1))**
const user = { name: "Murad", age: 23, country: "Azerbaijan" };
console.log(user.name); //? "Murad"

//? **1.2 - Yeni açar əlavə etmək (O(1))**
user.email = "murad@example.com";
console.log(user);

//? **1.3 - Açarı silmək (O(1))**
delete user.age;
console.log(user);

//* **2. Obyekt Açarlarının və Dəyərlərinin Alınması (O(n))**
//? Obyektin bütün açarlarını və ya dəyərlərini əldə etmək üçün `Object.keys()`, `Object.values()` və `Object.entries()` metodlarından istifadə olunur.
const keys = Object.keys(user);
console.log(keys); //? ["name", "country", "email"]

const values = Object.values(user);
console.log(values); //? ["Murad", "Azerbaijan", "murad@example.com"]

const entries = Object.entries(user);
console.log(entries); //? [["name", "Murad"], ["country", "Azerbaijan"], ["email", "murad@example.com"]]

//? **Bu əməliyyatlar O(n) mürəkkəbliyinə malikdir, çünki obyektin bütün açarlarını və ya dəyərlərini oxumaq lazımdır.**

//* **3. Obyektlərdə Dövr və Axtarış Əməliyyatları**
//? **3.1 - For...in Dövrü ilə Açarları Gəzmək (O(n))**
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//? **3.2 - Obyekt Daxilində Dəyəri Axtarmaq (O(n))**
function searchValue(obj, value) {
  return Object.values(obj).includes(value);
}
console.log(searchValue(user, "Murad")); //? true