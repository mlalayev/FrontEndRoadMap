// Yüksək Səviyyəli Funksiyalar və Geri Çağırma Funksiyaları

// Geri çağırma funksiyası - başqa bir funksiyaya parametr olaraq ötürülür
const callback = (n) => {
  return n ** 2;
};

// Yüksək səviyyəli funksiya, geri çağırma funksiyasını qəbul edir
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3)); // Çıxış: 27

// Funksiya geri döndərir: Yüksək səviyyəli funksiya digər bir funksiyanı geri qaytarır
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10)); // Çıxış: 26

// Geri çağırmaların istifadə olunduğu yerlərdən biri forEach metodudur
const numbers6 = [1, 2, 3, 4, 5];
const sumArray1 = (arr) => {
  let sum = 0;
  // forEach-ə ötürülən geri çağırma funksiyası
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback); // forEach hər element üçün callback-i icra edir
  return sum;
};

console.log(sumArray(numbers)); // Çıxış: 15
// Yuxarıdakı nümunə aşağıdakı kimi sadələşdirilə bilər
const numbers5 = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};

console.log(sumArray(numbers)); // Çıxış: 15

// Zaman təyini
// JavaScript-də müəyyən bir müddət ərzində bəzi fəaliyyətləri yerinə yetirə bilərik və ya fəaliyyətləri müəyyən bir müddət gözləyərək icra edə bilərik.

// setInterval
// setInterval funksiyası ilə müəyyən bir vaxt aralığında bir fəaliyyəti təkrarlaya bilərik.
function sayHello() {
  console.log("Salam");
}
setInterval(sayHello, 1000); // Hər saniyə 'Salam' yazdırır, 1000ms 1 saniyədir

// setTimeout
// setTimeout funksiyası müəyyən bir zaman sonra bir fəaliyyəti icra edər.
function sayHelloDelayed() {
  console.log("2 saniyədən sonra Salam");
}
setTimeout(sayHelloDelayed, 2000); // 2 saniyə sonra 'Salam' yazdırır

// Funksional Proqramlaşdırma
// JavaScript-in ən son versiyası, mürəkkəb problemləri həll etmək üçün çoxsaylı daxili metodlar təqdim etdi. Bütün daxili metodlar geri çağırma funksiyaları alır.

// forEach
// forEach: Massiv elementlərini iterasiya etmək üçün istifadə olunur. Yalnız massivlər üçün istifadə olunur. Bir geri çağırma funksiyasını, element, index və massiv özü ilə qəbul edir.
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});

// Yuxarıdakı kodu ox qrafiki ilə yazmaq olar
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});

// Yuxarıdakı kodu ox qrafiki ilə və açıq return ilə yazmaq olar
arr.forEach((element, index, arr) => console.log(index, element, arr));

let sum2 = 0;
const numbers3 = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum); // Çıxış: 1, 2, 3, 4, 5`; // Massiv üzərində ümumi cəm hesablama
let sum1 = 0;
const numbers4 = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));

console.log(sum); // Çıxış: 15

// Countries massivindəki hər bir ölkəni böyük hərflə yazdırır
const countries2 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));
// map
// map: Massiv elementlərini iterasiya edir və onları dəyişdirir. Yeni bir massiv qaytarır.
const numbers2 = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare); // Çıxış: [1, 4, 9, 16, 25]

// Massiv üzərindəki hər bir adı böyük hərflərlə çevirir
const names3 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase); // Çıxış: ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

// ölkələri böyük hərflərlə çevirir
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// ölkələrin ilk 3 hərfini çıxarır
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);
console.log(countriesFirstThreeLetters); // Çıxış: ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]

// filter
// filter: Şərtləri ödəyən elementləri filtr edərək yeni bir massiv qaytarır.
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand); // Çıxış: ['Finland', 'Ireland']

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia); // Çıxış: ['Albania', 'Bolivia', 'Ethiopia']

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters); // Çıxış: ['Japan', 'Kenya']
// Reduce
// reduce: Bir akkumulasiya funksiyası alır və nəticəni bir dəyərə endirir.
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Çıxış: 15

// every
// every: Bütün elementlərin eyni xüsusiyyətə sahib olub olmadığını yoxlayır və boolean dəyər qaytarır.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string"); // Hamısı stringdirmi?
console.log(areAllStr); // Çıxış: true

// some
// some: Bəzi elementlərin müəyyən bir xüsusiyyətə sahib olub olmadığını yoxlayır və boolean dəyər qaytarır.
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue); // Çıxış: true

// sort
// sort: Massiv elementlərini ardıcıl olaraq sıralayır.
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // Çıxış: ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

// Sayıların sıralanması
const numbers = [9.81, 3.14, 100, 37];
console.log(numbers.sort()); // Yanlış nəticə

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // Çıxış: [3.14, 9.81, 37, 100]

// Obrazları sıralama
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // Yaşlarına görə sıralanmış massiv
