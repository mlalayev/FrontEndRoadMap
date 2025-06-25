//* 41. Gün - LocalStorage, SessionStorage və Cookies

//? **LocalStorage və SessionStorage Nədir?**
//? `localStorage` və `sessionStorage` brauzer tərəfindən təmin edilən müvəqqəti məlumat saxlama mexanizmləridir. Hər iki metod JavaScript vasitəsilə istifadə edilə bilər və məlumatları müvəqqəti olaraq saxlayır.
//? Bu iki metod arasındakı fərq, `localStorage` məlumatları brauzerin təkrar açılmasında da saxlayır, amma `sessionStorage` yalnız cari sessiya ərzində saxlanır (yəni, browser açılıb bağlandıqdan sonra məlumatlar silinir).

//? **localStorage Nədir?**
//? `localStorage` vasitəsilə saxlamağa qoyduğunuz məlumatlar, brauzerin bağlanması və açılması ilə silinmir. Bu məlumatlar daha uzun müddət saxlanır.
//? Məlumatlar "key-value" cütləri şəklində saxlanır. 5MB qədər məlumat saxlamağa icazə verir.



let user = { name: "John", age: 30 };
localStorage.setItem("istifadeci", JSON.stringify(user)); // Məlumatı localStorage-a saxlamaq

let storedUser = JSON.parse(localStorage.getItem("istifadeci")); // localStorage-dan məlumatı oxumaq
console.log(storedUser.name); //? "John"

//? **sessionStorage Nədir?**
//? `sessionStorage` məlumatları yalnız cari sessiya ərzində saxlayır, yəni brauzer və ya səhifə yeniləndikdə məlumatlar silinir.
//? Bu metod da eyni şəkildə "key-value" cütləri ilə işləyir və yalnız bir sessiya müddətində etibarlıdır.

sessionStorage.setItem("sessionData", "This is session data"); // Məlumatı sessionStorage-a saxlamaq
let sessionData = sessionStorage.getItem("sessionData"); // sessionStorage-dan məlumatı oxumaq
console.log(sessionData); //? "This is session data"

//? **Fərq**:
//? - `localStorage` məlumatı uzun müddət saxlayır (brauzerin bağlanmasından sonra da saxlanılır).
//? - `sessionStorage` yalnız bir sessiya ərzində məlumatı saxlayır (brauzer və səhifə yenilənməsindən sonra məlumat itir).

//* **Cookies Nədir?**
//? Cookies, istifadəçinin brauzerində saxlanan kiçik məlumat parçalardır. Onlar veb saytların istifadəçi məlumatlarını və sessiya idarə etməsini saxlamağa imkan verir.
//? Cookies müəyyən bir müddət üçün təyin edilir və serverlə mübadilə edilə bilər. Bir cookie, "key-value" cütləri şəklində saxlanır və müəyyən bir vaxt bitmə tarixi ilə təyin edilə bilər.

document.cookie =
  "username=John Doe; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/"; // Cookie yaratmaq
let cookies = document.cookie; // Cookies məlumatını oxumaq
console.log(cookies); //? "username=John Doe"

//? **Cookies ilə Əlaqədar Xüsusiyyətlər:**
//? - `expires`: Cookies-in bitmə tarixini təyin edir. Bu tarixdən sonra cookie avtomatik olaraq silinir.
//? - `path`: Cookie-nin hansı saytda və ya subdomenində istifadə edilə biləcəyini müəyyən edir.
//? - `secure`: Cookie yalnız HTTPS protokolu ilə göndəriləcək.
//? - `SameSite`: Cookie-nin necə istifadə ediləcəyini müəyyən edir. Bu, cross-site (farklı saytlarda) istifadə edilə bilməyəcəyini təmin edir.

let cookieValue = document.cookie;
console.log(cookieValue); //? "username=John Doe"

//? **Fərq:**
//? - `localStorage` məlumatları uzun müddət saxlayır və yalnız JavaScript vasitəsilə oxunur.
//? - `sessionStorage` yalnız sessiya müddətində saxlanır və səhifə yeniləndikdə silinir.
//? - Cookies isə daha kiçik məlumatları saxlayır, serverlə mübadilə edilir və bitmə tarixləri ilə tənzimlənir.
