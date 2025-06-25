//* **JavaScript-də Döngülər (Loops)**

//? **Döngülər nədir?**
//? Döngülər, təkrarlanan əməliyyatları avtomatlaşdırmaq üçün istifadə olunur. Bu, eyni kodu dəfələrlə yazmadan, dəyişkən və ya şərtlərə əsaslanaraq təkrarlamağa imkan yaradır.
//? **Əsas səbəblər:**
//? - Məlumat toplamaq və ya işləmək.
//? - Şərtə əsaslanaraq təkrarlanan tapşırıqları yerinə yetirmək.

//* **1. `for` Döngüsü**
//? Təkrarlama sayını əvvəlcədən bilirik. Sintaksis üç əsas hissədən ibarətdir:
//? - Başlanğıc (`initialization`).
//? - Şərt (`condition`).
//? - İnkrement/Dekrement (`increment/decrement`).

for (let i = 0; i < 5; i++) {
  console.log(`For Loop: ${i}`); //* Nəticə: 0, 1, 2, 3, 4
}


//* **2. `while` Döngüsü**
//? Şərt doğru olduğu müddətcə təkrarlanır. Təkrarlama sayı əvvəlcədən bilinməyə bilər.

let x = 0;
while (x < 5) {
  console.log(`While Loop: ${x}`); //* Nəticə: 0, 1, 2, 3, 4
  x++;
}

//* **3. `do...while` Döngüsü**
//? Ən azı bir dəfə işləyir. Şərt hər döngü sonunda yoxlanır.

let y = 0;
do {
  console.log(`Do...While Loop: ${y}`); //* Nəticə: 0, 1, 2, 3, 4
  y++;
} while (y < 5);

//* **4. `for...in` Döngüsü**
//? Bir obyektin açarları (keys) üzərində iterasiya etmək üçün istifadə olunur.

const person = { name: "Murad", age: 25, job: "Developer" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); //* Nəticə: name: Murad, age: 25, job: Developer
}

//* **5. `for...of` Döngüsü**
//? İterasiya edilə bilən (iterable) obyektlər üzərində (məsələn, massivlər) işləyir.

const cars = ["BMW", "Mercedes", "Toyota"];
for (let car of cars) {
  console.log(`For...Of Loop: ${car}`); //* Nəticə: BMW, Mercedes, Toyota
}

//* **Fərqlər:**
//? - `for`: Ən çevik və geniş istifadə edilən döngüdür. Təkrarlama sayını dəqiq idarə etmək üçün.
//* Məsələn: Məlumatın bir neçə dəfə işlənməsi lazım olduqda.
//? - `while`: Şərtə əsaslanaraq təkrarlanır, təkrarlama sayı bilinmir.
//* Məsələn: İstifadəçi giriş edəndə doğru məlumat daxil edənə qədər dövr davam edir.
//? - `do...while`: Ən azı bir dəfə işləyir, şərt sonra yoxlanır.
//* Məsələn: Menyular və ya istifadəçinin girişi zamanı ilkin məlumat tələb olunan hallarda.
//? - `for...in`: Obyektin açarları üçün.
//* Məsələn: JSON məlumatlarının işlənməsi.
//? - `for...of`: İterasiya edilə bilən obyektlər üçün.
//* Məsələn: Massivlər və ya Set üzərində dövr etmək.

//* **Niyə Döngülərə ehtiyac var?**
//? - Təkrarlanan əməliyyatları avtomatlaşdırmaq.
//? - Kodun daha az və səmərəli yazılması.
//? - Dinamik məlumatların işlənməsi (məsələn, massivlər və obyektlər).
