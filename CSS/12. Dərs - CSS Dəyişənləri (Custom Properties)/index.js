//* 12. Gün - CSS Dəyişənləri (Custom Properties) və Tanınmayan CSS Xüsusiyyətləri

//? **CSS Dəyişənləri Nədir?**
//? CSS dəyişənləri, veb səhifələrdəki stil xüsusiyyətlərini idarə etmək və təkrarı azaltmaq üçün istifadə edilən özəlliklərdir.
//? Dəyişənlər təkrarən istifadə edilə bilən dəyərləri saxlayır və stil şablonlarını daha çevik və sadə edir.
//? Onlar `--` prefiksi ilə yaradılır və `var()` funksiyası ilə istifadə olunur.

//* **CSS Dəyişəni Yaratmaq və Tətbiq Etmək**:
//? CSS dəyişənini yaratmaq üçün əvvəlcə `--` prefiksindən istifadə edirik. Dəyişənlər, xüsusilə root elementində (`:root`) təyin edilir ki, hər yerdə istifadə oluna bilsin.
//* `:root {`
//* `  --main-color: #3498db;`  //? `--main-color` dəyişəni yaradılır.
//* `  --font-size: 16px;`       //? `--font-size` dəyişəni yaradılır.
//* `}`

//* **Dəyişəni İstifadə Etmək**:
//? Dəyişənləri istifadə etmək üçün `var()` funksiyasından istifadə edilir.
//* `h1 {`
//* `  color: var(--main-color);`  //? Burada `--main-color` dəyişəninin dəyəri tətbiq edilir.
//* `  font-size: var(--font-size);`  //? `--font-size` dəyişəninin dəyəri tətbiq edilir.
//* `}`

//? **Dəyişənlərin Yerli Əhatəsi**:
//? CSS dəyişənləri yalnız özlərini təyin etdiyimiz blok daxilində istifadə oluna bilər.
//? Məsələn, bir elementə xüsusi dəyişən təyin edə bilərik.
//* `.card {`
//* `  --card-background: #f1f1f1;`  //? `.card` sinfi daxilində xüsusi dəyişən təyin edilir.
//* `}`
//* `.card {`
//* `  background-color: var(--card-background);`  //? `.card` üçün təyin edilmiş dəyişən istifadə olunur.
//* `}`

//? **Dəyişənlərin İrsi**:
//? CSS dəyişənləri irsi xarakter daşıyır, yəni valideyn elementində təyin edilmiş dəyişənlər, alt elementlər tərəfindən istifadə oluna bilər.
//* `.container {`
//* `  --main-color: #2ecc71;`  //? Valideyn elementində dəyişən təyin edilir.
//* `}`
//* `.child {`
//* `  color: var(--main-color);`  //? Alt elementdə valideynin təyin etdiyi dəyişən istifadə olunur.
//* `}`

//? **Tanınmayan CSS Xüsusiyyətləri**:
//? CSS-də bəzi xüsusiyyətlər var ki, onlar standart olaraq müəyyən edilməmişdir, amma istifadəçilər tərəfindən geniş şəkildə istifadə edilirlər.
//? Bu xüsusiyyətlər ümumiyyətlə "təsadüfi" və ya "eksperimental" xüsusiyyətlər adlanır və bəzi brauzerlərdə yalnız müəyyən şərtlərlə dəstəklənir.

//* **Tanıdılmış CSS Xüsusiyyətləri Nümunələri**:
//? 1. **scroll-behavior**: Bu xüsusiyyət səhifədəki sürüşmə davranışını təyin edir. Məsələn, `smooth` sürüşmə növünü təyin edirik.
//* `html {`
//* `  scroll-behavior: smooth;`  //? Sayfada smooth (yumşaq) sürüşmə tətbiq edilir.
//* `}`

//? 2. **backdrop-filter**: Elementin fonuna təsir edən bir filtrləmə effektidir.
//* `div {`
//* `  backdrop-filter: blur(5px);`  //? Elementin fonuna blur (bulanık) effekti tətbiq olunur.
//* `}`

//? 3. **clip-path**: Bu xüsusiyyət, bir elementin görünən hissəsini kəsmək üçün istifadə edilir. Məsələn, elementi dairə şəklində göstərmək üçün istifadə oluna bilər.
//* `div {`
//* `  clip-path: circle(50%);`  //? Elementin forması dairə halına gətirilir.
//* `}`

//? 4. **object-fit**: Bu xüsusiyyət, bir şəkil və ya video kimi media elementlərinin konteynerə necə uyğunlaşdırılacağını müəyyən edir.
//* `img {`
//* `  object-fit: cover;`  //? Şəkil konteynerə uyğunlaşdırılır, lakin orijinal nisbət saxlanılır.
//* `}`

//? **Faydalar**:
//? 1. **Təkrarlanan Dəyərlərin İdarə Edilməsi**: Dəyişənlər eyni dəyərləri birdən çox yerdə istifadə etməyə imkan verir.
//? 2. **Daha Yaxşı Uyğunlaşma və Rəng Temaları**: Dəyişənlər ilə rənglər, ölçülər və digər parametrləri asanlıqla dəyişdirə bilərik.
//? 3. **Kodun Sadələşdirilməsi**: Dəyişənlər kodu daha qısa və oxunaqlı edir.
//? 4. **Dinamik Dəyişikliklər**: Gələcəkdə yeni xüsusiyyətlər əlavə edilə bilər və bu xüsusiyyətlərin istifadə edilməsi daha asanlaşır.
