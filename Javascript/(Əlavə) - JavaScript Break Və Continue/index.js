//* **JavaScript Break və Continue**
//? `break` və `continue` JavaScript-də döngülərdə istifadə edilən iki xüsusi komutdur. Onlar döngüların işini dayandırmağa və ya davam etdirməyə kömək edir. Bu komutların istifadəsi döngünün daha idarəolunan olmasına imkan verir.

//* **`break` Komutu**:
//? `break` döngüdanın işini dayandırmaq üçün istifadə edilir. Hər hansı bir döngü (for, while, do-while) içində istifadə edildikdə döngü dərhal dayandırılır və növbəti kod icra edilir.

//? **İstifadə nümunəsi:**
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; //? Bu halda i 5 olduqda döngü dayandırılacaq
  }
  console.log(i);
}

//? Yuxarıdakı nümunədə `i` 5-ə bərabər olduqda döngü dayandırılır və ekranda yalnız 0-dan 4-ə qədər olan dəyərlər göstərilir.

//* **`continue` Komutu**:
//? `continue` döngüdə növbəti iterasiya (dönüş) üçün əməliyyatları keçirərək birbaşa döngü bədəninə keçməyə imkan verir. Bu zaman döngünün qalan hissəsi icra olunmaz və növbəti iterasiya başlayır.

//? **İstifadə nümunəsi:**
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; //? Bu halda i 5 olduqda növbəti iterasiya başlamaq üçün döngüyə keçilir
  }
  console.log(i);
}

//? Yuxarıdakı nümunədə `i` 5 olduqda, `continue` komutu icra edilir və `i` 5-ə bərabər olan iterasiya atlanır, nəticədə 0-dan 9-a qədər olan dəyərlər göstərilir, amma 5 istisna olunur.

//* **Break və Continue arasındakı fərqlər:**

/**
 * - **`break`**: Döngünün tamamlanmasını və icrasını dayandırır.
 * - **`continue`**: Döngüyü dayandırmaz, sadəcə növbəti iterasiyaya keçməyi təmin edir.
 */

//* **Nümunə 1: Break və Continue ilə qarışıq istifadə:**
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("Continue ilə i 3-ə keçildi");
    continue; //? i 3 olduqda növbəti iterasiya başlar
  }
  if (i === 7) {
    console.log("Break ilə döngü dayandırılır");
    break; //? i 7 olduqda döngü tamamlanır
  }
  console.log(i);
}

//? Burada `continue` i 3 olduğunda növbəti iterasiya başlamaq üçün döngüyə keçirməyi təmin edir və `break` isə i 7 olduğu zaman döngünü tamamilə dayandırır. nəticədə ekranda 0, 1, 2, 3 yazılacaq, amma 4, 5, 6 yazılmayacaq və 7-də döngü dayandırılacaq.

//* **`break` və `continue` yalnız döngülərlə istifadə olunur.**
//? Onlar əsasən `for`, `while` və `do-while` döngülərində istifadə edilir və döngüların idarə edilməsində effektiv olur.

//* **Niyə Break və Continue istifadə edirik?**

/**
 * - **Kodun qısa olması**: Bəzi hallarda döngünü müəyyən bir şərtə əsaslanaraq tez dayandırmaq və ya davam etdirmək istəyə bilərik. Bu da kodu daha qısa və aydın edir.
 * - **Əlavə şərtlər**: Döngü içində bir çox şərt yoxlanırsa, `break` və `continue` kodun daha səmərəli işləməsini təmin edir.
 * - **Daha çox kontrol**: Döngüyə nəzarət etmək və lazım olduqda dayandırmaq və ya davam etdirmək istədiyimizdə bu komutlar faydalıdır.
 */

//* **Xülasə**:
//? `break` və `continue` döngülərdə istifadə edildikdə döngüların işləməsini çox daha asan idarə etməyə imkan verir. `break` döngünün tamamlanmasını təmin edir, `continue` isə döngüdəki cari iterasiyanı atlayıb növbəti iterasiyaya keçməyə imkan verir.
