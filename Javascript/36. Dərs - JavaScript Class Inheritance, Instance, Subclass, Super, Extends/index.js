//* 36. Gün - JavaScript Class: Inheritance, Instance, Subclass, Super, Extends

//? **Inheritance (İrsiyyət) Nədir və Necə İstifadə Olunur?**
//? JavaScript-də irsiyyət, bir sinifin digər sinifin xüsusiyyətlərini və metodlarını miras almasıdır. Bu, kodun təkrarlanmasını azaldır və obyekt yönümlü proqramlaşdırma (OOP) prinsiplərindən biridir.
//? İrsiyyətin köməyilə, bir sinif başqa bir sinifdən xüsusiyyət və metodları miras alır və yeni metodlar əlavə edə bilir.


//* **1. Instance (Nümunə) və Subclass (Alt Sinif)**
//? `instance` obyektin sinifdən yaradılmasına aiddir. Bir sinifin nümunəsi (instance) onun xüsusiyyətlərini və metodlarını əldə edir. 
//? Subclass (alt sinif) isə, digər bir sinifin xüsusiyyətlərini və metodlarını miras alaraq yeni funksionallıq əlavə edən sinifdir.
//? **Sintaksis:**

class Person {
    constructor(name, surname, job) {
        this.name = name;
        this.surname = surname;
        this.job = job;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    introduce() {
        console.log(`Salam! Mənim adım ${this.getFullName()} və mən bir ${this.job}-am.`);
    }
}

// Alt sinif
class Programmer extends Person {
    constructor(name, surname, job, language) {
        super(name, surname, job); // Ana sinifin constructor metodunu çağırır
        this.language = language;
    }

    introduce() {
        super.introduce();  // Ana sinifin `introduce` metodunu çağırır
        console.log(`Mənim proqramlaşdırma dilim: ${this.language}.`);
    }
}

// `Programmer` sinifindən bir nümunə yaradılır
const programmer1 = new Programmer("Elvin", "Hüseynov", "Proqramçı", "JavaScript");
programmer1.introduce();
//? "Salam! Mənim adım Elvin Hüseynov və mən bir Proqramçı- am."
//? "Mənim proqramlaşdırma dilim: JavaScript."

// `Person` sinifindən bir nümunə yaradılır
const person1 = new Person("Leyla", "Mammadova", "Mühəndis");
person1.introduce();
//? "Salam! Mənim adım Leyla Mammadova və mən bir Mühəndis- am."

//? **2. `extends` və `super`**
//? `extends` açar sözü ilə bir sinif digər sinifi miras alır. Alt sinif, ana sinifin bütün xüsusiyyətlərini və metodlarını alır.
//? `super` açar sözü, alt sinifdə ana sinifin metodlarına və ya constructor metoduna daxil olmağa imkan verir.
//? `super()` - Ana sinifin constructor metodunu çağırmaq üçün istifadə olunur. Bu metod alt sinifin constructor metoduna daxil olur.


//* **3. `super` ilə Ana Sinifə Daxil Olmaq**
//? Alt sinifdə, ana sinifin metodunu yenidən təyin etmək və ya ona daxil olmaq üçün `super` istifadə edilir. 
//? **Sintaksis:**
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Bu, ${this.year} il istehsalı olan ${this.make} ${this.model}-dir.`);
    }
}

// Alt sinif
class ElectricCar extends Car {
    constructor(make, model, year, batteryLevel) {
        super(make, model, year); // Ana sinifin constructor metodunu çağırır
        this.batteryLevel = batteryLevel;
    }

    displayInfo() {
        super.displayInfo();  // Ana sinifin `displayInfo` metodunu çağırır
        console.log(`Akkumulyator səviyyəsi: ${this.batteryLevel}%`);
    }

    chargeBattery() {
        console.log(`Akkumulyator ${this.make} ${this.model}-də ${this.batteryLevel}% səviyyəsindədir. Yenidən doldurulur...`);
        this.batteryLevel = 100;
    }
}

const myCar = new Car("BMW", "M5", 2022);
myCar.displayInfo();
//? "Bu, 2022 il istehsalı olan BMW M5-dir."

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
myElectricCar.displayInfo();
//? "Bu, 2021 il istehsalı olan Tesla Model 3-dür."
//? "Akkumulyator səviyyəsi: 75%"

myElectricCar.chargeBattery();
//? "Akkumulyator Tesla Model 3-də 75% səviyyəsindədir. Yenidən doldurulur..."
myElectricCar.displayInfo();
//? "Bu, 2021 il istehsalı olan Tesla Model 3-dür."
//? "Akkumulyator səviyyəsi: 100%"


//* **4. Instance (Nümunə)**
//? Sinifdən yaradılan obyektlər, həmin sinifin instansiyası (nümunəsi) sayılır. `new` açar sözü ilə bir sinifdən nümunə yaradılır.
//? Bu nümunə sinifin metodlarını və xüsusiyyətlərini miras alır.


//* **5. Method Overriding (Metodun Yenidən Təyini)**
//? Alt sinifdə, ana sinifin metodunu yenidən təyin edə bilərik. Bu, metodun alt sinifdə fərqli davranmasına imkan verir.
//? **Sintaksis:**
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Bu, ${this.make} ${this.model}-dir.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, engineType) {
        super(make, model);
        this.engineType = engineType;
    }

    // Ana sinifdən `displayInfo` metodunu `super` ilə çağırırıq və əlavə məlumat əlavə edirik
    displayInfo() {
        super.displayInfo();  // Ana sinif metodunun çağırılması
        console.log(`Motor növü: ${this.engineType}`);
    }
}

const bike1 = new Motorcycle("Yamaha", "R1", "Inline-4");
bike1.displayInfo();
//? "Bu, Yamaha R1-dir."
//? "Motor növü: Inline-4"

//? **6. Nə üçün İrsiyyət istifadə edirik?**
//? - **Kodun Təkrarlanmasını Azaltmaq**: Bir çox oxşar xüsusiyyət və metodları bir yerdə təyin edib, siniflər arasında irsiyyət vasitəsilə paylaşmaq mümkündür.
//? - **Modelləşdirmə**: İrsiyyət, həyatdakı təbii əlaqələri modelləşdirməyə kömək edir. Məsələn, `Person` sinifindən `Programmer`, `Manager` kimi alt siniflər yaradıla bilər.
//? - **Daha Səliqəli və Tərtibli Kod**: Siniflər və irsiyyət, kodu daha oxunaqlı və təmiz edir, çünki yenidən istifadə edilə bilən metodlar bir sinifdə toplanır.

//* **Özünüzü Test Edin:**
//? 1. `Car` və `ElectricCar` siniflərinə yeni metodlar əlavə edin, məsələn, `stopEngine`, `accelerate` və s.
//? 2. `Person` sinifindən daha çox alt siniflər yaradın (məsələn, `Engineer`, `Doctor` və s.) və hər birinə özünəməxsus metodlar əlavə edin.

