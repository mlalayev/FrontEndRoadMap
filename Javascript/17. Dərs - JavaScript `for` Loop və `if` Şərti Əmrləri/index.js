//* 17. Gün - JavaScript `for` Loop və `if` Şərti Əmrləri

//? **JavaScript-də For Dövrü (Loop) və If Şərti Əmrləri**

//? **1. `for` Dövrü (Loop)**
//? `for` dövrü, müəyyən bir şərt əsasında təkrarlanan əməliyyatları yerinə yetirmək üçün istifadə olunur.
//? Hər bir dövrün 3 əsas komponenti vardır: başlanğıc dəyəri, şərt və artırma/azaltma əməliyyatı.

//* **Sintaksis**:
//* for (başlanğıc dəyəri; şərt; artırma/azaltma) { əməl; }

//? **Nümunə**: 1-dən 5-ə qədər olan ədədləri ekranda göstərmək:
`
for (let i = 1; i <= 5; i++) {   //? i = 1 ilə başlayır, i 5-ə qədər artır.
    console.log(i);  //? Ekrana 1, 2, 3, 4, 5 yazılacaq.
}
`

//? **Açıqlama**:
//? 1. `let i = 1;` - Dövrün başlanğıc dəyəri, burada i = 1 olaraq təyin olunur.
//? 2. `i <= 5;` - Şərt, i dəyəri 5-ə qədər davam edir.
//? 3. `i++` - Dövrün sonunda i dəyəri 1 artırılır (i++ yazmaq həmçinin `i = i + 1` deməkdir).


//? **2. `if` Şərti Əmri**
//? `if` şərti əmri müəyyən bir şərt doğru olarsa, müəyyən əməliyyatın yerinə yetirilməsini təmin edir.
//? Şərt doğrulursa, `if` blokundakı əməliyyat icra olunur; əks halda, blok atlanır.

//* **Sintaksis**:
//* if (şərt) { əməl; }

//? **Nümunə**: Əgər `x` 10-dan böyükdürsə, ekrana "Böyük ədəd" yazdırmaq:
`let x = 15;
if (x > 10) {
    console.log("Böyük ədəd");  //? "Böyük ədəd" ekrana yazılacaq.
}`

//? **Açıqlama**:
//? `if (x > 10)` - Əgər x 10-dan böyükdürsə, şərt doğru olacaq və əməl icra olunacaq.
//? `console.log("Böyük ədəd")` - Şərt doğru olduqda ekrana bu mətn yazılacaq.


//? **3. `if...else` Əmri**
//? `if...else` ilə şərt doğru olduqda bir əməliyyat yerinə yetirilir, yanlış olduqda isə başqa bir əməliyyat yerinə yetirilir.

//* **Sintaksis**:
//* if (şərt) { əməl1; } else { əməl2; }

//? **Nümunə**: Əgər `y` müsbət ədəd olarsa, ekrana "Müsbət ədəd", yoxsa "Mənfi ədəd" yazdırmaq:
`let y = -5;
if (y > 0) {
    console.log("Müsbət ədəd");
} else {
    console.log("Mənfi ədəd");  //? "Mənfi ədəd" ekrana yazılacaq.
}`

//? **Açıqlama**:
//? `if (y > 0)` - Əgər y müsbət ədəd olsa, ilk əməl icra olunacaq.
//? `else` - Əks halda, ikinci əməl icra olunacaq.


//? **4. `if...else if...else` Əmri**
//? Əgər bir neçə şərt yoxlanmalıdırsa, `if...else if...else` quruluşu istifadə edilir.
//? Hər bir şərt ayrı-ayrı yoxlanır və uyğun olan əməl icra edilir.

//* **Sintaksis**:
//* if (şərt1) { əməl1; } else if (şərt2) { əməl2; } else { əməl3; }

//? **Nümunə**: Əgər `z` 0-dan kiçik, bərabər və ya böyükdürsə, müvafiq mesajları göstərmək:
`let z = 0;
if (z < 0) {
    console.log("Mənfi ədəd");
} else if (z === 0) {
    console.log("Sıfır");  //? "Sıfır" ekrana yazılacaq.
} else {
    console.log("Müsbət ədəd");
}`

//? **Açıqlama**:
//? İlk şərt `z < 0` yoxlanılır, əgər doğru olsa, birinci əməl icra olunur.
//? Əgər ilk şərt yanlış olsa, `else if (z === 0)` yoxlanır, əgər doğru olsa, ikinci əməl icra olunacaq.
//? Əks halda, üçüncü əməl icra olunacaq.


//? **5. Dövr İçərisində Şərt İstifadəsi (for + if)**
//? Dövr və şərt əmrlərini birlikdə istifadə etmək, təkrarlanan əməliyyatlar əsnasında müəyyən şərtləri yoxlamağa imkan verir.

//* **Nümunə**: 1-dən 10-a qədər olan ədədlərdən yalnız cüt ədədləri ekrana yazdırmaq:
`for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  //? Əgər i cüt ədəd olsa
        console.log(i);  //? Cüt ədəd ekrana yazılacaq
    }
}`

//? **Açıqlama**:
//? `if (i % 2 === 0)` - Hər bir ədədin cüt olub olmadığını yoxlayır.
//? Əgər cüt ədəd olsa, o zaman ekrana bu ədəd yazılacaq.

