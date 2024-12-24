//* TypeScript-də Funksiyalar
//? TypeScript funksiyalar üçün parametr və qaytarılan dəyərlərin tiplərini təyin etməyə imkan verir.
//? Bu, funksiyaların daha təhlükəsiz və səhvsiz işləməsini təmin edir.
//? TypeScript-də funksiyalarla işləyərkən, parametr və qaytarılan dəyərlərin tipini təyin etmək yaxşı təcrübədir.

//* Qaytarılan Dəyərin Tipi (Return Type)
//? Funksiyanın qaytardığı dəyərin tipi açıq şəkildə təyin edilə bilər.
//? Aşağıdakı nümunədə, `getTime` funksiyasının `number` tipində bir dəyər qaytardığı bildirilir.
//? Bu, funksiya işləndikdən sonra geri dönən dəyərin növünü TypeScript-ə bildirir.

//? `getTime` funksiyasının `number` tipində bir dəyər qaytarması tələb olunur
function getTime(): number {
  //? `: number` burada funksiyanın qaytardığı tipin `number` olduğunu göstərir
  return new Date().getTime(); //? `new Date().getTime()` funksiyası zaman dəyərini `number` tipində qaytarır
}

//? Əgər qaytarılacaq tip təyin edilməyibsə, TypeScript avtomatik olaraq qaytarılan dəyişən və ifadənin növünü müəyyən etməyə çalışacaq.

//* `void` Qaytarılan Tipi
//? `void` tipi, funksiyanın heç bir dəyər qaytarmadığını göstərmək üçün istifadə olunur.
//? Bu, funksiyanın yalnız təsir yaratdığını və geri dəyər qaytarmadığını bildirir.

//? Misal olaraq, `printHello` funksiyası heç bir dəyər qaytarmır, yalnız ekrana yazı çap edir.
function printHello(): void {
  //? Burada funksiyanın heç bir dəyər qaytarmadığına görə `void` tipi istifadə edilir
  console.log("Hello!"); //? Sadəcə ekrana `Hello!` yazısı çap olunur
}

//* Parametrlər (Parameters)
//? Funksiyaların parametrləri, dəyişənlərin təyini ilə oxşar sintaksisə malikdir. Bu zaman tip təyini də edilir.
//? Aşağıdakı nümunədə, `multiply` funksiyası iki parametr qəbul edir və bu parametrlərin hər ikisi `number` tipindədir.

//? `multiply` funksiyası iki `number` tipində parametr qəbul edir və onların hasilini qaytarır
function multiply(a: number, b: number): number {
  //? Parametrlərin hər biri `number` tipindədir
  return a * b; //? `a` və `b` parametrlərinin hasilini qaytarır
}

//? Parametr tipi təyin edilmədikdə, TypeScript `any` tipini istifadə etməyə çalışacaq.
//? Lakin əlavə tip məlumatları varsa, bu zaman bu məlumatları istifadə edəcəkdir.

//* Seçimli Parametrlər (Optional Parameters)
//? TypeScript, parametrlərin hamısının tələb olunmadığını qəbul edir, amma onlar mütləq olaraq seçilən (optional) ola bilər.
//? Seçimli parametr üçün `?` operatoru istifadə edilir.
//? Bu operator, parametrlərin daxil edilməsi şərtini qeyri-məcburi edir.

//? `add` funksiyasında `c` parametri seçməli deyil, `c?` istifadə edərək onu seçimli edir.
function add(a: number, b: number, c?: number): number {
  //? Burada `c` parametri seçimlidir
  return a + b + (c || 0); //? Əgər `c` daxil edilməzsə, sıfır (`0`) istifadə edilir
}

//* Default Parametrlər (Default Parameters)
//? Parametrlər üçün əvvəlcədən təyin edilmiş dəyərlər də ola bilər.
//? Bu zaman parametrin tipi ilə birlikdə onun dəyəri də təyin edilir və parametri daxil etməyən halda bu dəyər istifadə olunur.

//? `pow` funksiyası, `exponent` parametrinin əvvəlcədən `10` olaraq təyin edildiyini göstərir.
function pow(value: number, exponent: number = 10): number {
  //? `exponent` parametri üçün default dəyər `10` olaraq təyin olunur
  return value ** exponent; //? `value`-in `exponent`-ə görə gücünü hesablayır
}

//? Burada TypeScript, default dəyərin növündən parametri avtomatik olaraq çıxarır və `exponent` parametrinin `number` tipində olmasını təmin edir.

//* Adlandırılmış Parametrlər (Named Parameters)
//? Adlandırılmış parametrlər obyekt şəklində təqdim olunur və hər parametrin adı açıq şəkildə göstərilir.
//? Bu, parametrlərin sırasının əhəmiyyətini azaldır və onları daha asan başa düşülən edir.

//? `divide` funksiyasının daxilində, `dividend` və `divisor` parametrləri obyekt şəklində göstərilir
function divide({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): number {
  //? Parametrlər adlandırılıb
  return dividend / divisor; //? `dividend`-i `divisor`-a bölür
}

//* Rest Parametrlər (Rest Parameters)
//? Rest parametrləri `...` ilə təyin edilir və onlar, bir çox parametri qəbul etmək üçün istifadə olunur.
//? Bu parametrlər həmişə massiv şəklində olur, çünki onlar çoxsaylı dəyərləri bir massivdə toplamaq üçün nəzərdə tutulub.

//? `add` funksiyası, əsas parametrlərlə yanaşı, əlavə parametrlər də qəbul edir və bu parametrləri massiv kimi istifadə edir.
function add1(a: number, b: number, ...rest: number[]): number {
  //? `...rest` ilə istənilən sayda `number` qəbul edə bilərik
  return a + b + rest.reduce((p, c) => p + c, 0); //? `rest` massivindəki bütün ədədlərin cəmindən əlavə olunur
}

//? Bu, çoxsaylı parametrləri qəbul etmək üçün effektiv bir üsuldur, xüsusilə parametr sayı bilinmədikdə.

//* Tip Alias-ları ilə Funksiya Tipləri (Function Type Aliases)
//? Funksiya tipləri ayrıca tip alias-ları ilə müəyyən edilə bilər.
//? Bu tiplər, `=>` sintaksisi ilə oxşar olaraq, arrow funksiyalarına bənzəyir.
//? Aşağıdakı nümunədə, `Negate` tipinin `number` qəbul edib, `number` qaytaran bir funksiya olduğunu göstəririk.

type Negate = (value: number) => number; //? `Negate` tipində bir funksiya: `value` tipi `number`, qaytarılan dəyər də `number` olacaq

//? `negateFunction` funksiyası `Negate` tipinə uyğun olaraq yazılır və `value` parametrinin tipini `number` olaraq alır.
const negateFunction: Negate = (value) => value * -1; //? `value`-i mənfi edir və `number` qaytarır
