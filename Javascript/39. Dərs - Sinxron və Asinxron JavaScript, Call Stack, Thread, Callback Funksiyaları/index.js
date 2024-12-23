//* 39. Gün - Senkron və Asenkron JavaScript, Call Stack, Thread, Callback Funksiyaları

//? **Senkron və Asenkron JavaScript Nədir?**
//? JavaScript, əsasən iki əsas iş rejimi olan senkron və asenkron şəkildə işləyir.
//? - **Senkron (Synchronous)**: Hər əməliyyat növbə ilə icra olunur, bir əməliyyat bitmədən digərinə keçilə bilməz.
//? - **Asenkron (Asynchronous)**: Əməliyyatlar eyni anda paralel olaraq icra oluna bilər, yəni bir əməliyyat bitmədən digər əməliyyat icra oluna bilər.

//? **Call Stack və Thread Nədir?**
//? JavaScript, **single-threaded** (tək iplikli) dil olduğuna görə yalnız bir əməliyyat növbəsi (queue) var və yalnız bir əməliyyat eyni anda işlədilə bilər.
//? Bu, JavaScript-in **call stack** və **event loop** ilə əlaqəlidir.

//* **Call Stack (Çağırış Yığını)**
//? Call Stack, JavaScript-in əməliyyatları necə idarə etdiyini göstərən bir mexanizmdir. Bu yığın, bir funksiya çağırıldıqda funksiyanın yerinə yetirilməsini izləyir.
//? Call Stack-də bir funksiya çağırıldıqda, bu funksiya "stack" (yığın) üzərinə əlavə olunur və işlədildikdən sonra yığından çıxarılır.
//? Əgər funksiyalar iç-içə çağırılarsa, onlar yığının üzərinə əlavə olunur və yığın tərsinə çıxarılır.
//? Əgər call stack-də çoxlu funksiyalar varsa, bu proses çox vaxt ala bilər və JavaScript tətbiqinin bloklanmasına səbəb ola bilər.

//* **Nümunə - Senkron Funksiya Çağırışı**:
function firstFunction() {
  console.log("First function");
}
function secondFunction() {
  console.log("Second function");
}
firstFunction(); //? Call Stack: firstFunction
secondFunction(); //? Call Stack: secondFunction

//? Call Stack-dən ilk funksiyanın icrası tamamlandıqdan sonra, ikinci funksiya çağırılır. Bu senkron bir iş rejimidir.

//* **Event Loop**
//? JavaScript, **event loop** mexanizmi ilə asenkron əməliyyatları idarə edir. Event loop, call stack-də yer olmayan zaman asenkron funksiyaları icra etməyə çalışır.
//? Yəni, event loop call stack-də yer tapdıqda asenkron əməliyyatları icra edəcək.

//* **Asenkron Funksiyalar və Callback Funksiyaları**
//? Asenkron funksiyalar, JavaScript-də müəyyən bir əməliyyatın tamamlanmasını gözləmədən digər əməliyyatların icra olunmasına imkan verir. Bu tip əməliyyatlar adətən **callback funksiyaları** ilə idarə olunur.
//? Callback funksiyası, bir əməliyyat tamamlandıqda çağırılan funksiyadır. Bu, asenkron əməliyyatların nəticələrinin işlənməsini təmin edir.

//* **Nümunə - Callback Funksiyası ilə Asenkron İşləmə**:
//? Burada `setTimeout()` asenkron bir funksiyadır, ona görə də bu kodu yazanda əvvəlcə "Start" çap olunur, sonra isə 2 saniyə gecikmədən sonra "End" çap olunur.
console.log("Start");
setTimeout(function () {
  console.log("End"); //? Bu funksiya callback olaraq işləyəcək
}, 2000); //? Bu, asenkron əməliyyatdır, 2 saniyə sonra icra olunacaq
console.log("Continue"); //? Bu əməliyyat dərhal icra olunur

//? **Asenkron Funksiyaların Call Stack-ə Təsiri**
//? Asenkron funksiyalar, call stack-də yer tükəndikdən sonra icra edilirlər. Bu, JavaScript-in call stack və event loop sisteminin necə işlədiyini göstərir.

//* **Callback Queue və Event Loop**
//? Event loop, call stack boşaldıqda callback queue (callback növbəsi) üzərindən callback funksiyalarını çağırmağa başlayır.
//? Callback queue, asenkron əməliyyatların nəticələrinin callback funksiyaları vasitəsilə növbəyə yerləşdirildiyi yerdir.

//* **Nümunə - Callback Queue ilə Asenkron İşləmə**:
console.log("Start");

setTimeout(function () {
  console.log("First Callback"); //? 0 saniyə gecikmədən callback queue-da növbəyə yazılır
}, 0);

setTimeout(function () {
  console.log("Second Callback"); //? 0 saniyə gecikmədən callback queue-da növbəyə yazılır
}, 0);

console.log("End");

//? **Output**:
//? Start
//? End
//? First Callback
//? Second Callback

//? Callback funksiyalarının call stack-də yer tutmaq üçün əvvəlcə call stack-in boşalması lazımdır.
//? Yalnız call stack boşaldıqdan sonra event loop callback funksiyalarını callback queue-dən alır və icra edir.

//* **Asenkron Funksiyaların İstifadə Səhnələri**
//? - **API sorğuları**: Asenkron funksiya HTTP sorğularını etmək üçün istifadə olunur, çünki serverdən cavab almaq vaxt tələb edir.
//? - **DOM manipulyasiyaları**: DOM dəyişiklikləri də asenkron şəkildə icra edilə bilər.
//? - **Animasiya**: Gecikməli animasiya tətbiq etməyə imkan verir.

//* **Nəticə**
//? JavaScript-in senkron və asenkron işləmə prinsipləri, proqramların effektiv şəkildə icra olunmasına imkan verir.
//? Call Stack, Event Loop və Callback Queue mexanizmləri, JavaScript-də kodun işləmə müddətini və asenkron əməliyyatların necə idarə olunduğunu göstərir.
//? Asenkron əməliyyatlarla işləyərkən callback funksiyalarından istifadə etmək, daha dinamik və cavab verən tətbiqlər yaratmağa imkan verir.
