//* 28. Gün - JavaScript Event Listeners: click, input və digərləri

//? **Event Listener Nədir və Nə Üçün Lazımdır?**
//? Event listener (Hadisə Dinləyicisi) JavaScript-də istifadəçi və ya brauzerin fəaliyyəti ilə əlaqəli hadisələri izləməyə imkan verir.
//? Məsələn, bir düyməyə kliklənməsini, bir mətn sahəsinə yazı yazılmasını və ya səhifənin yüklənməsini izləmək mümkündür.
//? Bu hadisələr JavaScript funksiyaları ilə əlaqələndirilir, bu da veb səhifəyə interaktivlik və dinamik davranış əlavə etməyə imkan verir.

//* **1. addEventListener() Metodu**
//? `addEventListener()` metodu, bir DOM elementinə hadisə dinləyicisi əlavə edir. Bu metod vasitəsilə bir hadisə baş verdikdə bir funksiyanı işlətmək mümkündür.
//? Hadisə növü (məsələn, `click`, `input`, `mouseover`, və s.) və hadisə baş verəndə işləyəcək funksiya müəyyən edilir.
//? **Nümunə:**
let button1 = document.getElementById("myButton");
button1.addEventListener("click", function () {
  alert("Düyməyə kliklədiniz!");
});

//* **2. click Hadisəsi**
//? `click` hadisəsi, istifadəçi bir elementə kliklədikdə baş verir. Bu hadisə adətən düymələr və bağlantılar üçün istifadə olunur.
//? **Nümunə:**
let button2 = document.querySelector("#clickButton");
button2.addEventListener("click", function () {
  console.log("Düymə kliklənib!");
});

//* **3. input Hadisəsi**
//? `input` hadisəsi, istifadəçi bir form elementinə (məsələn, input, textarea) məlumat daxil etdikdə baş verir.
//? Bu hadisə form daxilindəki dəyəri izləməyə və istifadəçiyə geribildirim verməyə kömək edir.
//? **Nümunə:**
let inputField = document.querySelector("#nameInput");
inputField.addEventListener("input", function (event) {
  console.log("Daxil edilən mətn: " + event.target.value);
});

//* **4. keyup və keydown Hadisələri**
//? `keyup` və `keydown` hadisələri, klaviaturadan düymələrə basıldığında baş verir.
//? `keydown` hadisəsi, düyməyə basıldıqda aktivləşir, `keyup` isə düymə buraxıldıqda işləyir.
//? **Nümunə:**
let textBox = document.querySelector("#inputBox");
textBox.addEventListener("keydown", function () {
  console.log("Klaviatura düyməsi basılıb!");
});
textBox.addEventListener("keyup", function () {
  console.log("Klaviatura düyməsi buraxılıb!");
});

//* **5. mouseover və mouseout Hadisələri**
//? `mouseover` və `mouseout` hadisələri, siçanın bir elementin üzərində olma və ya ondan ayrılma vəziyyətini izləyir.
//? **Nümunə:**
let divElement = document.querySelector("#hoverDiv");
divElement.addEventListener("mouseover", function () {
  console.log("Siçan elementin üzərinə gəldi!");
});
divElement.addEventListener("mouseout", function () {
  console.log("Siçan elementdən ayrıldı!");
});

//* **6. submit Hadisəsi**
//? `submit` hadisəsi, bir formun göndərildiyi zaman baş verir. Bu hadisə, formun göndərilməsini tutub, formun doğru şəkildə göndərilməsini təmin etməyə imkan verir.
//? **Nümunə:**
let form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //? Formun göndərilməsini dayandırır
  console.log("Form göndərilmədi!");
});

//* **7. focus və blur Hadisələri**
//? `focus` və `blur` hadisələri, form elementlərinin fokuslanması və fokusdan çıxması ilə əlaqədardır.
//? `focus` hadisəsi elementə fokuslandıqda, `blur` hadisəsi isə fokusdan çıxarkən baş verir.
//? **Nümunə:**
let inputElement = document.querySelector("#myInput");
inputElement.addEventListener("focus", function () {
  console.log("Input sahəsi fokuslandı!");
});
inputElement.addEventListener("blur", function () {
  console.log("Input sahəsi fokusdan çıxdı!");
});

//* **8. event Object**
//? Hadisə baş verdikdə, JavaScript hadisəni təmsil edən bir obyekt (event object) yaradır.
//? Bu obyekt hadisə ilə əlaqəli məlumatları, məsələn, hansı düymənin klikləndiyini və ya hansı mətni daxil edildiyini təmin edir.
//? **Nümunə:**
let button3 = document.getElementById("myButton2");
button3.addEventListener("click", function (event) {
  console.log("Kliklənən element: " + event.target);
  console.log(
    "Klikləmə koordinatları: X=" + event.clientX + " Y=" + event.clientY
  );
});

//* **9. removeEventListener() Metodu**
//? `removeEventListener()` metodu, əvvəlcə əlavə edilmiş hadisə dinləyicisini silmək üçün istifadə olunur. Bu metod, hadisə ilə əlaqəli funksiyanı dayandırmağa kömək edir.
//? **Nümunə:**
let button4 = document.getElementById("myButton3");
function onClick() {
  alert("Bu düymə artıq kliklənə bilməz!");
}
button4.addEventListener("click", onClick);
//? Dinləyicini silirik
button4.removeEventListener("click", onClick);

//* **10. event Delegation (Hadisə Yönləndirilməsi)**
//? Hadisə yönləndirməsi, DOM-da çox sayda element üçün hadisə dinləyiciləri əlavə etmək əvəzinə, bir elementə (adətən ana konteynerə) yalnız bir dinləyici əlavə etməkdir.
//? Bu üsul, daha optimaldır və daha az yaddaş istifadəsi ilə nəticələnir.
//? **Nümunə:**
let list = document.querySelector("#myList");
list.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    alert("Siyahı elementi klikləndi: " + event.target.textContent);
  }
});
