//* 27. Gün - JavaScript BOM (Browser Object Model) Haqqında

//? **BOM (Browser Object Model) Nədir və Nə Üçün Lazımdır?**
//? JavaScript-də BOM, istifadəçinin brauzerindəki obyektləri təmsil edir. Bu model, JavaScript-in brauzer ilə qarşılıqlı əlaqədə olmasını təmin edir.
//? BOM vasitəsilə brauzerin pəncərəsi (window), səhifənin yerləşməsi (location), tarixi (history) və digər ətraf mühit xüsusiyyətləri ilə işləyirik.
//? BOM ilə DOM arasındakı fərq ondan ibarətdir ki, DOM HTML sənədini təmsil edir, BOM isə brauzerin özü ilə əlaqədardır.
//? BOM, brauzerə xas olan funksiyaları istifadə etməyə imkan verir, məsələn, pəncərə ölçülərini dəyişdirmək və ya brauzerin tarixini idarə etmək.

//* **1. window Obyekti**
//? `window` obyekti JavaScript-in ən əsas obyektidir və brauzerin pəncərəsini təmsil edir. Bu obyekt həmçinin global obyekt olaraq qəbul edilir.
//? Bütün digər BOM xüsusiyyətləri və metodları `window` obyektinin tərkib hissəsidir.
//? **Nümunə:**
console.log(window.innerWidth); //? Pəncərənin enini çap edir
console.log(window.innerHeight); //? Pəncərənin hündürlüyünü çap edir

//? **2. location Obyekti**
//? `location` obyekti, brauzerin cari URL-inə daxil olan məlumatları təmsil edir.
//? Bu obyekt vasitəsilə URL-i oxumaq, dəyişdirmək və səhifəni yeniləmək mümkündür.
//? **Nümunə:**
console.log(location.href); //? Cari URL-i çap edir
location.href = "https://www.example.com"; //? Yeni URL-ə yönləndirir

//? **3. history Obyekti**
//? `history` obyekti, istifadəçinin brauzer tarixini təmsil edir. Bu obyekt, əvvəlki və sonrakı səhifələrə keçid etməyə imkan verir.
//? **Nümunə:**
history.back(); //? Əvvəlki səhifəyə geri qayıdır
history.forward(); //? Növbəti səhifəyə keçir

//? **4. navigator Obyekti**
//? `navigator` obyekti, istifadəçinin brauzeri haqqında məlumatları əldə etməyə imkan verir. Məsələn, brauzerin növü və versiyası, əməliyyat sistemi və s.
//? **Nümunə:**
console.log(navigator.appName); //? Brauzerin adını çap edir
console.log(navigator.userAgent); //? Brauzerin istifadəçi agentini çap edir

//? **5. screen Obyekti**
//? `screen` obyekti, istifadəçinin ekran ölçüləri və digər xüsusiyyətləri haqqında məlumatları əldə etməyə imkan verir.
//? **Nümunə:**
console.log(screen.width); //? Ekranın enini çap edir
console.log(screen.height); //? Ekranın hündürlüyünü çap edir

//? **6. setTimeout() və setInterval()**
//? JavaScript-də `setTimeout()` və `setInterval()` metodları asinxron əməliyyatları idarə etməyə imkan verir.
//? `setTimeout()` metodu müəyyən bir müddətdən sonra yalnız bir dəfə funksiya işlətməyə imkan verir.
//? `setInterval()` metodu isə müəyyən bir müddət aralığında təkrarlanan funksiyalar işlətməyə imkan verir.
//? **Nümunə:**
setTimeout(function () {
  alert("1 saniyədən sonra bu mesaj görünəcək");
}, 1000); //? 1 saniyə sonra işləyəcək

setInterval(function () {
  console.log("Bu mesaj hər 2 saniyədə bir göstəriləcək");
}, 2000); //? Hər 2 saniyədə bir işləyəcək

//? **7. alert(), prompt() və confirm()**
//? BOM, istifadəçi ilə qarşılıqlı əlaqədə olmaq üçün bir neçə metod təqdim edir: `alert()`, `prompt()`, və `confirm()`.
//? **alert()** - İstifadəçiyə mesaj göstərir.
//? **prompt()** - İstifadəçidən məlumat soruşur.
//? **confirm()** - İstifadəçidən təsdiq soruşur (bəli və ya xeyr).

//* **alert()**: Mesaj göstərir.
//? **Nümunə:**
alert("Bu bir xəbərdarlıq mesajıdır!");

//* **prompt()**: İstifadəçidən məlumat alır.
//? **Nümunə:**
let name = prompt("Adınızı daxil edin:");
console.log("İstifadəçinin adı: " + name);

//* **confirm()**: İstifadəçidən bəli/xeyr cavabı alır.
//? **Nümunə:**
let isSure = confirm("Bu əməliyyatı təsdiq edirsiniz?");
console.log(isSure); //? true (bəli) və ya false (xeyr) qaytaracaq

//? **8. window.innerWidth və window.innerHeight**
//? `window.innerWidth` və `window.innerHeight` pəncərənin daxilindəki ölçüləri verir.
//? Bu xüsusiyyətlər, pəncərə ölçülərini dinamik olaraq izləmək və uyğun dəyişikliklər etmək üçün istifadə olunur.
//? **Nümunə:**
let width = window.innerWidth; //? Pəncərənin enini əldə edirik
let height = window.innerHeight; //? Pəncərənin hündürlüyünü əldə edirik
console.log(`Pəncərənin ölçüsü: ${width} x ${height}`); //? Pəncərənin ölçüsünü çap edirik

//? **9. window.scrollTo() və window.scrollBy()**
//? `scrollTo()` və `scrollBy()` metodları səhifənin sürüşdürülməsi üçün istifadə olunur.
//? `scrollTo()` səhifəni müəyyən bir koordinata sürüşdürür, `scrollBy()` isə mövcud mövqeyə nisbətən sürüşdürür.
//? **Nümunə:**
window.scrollTo(0, 500); //? Səhifəni 500 piksel aşağı sürüşdürür
window.scrollBy(0, 200); //? Mövcud mövqeyə 200 piksel daha aşağı sürüşdürür

//? **Nəticə:**
//? BOM (Browser Object Model), JavaScript ilə brauzer xüsusiyyətləri ilə əlaqə qurmağımıza imkan verir.
//? DOM ilə əlaqəli olmasa da, BOM brauzerin pəncərəsi, tarix, URL, ekran ölçüləri və s. kimi brauzerə xas obyektlər ilə işimizi asanlaşdırır.
//? Bu model, dinamik veb səhifələrin inkişafında çox faydalıdır və istifadəçi təcrübəsini yaxşılaşdırmağa kömək edir.
