//* **JavaScript Use Strict**
//? "use strict" sətri ECMAScript 5 versiyasından etibarən JavaScript-də tətbiq edilmişdir. Bu, JavaScript-də yazılmış kodu daha təhlükəsiz və daha etibarlı etmək üçün istifadə olunan bir direktivdir. Yəni, kodun normal işləməsindən fərqli olaraq daha sərt qaydalara əməl etməsini təmin edir.

//* **Nədir "use strict"?**
//? "use strict" JavaScript-də yazılmış kodu "strict mode" (sərt rejim) ilə icra etməyə imkan verir. Bu rejimdə bir çox qaydalar daha sərt şəkildə tətbiq edilir. Məsələn, sərt rejimdə dəyişənlər deklarasiya olunmadan istifadə edilə bilməz. Həmçinin bəzi səhvlər daha ciddi şəkildə mühakimə edilir.

//* **`"use strict"` necə işləyir?**
//? "use strict" kodun başında və ya bir funksiyanın daxilində yazılır və həmin kodu strict mode ilə işə salır. Əgər koda bu direktiv əlavə edilməsə, JavaScript normal (lax) rejimdə işləyəcək.

//* **Nümunə 1: "use strict" ümumi istifadə**:
"use strict"; //? Bu, bütün scriptin sərt rejimdə işləməsini təmin edir.
x = 10; //? Bu, səhv olacaq, çünki x dəyişəni əvvəlcə deklarasiya olunmayıb.

console.log(x); //? Bu kod səhv verəcək, çünki "x" dəyişəni "use strict" rejimində istənilən zaman istifadə edilə bilməz.

//* **Nümunə 2: Funksiya daxilində "use strict" istifadə edilməsi**:
function myFunction() {
  "use strict"; //? Bu, yalnız bu funksiyanın daxilində sərt rejimi işə salacaq.
  y = 20; //? Bu da səhv olacaq, çünki y dəyişəni əvvəlcə deklarasiya olunmayıb.
}

myFunction(); //? Funksiya içində səhv olacaq

//* **"use strict" in ECMAScript 5**:
//? "use strict" öncəki versiyalarla müqayisədə daha çox səhv aşkar etməyə kömək edir və daha yaxşı nəticələr verir. Daha çox səhvlər aşkar edilir və kodunuzu daha asan izləməyə imkan verir.

//* **Sert rejiminin istifadəsi ilə tətbiq olunan əsas qaydalar**:
//? 1. **Deklarasiyasız dəyişənlər istifadə edilə bilməz**: `x = 10;` səhv olacaq.
//? 2. **"eval" funksiyasının istifadəsi məhdudlaşır**.
//? 3. **`this` dəyəri daha sərt idarə olunur**: Funksiya içində `this` avtomatik olaraq `undefined` ola bilər.
//? 4. **Bəzi qeyri-səlis sintaksis səhvləri aşkar edilir**: Məsələn, `delete` ilə dəyişənlərin silinməsi qadağandır.
//? 5. **Təkrarlanan parametr adları qadağandır**: `function(a, a) {...}` səhv olacaq.

//* **"use strict" və İstifadə edilməyən "this"**:
//? Sərt rejimdə, əgər bir funksiyanı obyektin üzərində çağırırsınızsa, `this` automatik olaraq `undefined` olacaq. Bu, səhv etməməyə kömək edir.
//? Lakin, normal rejimdə, `this` qlobal obyektə (`window` və ya `global`) bərabər olacaq.

function myFunction() {
  console.log(this); //? strict mode-da `this` undefined olacaq.
}

myFunction(); //? `undefined` çap olunacaq.

//* **Nə üçün "use strict" istifadə etməliyik?**
/**
 * - **Daha yaxşı səhv aşkarı**: Sərt rejim kodunuzu daha asan analiz etməyə kömək edir və səhvlərin tez bir zamanda tapılmasına imkan verir.
 * - **Kodun daha təhlükəsiz olması**: Sərt rejimdə istifadə edilməyən dəyişənlər və funksiyalar qadağan edilir, beləliklə koda səhv daxil edilməsinin qarşısı alınır.
 * - **Daha effektiv performans**: Kodun daha sərt qaydalara uyğun yazılması nəticəsində bəzən icra vaxtı daha sürətli ola bilər.
 * - **Qlobal dəyişənlərdən qaçınmaq**: `this` və dəyişənlərə düzgün yanaşma daha təhlükəsiz və düzgün kod yazmağa imkan verir.
 */

//* **Nə vaxt `use strict` istifadə etməliyik?**
//? Əgər çox böyük və kompleks layihələr üzərində işləyirsinizsə və ya çoxlu komanda üzvü ilə birgə iş görürsünüzsə, "use strict" istifadə etmək faydalıdır. Bu, kodunuzu daha asanlıqla izləməyə və səhvləri erkən aşkar etməyə kömək edir.

//* **Xülasə**:
//? "use strict" JavaScript-də kodu daha etibarlı və daha yaxşı idarə oluna bilən etmək üçün yaradılmış bir xüsusiyyətdir. Ən müasir brauzerlər bu direktivi dəstəkləyir, yalnız köhnə brauzerlərdə, xüsusilə Internet Explorer 9 və əvvəlki versiyalarında bu xüsusiyyət dəstəklənmir.
