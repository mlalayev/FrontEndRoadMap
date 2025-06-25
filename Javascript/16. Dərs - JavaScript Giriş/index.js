//* 16. Gün - JavaScript Giriş

//? **JavaScript Nədir?**
//? JavaScript (JS), veb səhifələrində interaktivliyi təmin edən proqramlaşdırma dilidir.
//? JavaScript istifadə edərək səhifənin dinamikliyini artırmaq, istifadəçi ilə əlaqə qurmaq, formları emal etmək və ya səhifənin məzmununu dəyişdirmək mümkündür.
//? Veb səhifələrində **HTML** və **CSS** ilə birlikdə işləyir, amma JS səhifənin **dinamik** xüsusiyyətlərini təmin edir.
//? JavaScript istifadə etmədən statik bir səhifə yarada bilərsiniz, amma interaktivlik (animasiya, istifadəçi reaksiyaları, məlumat göndərmə və s.) olmadan bu səhifə çox sadə olacaq.

//* **Niyə JavaScript-ə Ehtiyac Var?**
//? JavaScript veb səhifələrinə dinamiklik əlavə etməyə imkan verir. Məsələn:
//? - İstifadəçi ilə əlaqə qurmaq (formaları emal etmək, sorğular göndərmək)
//? - Dinamik olaraq səhifə məzmununu dəyişmək (elementləri gizlətmək/göstərmək, animasiyalar yaratmaq)
//? - Əlavə funksiyalar əlavə etmək (istifadəçi reaksiyalarına əsaslanan təsvirlər, təhlillər və s.)


//? **JavaScript-i Necə Əlavə Edə Bilərik?**
//? JavaScript-i HTML sənədinə 2 fərqli üsulda daxil edə bilərsiniz:
//? 1. **Daxili JavaScript (Inline)**: HTML sənədinin `<script>` tagları arasında yazılır.
//* `<script>`
//* `  console.log("Hello, World!");`
//* `</script>`
//? 2. **Xarici JavaScript Faylı**: HTML sənədinə ayrı bir `.js` fayl əlavə edilir.
//? JavaScript faylını HTML faylına aşağıdakı kimi əlavə edə bilərsiniz:
//* `<script src="script.js"></script>`
//? Bu halda, `script.js` JavaScript kodlarını saxlayan fayl olacaq.

//? **JavaScript-i Harada Yazmalıyıq?**
//? 1. **HTML Faylında `<script>` Tagı ilə**:
//? - JavaScript-i HTML sənədinin sonunda (`</body>` tagından əvvəl) yazmağı tövsiyə edirik. Bu, səhifə yüklənəndən sonra JavaScript-in işləməsini təmin edər və səhifənin sürətini artırar.
//* `<script src="script.js"></script>`  //? Bu kod HTML sənədinin sonunda yazılacaq.
//? 2. **Xarici `.js` Faylında**:
//? - JavaScript kodunu ayrıca `.js` faylında yazıb, HTML-ə əlavə edirik.

//? **Console.log() ilə Başlanğıc**:
//? JavaScript-də kodu test etmək və dəyişənlərin dəyərlərini görmək üçün ən çox istifadə edilən metod `console.log()` metodudur.
//? Bu metod, parametr olaraq verdiyiniz məlumatı JavaScript konsolunda göstərir.

//* **Console.log() Nümunəsi**:
//* `console.log("Bu, sadə bir mesajdır");`  //? Bu mesaj JavaScript konsolunda görünəcək.
//* `console.log(5 + 3);`  //? Konsolda 8 görünəcək.

//? **JavaScript-də Məlumat Növləri (Data Types)**:
//? JavaScript-də əsas olaraq 3 növ məlumat var: **Boolean**, **String**, və **Number**.


//? **Boolean (True/False)**:
//? Boolean, yalnız iki dəyərdən birini qəbul edir: `true` və ya `false`.
//? Bu növ, şərtlər (if statements) və dövrələrdə (loops) istifadə olunur.

//* **Boolean Nümunəsi**:
//* `let isAvailable = true;`  //? Bu dəyişən `true` qiymətini saxlayır.
//* `let isFinished = false;`  //? Bu dəyişən `false` qiymətini saxlayır.
//* `console.log(isAvailable);`  //? Konsolda true görünəcək.
//* `console.log(isFinished);`  //? Konsolda false görünəcək.

//? **String (Mətnlər)**:
//? String, mətnləri saxlamaq üçün istifadə olunur. Mətnlər tək (') və ya cüt (") dırnaqlar arasında yazılır.

//* **String Nümunəsi**:
//* `let name = "John";`  //? Bu dəyişən `John` mətnini saxlayır.
//* `let greeting = 'Salam!';`  //? Bu dəyişən `Salam!` mətnini saxlayır.
//* `console.log(name);`  //? Konsolda John görünəcək.
//* `console.log(greeting);`  //? Konsolda Salam! görünəcək.

//? **Number (Rəqəmlər)**:
//? JavaScript-də hər hansı bir növ rəqəm (tam və ondalıklı) Number olaraq təyin edilir.

//* **Number Nümunəsi**:
//* `let age = 25;`  //? Bu dəyişən `25` rəqəmini saxlayır.
//* `let height = 1.75;`  //? Bu dəyişən `1.75` ondalıklı rəqəmini saxlayır.
//* `console.log(age);`  //? Konsolda 25 görünəcək.
//* `console.log(height);`  //? Konsolda 1.75 görünəcək.

//* **Qısaca Yığılacaq Məqamlar**:
//? - **JavaScript** veb səhifələrinə interaktivlik və dinamik məzmun əlavə edir.
//? - **console.log()** JavaScript-də məlumatları konsolda göstərmək üçün istifadə edilir.
//? - JavaScript-də əsas məlumat növləri: **Boolean**, **String**, və **Number**.
//? - Bu məlumat növləri ilə müxtəlif əməliyyatlar aparmaq mümkündür.
