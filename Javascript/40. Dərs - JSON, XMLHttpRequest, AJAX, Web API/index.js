//* 40. Gün - JSON, XMLHttpRequest, AJAX, Web API

//? **JSON (JavaScript Object Notation) Nədir?**
//? JSON, məlumatları asanlıqla mübadilə etmək üçün istifadə edilən, yüngül bir məlumat mübadiləsi formatıdır. JSON, əsasən obyektləri və massivləri saxlamağa imkan verir.
//? JSON formatı, insanlar tərəfindən oxunaqlı və maşınlar tərəfindən parse (ayrılma) edilə bilən bir struktura malikdir.
//? JSON, xüsusilə server və müştəri (frontend) arasında məlumat mübadiləsi üçün geniş istifadə olunur.
//? JSON formatı aşağıdakı kimi təqdim edilir:
//? - Objekte `{}` ilə, massivlər isə `[]` ilə çevrilir.

let user = {
  name: "John",
  age: 30,
  city: "New York",
};

//? JSON formatında saxlanmış məlumat, yuxarıdakı obyektin təmsilidir:
//? {"name": "John", "age": 30, "city": "New York"}

//? JSON, string formatında saxlanır və JavaScript-də JSON obyektini əldə etmək üçün `JSON.parse()` metodu istifadə edilir,
//? və ya obyektləri JSON formatına çevirmək üçün `JSON.stringify()` istifadə olunur.

//* **Nümunə: JSON Parse və Stringify**:
let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let jsonObject = JSON.parse(jsonString); // JSON string-dən obyektə çevirmək
console.log(jsonObject.name); //? "John"

let jsonObject2 = { name: "Alice", age: 25 };
let jsonString2 = JSON.stringify(jsonObject2); // Obyekti JSON string-ə çevirmək
console.log(jsonString2); //? '{"name":"Alice","age":25}'

//? **Nəticə**: JSON, məlumatları yüngül və asanlıqla mübadilə edə bilən bir formatda saxlamağa imkan verir.

//* **XMLHttpRequest Nədir?**
//? `XMLHttpRequest` (XHR), veb səhifəsinin serverlə əlaqə qurmasına və serverdən məlumat almasına imkan verən JavaScript obyektidir.
//? XHR, AJAX ilə əlaqələndirilir və JavaScript istifadə edərək asenkron HTTP sorğuları göndərməyə və cavabları almağa imkan verir.
//? `XMLHttpRequest` əsasında məlumatı göndərmək və qəbul etmək üçün istifadə olunur, amma çox zaman müasir tətbiqlərdə fetch API və ya axios kimi kitabxanalar üstünlük təşkil edir.

//* **Nümunə: XMLHttpRequest ilə HTTP Sorğusu Göndərmək**:
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true); // GET sorğusu göndəririk
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText); // Serverdən gələn cavab
  }
};
xhr.send(); // Sorğunu göndəririk

//? **Nəticə**: `XMLHttpRequest`, HTTP sorğularını göndərməyə və cavabları almağa imkan verən JavaScript obyektidir. Müasir veb tətbiqlərində daha yeni metodlar (fetch və s.) istifadə edilir.

//* **AJAX (Asynchronous JavaScript and XML) Nədir?**
//? AJAX, veb səhifələrinin asenkron şəkildə serverlə əlaqə qurmasına imkan verən bir texnologiyadır. Bu texnologiya, səhifə yenilənmədən serverdən məlumat alıb istifadəçiyə göstərməyə imkan verir.
//? AJAX, əsasən `XMLHttpRequest` və ya müasir `fetch API` ilə həyata keçirilir. Bu texnologiya veb tətbiqlərinin daha interaktiv və sürətli olmasını təmin edir.
//? AJAX ilə səhifənin tam yenilənməsi yerinə, yalnız lazımi məlumatlar yüklənir və səhifə yenilənməz.

//* **Nümunə: AJAX ilə Sorğu Göndərmək**:
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    let posts = JSON.parse(xhr.responseText); // JSON cavabı parse etmək
    console.log(posts); // Serverdən gələn məlumat
  }
};
xhr.send(); // Sorğu göndərilir

//? **Nəticə**: AJAX, veb səhifələrin serverlə əlaqə qurmasına imkan verir və məlumat mübadiləsi səhifəni yeniləmədən həyata keçirilir. Bu da istifadəçi təcrübəsini artırır.

//* **Web API Nədir?**
//? Web API, veb brauzerlərinin və serverlərin istifadə edə biləcəyi geniş funksionallıqları təmsil edən tətbiq proqramlaşdırma interfeysidir.
//? Web API-lər, istifadəçilərin interaktiv veb tətbiqləri yaratmasına imkan verir və JavaScript vasitəsilə bu API-lərdən istifadə edilir.
//? Web API-lər müxtəlif funksionallıqlar təklif edir: DOM manipulyasiyaları, müstəqil məlumat bazaları, media sorğuları, istifadəçi yerini tapmaq və s.
//? Web API-lərin ən geniş istifadə olunan nümunələri aşağıdakılardır:
//? - `fetch API` - HTTP sorğuları göndərmək üçün istifadə olunur
//? - `localStorage` və `sessionStorage` - müvəqqəti məlumat saxlamaq üçün istifadə olunur

//? **Nəticə**: Web API-lər, JavaScript ilə müxtəlif brauzer xüsusiyyətlərini istifadə etməyə imkan verir və veb tətbiqlərinin funksionallığını artırır.
