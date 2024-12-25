//* ES6 Nədir? 
//? ES6 ECMAScript 6-nın qısaltmasıdır. 
//? ECMAScript, JavaScript dilinin standartlarını təyin etmək üçün yaradılmışdır və ES6 bu standartın 6-cı versiyasıdır. 
//? 2015-ci ildə nəşr olunmuşdur və ECMAScript 2015 olaraq da tanınır.

//* Niyə ES6 öyrənməliyik? 
//? React, ES6-dan istifadə edir və ES6-da əlavə edilmiş yeni xüsusiyyətlərlə tanış olmalısınız.
//? Bu xüsusiyyətlər proqramlaşdırmanı daha rahat və güclü edir. Gəlin bu xüsusiyyətləri addım-addım izah edək.

//* 1. Classes (Siniflər) 
//? Siniflər, obyekt yönlü proqramlaşdırmada (OOP) istifadə olunur. 
//? Siniflər kodu daha təmiz və oxunaqlı edir. Siniflərə xüsusiyyətlər və metodlar əlavə edə bilərsiniz.
//? Məsələn: 
class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  let dog = new Animal("Dog");
  dog.speak(); // Çıxış: "Dog makes a sound"
  
  //* 2. Arrow Functions (Ox işarəsi ilə funksiyalar)
  //? Arrow functionlar, daha qısa və sadə funksiyalar yazmağa imkan verir. 
  //? `function` yerinə `=>` işarəsi istifadə edilir və `this` kontekstini fərqli idarə edir.
  //? Məsələn:
  const greet1 = (name) => `Hello, ${name}!`;
  console.log(greet1("Ali")); // Çıxış: "Hello, Ali!"
  
  //* 3. Variables (let, const, var)
  //? `let` və `const` dəyişən təyin etmə üsullarını təqdim edir. `var` daha köhnə bir üsuldur.
  //? `let` dəyişəni istənilən vaxt dəyişməyə imkan verir. 
  //? `const` dəyişəni bir dəfə təyin edildikdən sonra dəyişdirilə bilməz.
  //? `var` isə daha köhnə bir dəyişən təyin etmə üsuludur və ən çox qlobal olaraq istifadə olunur.
  //? Məsələn:
  let age1 = 20; // dəyişə bilər
  const name1 = "Məmməd"; // dəyişdirilə bilməz
  age1 = 21; // Bu işləyir
  // name = "Ali"; // Xəta verəcək
  
  //* 4. Array Methods (Array metodları)
  //? Array metodları ilə massivlərlə işləmək çox asanlaşır. Məsələn, `.map()` metodu bir massiv üzərində əməliyyat aparmağa imkan verir.
  //? `map()` metodunun necə işlədiyini göstərəcək:
  const numbers1 = [1, 2, 3, 4];
  const doubledNumbers = numbers.map((num) => num * 2);
  console.log(doubledNumbers); // Çıxış: [2, 4, 6, 8]
  
  //* 5. Destructuring (Dezstrukturlama)
  //? Dezstrukturlama, obyektlər və massivlərdən məlumatları asanlıqla ayırmağa imkan verir. 
  //? Bu, kodu daha qısa və anlaşılan edir.
  //? Məsələn, bir obyektin xüsusiyyətlərini ayırmaq üçün istifadə olunur:
  const person = { name: "Ramil", age: 30 };
  const { name, age2 } = person;
  console.log(name); // Çıxış: "Ramil"
  console.log(age2); // Çıxış: 30
  
  //* 6. Modules (Modullar)
  //? Modullar kodu daha yaxşı strukturlaşdırmağa kömək edir. 
  //? Kodunuzu kiçik hissələrə bölə və bu hissələri ayrı-ayrılıqda istifadə edə bilərsiniz.
  //? Bu, kodun təkrarlanmamasına və daha asan idarə edilməsinə səbəb olur.
  //? Məsələn:
  export const greet = (name) => `Hello, ${name}!`;
  // İstifadə: import { greet } from './greet';
  
  //* 7. Ternary Operator (Şərt operatoru)
  //? `if`-`else` şərtini daha qısa bir şəkildə yazmağa imkan verir.
  //? Üç hissədən ibarətdir: şərt, doğru vəziyyət və yanlış vəziyyət.
  //? Məsələn:
  let age = 18;
  const isAdult = age >= 18 ? "Adult" : "Not an adult";
  console.log(isAdult); // Çıxış: "Adult"
  
  //* 8. Spread Operator (Yayılma operatoru)
  //? Spread operatoru (`...`) massivləri və obyektləri yaymaq üçün istifadə olunur.
  //? Bu operator bir massiv və ya obyektin elementlərini və ya xüsusiyyətlərini başqa bir massivə və ya obyektə kopyalamağa imkan verir.
  //? Məsələn:
  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5];
  console.log(moreNumbers); // Çıxış: [1, 2, 3, 4, 5]
  