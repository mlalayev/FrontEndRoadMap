//* TypeScript və Definitely Typed
//? TypeScript-də JavaScript ekosistemindəki NPM paketlərini istifadə etmək üçün xüsusi qaydalar və layihələr var.
//? Bu dərsdə Definitely Typed layihəsi və onun necə işlədiyini öyrənəcəyik.

//* NPM Paketlərinin TypeScript-də İstifadəsi
//? NPM paketləri geniş JavaScript ekosistemində çox populyardır, lakin onların hamısı TypeScript dəstəyi ilə gəlmir.
//? Məsələn, bəzi köhnəlmiş və ya artıq baxılmayan layihələr, TypeScript tiplərini təqdim etməyə vaxt tapmır.
//? Bəzi hallarda isə layihə sahibləri TypeScript istifadə etmək istəmirlər və ya buna ehtiyac görmürlər.

//? Tipi olmayan NPM paketlərini TypeScript-də istifadə etdiyimiz zaman kodumuz tip təhlükəsizliyi təmin edə bilmir.
//? Bu o deməkdir ki, TypeScript bu paketlərin funksiyalarını və dəyişənlərini yoxlaya bilmir, bu da potensial səhvlərə səbəb ola bilər.

//* Definitely Typed Layihəsi Nədir?
//? `Definitely Typed` TypeScript cəmiyyətinin dəstəklədiyi bir layihədir.
//? Bu layihə, tipləri olmayan NPM paketləri üçün TypeScript təriflərini (type definitions) təmin edir.
//? Başqa sözlə, `Definitely Typed` layihəsi, tipləri olmayan paketlər üçün xüsusi bir "tərif anbarı"dır.

//? Məsələn, jQuery NPM paketi üçün TypeScript təriflərini istifadə etmək istəyirsinizsə, bunu edə bilərsiniz:
//npm install --save-dev @types/jquery
//? Bu əmri istifadə edərək, jQuery üçün lazım olan TypeScript təriflərini layihənizə əlavə edirsiniz.
//? Bu təriflər TypeScript-in həmin paketi necə yoxlayacağını və istifadə edəcəyini izah edir.

//* Definitely Typed İstifadəsinin Üstünlükləri
//? 1. TypeScript avtomatik olaraq bu tərifləri qəbul edir və heç bir əlavə quruluşa ehtiyac yoxdur.
//? 2. Kod yazarkən Visual Studio Code kimi redaktorlar bu tərifləri tapır və kodunuzu yoxlamağa kömək edir.
//? 3. Definitely Typed sayəsində tipləri olmayan paketlərlə işləyərkən də TypeScript-in gücündən istifadə edə bilərsiniz.

//* Tipləri Olmayan Paketlərin Problemləri
//? Əgər bir NPM paketi tipi yoxdursa, bu zaman:
//? - TypeScript həmin paketin funksiyalarını və obyektlərini tanımayacaq.
//? - Redaktorda (IDE) tip yoxlanışı olmadığı üçün potensial səhvləri tapmaq çətin olacaq.
//? - Bu səbəbdən layihənizin təhlükəsizliyi və sabitliyi azala bilər.

//* Example: Definitely Typed istifadə edərək bir paketi tipli etmək
//? Tutaq ki, layihənizdə jQuery istifadə edirsiniz və TypeScript-in bunu tanımasını istəyirsiniz:
//npm install --save-dev @types/jquery
//? Bu əmrdən sonra heç bir əlavə addım tələb olunmur. TypeScript avtomatik olaraq bu tərifləri tanıyır.

//* Məsləhətlər
//? 1. Visual Studio Code kimi redaktorlar bəzən sizə tipi olmayan bir paket üçün uyğun tərifi təklif edir.
//? 2. Bu təkliflərə diqqət yetirin və onları quraşdırın. Məsələn, redaktor sizə belə bir mesaj göstərə bilər:
//? "Do you want to install @types/[package-name]?"
//? - "Yes" seçərək həmin tərifi quraşdırın.

//* Son Nəticə
//? Definitely Typed sayəsində:
//? - NPM paketlərində TypeScript-in tip yoxlanışını istifadə edə bilərsiniz.
//? - Kodunuz daha sabit və təhlükəsiz olur.
//? - Definitely Typed layihəsi böyük bir cəmiyyət tərəfindən dəstəkləndiyi üçün çox sayda NPM paketi üçün təriflər mövcuddur.

//? Unutmayın, bu xüsusiyyətlər TypeScript layihənizi daha yaxşı idarə etməyə kömək edir və səhvləri azaltdığı üçün məhsuldarlığınızı artırır.
