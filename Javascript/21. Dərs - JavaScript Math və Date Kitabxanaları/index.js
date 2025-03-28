//* 21. Gün - JavaScript Math və Date Kitabxanaları

//? **Math Kitabxanası Nədir və Nə Üçün Lazımdır?**
//? JavaScript Math kitabxanası, riyazi əməliyyatları həyata keçirmək üçün istifadə olunur.
//? Bu kitabxana bir çox faydalı metodlar təqdim edir ki, bunlar da riyazi hesablamalarda istifadə olunur.
//? Math kitabxanası, riyazi funksiyalar, trigonometriya, statistik hesablamalar və s. üçün müxtəlif metodlar təmin edir.

//* **Math Kitabxanasının Əsas Metodları**:

//* 1. **Math.abs(x)**
//? Bu metod, verilən müsbət və ya mənfi sayın mütləq dəyərini qaytarır.
//? **Nümunə:**
console.log(Math.abs(-5)); //? 5

//* 2. **Math.ceil(x)**
//? Bu metod, verilən sayın yuxarıya doğru ən yaxın tam ədədini qaytarır.
//? **Nümunə:**
console.log(Math.ceil(5.1)); //? 6

//* 3. **Math.floor(x)**
//? Bu metod, verilən sayın aşağıya doğru ən yaxın tam ədədini qaytarır.
//? **Nümunə:**
console.log(Math.floor(5.9)); //? 5

//* 4. **Math.round(x)**
//? Bu metod, verilən sayını ən yaxın tam ədədə yuvarlaqlaşdırır.
//? **Nümunə:**
console.log(Math.round(5.5)); //? 6
console.log(Math.round(5.4)); //? 5

//* 5. **Math.max(x, y, z, ...)**
//? Bu metod verilən ədədlərdən ən böyüyünü qaytarır.
//? **Nümunə:**
console.log(Math.max(1, 2, 3, 4, 5)); //? 5

//* 6. **Math.min(x, y, z, ...)**
//? Bu metod verilən ədədlərdən ən kiçiyini qaytarır.
//? **Nümunə:**
console.log(Math.min(1, 2, 3, 4, 5)); //? 1

//* 7. **Math.random()**
//? Bu metod 0 ilə 1 arasında təsadüfi bir ondalıklı ədəd qaytarır.
//? **Nümunə:**
console.log(Math.random()); //? 0.123456 (təsadüfi bir ədəd)

//* 8. **Math.pow(base, exponent)**
//? Bu metod, verilən bir əsas ədədin qüvvətini hesablayır (əks halda əsas ədədin verilən qüvvətinə yüksəlməsini)
//? **Nümunə:**
console.log(Math.pow(2, 3)); //? 8 (2^3)

//* 9. **Math.sqrt(x)**
//? Bu metod verilən ədədin kvadrat kökünü hesablayır.
//? **Nümunə:**
console.log(Math.sqrt(16)); //? 4

//* 10. **Math.sin(x), Math.cos(x), Math.tan(x)**
//? Bu metodlar verilən dərəcənin sin, cos və tan funksiyalarını hesablayır (dərəcələr radian şəklində olmalıdır).
//? **Nümunə:**
console.log(Math.sin(Math.PI / 2)); //? 1
console.log(Math.cos(Math.PI)); //? -1
console.log(Math.tan(Math.PI / 4)); //? 1

//* 11. **Math.PI**
//? Bu, Pi sabitinin qiymətini qaytarır, yəni 3.14159...
//? **Nümunə:**
console.log(Math.PI); //? 3.141592653589793

//* 12. **Math.log(x)**
//? Bu metod verilən ədədin təbii logaritmasını (ln) qaytarır.
//? **Nümunə:**
console.log(Math.log(10)); //? 2.302585092994046 (təxmini qiymət)

//* 13. **Math.exp(x)**
//? Bu metod `e` (təbii logaritma bazası) ədədinin x qüvvətini qaytarır.
//? **Nümunə:**
console.log(Math.exp(1)); //? 2.718281828459045 (təxmini qiymət)

//* **Math Kitabxanasının Ümumi İstifadəsi**:
//? Math kitabxanası, həqiqi dünya problemlərində riyazi hesablama aparmaq, təsadüfi sayılar yaratmaq və trigonometriya əməliyyatları üçün çox faydalıdır.
//? O, həmçinin ölçüləri çevirmək, məsafələri hesablamaq və müxtəlif hesablama alqoritmlərini həyata keçirmək üçün istifadə edilə bilər.

//? **Date Kitabxanası Nədir və Nə Üçün Lazımdır?**
//? JavaScript Date kitabxanası, zaman və tarixlə əlaqəli əməliyyatları həyata keçirmək üçün istifadə olunur.
//? Date obyekti, zaman məlumatlarını saxlamaq və bu məlumatlar üzərində əməliyyatlar aparmaq üçün bir çox metod təmin edir.

//* **Date Kitabxanasının Əsas Metodları**:

//* 1. **new Date()**
//? Bu metod cari tarixi və saatı qaytarır.
//? **Nümunə:**
let currentDate = new Date();
console.log(currentDate); //? Məsələn, 2024-12-24T12:34:56.789Z

//* 2. **Date.now()**
//? Bu metod, cari zamanın timestamp (milisaniyə cinsindən) qiymətini qaytarır.
//? **Nümunə:**
console.log(Date.now()); //? 1709026345678 (timestamp)

//* 3. **Date.getFullYear()**
//? Bu metod, tarixdən ilin tam hissəsini (4 rəqəmli) qaytarır.
//? **Nümunə:**
console.log(currentDate.getFullYear()); //? 2024

//* 4. **Date.getMonth()**
//? Bu metod, tarixdən ayı qaytarır (0 ilə 11 arasında bir dəyər, yanvar = 0, dekabr = 11).
//? **Nümunə:**
console.log(currentDate.getMonth()); //? 11 (dekabr)

//* 5. **Date.getDate()**
//? Bu metod, tarixdən günün tarixini (ayda hansı gündə olduğumuzu) qaytarır.
//? **Nümunə:**
console.log(currentDate.getDate()); //? 24

//* 6. **Date.getDay()**
//? Bu metod, tarixdən həftənin gününü qaytarır (0 = bazar, 1 = bazar ertəsi və s.)
//? **Nümunə:**
console.log(currentDate.getDay()); //? 2 (bazar ertəsi)

//* 7. **Date.getHours()**
//? Bu metod, tarixdən saatı (0 ilə 23 arasında) qaytarır.
//? **Nümunə:**
console.log(currentDate.getHours()); //? 12

//* 8. **Date.getMinutes()**
//? Bu metod, tarixdən dəqiqələri qaytarır.
//? **Nümunə:**
console.log(currentDate.getMinutes()); //? 34

//* 9. **Date.getSeconds()**
//? Bu metod, tarixdən saniyələri qaytarır.
//? **Nümunə:**
console.log(currentDate.getSeconds()); //? 56

//* 10. **Date.setFullYear(year)**
//? Bu metod, tarixin ili dəyişdirməyə imkan verir.
//? **Nümunə:**
currentDate.setFullYear(2025);
console.log(currentDate.getFullYear()); //? 2025

//* 11. **Date.setMonth(month)**
//? Bu metod, tarixin ayını dəyişdirməyə imkan verir.
//? **Nümunə:**
currentDate.setMonth(0); //? Yanvar (0)
console.log(currentDate.getMonth()); //? 0

//* 12. **Date.setDate(day)**
//? Bu metod, tarixin gününü dəyişdirməyə imkan verir.
//? **Nümunə:**
currentDate.setDate(1);
console.log(currentDate.getDate()); //? 1

//* 13. **Date.setHours(hours)**
//? Bu metod, tarixin saatını dəyişdirməyə imkan verir.
//? **Nümunə:**
currentDate.setHours(15);
console.log(currentDate.getHours()); //? 15

//* **Date Kitabxanasının Ümumi İstifadəsi**:
//? Date kitabxanası, istifadəçinin cari tarix və saatını əldə etmək, vaxt aralıqlarını hesablamaq, tarixləri müqayisə etmək və təhlil etmək üçün çox faydalıdır.
//? Eyni zamanda tədbirlər və animasiyalar üçün vaxt cədvəlləri hazırlamaq və ya planlaşdırmalar etmək üçün istifadə edilə bilər.
