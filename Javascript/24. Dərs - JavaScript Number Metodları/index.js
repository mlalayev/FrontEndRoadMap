//* 24. Gün - JavaScript Number Metodları

//? **Number Metodları Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də `Number` obyektləri, ədədlərlə işləmək üçün müxtəlif metodlar təmin edir. Bu metodlar, rəqəmlərlə hesablama, formatlama və müqayisə etməyə kömək edir. 
//? Bu metodlar, ədədləri daha asan idarə etməyə və müxtəlif hesablama əməliyyatlarını yerinə yetirməyə imkan verir.

//* **Number Metodlarının Tam Siyahısı və Təsvirləri**:

//* 1. **Number.isNaN()**
//? Bu metod, verilən dəyərin `NaN` olub olmadığını yoxlayır (Not-a-Number).
//? **Nümunə:**
let isNotANumber = Number.isNaN("hello");
console.log(isNotANumber);  //? true

//* 2. **Number.isFinite()**
//? Bu metod, verilən dəyərin sonsuz olmayan və ya `NaN` olmayan bir rəqəm olub olmadığını yoxlayır.
//? **Nümunə:**
let isFiniteNumber = Number.isFinite(100);
console.log(isFiniteNumber);  //? true
let isInfinite = Number.isFinite(Infinity);
console.log(isInfinite);  //? false

//* 3. **Number.isInteger()**
//? Bu metod, verilən dəyərin tam ədəd olub olmadığını yoxlayır.
//? **Nümunə:**
let isInteger = Number.isInteger(25);
console.log(isInteger);  //? true
let isNotInteger = Number.isInteger(25.5);
console.log(isNotInteger);  //? false

//* 4. **Number.isSafeInteger()**
//? Bu metod, verilən ədədin JavaScript-də təhlükəsiz bir tam ədəd olub olmadığını yoxlayır. 
//? Təhlükəsiz tam ədədlər 2^53-1 qədər olan ədədlərdir.
//? **Nümunə:**
let safeInteger = Number.isSafeInteger(9007199254740991);
console.log(safeInteger);  //? true
let unsafeInteger = Number.isSafeInteger(9007199254740992);
console.log(unsafeInteger);  //? false

//* 5. **Number.parseInt()**
//? Bu metod, bir mətnin tam ədədə çevrilməsini təmin edir. Əgər mətnin əvvəlində bir rəqəm varsa, onu tam ədəd olaraq təyin edir.
//? **Nümunə:**
let integer = Number.parseInt("100px");
console.log(integer);  //? 100
let notInteger = Number.parseInt("hello");
console.log(notInteger);  //? NaN

//* 6. **Number.parseFloat()**
//? Bu metod, bir mətnin onluq ədədini çevirməyə imkan verir. Mətnin əvvəlindəki rəqəmləri onluq ədədə çevirir.
//? **Nümunə:**
let floatNumber = Number.parseFloat("3.14px");
console.log(floatNumber);  //? 3.14
let notFloat = Number.parseFloat("hello");
console.log(notFloat);  //? NaN

//* 7. **Number.toString()**
//? Bu metod, bir ədədin mətnə çevrilməsini təmin edir. `toString()` metodu, ədədin ondalıklı və ya digər sistemdə göstərilməsini təmin edir.
//? **Nümunə:**
let num = 100;
console.log(num.toString());  //? "100"
console.log((100).toString(2));  //? "1100100" - 2-lik (binary) sistemdə

//* 8. **Number.toFixed()**
//? Bu metod, bir ədədin onluq hissəsini yuvarlaqlayaraq müəyyən sayda onluq rəqəm göstərir.
//? **Nümunə:**
let fixedNumber = (123.4567).toFixed(2);
console.log(fixedNumber);  //? "123.46"

//* 9. **Number.toExponential()**
//? Bu metod, bir ədədin eksponensial (elmi) notasiya ilə göstərilməsini təmin edir.
//? **Nümunə:**
let exponential = (12345).toExponential(2);
console.log(exponential);  //? "1.23e+4"

//* 10. **Number.toPrecision()**
//? Bu metod, bir ədədin göstərilməsini müəyyən bir dəqiqliklə təmin edir (üçüncü sayda rəqəm)...
//? **Nümunə:**
let preciseNumber = (123.4567).toPrecision(5);
console.log(preciseNumber);  //? "123.46"

//* 11. **Number.valueOf()**
//? Bu metod, bir ədədin orijinal qiymətini qaytarır. Bu metod, `Number` obyektinin tam ədədini əldə etmək üçün istifadə olunur.
//? **Nümunə:**
let numberValue = (100).valueOf();
console.log(numberValue);  //? 100

//* 12. **Number.EPSILON**
//? Bu metod, JavaScript-dəki ən kiçik fərqi (rəqəm) qaytarır. Bu dəyər, iki ədədin arasındakı ən kiçik qiymətə bərabərdir.
//? **Nümunə:**
let epsilonValue = Number.EPSILON;
console.log(epsilonValue);  //? 2.220446049250313e-16

//* 13. **Number.MAX_SAFE_INTEGER**
//? Bu metod, JavaScript-dəki ən böyük təhlükəsiz tam ədədi qaytarır. Bu dəyər, 2^53-1 qədər olan ən böyük ədədin qiymətidir.
//? **Nümunə:**
let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger);  //? 9007199254740991

//* 14. **Number.MAX_VALUE**
//? Bu metod, JavaScript-dəki ən böyük ədədin qiymətini qaytarır.
//? **Nümunə:**
let maxValue = Number.MAX_VALUE;
console.log(maxValue);  //? 1.7976931348623157e+308

//* 15. **Number.MIN_SAFE_INTEGER**
//? Bu metod, JavaScript-dəki ən kiçik təhlükəsiz tam ədədi qaytarır. Bu dəyər, -(2^53-1) qədər olan ən kiçik ədədin qiymətidir.
//? **Nümunə:**
let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInteger);  //? -9007199254740991

//* 16. **Number.MIN_VALUE**
//? Bu metod, JavaScript-dəki ən kiçik ədədin qiymətini qaytarır. Bu dəyər sıfırdan daha kiçik olan ən kiçik mümkün ədədin qiymətidir.
//? **Nümunə:**
let minValue = Number.MIN_VALUE;
console.log(minValue);  //? 5e-324

//* 17. **Number.NaN**
//? Bu metod, JavaScript-dəki `NaN` dəyərini (Not-a-Number) təmsil edir.
//? **Nümunə:**
let notANumber = Number.NaN;
console.log(notANumber);  //? NaN

//* 18. **Number.POSITIVE_INFINITY**
//? Bu metod, JavaScript-dəki müsbət sonsuzluğu təmsil edir.
//? **Nümunə:**
let positiveInfinity = Number.POSITIVE_INFINITY;
console.log(positiveInfinity);  //? Infinity

//* 19. **Number.NEGATIVE_INFINITY**
//? Bu metod, JavaScript-dəki mənfi sonsuzluğu təmsil edir.
//? **Nümunə:**
let negativeInfinity = Number.NEGATIVE_INFINITY;
console.log(negativeInfinity);  //? -Infinity
