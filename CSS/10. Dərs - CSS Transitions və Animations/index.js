//* 10. Gün - CSS Transitions və Animations

//? **CSS Transitions və Animations Nədir?**
//? CSS Transitions və Animations, veb səhifələrdəki elementlərin vizual dəyişikliklərini zamanla daha axıcı və estetik şəkildə göstərməyə imkan verən xüsusiyyətlərdir.
//? Hər iki metodla, istifadəçilərin qarşılıqlı əlaqəsi zamanı elementlər üzərində dəyişikliklər yaradaraq səhifənizi daha interaktiv edə bilərsiniz.

//* **CSS Transition Nədir?**
//? Transition, bir CSS xüsusiyyətinin dəyərinin müəyyən bir zaman ərzində dəyişməsini təmin edir.
//? Bu dəyişikliklər tək bir xüsusiyyət və ya çoxlu xüsusiyyətlər ola bilər.
//? Transitions elementin üzərində hover etdikdə və ya aktivləşdirildikdə baş verən dəyişiklikləri asanlaşdırır.

//* **Transition Qurulması**:
//* `transition` xüsusiyyətini istifadə edərək bir elementin xüsusiyyətlərini zamanla dəyişdirmək mümkündür.
//* Sintaksis: `transition: <property> <duration> <timing-function> <delay>;`
//* - **property**: Dəyişmək istədiyiniz CSS xüsusiyyəti.
//* - **duration**: Dəyişmənin müddəti (məsələn, `2s`).
//* - **timing-function**: Dəyişmənin sürətini müəyyən edir (məsələn, `ease`, `linear`).
//* - **delay**: Dəyişmənin nə zaman başlayacağını müəyyən edir (məsələn, `1s`).

//* **Transition Nümunəsi**:
//* `div {`
//* `  width: 200px;`  //? Elementin başlanğıc eni 200px.
//* `  height: 200px;`  //? Elementin başlanğıc hündürlüyü 200px.
//* `  background-color: red;`  //? Başlangıc rəngi qırmızı.
//* `  transition: background-color 0.5s ease;`  //? Rəngin 0.5 saniyə ərzində dəyişməsi.
//* `}`
//* `div:hover {`
//* `  background-color: green;`  //? Hover edildikdə rəng yaşıl olacaq.
//* `}`

//* **CSS Animation Nədir?**
//? CSS Animations daha mürəkkəb və təkrarlanan animasiyalar yaratmağa imkan verir.
//? Animations, `@keyframes` ilə təyin edilən bir sıra tərtibatlardan ibarətdir və bu tərtibatlar zamanla baş verir.
//? Animations elementlərin müəyyən bir ardıcıllıqla hərəkət etməsinə imkan verir.

//* **Animation Qurulması**:
//* Sintaksis: `animation: <name> <duration> <timing-function> <delay> <iteration-count> <direction>;`
//* - **name**: Animasiya adı (təyin edilmiş `@keyframes` ilə uyğun gəlməlidir).
//* - **duration**: Animasiya müddəti (məsələn, `2s`).
//* - **timing-function**: Hərəkət sürəti (məsələn, `ease`, `linear`).
//* - **delay**: Animasiya başlamazdan əvvəl gözlənilən zaman (məsələn, `1s`).
//* - **iteration-count**: Animasiya neçə dəfə təkrarlanacaq (məsələn, `infinite`).
//* - **direction**: Animasiya istiqaməti (məsələn, `normal`, `reverse`).

//* **Animation Nümunəsi**:
//* `@keyframes slide {`
//* `  0% {`
//* `    transform: translateX(0);`  //? Başlanğıc vəziyyəti: heç bir tərcümə yoxdur.
//* `  }`
//* `  100% {`
//* `    transform: translateX(100px);`  //? Animasiya sonunda 100px sağa hərəkət edir.
//* `  }`
//* `}`
//* `div {`
//* `  width: 100px;`  //? Elementin eni 100px.
//* `  height: 100px;`  //? Elementin hündürlüyü 100px.
//* `  background-color: red;`  //? Başlangıç rəngi qırmızı.
//* `  animation: slide 2s ease-in-out infinite;`  //? `slide` animasiyasını 2 saniyə müddətində təkrarlayıb, sürətli başlayıb, yavaşca bitirir.
//* `}`

//* **Transition və Animation arasındakı Fərqlər**:
//? - **Transition**: Sadə dəyişikliklər üçün istifadə olunur, istifadəçi qarşılıqlı əlaqəyə girəndə baş verir.
//? - **Animation**: Daha mürəkkəb və təkrarlanan hərəkətləri yaratmaq üçün istifadə edilir, tərtibatın başlanğıc və sonu arasındakı ardıcıllıqla işləyir.

//* **Ümumi İstifadə Nümunələri**:
//? 1. Elementlərə hover animasiyalar əlavə etmək.
//? 2. Hərəkət edən şəkillər və ya mətnlər yaratmaq.
//? 3. Qrafikləri dinamikləşdirmək üçün istifadə edilən animasiyalar.
