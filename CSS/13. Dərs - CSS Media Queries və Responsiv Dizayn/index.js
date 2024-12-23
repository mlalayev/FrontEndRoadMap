//* 13. Gün - CSS Media Queries və Responsiv Dizayn

//? **CSS Media Queries Nədir?**
//? Media queries, veb səhifənin görünüşünü müxtəlif cihazlarda və ekran ölçülərində fərqli şəkildə göstərməyə imkan verir.
//? Bu, veb saytınızın mobil cihazlardan masaüstü ekranlara qədər fərqli cihazlarda düzgün görünməsini təmin etmək üçün vacibdir.
//? Media queries ilə səhifənin xüsusiyyətlərini və dizaynını cihazın ölçüsünə görə dəyişdirə bilərsiniz.

//* **Media Query Sintaksisi**:
//? Media querylər, `@media` direktivindən istifadə edilərək yazılır.
//? Bu direktiv, cihazın xüsusiyyətlərinə görə müəyyən stil qaydalarını tətbiq etməyə imkan verir.
//* `@media (condition) {`
//* `  selector {`
//* `    property: value;`
//* `  }`
//* `}`

//* **Mobile-first və Desktop-first Yanaşması**:
//? Mobile-first yanaşması ilə əvvəlcə mobil versiya təyin edilir və sonra daha böyük ekranlar üçün stil tətbiq olunur.
//? Desktop-first yanaşmasında isə əvvəlcə masaüstü versiya dizayn edilir və sonra mobil üçün uyğunlaşdırılır.
//* `body {`
//* `  font-size: 14px;`  //? Mobil cihazlar üçün font ölçüsü.
//* `}`
//* `@media (min-width: 768px) {`
//* `  body {`
//* `    font-size: 16px;`  //? Ekran 768px və daha böyük olduqda font ölçüsünü artırırıq.
//* `  }`
//* `}`

//* **Portrait və Landscape Modu**:
//? Mobil cihazlar və planşetlər üçün ekranın istiqamətini də nəzərə alaraq media querylər yarada bilərik.
//? - **Portrait Modu**: Cihazın şaquli mövqeyi.
//? - **Landscape Modu**: Cihazın üfüqi mövqeyi.
//* `@media (orientation: portrait) {`
//* `  body {`
//* `    background-color: lightblue;`  //? Şaquli (portrait) modda fon rəngini dəyişirik.
//* `  }`
//* `}`

//* `@media (orientation: landscape) {`
//* `  body {`
//* `    background-color: lightgreen;`  //? Üfüqi (landscape) modda fon rəngini dəyişirik.
//* `  }`
//* `}`

//* **Çap (Print) Üçün Media Queries**:
//? Veb səhifəni çap edərkən fərqli dizaynlar tətbiq etmək üçün media querylərdən istifadə edə bilərik.
//? Bu, printerlər üçün daha uyğun bir görünüş yaratmağa kömək edir, məsələn, səhifənin fonunu silmək və ya elementləri gizlətmək.
//* `@media print {`
//* `  body {`
//* `    background-color: white;`  //? Çap zamanı fonu ağ edirik.
//* `    color: black;`  //? Çap zamanı mətni qara rəngdə göstəririk.
//* `  }`
//* `  .no-print {`
//* `    display: none;`  //? Çapda görünməməsi üçün elementi gizlətmək.
//* `  }`
//* `}`

//* **Media Query ilə Layout Dəyişiklikləri**:
//? Ekran ölçüsünə görə elementlərin yerləşməsini dəyişdirmək üçün media querylərdən istifadə edirik.
//? Məsələn, mobil cihazda 1 sütunlu bir dizayn istifadə edə bilərik, amma masaüstü cihazda 2 və ya 3 sütunlu layout istifadə edək.
//* `@media (min-width: 600px) {`
//* `  .container {`
//* `    display: grid;`  //? Mobil üçün grid layout təyin edilə bilər.
//* `    grid-template-columns: 1fr 1fr;`  //? İki sütunlu layout.
//* `  }`
//* `}`

//* **Responsive Dizaynın Faydaları**:
//? - Fərqli ekran ölçüləri üçün xüsusi dizayn təmin etmək.
//? - Daha yaxşı istifadəçi təcrübəsi (UX) yaratmaq.
//? - Cihazlar arasında düzgün şəkildə işləyən saytlar yaratmaq.

//* **Media Queries ilə Fərqli Cihazlar Üçün Dizaynlar**:
//? Mobil cihazlarda daha çox istifadəçi təcrübəsini düşünərək responsiv dizayn yaratmaq vacibdir.
//? Aşağıdakı media query nümunələri müxtəlif ekran ölçüləri üçün təyin edilmişdir:
//* `@media (max-width: 480px) {`  //? Mobil cihazlar üçün (telefonlar)
//* `  body {`
//* `    background-color: lightblue;`  //? Mobil cihazlarda fon rəngini dəyişdiririk.
//* `  }`
//* `}`

//* `@media (min-width: 768px) {`  //? Tablet və böyük ekranlar üçün
//* `  body {`
//* `    background-color: lightgreen;`  //? Tablet və üstü üçün fon rəngini dəyişdiririk.
//* `  }`
//* `}`

//* `@media (min-width: 1024px) {`  //? Masaüstü cihazlar üçün
//* `  body {`
//* `    background-color: lightyellow;`  //? Masaüstü cihazlar üçün fon rəngini dəyişdiririk.
//* `  }`
//* `}`

//* **Media Queries ilə Uğurlu Responsiv Dizayn Yaratmaq**:
//? - Təsvirlərin və məzmunun ölçülərini cihazın xüsusiyyətlərinə uyğun olaraq dəyişdirin.
//? - Daha az məlumatla mobil cihazlar üçün sadə dizaynlar yaradın, ancaq masaüstü cihazlar üçün daha geniş, detallı dizaynlar təmin edin.
//? - Fərqli ekran ölçülərində elementlərin yerini dəyişdirmək üçün `display`, `position`, `flex`, və `grid` kimi xüsusiyyətləri istifadə edin.
