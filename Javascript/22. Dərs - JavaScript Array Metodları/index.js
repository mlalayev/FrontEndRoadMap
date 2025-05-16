//* 23. Gün - JavaScript Array Metodları

//? **Array Metodları Nədir və Nə Üçün Lazımdır?**
//? JavaScript Array metodları, massivlər üzərində əməliyyatlar aparmaq üçün istifadə edilir.
//? Bu metodlar, massiv elementlərini manipulyasiya etmək, elementləri əlavə etmək, silmək, dəyişdirmək, tapmaq və s. üçün çox faydalıdır.

//* **Array Metodlarının Tam Siyahısı və Təsvirləri**:

//* 1. **Array.push()**
//? Bu metod, massivə bir və ya bir neçə yeni element əlavə edir və yeni massiv uzunluğunu qaytarır.
//? **Nümunə:**
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); //? ["apple", "banana", "orange"]

//* 2. **Array.pop()**
//? Bu metod, massivdən sonuncu elementi silir və silinən elementi qaytarır.
//? **Nümunə:**
let lastFruit = fruits.pop();
console.log(fruits); //? ["apple", "banana"]
console.log(lastFruit); //? "orange"

//* 3. **Array.shift()**
//? Bu metod, massivdən ilk elementi silir və silinən elementi qaytarır.
//? **Nümunə:**
let firstFruit = fruits.shift();
console.log(fruits); //? ["banana"]
console.log(firstFruit); //? "apple"

//* 4. **Array.unshift()**
//? Bu metod, massivə bir və ya bir neçə yeni elementin əvvəlinə əlavə edir və yeni massiv uzunluğunu qaytarır.
//? **Nümunə:**
fruits.unshift("grape");
console.log(fruits); //? ["grape", "banana"]

//* 5. **Array.concat()**
//? Bu metod, iki və ya daha çox massiv və ya elementləri birləşdirir və yeni bir massiv qaytarır.
//? **Nümunə:**
let vegetables = ["carrot", "lettuce"];
let allItems = fruits.concat(vegetables);
console.log(allItems); //? ["grape", "banana", "carrot", "lettuce"]

//* 6. **Array.join()**
//? Bu metod, massiv elementlərini birləşdirərək bir mətnə çevirir və onu qaytarır.
//? Ayrıcı olaraq da parametr qəbul edir (default: "," - vergül).
//? **Nümunə:**
let fruitString = fruits.join(" - ");
console.log(fruitString); //? "grape - banana"

//* 7. **Array.slice()**
//? Bu metod, massivdən müəyyən bir aralıqdakı elementləri qaytarır (başlangıc və bitiş indeksi daxil edilməyəcək).
//? **Nümunə:**
let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); //? ["banana"]

//* 8. **Array.splice()**
//? Bu metod, massivdən elementlər silir və yeni elementlər əlavə edir. Başlangıc indeksi və dəyişdiriləcək saydakı elementlər lazımdır.
//? **Nümunə:**
fruits.splice(1, 1, "orange", "pear");
console.log(fruits); //? ["grape", "orange", "pear"]

//* 9. **Array.indexOf()**
//? Bu metod, massivdə müəyyən bir elementin ilk indeksini qaytarır. Element tapılmazsa -1 qaytarır.
//? **Nümunə:**
let index = fruits.indexOf("orange");
console.log(index); //? 1

//* 10. **Array.lastIndexOf()**
//? Bu metod, massivdə müəyyən bir elementin sonuncu indeksini qaytarır.
//? **Nümunə:**
let lastIndex = fruits.lastIndexOf("orange");
console.log(lastIndex); //? 1

//* 11. **Array.includes()**
//? Bu metod, massivdə müəyyən bir elementin olub-olmamasını yoxlayır. True və ya false qaytarır.
//? **Nümunə:**
let containsGrape = fruits.includes("grape");
console.log(containsGrape); //? true

//* 12. **Array.forEach()**
//? Bu metod, massiv üzərindəki hər bir elementi təkrarlamaq üçün bir funksiya qəbul edir. Heç bir şey qaytarmır.
//? **Nümunə:**
fruits.forEach((fruit) => {
  console.log(fruit);
});

//* 13. **Array.map()**
//? Bu metod, massivdəki hər bir elementi bir funksiya ilə dəyişdirir və yeni bir massiv qaytarır.
//? **Nümunə:**
let fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); //? [5, 6, 4]

//* 14. **Array.filter()**
//? Bu metod, massivdən müəyyən şərtə uyğun elementləri seçir və yeni bir massiv qaytarır.
//? **Nümunə:**
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); //? ["orange"]

//* 15. **Array.reduce()**
//? Bu metod, massivdəki elementləri birləşdirir (toplama, çıxarma və s.). İlk parametr akkumulyatordur (və ya başlanğıc dəyəridir).
//? **Nümunə:**
let totalLength = fruits.reduce(
  (accumulator, currentValue) => accumulator + currentValue.length,
  0
);
console.log(totalLength); //? 15

//* 16. **Array.reduceRight()**
//? Bu metod, reduce ilə eyni şəkildə işləyir, amma massiv elementləri sağdan sola doğru təkrarlanır.
//? **Nümunə:**
let reverseTotalLength = fruits.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue.length,
  0
);
console.log(reverseTotalLength); //? 15

//* 17. **Array.some()**
//? Bu metod, massivdəki ən azı bir elementin şərtə uyğun olub-olmaması ilə əlaqəli bir boolean qiymət qaytarır.
//? **Nümunə:**
let hasLongFruit = fruits.some((fruit) => fruit.length > 5);
console.log(hasLongFruit); //? true

//* 18. **Array.every()**
//? Bu metod, massivdəki bütün elementlərin şərtə uyğun olub-olmaması ilə əlaqəli bir boolean qiymət qaytarır.
//? **Nümunə:**
let allLongFruits = fruits.every((fruit) => fruit.length > 3);
console.log(allLongFruits); //? true

//* 19. **Array.find()**
//? Bu metod, massivdəki ilk uyğun elementini qaytarır (tapılmazsa undefined qaytarır).
//? **Nümunə:**
let foundFruit = fruits.find((fruit) => fruit.length > 5);
console.log(foundFruit); //? "orange"

//* 20. **Array.findIndex()**
//? Bu metod, massivdəki ilk uyğun elementin indeksini qaytarır (tapılmazsa -1 qaytarır).
//? **Nümunə:**
let foundIndex = fruits.findIndex((fruit) => fruit.length > 5);
console.log(foundIndex); //? 1

//* 21. **Array.sort()**
//? Bu metod, massiv elementlərini ardıcıllıqla sıralayır. Bu metodda parametr olaraq müqayisə funksiyası istifadə edilə bilər.
//? **Nümunə:**
let sortedFruits = fruits.sort();
console.log(sortedFruits); //? ["grape", "orange", "pear"]

//* 22. **Array.reverse()**
//? Bu metod, massiv elementlərini tərsinə çevirir.
//? **Nümunə:**
let reversedFruits = fruits.reverse();
console.log(reversedFruits); //? ["pear", "orange", "grape"]

//* 23. **Array.copyWithin()**
//? Bu metod, massivdə müəyyən bir hissəni özündə surət edir və həmin hissəni başqa bir yerə kopyalayır.
//? **Nümunə:**
let copiedFruits = fruits.copyWithin(0, 1, 2);
console.log(copiedFruits); //? ["orange", "orange", "grape"]

//* 24. **Array.fill()**
//? Bu metod, massivdəki bütün elementləri müəyyən bir dəyərlə doldurur.
//? **Nümunə:**
let filledFruits = new Array(3).fill("banana");
console.log(filledFruits); //? ["banana", "banana", "banana"]

//* 25. **Array.from()**
//? Bu metod, bir obyektin massivə çevrilməsini təmin edir (məsələn, NodeList və ya Set).
//? **Nümunə:**
let arrayFromString = Array.from("hello");
console.log(arrayFromString); //? ["h", "e", "l", "l", "o"]

//* 26. **Array.keys()**
//? Bu metod, massiv elementlərinin açarlarını (indekslərini) qaytarır.
//? **Nümunə:**
let keys = fruits.keys();
console.log([...keys]); //? [0, 1, 2]

//* 27. **Array.values()**
//? Bu metod, massiv elementlərinin dəyərlərini qaytarır.
//? **Nümunə:**
let values = fruits.values();
console.log([...values]); //? ["pear", "orange", "grape"]

//* 28. **Array.entries()**
//? Bu metod, massivdəki hər bir elementin açar/dəyər cütlərini qaytarır.
//? **Nümunə:**
let entries = fruits.entries();
console.log([...entries]); //? [[0, "pear"], [1, "orange"], [2, "grape"]]
