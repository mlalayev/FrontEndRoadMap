//* **JavaScript String Metodları**

/* JavaScript-də string metodları, mətnlərlə işləməyə imkan verir. 
   Bu metodlar, mətnləri manipulyasiya etmək, müəyyən bir hissəsini əldə etmək, dəyişdirmək və daha çox əməliyyatlar aparmaq üçün istifadə olunur. */

//* **1. `charAt()`**
//? Verilən indeksdəki hərfi qaytarır.
//? **Nümunə:**
let str = "JavaScript";
console.log(str.charAt(4)); //? "S"

//* **2. `charCodeAt()`**
//? Verilən indeksdəki hərfin Unicode dəyərini qaytarır.
//? **Nümunə:**
console.log(str.charCodeAt(4)); //? 83

//* **3. `concat()`**
//? Bir və ya bir neçə mətnin birləşdirilməsini təmin edir.
//? **Nümunə:**
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); //? "Hello World"

//* **4. `includes()`**
//? Mətnin müəyyən bir hissəsini tapmağa çalışır, varsa `true`, yoxdursa `false` qaytarır.
//? **Nümunə:**
console.log(str.includes("Script")); //? true
console.log(str.includes("Python")); //? false

//* **5. `indexOf()`**
//? Verilən mətnin indeksini qaytarır, əgər tapılarsa, tapılmazsa `-1` qaytarır.
//? **Nümunə:**
console.log(str.indexOf("S")); //? 4
console.log(str.indexOf("Python")); //? -1

//* **6. `lastIndexOf()`**
//? Verilən mətnin sonuncu indeksini tapır, tapılmazsa `-1` qaytarır.
//? **Nümunə:**
console.log("JavaScript is awesome".lastIndexOf("a")); //? 13

//* **7. `slice()`**
//? Verilən indeks aralığında mətni kəsir (başlangıç və son indeks daxil deyil).
//? **Nümunə:**
let str3 = "Hello World!";
console.log(str3.slice(0, 5)); //? "Hello"
console.log(str3.slice(6)); //? "World!"

//* **8. `substring()`**
//? Verilən başlanğıc və son indeksə əsaslanaraq mətnin bir hissəsini qaytarır. `slice()`-dən fərqi: `substring()` mənfi indeksləri qəbul etmir.
//? **Nümunə:**
console.log(str3.substring(0, 5)); //? "Hello"
console.log(str3.substring(6, 11)); //? "World"

//* **9. `toLowerCase()`**
//? Mətni kiçik hərflərlə qaytarır.
//? **Nümunə:**
console.log(str.toLowerCase()); //? "javascript"

//* **10. `toUpperCase()`**
//? Mətni böyük hərflərlə qaytarır.
//? **Nümunə:**
console.log(str.toUpperCase()); //? "JAVASCRIPT"

//* **11. `trim()`**
//? Mətndəki baş və son boşluqları silir.
//? **Nümunə:**
let str4 = "   Hello World!   ";
console.log(str4.trim()); //? "Hello World!"

//* **12. `split()`**
//? Verilən ayrıcıya əsasən mətni ayırır və massiv qaytarır.
//? **Nümunə:**
let str5 = "apple banana orange";
console.log(str5.split()); //? ["apple", "banana", "orange"]

//* **13. `replace()`**
//? Verilən mətni yeni bir mətnlə əvəz edir (ilk uyğunluğu dəyişir).
//? **Nümunə:**
let str6 = "I like JavaScript, JavaScript";
console.log(str6.replace("JavaScript", "Python")); //? "I like Python"

//* **14. `replaceAll()`**
//? Verilən mətndəki bütün uyğunluqları dəyişir (ES2021 ilə əlavə edilib).
//? **Nümunə:**
let str7 = "apple banana apple";
console.log(str7.replaceAll("apple", "orange")); //? "orange banana orange"

//* **15. `match()`**
//? Mətndə müntəzəm ifadəyə (regex) uyğun olan bütün uyğunluqları qaytarır.
//? **Nümunə:**
let str8 = "The rain in Spain stays mainly in the plain";
console.log(str8.match(/ain/g)); //? ["rain", "Spain", "plain"]

//* **16. `search()`**
//? Mətndə müntəzəm ifadəyə uyğunluğu axtarır və uyğunluğun ilk indeksini qaytarır.
//? **Nümunə:**
console.log(str8.search("Spain")); //? 12

//* **17. `startsWith()`**
//? Mətni müəyyən bir hissə ilə başlayıb-başlamadığını yoxlayır.
//? **Nümunə:**
console.log(str8.startsWith("The")); //? true

//* **18. `endsWith()`**
//? Mətni müəyyən bir hissə ilə bitib-bitmədiyini yoxlayır.
//? **Nümunə:**
console.log(str8.endsWith("plain")); //? true

//* **19. `fromCharCode()`**
//? Unicode dəyərlərini daxil edərək, onlara uyğun gələn simvolları qaytarır.
//? **Nümunə:**
console.log(String.fromCharCode(65, 66, 67)); //? "ABC"

//* **20. `localeCompare()`**
//? Mətni yerli dil qaydalarına uyğun olaraq müqayisə edir.
//? **Nümunə:**
let str9 = "apple";
console.log(str9.localeCompare("banana")); //? -1
console.log(str9.localeCompare("apple")); //? 0
console.log(str9.localeCompare("apricot")); //? 1

//* **Niyə String Metodları Lazımdır?**
//? - Mətni analiz etmək və manipulyasiya etmək.
//? - Axtarış, dəyişdirmə, yoxlama və formatlama əməliyyatlarını asanlaşdırmaq.
//? - Daha səmərəli və asan işləmə üçün stringlər üzərində əməliyyatları sadələşdirmək.
