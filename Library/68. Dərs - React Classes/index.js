//* Siniflar (Classes) - ES6 ilə tanıdılmışdır
//? ES6, JavaScript-ə sinifləri əlavə etdi.
//? Siniflər, funksiyaların bir növüdür, amma onları başlatmaq üçün `function` sözü əvəzinə `class` sözündən istifadə edirik.
//? Siniflərin xüsusiyyətləri (properties) `constructor()` metodu daxilində təyin olunur.

//* Sadə bir sinif konstruktoru nümunəsi
//? Aşağıda sadə bir "Car" (Avtomobil) sinifi nümunəsi göstərilir:
class Car {
  constructor(name) {
    this.brand = name; // Bu, avtomobilin markasını təyin edir.
  }
}

//* Sinif adının böyüklə başlaması vacibdir
//? Siniflərin adları hər zaman böyük hərflə başlanmalıdır. Bu, kodunuzu daha oxunaqlı və aydın edir.
//? `Car` sinifinin adı burada böyük hərflə başlayır.

//* Sinif əsasında obyekt yaratmaq
//? İndi `Car` sinifi əsasında obyekt yaratmaq üçün yeni bir nümunə yarada bilərik:
//? Burada `mycar` adlı bir obyekt yaradırıq və ona "Ford" markasını təyin edirik.
const mycar = new Car("Ford");

//* Konstruktor metodu
//? `constructor()` metodu, obyekt yaratdığınız zaman avtomatik olaraq çağırılır.
//? Bu metod sinifin xüsusiyyətlərini təyin etmək üçün istifadə olunur.
//? Yuxarıda `mycar` obyekti yaratdıqda, `constructor()` metodu avtomatik işləyir və `this.brand` dəyişəni "Ford" olaraq təyin edilir.

//* Siniflərdə metodlar
//? Siniflərə öz metodlarını əlavə edə bilərsiniz. Bu metodlar sinifə aid funksiyalar kimi işləyir.
//? Məsələn, `present()` adlı bir metod əlavə edirik:
class Car {
  constructor(name) {
    this.brand = name;
  }

  // Metodun tərifi
  present() {
    return "Mənim bir " + this.brand; // Bu metod avtomobilin markasını göstərir.
  }
}

//* `present()` metodunun çağırılması
//? Yuxarıdakı nümunədə, `mycar.present()` yazdıqda bu metod işə düşəcək və "Mənim bir Ford" mesajını qaytaracaq.
//? Burada gördüyünüz kimi, metodun adı obyektin adı ilə çağırılır və sonunda mötərizələr (parametrlər varsa, onları mötərizələrə daxil edirik) qoyulur.

const mycar2 = new Car("Ford");
console.log(mycar.present()); // Çıxış: "Mənim bir Ford"

//* Sinif irsiyyəti (Class Inheritance)
//? `extends` açar sözü ilə sinif irsiyyətini yarada bilərsiniz.
//? Yəni bir sinif başqa bir sinifdən metodları miras alır.
//? Bu, bir sinifi genişləndirmək və onun xüsusiyyətlərindən istifadə etmək üçün çox faydalıdır.

//* Sinif irsiyyəti nümunəsi
//? Burada, "Model" adlı yeni bir sinif yaradırıq və bu sinif "Car" sinifindən metodları miras alır:
class Car {
  constructor(name) {
    this.brand = name;
  }

  // `present` metodu
  present() {
    return "Mənim bir " + this.brand;
  }
}

// "Model" sinifi, "Car" sinifindən irsiyyət alır.
class Model extends Car {
  constructor(name, mod) {
    super(name); // `super()` metodu ana sinifin konstruktorunu çağırır.
    this.model = mod; // Bu, modelin adını təyin edir.
  }

  // `show` metodu
  show() {
    return this.present() + ", bu " + this.model + " modelidir"; // "present" metodunu çağırır və model məlumatını əlavə edir.
  }
}

//* Yeni bir obyekt yaratmaq və metodu istifadə etmək
const mycar1 = new Model("Ford", "Mustang");
console.log(mycar.show()); // Çıxış: "Mənim bir Ford, bu Mustang modelidir"

//* `super()` metodu
//? `super()` metodu, ana sinifin konstruktorunu və ya metodlarını çağırmağa imkan verir.
//? Burada, `Model` sinifinin konstruktorunda `super(name)` istifadə etdik. Bu, `Car` sinifinin konstruktorunu çağırır və `this.brand`-ı təyin edir.
//? Beləliklə, "Model" sinifi "Car" sinifinin metodlarına və xüsusiyyətlərinə sahib olur.

//* Siniflərin daha ətraflı istifadəsi
//? Siniflər böyük layihələrdə kodu daha səliqəli və oxunaqlı etmək üçün çox faydalıdır.
//? Onlar, xüsusilə böyük proqramlarda obyekt yönümlü proqramlaşdırma (OOP) prinsiplərinin tətbiqində mühüm rol oynayır.
//? Siniflər vasitəsilə obyektlərin yaradılması və müxtəlif xüsusiyyətlərə sahib olması çox daha rahat və təmiz kod yazmağa imkan verir.
