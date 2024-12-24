//* **JavaScript Data Types (Verilən Növləri)**

// JavaScript-də iki əsas verilən növü vardır: **Primitive (Əsas)** və **Non-Primitive (Qeyri-Əsas)**.

//* **1. Primitive Data Types (Əsas Verilən Növləri)**
//? Primitive verilən növləri sadə və dəyişməz verilənlərdir. Onlar birbaşa dəyər saxlayır və yaddaşda sadə strukturlara sahibdirlər.
//? Bunlar immutable (dəyişməz) verilən növləridir.

let number = 10; // `number` - sayısal verilən növü
let string = "Hello"; // `string` - mətn verilən növü
let boolean = true; // `boolean` - mantıksal (true / false) verilən növü
let nullValue = null; // `null` - heç bir dəyər yoxdur
let undefinedValue; // `undefined` - dəyəri təyin edilməyən verilən
let symbol = Symbol(); // `symbol` - unikal simvol verilən növü
let bigIntValue = 123n; // `bigInt` - böyük sayılar üçün verilən növü

//* **2. Non-Primitive Data Types (Qeyri-Əsas Verilən Növləri)**
//? Non-Primitive verilən növləri daha mürəkkəb verilənlərdir və onlar dəyişkən (mutable) ola bilərlər.
//? Bu verilənlər yaddaşda obyektlər kimi saxlanılır və onlar referansla ötürülür.
//? Aşağıdakılar qeyri-əsas verilən növləridir:

let object = { name: "John", age: 30 }; // `object` - obyekt verilən növü
let array = [1, 2, 3]; // `array` - massiv verilən növü
let functionExample = function () {}; // `function` - funksiya verilən növü

//* **3. Immutable vs Mutable (Dəyişməz və Dəyişkən Verilənlər)**
//? - **Immutable (Dəyişməz)**: Primitive verilən növləri dəyişməzdir. Məsələn, bir dəyişkənin dəyəri dəyişdirildikdə,
//?    yeni bir dəyər yaradılır və köhnə dəyər silinir. String və number kimi verilən növləri immutable-dır.
//? - **Mutable (Dəyişkən)**: Non-Primitive verilən növləri, məsələn, obyektlər və massivlər dəyişkəndir. Yəni,
//?    həmin verilənlər üzərindəki dəyişikliklər birbaşa verilənə təsir edəcək və onlar dəyişdirilə bilər.

let str = "hello";
str = "world"; // `str` dəyişdi, amma yeni dəyər yaradıldı, köhnə dəyər hələ də mövcuddur.

// Mutable (Dəyişkən) - Obyektin və massivlərin üzərində dəyişiklik edilə bilər:
let obj = { name: "Alice" };
obj.name = "Bob"; // Obyektin `name` xüsusiyyəti dəyişdi, amma obyekti tamamilə yeniləmədik.

let arr = [1, 2, 3];
arr.push(4); // Massivin sonuna yeni element əlavə edilir.

//* **4. Stack vs Heap Storage (Yaddaşda Saxlama)**
//? - **Stack**: Stack yaddaşında primitive verilən növləri (sayılar, strings və b.) saxlanılır.
//?    Stack yaddaşı daha sürətlidir və verilənlər dərinliyinə görə saxlanır. Yəni, verilənlər `Last In, First Out (LIFO)` qaydası ilə
//?    saxlanılır. Bu növ yaddaş daha sadə verilənləri, məsələn, primitive növləri saxlamaq üçün istifadə olunur.

//? - **Heap**: Heap yaddaşı isə daha mürəkkəb verilən növlərini (obyektlər, massivlər və s.) saxlamaq üçün istifadə olunur.
//?    Non-Primitive verilənlər burada saxlanılır və onlar müəyyən bir yerdə saxlanmır. Bu verilənlər `stack`-a əks olaraq
//?    dinamik olaraq yığılır və bir yerə yerləşdirilir. Heap yaddaşı daha çox yaddaş tələb edir və daha yavaşdır.

let primitive = 10; // `primitive` stack yaddaşında saxlanacaq.
let complex = { name: "Alice" }; // `complex` heap yaddaşında saxlanacaq.

//* **5. Reference vs Value Types (Dəyər və Referans Tipləri)**
//? - **Dəyər Tipləri**: Primitive verilən növləri dəyər tipləridir. Yəni, bu verilənlər birbaşa dəyər saxlayır və dəyişdirildikdə
//?    yeni bir dəyər yaradılır.
//? - **Referans Tipləri**: Non-Primitive verilən növləri referans tipləridir. Bu o deməkdir ki, həmin verilənlərə
//?    istinad (referans) olunur və onları dəyişdirdikdə, birbaşa həmin verilənə təsir edirsiniz.

let num1 = 10;
let num2 = num1; // `num1`-in dəyəri `num2`-yə kopyalanır. `num1`-ın dəyişdirilməsi `num2`-ni dəyişdirmir.

let arr1 = [1, 2, 3];
let arr2 = arr1; // `arr1`-in referansı `arr2`-yə ötürülür. Hər hansı bir dəyişiklik, hər iki massivə təsir edəcək.
arr1.push(4);
console.log(arr2); //? [1, 2, 3, 4] - `arr1` dəyişdi və `arr2` də dəyişdi, çünki onlar eyni referansı paylaşır.

//* **6. Data Types Summary (Verilən Növləri Ümumi Baxış)**
//? - **Primitive Types**:
//?    - Number: Sayılar (tam və onlu)
//?    - String: Mətnlər
//?    - Boolean: true / false
//?    - Null: Heç bir dəyər yoxdur
//?    - Undefined: Dəyər təyin edilməmişdir
//?    - Symbol: Unikal simvollar
//?    - BigInt: Böyük ədədlər
//?
//? - **Non-Primitive Types**:
//?    - Object: Obyektlər
//?    - Array: Massivlər
//?    - Function: Funksiyalar
//?
//? - **Primitive** verilən növləri immutable (dəyişməz) olur və dəyər tipindədir.
//? - **Non-Primitive** verilən növləri mutable (dəyişkən) olur və referans tipindədir.
