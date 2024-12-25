//* ES6 Array Methods (Array Metodları)
//? JavaScript-də çox sayda array (massiv) metodu mövcuddur.
//? React-də ən faydalı metodlardan biri `.map()` metodudur.

//* `.map()` metodu
//? `.map()` metodu bir array üzərində funksiyanı işə salmağa imkan verir.
//? Hər bir item (element) üçün müəyyən bir əməliyyat yerinə yetirilir və nəticədə yeni bir array qaytarılır.
//? React-də `.map()` metodu siyahılar yaratmaq üçün çox istifadə olunur.

//* `.map()` ilə siyahı yaratmaq
//? Bir array-in hər bir elementini istifadə edərək, yeni bir HTML elementi və ya komponenti yarada bilərsiniz.
//? Məsələn, biz `myArray` adlı bir array yaradaq və içindəki elementləri bir `<p>` tag-ı ilə ekrana yazdıraq.

//* Misal:
const myArray = ["alma", "banan", "portağal"]; // Burada `myArray` adlı bir array yaratdıq
//? `.map()` metodu ilə bu array-in hər bir elementini `<p>` etiketi ilə göstəririk.
const myList = myArray.map((item) => <p>{item}</p>);
//? Burada `myList` adında yeni bir array yaranacaq və içində `alma`, `banan`, `portağal` kimi hər bir element üçün bir `<p>` etiketi olacaq.

//* `map()` necə işləyir?
//? `.map()` metodu bir funksiya qəbul edir və bu funksiya array-dəki hər bir elementə tətbiq edilir.
//? Bu funksiya nəticə olaraq yeni bir array qaytarır, amma orijinal array dəyişmir.
//? `.map()` metodunun ən böyük üstünlüyü ondan ibarətdir ki, hər bir elementə eyni əməliyyatı tətbiq etmək çox asan olur.

//* Misal: Bütün məhsul adlarını böyük hərflərlə yazdıraq
const myArray1 = ["alma", "banan", "portağal"];
const upperCaseList = myArray1.map((item) => item.toUpperCase());
//? Burada `upperCaseList` adlı yeni bir array yaranır və içindəki bütün elementlər böyük hərflərlə olacaq: `ALMA`, `BANAN`, `PORTAĞAL`.

//* Nümunə istifadə vəziyyəti - React siyahıları
//? React-də `.map()` metodu daha çox siyahılar yaratmaq üçün istifadə olunur.
//? Məsələn, bir array-in içindəki məlumatları göstərmək üçün hər bir məlumatı bir React komponentinə çevirmək çox yayğındır.
//? Bununla React, dinamik olaraq məlumatları render edə bilir.

const fruitList = ["alma", "banan", "portağal"]; // Məlumatları saxlayan array

const fruitItems = fruitList.map((fruit) => {
  return <li>{fruit}</li>; // Hər bir meyvəni `<li>` etiketi ilə göstəririk
});

console.log(fruitItems); // Burada `fruitItems` array-ini görəcəksiniz ki, hər bir element bir `<li>` ilə əhatə olunub

//* `.map()` metodu ilə digər əməliyyatlar
//? `.map()` metodu sadəcə HTML elementi yaratmaqla qalmır. Siz istədiyiniz hər hansı bir əməliyyatı da edə bilərsiniz.
//? Məsələn, bir array-dəki rəqəmlərin hər birini iki dəfə böyütmək:

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
//? Burada `doubledNumbers` array-i yaranacaq və `numbers` array-in hər bir elementini iki dəfə böyüdəcək.

//* Nəticə
//? `.map()` metodu çox güclü və faydalı bir array metodudur, xüsusilə React-də komponentləri dinamik olaraq yaratmaq üçün.
//? Hər bir elementə bir funksiya tətbiq edərək, yeni array yaratmaq çox sadə və asandır.
//? React-də listləri yaratarkən və məlumatları dinamik olaraq göstərərkən `.map()` metodu əvəzsizdir.
