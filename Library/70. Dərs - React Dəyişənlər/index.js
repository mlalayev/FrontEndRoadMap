//* ES6 ilə Dəyişənlər (Variables)
//? ES6-dan əvvəl, dəyişənləri yalnız `var` açar sözü ilə təyin edirdik. Bu zaman dəyişənlər global obyektə təyin edilirdi.
//? Əgər dəyişən təyin etmədikdən sonra istifadə etsək, `strict mode`-da səhv alardıq.

//* `var` ilə dəyişən təyin etmək
//? `var` açar sözü ilə təyin etdiyimiz dəyişənlər çox geniş bir alana, yəni global sahəyə aid olur.
//? Həmçinin, `var` dəyişənləri bir funksiyada təyin edildikdə, həmin funksiyanın daxilində mövcud olur.
//? Lakin, `var` ilə təyin edilən dəyişənlər bir blok daxilində, məsələn bir `for` dövrəsində təyin olunsa belə, həmin blokdan kənarda da mövcud olacaq.

//* `var`-ın funksional sahə (function scope) olduğunu unutmayın.
//? Yəni, dəyişənlər bir blokda təyin edilsə də, onun dəyəri blokdan kənarda da əldə oluna bilər. Bu davranış bəzən qarışıqlıq yarada bilər.

//* `var` nümunəsi:
var x = 5.6; // Burada `x` dəyişənini təyin edirik və 5.6 dəyərini ona veririk

//? `var`-ın funksional sahəsini nümayiş etdirmək üçün:
function myFunction() {
  var y = 10; // Bu dəyişən yalnız bu funksiyada mövcuddur
  console.log(y); // Bu doğru, çünki `y` bu funksiyanın daxilindədir
}

console.log(y); // Bu səhv olacaq, çünki `y` yalnız funksiyanın daxilində mövcuddur

//* `let` ilə dəyişən təyin etmək
//? `let` isə `var`-ın blok sahəli (block scoped) versiyasıdır.
//? Yəni, `let` ilə təyin edilən dəyişənlər yalnız təyin olunduğu blokda mövcuddur.
//? Əgər bir `for` dövrəsində `let` ilə dəyişən təyin edilsə, o zaman yalnız həmin dövrənin daxilində istifadə oluna bilər.

//* `let` nümunəsi:
let z = 5.6; // Burada `z` dəyişənini təyin edirik
if (true) {
  let z = 10; // Bu dəyişən yalnız bu blok daxilində mövcuddur
  console.log(z); // Bu 10 olacaq
}

console.log(z); // Bu 5.6 olacaq, çünki xarici `z` blokdan kənarda təyin olunub

//* `const` ilə dəyişən təyin etmək
//? `const` ilə təyin edilən dəyişənlər isə dəyişməz (constant) olur. Bir dəfə təyin olunduqda, onların dəyəri heç vaxt dəyişə bilməz.
//? Lakin `const` ilə təyin edilən dəyişənlərin özünə məxsus bəzi xüsusiyyətlər var:
//? `const` sadəcə dəyərin təyini ilə bağlı deyil, həm də dəyər yerdəyişməsi ilə bağlıdır.

//* `const` nümunəsi:
const w = 5.6; // Burada `w` dəyişənini təyin edirik və 5.6 dəyəri veririk
//? İndi bu dəyişənin dəyəri dəyişdirilə bilməz:
w = 10; // Bu səhv olacaq, çünki `const` ilə təyin edilən dəyişənin dəyəri dəyişdirilə bilməz

//* `const` ilə Təkrarlanmayan (Immutable) Dəyişənlər
//? `const` ilə təyin edilən dəyişənlərin dəyəri dəyişməz, amma əgər bu dəyişən bir array (massiv) və ya object (obyekt) təyin edirsə,
//? o zaman bu obyektin elementləri və ya massivlərin elementləri dəyişdirilə bilər. Amma təkrar təyini mümkün deyil.

//* Misal:
//? `const` ilə massiv təyin edildikdə, massivə yeni elementlər əlavə etmək mümkündür, amma massiv özünü başqa bir massivlə dəyişdirmək olmaz.
const arr = [1, 2, 3]; // Bu, `const` ilə təyin olunmuş massivdir
arr.push(4); // Bu doğrudur, çünki massivə yeni element əlavə edirik
console.log(arr); // [1, 2, 3, 4]

//? Lakin, massivə başqa bir massiv təyin etmək mümkün deyil:
//arr = [5, 6, 7]; // Bu səhv olacaq, çünki `const` ilə təyin olunan dəyişənin təyini mümkün deyil

//* `const` ilə obyektlər
//? Eynilə obyektlərdə də `const` istifadə edilə bilər. O zaman obyektin elementləri dəyişdirilə bilər, amma özü yenidən təyin oluna bilməz.
//* Misal:
const person = { name: "John", age: 25 }; // Obyekt təyin edirik
person.age = 26; // Bu doğrudur, çünki obyektin xüsusiyyətlərini dəyişə bilərik
console.log(person); // { name: "John", age: 26 }

//? Amma obyektin özünü dəyişdirmək olmaz:
//person = { name: "Alice", age: 30 }; // Bu səhv olacaq, çünki `const` ilə təyin olunan obyektin təyini mümkün deyil

//* Nəticə
//? `var`, `let` və `const`-ın fərqli istifadə sahələri və xüsusiyyətləri vardır.
//? `var` daha çox funksional sahə ilə işləyir və hər zaman istifadə edilməməlidir.
//? `let` isə blok səviyyəli dəyişənlər üçün yaxşıdır, çünki o yalnız təyin olunduğu blokda mövcuddur.
//? `const` isə sabit dəyərlər üçün istifadə olunur, amma obyektlər və massivlər üçün yalnız onların elementlərini dəyişdirmək mümkündür, özləri yox.
//? Bu dəyişənləri doğru vəziyyətlərdə istifadə edərək, daha təmiz və anlaşıqlı kod yaza bilərsiniz.
