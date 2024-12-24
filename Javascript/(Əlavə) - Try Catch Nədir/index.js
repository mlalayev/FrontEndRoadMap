//* **Try-Catch-Finally və Xəta İdarəetməsi haqqında**

//* **Try-Catch Nədir və Niyə Lazımdır?**
//? - `try-catch` JavaScript-də xətaları idarə etmək üçün istifadə olunan əsas mexanizmdir.
//? - `try` bloku potensial olaraq xəta baş verə biləcək kodu işlədir.
//? - Əgər `try` blokunda xəta baş verərsə, idarəetmə avtomatik olaraq `catch` blokuna keçər.
//? - Proqramın qəfil dayanmasının qarşısını alır və xətaları daha anlaşılan formada idarə etməyə imkan verir.

//* **Try-Catch Nümunəsi:**
try {
  const result = 10 / 0; //* Burada bölmə əməliyyatı "sonsuzluq" qaytarır, amma xəta sayılmır.
  console.log("Nəticə:", result);
} catch (error) {
  console.error("Xəta baş verdi:", error.message); //* Xətanı tutub idarə edir.
}

//* **Finally Bloku:**
//? - `finally` bloku `try` və ya `catch` blokundan asılı olmayaraq həmişə işləyir.
//? - Məsələn, resursların sərbəst buraxılması və ya "cleanup" əməliyyatları üçün istifadə olunur.

try {
  const result = 5 / 0;
  console.log("Nəticə:", result);
} catch (error) {
  console.error("Xəta:", error.message);
} finally {
  console.log("Bu kod həmişə işləyəcək."); //* Xəta olub-olmamasından asılı olmayaraq işləyir.
}

//* **Error Handling (Xəta İdarəetməsi):**
//? - Kodumuzun müəyyən bir nöqtəsində baş verə biləcək xətaların idarə olunmasıdır.
//? - Əsas məqsədlər:
//?   1. Proqramın çökməsinin qarşısını almaq.
//?   2. Xətaları istifadəçiyə anlaşılan formada göstərmək.
//?   3. Xətanın olduğu yerin tapılmasını asanlaşdırmaq.

//* **Error Handling-də "throw new Error" istifadəsi:**
//? - `throw` ilə xüsusi xəta atmaq mümkündür.
//? - `throw new Error` ilə daha anlaşılan və proqramın məntiqinə uyğun xətalar yaradıla bilər.

function divide(a, b) {
  if (b === 0) {
    throw new Error("0-a bölmə mümkün deyil."); //* Xüsusi xəta yaradılır.
  }
  return a / b;
}

try {
  const result = divide(10, 0); //* Burada xəta baş verəcək.
  console.log("Nəticə:", result);
} catch (error) {
  console.error("Xəta mesajı:", error.message); //* Xətanı idarə edib istifadəçiyə göstərir.
} finally {
  console.log("Hesablama prosesi tamamlandı."); //* İstər xəta olsun, istər olmasın, həmişə işləyir.
}

//* **Əsas Xəta Növləri:**
//? 1. SyntaxError: Sintaksis qaydalarının pozulması (məsələn, mötərizə bağlanmayıb).
//? 2. ReferenceError: Mövcud olmayan dəyişənə müraciət edilməsi.
//? 3. TypeError: Yanlış dəyişən tipindən istifadə (məsələn, obyekt üzərində arifmetik əməliyyat).
//? 4. RangeError: Əhatə dairəsi ilə bağlı xəta (məsələn, dərin rekursiya nəticəsində).
//? 5. EvalError: `eval()` funksiyasından səhv istifadə.

//* **Finally Bloku ilə Resursların İdarə Edilməsi Nümunəsi:**
function fetchData() {
  let connection;
  try {
    connection = "Məlumat bazası ilə əlaqə quruldu."; //* Resursu işə salırıq.
    console.log(connection);
    throw new Error("Serverdə problem baş verdi."); //* Xəta yaranır.
  } catch (error) {
    console.error("Xəta:", error.message);
  } finally {
    connection = "Əlaqə bağlandı."; //* Resursu sərbəst buraxırıq.
    console.log(connection);
  }
}

fetchData();

//* **Xüsusi Xətaların Yaradılması:**
//? - Xüsusi ssenarilərdə istifadəçi üçün anlaşılan xətalar yaratmaq üçün `Error` obyektindən istifadə olunur.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError"; //* Xəta növü təyin olunur.
  }
}

try {
  throw new CustomError("Bu xüsusi bir xətadır.");
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

//* **Xülasə:**
//? 1. **try-catch-finally:** Xətaları idarə etmək və resursları düzgün idarə etmək üçün istifadə olunur.
//? 2. **throw new Error:** Xüsusi xəta mesajları yaratmaq üçün istifadə olunur.
//? 3. **Error Handling:** Proqramın stabil işləməsini təmin etmək və istifadəçiyə doğru məlumat təqdim etmək üçün mühümdür.
