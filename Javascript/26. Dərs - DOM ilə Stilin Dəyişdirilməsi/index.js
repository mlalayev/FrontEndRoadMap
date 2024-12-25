//* 25. Gün - DOM ilə Stilin Dəyişdirilməsi, Atributların Təyin Edilməsi, Elementlərin Yaradılması və ClassName ilə İşləmək

//? **Stilin Dəyişdirilməsi:**
//? DOM vasitəsilə HTML elementlərinin tərzini dəyişdirmək mümkündür. Bunun üçün `style` xüsusiyyətindən istifadə edirik.
//? JavaScript ilə CSS tərzlərini dəyişdirə bilərik, məsələn, elementin rəngini, ölçüsünü və ya arxa planını dəyişdirmək.

//* **1. Elementin Stilini Dəyişdirmək**
//? Elementin stilini dəyişdirmək üçün `style` xüsusiyyətini istifadə edərik.
//? Məsələn, bir elementin `background-color` və `font-size` stilini dəyişdirək.
//? **Nümunə:**
let myElement = document.getElementById("myElement");
myElement.style.backgroundColor = "blue"; //? Arxa plan rəngini mavi edirik
myElement.style.fontSize = "20px"; //? Mətnin ölçüsünü 20px edir

//? **2. Kənar (border) Dəyişdirmək**
//? Elementin kənarını dəyişdirmək üçün də `style` istifadə edə bilərik.
//? **Nümunə:**
myElement.style.border = "2px solid red"; //? Elementin kənarını qırmızı rəngdə edir

//? **Atributların Təyin Edilməsi:**
//? HTML elementlərinin atributlarını da JavaScript ilə dəyişdirə bilərik. Bunun üçün `setAttribute()` metodunu istifadə edirik.
//? Məsələn, bir `<img>` elementinin `src` atributunu dəyişdirmək.

//* **3. Atribut Təyin Edilməsi**
//? `setAttribute()` metodu ilə HTML atributlarını təyin etmək mümkündür.
//? **Nümunə:**
let imgElement = document.getElementById("myImage");
imgElement.setAttribute("src", "new-image.jpg"); //? Yeni şəkil faylını təyin edirik
imgElement.setAttribute("alt", "Yeni şəkil"); //? Şəkilin alternatik mətnini təyin edirik

//? **4. Atribut Oxumaq**
//? `getAttribute()` metodu ilə mövcud atributu oxumaq mümkündür.
//? **Nümunə:**
let imgSrc = imgElement.getAttribute("src");
console.log(imgSrc); //? "new-image.jpg" (şəkilin src atributunu çap edir)

//? **Elementlərin Yaradılması:**
//? JavaScript ilə yeni HTML elementləri yaratmaq və onları səhifəyə əlavə etmək mümkündür.
//? Bunun üçün `createElement()` və `appendChild()` metodlarından istifadə edirik.
//? **Nümunə:**
// 1. Yeni `div` elementi yaradırıq
let newDiv = document.createElement("div"); //? Yeni div elementi yaradırıq

// 2. Yeni `p` elementi yaradırıq və mətn əlavə edirik
let newParagraph = document.createElement("p");
newParagraph.textContent = "Bu yeni bir paragrafdır.";

// 3. Yeni elementləri səhifəyə əlavə edirik
document.body.appendChild(newDiv); //? Yeni div elementini body-yə əlavə edirik
newDiv.appendChild(newParagraph); //? Yeni p elementini div-ə əlavə edirik

//? **5. Yaradılan Elementin Stilini Dəyişdirmək**
//? Yaradılan elementin stilini də dəyişə bilərik.
//? **Nümunə:**
newDiv.style.backgroundColor = "lightgray"; //? Div-in arxa planını açıq boz edir
newParagraph.style.color = "green"; //? Mətnin rəngini yaşıl edir

//? **6. Yeni Elementi Mövcud Elementə Əlavə Etmək**
//? Yeni yaradılmış elementi, mövcud bir elementin içindəki digər elementlərə əlavə etmək üçün `insertBefore()` metodundan istifadə edə bilərik.
//? **Nümunə:**
let referenceElement = document.getElementById("existingElement");
document.body.insertBefore(newDiv, referenceElement); //? Yeni div-i mövcud elementin önünə əlavə edirik

//? **ClassName ilə İşləmək:**
//? JavaScript ilə DOM elementlərinin `class` atributuna daxil olub, müxtəlif metodlarla sinifləri əlavə edə, silə və dəyişdirə bilərik.
//? Bunun üçün `classList` xüsusiyyəti istifadə olunur. `classList` metodu ilə elementə siniflər əlavə etmək, silmək və dəyişdirmək mümkündür.

//* **7. `classList.add()` - Yeni Sinif Əlavə Etmək**
//? Bu metod, elementə yeni sinif əlavə edir.
//? **Nümunə:**
let divElement = document.getElementById("divElement");
divElement.classList.add("newClass"); //? `newClass` adlı sinifi div elementinə əlavə edirik

//* **8. `classList.remove()` - Sinif Silmək**
//? Bu metod, elementdən bir sinifi silir.
//? **Nümunə:**
divElement.classList.remove("oldClass"); //? `oldClass` adlı sinifi div elementindən silirik

//* **9. `classList.contains()` - Sinifin Olub-Olmamasını Yoxlamaq**
//? Bu metod, elementin müəyyən bir sinifi olub-olmamasını yoxlayır.
//? Əgər sinif varsa, `true` qaytarır, əks halda `false` qaytarır.
//? **Nümunə:**
let hasClass = divElement.classList.contains("newClass");
console.log(hasClass); //? true (əgər element `newClass` sinifinə sahibdirsə)

//* **10. `classList.toggle()` - Sinifi Dəyişdirmək (Əgər Var, Sil, Yoxdursa, Əlavə Et)**
//? Bu metod, elementin sinifini dəyişdirir. Əgər sinif varsa, onu silir, yoxdursa, əlavə edir.
//? **Nümunə:**
divElement.classList.toggle("toggleClass"); //? `toggleClass` sinifini əlavə edir və ya silir

//* **11. `classList.replace()` - Sinifi Dəyişdirmək (Sinifi Əvəz Etmək)**
//? Bu metod, bir sinifi başqa bir siniflə əvəz edir.
//? **Nümunə:**
divElement.classList.replace("oldClass", "newClass"); //? `oldClass` sinifini `newClass` ilə əvəz edirik

//? **Append vs. appendChild:**
//? JavaScript-də DOM elementlərini əlavə etmək üçün həm `append()` həm də `appendChild()` metodlarından istifadə edilə bilər. Lakin bu metodların bəzi fərqləri var:

//* **12. `appendChild()`**
//? Bu metod, DOM elementinin sonuna yeni bir element əlavə edir.
//? `appendChild()` yalnız DOM obyektləri ilə işləyir. Bu metodla yalnız bir element əlavə etmək mümkündür.
//? **Nümunə:**
let newElement = document.createElement("p");
newElement.textContent = "Bu yeni bir paragrafdır.";
document.body.appendChild(newElement); //? Yeni p elementini body-yə əlavə edirik

//* **13. `append()`**
//? Bu metod həm DOM elementlərini, həm də digər mətnləri əlavə etməyə imkan verir. `append()` metodu bir neçə element və ya mətnin birləşdirilməsini dəstəkləyir.
//? Ən əsas fərq isə odur ki, `append()` bir neçə elementi eyni anda əlavə edə bilər və mətnləri də daxil edə bilər.
//? **Nümunə:**
let textNode = document.createTextNode("Bu bir mətn elementidir.");
document.body.append("Yeni element", newElement, textNode); //? Yeni elementləri body-yə əlavə edirik

//? **Nəticə:**
//? `appendChild()` yalnız DOM elementlərini əlavə edə bilər, amma `append()` həm DOM elementlərini həm də mətnləri əlavə edə bilər.
//? Həmçinin, `append()` metodu bir neçə elementi eyni anda əlavə etməyə imkan verir, amma `appendChild()` yalnız bir elementi əlavə edir.
//? Hər ikisi də DOM manipulyasiyasını asanlaşdırır, amma istifadə məqsədinə görə seçilməlidir.
