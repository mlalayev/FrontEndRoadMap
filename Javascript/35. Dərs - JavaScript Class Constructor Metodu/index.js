//* 35. Gün - JavaScript Class: Niyə Class? Constructor Metodu

//? **Class (Sinif) Nədir və Nə Üçün Lazımdır?**
//? JavaScript sinifləri, obyektləri daha təmiz və strukturlaşdırılmış şəkildə yaratmaq və idarə etmək üçün istifadə edilir. Siniflər, obyekt yönümlü proqramlaşdırmanın (OOP) əsas xüsusiyyətlərindən biridir və məlumatları və metodları bir yerdə saxlamağa imkan verir.
//? Siniflər, kodun təkrarlanmasını azaldır və daha idarəolunan, daha tərtibli kod yazmağa kömək edir.

//? **Nə Üçün Class İstifadə Edirik?**
//? - **Modularlıq və Yenidən İstifadə**: Siniflər vasitəsilə obyektləri daha səliqəli şəkildə yarada bilərik. Siniflər bir çox oxşar obyekt yaratmağa imkan verir.
//? - **Oxunaqlılıq**: Siniflər obyektlərin yaradılmasını və idarə olunmasını asanlaşdırır. Bu da kodun daha aydın və oxunaqlı olmasına kömək edir.
//? - **Kapsülasiya və İnheritance**: Siniflər, verilənlərin saxlanmasını və idarə olunmasını kapsülləmə (encapsulation) təmin edir. Əlavə olaraq, irsiyyət (inheritance) ilə bir sinifdən digərinə metod və xüsusiyyətlər miras qalır.
//? - **Abstraksiya**: Siniflər, obyektlərə aid olan xüsusiyyətləri və funksiyaları bir araya gətirərək, daha yüksək səviyyəli abstraksiya yaradır.

//* **1. Class Yaradılması və Constructor Metodu**
//? `class` açar sözü ilə sinif yaratmaq mümkündür. Sinifin içində `constructor` metodu ilə obyekti yaradırıq. `constructor` metodu sinifdən yeni bir obyekt yaradıldığında avtomatik işləyir.
//? **Sintaksis:**
class Person {
  // Constructor metodu
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Metod
  greet() {
    console.log(
      `Salam, mənim adım ${this.name} və mən ${this.age} yaşındayam.`
    );
  }
}

// Yaradılan sinifdən yeni bir obyekt
const person1 = new Person("John", 30);
person1.greet(); //? "Salam, mənim adım John və mən 30 yaşındayam."

//? **Constructor Metodu**
//? `constructor` metodu, sinifdən yeni bir obyekt yaradıldığında çağırılır. Bu metod, obyektin xüsusiyyətlərini təyin etmək üçün istifadə olunur.
//? Bu metod daxilində `this` açar sözü ilə obyektin xüsusiyyətlərinə daxil oluruq.

//* **2. Class İlə Obyekt Yaratmaq**
//? `new` açar sözü ilə sinifdən yeni obyektlər yarada bilərik.
//? **Sintaksis:**
const person2 = new Person("Alice", 25);
person2.greet(); //? "Salam, mənim adım Alice və mən 25 yaşındayam."

//* **3. Constructor və Parametrlər**
//? `constructor` metodunun parametrləri, sinifdən obyekt yaradılarkən müvafiq dəyərlər ilə ötürülür. Bu metodda parametrləri istifadə edərək obyektin xüsusiyyətlərini təyin edirik.

//* **4. Class Sinifindəki Digər Metodlar**
//? Sinif daxilində, obyektin xüsusiyyətlərini idarə etmək və ya digər əməliyyatlar yerinə yetirmək üçün metodlar təyin edə bilərik.
//? **Sintaksis:**
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.displayInfo(); //? "2020 Toyota Corolla"

//* **5. `this` İstifadəsi**
//? `this` açar sözü, həmin sinifdən yaradılan obyekti göstərir. Obyektin xüsusiyyətlərinə və metodlarına daxil olmaq üçün `this` istifadə edilir.
//? **Sintaksis:**
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} deyir: Həllo!`);
  }
}

const dog = new Animal("Rex", "Dog");
dog.speak(); //? "Rex deyir: Həllo!"
