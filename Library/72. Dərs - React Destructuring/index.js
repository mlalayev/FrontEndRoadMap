//* ES6 Destructuring (Dezstrukturlaşdırma)
//? Dezstrukturlaşdırma ilə, bir array və ya obyektin yalnız lazım olan hissələrini asanlıqla əldə edə bilərik.
//? Bunu bir sandviç hazırlamağa bənzədə bilərik. Soyuducudan bütün ərzaqları çıxararsınızmı? Xeyr, yalnız sandviç üçün lazım olanları götürürsünüz.
//? Dezstrukturlaşdırma da eynilə belədir. Bizim bir array və ya obyektimiz ola bilər, amma biz yalnız lazım olan hissələri götürürük.

//* Dezstrukturlaşdırma ilə Array-lər
//? Əvvəlki üsulda array elementlərini dəyişkənlərə təyin etmək üçün bir neçə sətir istifadə edirdik.
//? Məsələn:

const vehicles = ["mustang", "f-150", "expedition"];

//? Əvvəlki üsul:
const car = vehicles[0]; // `vehicles` array-inin 1-ci elementini `car` dəyişkəninə təyin etdik
const truck = vehicles[1]; // `vehicles` array-inin 2-ci elementini `truck` dəyişkəninə təyin etdik
const suv = vehicles[2]; // `vehicles` array-inin 3-cü elementini `suv` dəyişkəninə təyin etdik

//? Bu üsulun çox sətir yazmaq və səhv etmə ehtimalı olan tərəfləri var. Bu səbəbdən yeni və daha sadə bir üsul olan Dezstrukturlaşdırma istifadə olunur.
//* Yeni üsul:

const vehicles2 = ["mustang", "f-150", "expedition"];

//* Dezstrukturlaşdırma ilə:
const [car2, truck2, suv2] = vehicles;
//? Burada `vehicles` array-indəki hər bir element birbaşa `car`, `truck` və `suv` dəyişkənlərinə təyin olunur.
//? İstifadə etdiyimiz hər dəyişkən müvafiq olaraq array-dəki ilk, ikinci və üçüncü elementləri alır.

//* Dezstrukturlaşdırmada Sıra Vacibdir
//? Array-lərlə dezstrukturlaşdırma edərkən sıralama vacibdir. Əgər dəyişkənləri sırayla yazmasanız, düzgün nəticə almazsınız.
//? Məsələn, biz yalnız `car` və `suv`-yu istəyiriksə, sadəcə `truck`-ı bıraxırıq, amma vergül işarəsini saxlayırıq:

const vehicles1 = ["mustang", "f-150", "expedition"];

//* Yalnız `car` və `suv` istəyirik:
const [car1, , suv1] = vehicles;
//? Bu kodda `truck` elementini ayırdıq, amma digər elementləri sırasıyla (`car` və `suv`) götürdük.

//* Funksiya ilə Dezstrukturlaşdırma
//? Funksiya bir array qaytardıqda, o array-in içindəki məlumatları dezstrukturlaşdırmaq çox faydalıdır.
//? Aşağıda, `calculate` adlı bir funksiyanı nəzərdən keçirək, hansı ki dörd ədəd əməliyyat qaytarır.

function calculate(a, b) {
  const add = a + b; // `a` və `b` ədədlərinin cəmi
  const subtract = a - b; // `a` və `b` ədədlərinin fərqi
  const multiply = a * b; // `a` və `b` ədədlərinin hasilatı
  const divide = a / b; // `a` və `b` ədədlərinin bölməsi

  return [add, subtract, multiply, divide]; // Yuxarıdakı dörd nəticəni array kimi qaytarırıq
}

//* Dezstrukturlaşdırma ilə:
const [add, subtract, multiply, divide] = calculate(4, 7);
//? Burada `calculate` funksiyası `add`, `subtract`, `multiply` və `divide` dəyişkənlərinə sırasıyla qaytarılmış dəyərləri təyin edir.
//? `add` 4 + 7 = 11, `subtract` 4 - 7 = -3, `multiply` 4 * 7 = 28, `divide` 4 / 7 = 0.571 olacaq.

//* Dezstrukturlaşdırmanın üstünlükləri:
//? Dezstrukturlaşdırma kodu qısa və oxunaqlı edir, çünki bir çox dəyişkəni bir neçə sətir yerinə birbaşa bir cümlə ilə təyin edə bilirik.
//? Array və obyektlərdən yalnız ehtiyacımız olan dəyərləri əldə etmək çox asanlaşır.
//? Bu üsul daha təmiz və səhv etmə ehtimalını azaldır.

//* Nəticə
//? Dezstrukturlaşdırma array və obyektlərdən istədiyimiz məlumatları çıxarmağın ən sadə və effektiv üsuludur.
//? Bu, xüsusilə böyük array-lərdə və obyektlərdə çox faydalıdır, çünki yalnız lazım olan hissələri ala bilirik və kodu daha oxunaqlı edirik.
