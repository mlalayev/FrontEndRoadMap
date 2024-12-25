//* React ES6 Spread Operator (Yayılan Operator)
//? Yayılan operatoru (`...`) JavaScript-də mövcud array və ya obyektin bütün və ya hissə-hissə məlumatlarını sürətlə başqa bir array və ya obyektə kopyalamağa imkan verir.
//? Bu operator, xüsusən array və obyektləri birləşdirmək və ya kopyalamaq üçün çox faydalıdır.

//* Array-lərlə Yayılan Operator
//? Məsələn, iki array-ni birləşdirmək üçün aşağıdakı nümunəyə baxaq:

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

//* Yayılan operatoru ilə birləşdirmə:
const numbersCombined = [...numbersOne, ...numbersTwo];
//? Burada `numbersOne` və `numbersTwo` array-ləri birləşdirilərək `numbersCombined` adlı yeni bir array yaradılır.
//? `...numbersOne` `numbersOne` array-indəki bütün elementləri alır və onları yeni array-də istifadə edir. Eyni şeyi `numbersTwo` üçün də edirik.
//? Nəticə: `numbersCombined = [1, 2, 3, 4, 5, 6]`

//? Yayılan operatoru, desctructuring ilə birlikdə istifadə edildikdə daha çox fayda verir. Məsələn, array-dəki bir neçə elementi alıb qalanını bir array-də saxlamaq:

const numbers = [1, 2, 3, 4, 5, 6];

//* Dezstrukturlaşdırma ilə Yayılan Operator:
const [one, two, ...rest] = numbers;
//? Burada `one` və `two` dəyişkənlərinə ilk iki elementi təyin edirik, qalan elementlər isə `rest` adlı array-də saxlanılır.
//? Nəticə: `one = 1`, `two = 2`, `rest = [3, 4, 5, 6]` olur.

//* Obyektlərlə Yayılan Operator
//? Yayılan operatoru yalnız array-lərlə deyil, həm də obyektlərlə istifadə oluna bilər. Bu, xüsusilə obyektləri birləşdirmək üçün faydalıdır.
//? Aşağıdakı nümunə iki obyekti birləşdirir:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

//* Yayılan operatoru ilə obyektləri birləşdirmə:
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
//? Burada `myVehicle` və `updateMyVehicle` obyektləri birləşdirilir və nəticə `myUpdatedVehicle` adlı yeni obyektə təyin edilir.
//? `myVehicle` obyektində olan `brand`, `model`, və `color` kimi xüsusiyyətlər yeni obyektə daxil olur.
//? Amma, `updateMyVehicle` obyektində olan `color` xüsusiyyəti artıq `yellow` ilə yenilənir, çünki sonuncu obyektin dəyəri öncədən gələnlərdən üstün olur.
//? Nəticə:
//? `myUpdatedVehicle = { brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021 }`

//* Ümumi Qeyd
//? Yayılan operatoru, array və obyektləri birləşdirmək və kopyalamaq üçün çox faydalıdır.
//? Bu metod həmçinin funksiyalar vasitəsilə verilənləri əldə etməyə və daha sadə kod yazmağa imkan verir.
//? Bu operator, kompleks verilənlərlə işləyərkən kodu daha oxunaqlı və daha səmərəli edir.
//? Yayılan operatorunun xüsusilə obyektlərdə üst-üstə gələn açarlar olduqda necə işlədiyini başa düşmək çox vacibdir. Yuxarıdakı nümunədə olduğu kimi, sonuncu obyektin məlumatları əvvəlki obyektləri əvəz edir.
