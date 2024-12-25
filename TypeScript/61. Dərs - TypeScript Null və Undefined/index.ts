//* TypeScript Null və Undefined
//? TypeScript null və undefined dəyərləri ilə işləmək üçün güclü bir sistemə malikdir.
//? Bu sistem, kodunuzun təhlükəsizliyini artırmaq üçün xüsusi qaydalar təqdim edir.

//* Null və Undefined Dəyərlərinin Default Davranışı
//? Default olaraq TypeScript-də null və undefined idarəsi deaktivdir.
//? Amma `strictNullChecks` parametrini `true` edərək bu idarəni aktivləşdirə bilərsiniz.

let value: string | undefined | null = null;
//? Bu yolla, `value` dəyişəni həm string, həm də undefined və ya null ola bilər.
value = "hello"; //? İndi `value` dəyişəninə "hello" dəyəri təyin edilir.
value = undefined; //? Daha sonra `undefined` dəyəri təyin edilir.

//* `strictNullChecks` ilə Null Təhlükəsizliyi
//? `strictNullChecks` aktivləşdirildikdə, TypeScript hər hansı bir dəyərin mütləq təyin olunmasını tələb edir, əgər `undefined` açıq şəkildə tipə əlavə edilməyibsə.
//? Bu funksiya, kodunuzun null dəyərlərdən qaynaqlanan xətalarını azaldır.

//* Optional Chaining (Opsional Zəncir)
//? Optional Chaining (?. operatoru), obyektin mövcud olub-olmadığını yoxlamadan, onun xüsusiyyətlərinə asanlıqla daxil olmağa imkan verən bir JavaScript xüsusiyyətidir.
//? TypeScript-in null idarəsi ilə birlikdə çox yaxşı işləyir.

interface House {
  sqft: number; //* Evin ümumi sahəsi
  yard?: {
    //* Yard (həyət) sahəsi, opsionaldır.
    sqft: number;
  };
}

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  //* `?.` operatoru, `yard` xüsusiyyəti mövcud deyilsə undefined qaytarır.
  if (yardSize === undefined) {
    console.log("No yard"); //* Əgər həyət yoxdursa, bunu çap edir.
  } else {
    console.log(`Yard is ${yardSize} sqft`); //* Əgər həyət varsa, ölçüsünü çap edir.
  }
}

let home: House = {
  sqft: 500, //* Evin ümumi sahəsi 500 kvadrat futdur.
};

printYardSize(home); // No yard
//? Burada `yard` xüsusiyyəti mövcud olmadığı üçün "No yard" çap olunur.

//* Nullish Coalescence (Null və Undefined üçün Ehtiyat Dəyər)
//? Nullish Coalescence (?? operatoru), null və ya undefined olduğu zaman bir ehtiyat dəyər qaytarmağa imkan verir.
//? Bu, digər "falsey" (0, boş sətir kimi) dəyərlərin keçərli olduğu hallarda çox faydalıdır.

function printMileage(mileage: number | null | undefined) {
  //* Əgər `mileage` null və ya undefined olsa, "Not Available" çap edilir.
  console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null); // Mileage: Not Available
//? Null olduğu üçün ehtiyat dəyər (Not Available) qaytarılır.

printMileage(0); // Mileage: 0
//? 0 dəyəri keçərli olduğundan birbaşa 0 qaytarılır.

//* Əsas Məqamlar
//? - Null və undefined TypeScript-də güclü şəkildə idarə olunur.
//? - `strictNullChecks` kodunuzun daha təhlükəsiz olmasına kömək edir.
//? - Optional Chaining (`?.`) obyektin mövcudluğunu yoxlamadan onun xüsusiyyətlərinə daxil olmağa imkan verir.
//? - Nullish Coalescence (`??`) null və undefined üçün ehtiyat dəyər təyin etməyə imkan verir.
//? Bu xüsusiyyətlər TypeScript-in təhlükəsizliyini və kodunuzu idarəetmə qabiliyyətini artırır.
