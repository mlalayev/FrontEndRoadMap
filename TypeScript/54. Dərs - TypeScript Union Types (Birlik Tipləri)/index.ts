
//* TypeScript-də Union Tipləri (Birlik Tipləri)
//? Union tipləri bir dəyərin bir neçə tipdən biri ola biləcəyi hallarda istifadə olunur.
//? Məsələn, bir əmlak (property) həm `string`, həm də `number` ola bilər.

//* Union | (VƏ YA) Operatoru
//? `|` operatoru ilə biz deyirik ki, parametrimiz ya `string`, ya da `number` ola bilər.
//? Bu zaman TypeScript həmin parametrin hər iki tipi də qəbul edəcəyini anlayır və bu tiplərə uyğun davranır.

//? Misal olaraq bir funksiya yazdıq, bu funksiya həm `string`, həm də `number` parametrini qəbul edir
function printStatusCode(code: string | number) {
  //? `code` parametri həm `string`, həm də `number` qəbul edə bilər
  console.log(`My status code is ${code}.`); //? `code` dəyəri ekrana çap olunur
}

printStatusCode(404); //? Burada `number` tipi (404) istifadə olunur
printStatusCode("404"); //? Burada `string` tipi (`"404"`) istifadə olunur

//* Union Tip Xətaları
//? Union tipləri istifadə edərkən, hansı tipin istifadə olunduğunu düzgün bilməlisiniz ki, tip xətalarından qaçınasınız.
//? Əgər siz bir metod istifadə edirsinizsə, və bu metod yalnız müəyyən tipə xasdırsa, o zaman bu metodun bütün union tiplərində istifadə oluna bilmədiyini unutmamalısınız.

//? Məsələn, aşağıdakı kodda `toUpperCase()` metodu yalnız `string` tipində işləyir, amma `number` tipi üçün mövcud deyil
function printStatusCode2(code: string | number) {
  //? `code` həm `string`, həm də `number` ola bilər
  //console.log(`My status code is ${code.toUpperCase()}.`)  //? `toUpperCase()` metodu yalnız `string` tipində mövcuddur
  //? Xəta: `toUpperCase` metodu `number` tipi üçün mövcud deyil
}

//? Burada, `code` parametrinin həm `string`, həm də `number` ola bilməsi səbəbindən, TypeScript bizə `toUpperCase` metodunun `number` tipində istifadə oluna bilməyəcəyini bildirir.
//? `toUpperCase()` yalnız `string` tipində olan obyektlər üçün mövcuddur, amma `number` tipi bu metodu dəstəkləmir.

//* Xəta Nədir və Necə Həll Edək?
//? Burada xəta, `number` tipində bir dəyər üçün `toUpperCase()` metodunun işləməməsidir.
//? Çünki `toUpperCase()` metodu yalnız `string` tipində mövcuddur və `number` tipində bu metodun istifadəsi mümkün deyil.

//? Bu xətanı aradan qaldırmaq üçün biz `typeof` operatoru ilə tipi yoxlaya bilərik və uyğun olaraq uyğun metoddan istifadə edərik:

function printStatusCode1(code: string | number) {
  //? Həm `string`, həm də `number` qəbul edən parametr
  if (typeof code === "string") {
    //? Əgər `code` `string` tipindədirsə
    console.log(`My status code is ${code.toUpperCase()}.`); //? `toUpperCase()` yalnız `string` tipində işləyir
  } else {
    //? Əks halda `code` `number` tipindədir
    console.log(`My status code is ${code}.`); //? Burada `number` tipi olduğu üçün sadəcə dəyəri çap edirik
  }
}

printStatusCode(404); //? Burada `number` tipi istifadə olunur
printStatusCode("404"); //? Burada `string` tipi istifadə olunur

//* Union Tiplərinin Faydaları və İstifadəsi
//? Union tipləri TypeScript-də çox faydalıdır, çünki eyni parametrin bir neçə fərqli tipi qəbul etməsinə imkan verir.
//? Məsələn, istifadəçilərin daxil etdiyi məlumatlar fərqli tiplərdə ola bilər (məsələn, yaş `number`, ad `string`), amma biz onları eyni şəkildə işləyə bilirik.

//? Union tipləri, xüsusilə API-lərlə işləyərkən, çox istifadə olunur. Çünki bəzi API-lər bir məlumatın müxtəlif formatlarda (məsələn, string və ya number) gəlməsinə imkan verir.
//? Həmçinin union tipləri kodun daha çevik və genişlənə bilən olmasına kömək edir.

//* Tipin Dəyişməsi
//? Union tiplərini istifadə edərkən, bir dəyişənin dəyəri dəyişdikcə onun tipi də dəyişə bilər. Məsələn, əvvəlcə `string` ola bilər, amma sonra `number` ola bilər.
//? Bu, xüsusilə istifadəçinin daxil etdiyi məlumatları emal edərkən və müxtəlif növ məlumatlarla işləyərkən faydalıdır.
