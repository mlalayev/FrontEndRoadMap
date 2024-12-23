//* 24. Gün - DOM (Document Object Model) Girişi

//? **DOM Nədir və Nə Üçün Lazımdır?**
//? **Document Object Model (DOM)**, veb səhifələri ilə işləmək üçün bir proqramlaşdırma interfeysidir.
//? DOM, HTML və XML sənədlərinin strukturunu, məzmununu və tərzini təmsil edir və onlarla əlaqə saxlamağa imkan verir.
//? DOM, HTML sənədini bir ağac (tree) formasında təmsil edir, hər bir element bir "düyün" (node) kimi təmsil olunur.
//? DOM ilə səhifədəki mətnlər, şəkillər, linklər, formalar və daha çoxu ilə dinamik şəkildə işləyə bilərik.

//* **DOM-da Əsas Girişlər və Əlavə Metodlar:**

/** 
 * ? **Global Obyekt - `window`**
 * ? JavaScript-də **global obyekt** `window`-dur.
 * ? `window`, bütün brauzer pəncərəsini təmsil edir və səhifə ilə əlaqəli müxtəlif metodları və xüsusiyyətləri təmin edir.
 * ? Məsələn, DOM metodları `window.document` vasitəsilə istifadə edilə bilər.
 */

//* console.log(window);  //? Global window obyektini çap edir

/** 
 * ? **DOM ilə Əlaqə: HTML Elementlərini Seçmək**
 * ? HTML sənədindəki elementlərlə işləmək üçün DOM metodlarını istifadə edə bilərik.
 * ? Bu metodlar, səhifədəki elementləri ID, class və ya CSS seçiciləri vasitəsilə əldə etməyə imkan verir.
 * 
 * **1. getElementById()**
 * ? Bu metod, HTML sənədindəki bir elementi **id** atributuna görə seçir.
 * ? `getElementById()` metodu yalnız bir element qaytarır və əgər həmin ID ilə element tapılmasa, `null` qaytarır.
 * ? **Nümunə:**
 */
let element = document.getElementById("myElement");
console.log(element.textContent);  //? "Salam Dünya"

/**
 * **2. getElementsByClassName()**
 * ? Bu metod, verilən **class** adına sahib olan bütün elementləri seçir.
 * ? Bu metod, `HTMLCollection` qaytarır, yəni DOM-da dəyişiklik edildikcə avtomatik yenilənir.
 * ? **Nümunə:**
 */
let elementsByClass = document.getElementsByClassName("box");
console.log(elementsByClass.length);  //? 2 (əgər 2 element "box" class-a sahibdirsə)

/**
 * **3. querySelector()**
 * ? `querySelector()` metodu, CSS seçicisi istifadə edərək bir elementi seçir.
 * ? Bu metod yalnız ilk uyğun elementi qaytarır.
 * ? **Nümunə:**
 */
let firstBox = document.querySelector(".box");
console.log(firstBox.textContent);  //? "Box 1" (ilk uyğun elementi seçər)

/**
 * **4. querySelectorAll()**
 * ? `querySelectorAll()` metodu, CSS seçicisinə uyğun olan bütün elementləri seçir.
 * ? Bu metod, `NodeList` qaytarır, bu da dövr əməliyyatları ilə işləməyi təmin edir.
 * ? **Nümunə:**
 */
let allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(function(box) {
    console.log(box.textContent);  //? Hər "box" elementinin mətnini çap edər
});

/**
 * ? **Nəticə:**
 * ? DOM metodları vasitəsilə HTML elementləri ilə əlaqə saxlamaq, onları dinamik şəkildə dəyişdirmək və səhifə üzərində əməliyyatlar aparmaq mümkündür.
 * ? DOM metodları, JavaScript ilə interaktiv və dinamik veb tətbiqləri yaratmağa imkan verir.
 */
