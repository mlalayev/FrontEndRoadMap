//* TypeScript-də Klasslar (Classes)
//? TypeScript, JavaScript-ə tip və görünürlük modifikatorları əlavə edir.
//? JavaScript-dəki Klasslar, obyektlərin yaradıla biləcəyi şablonlardır.
//? Bu dərsdə biz TypeScript-də Klassların istifadə olunması və necə işlədiyini ətraflı izah edəcəyik.

//* Klassın Üzvləri: Tiplər (Members: Types)
//? TypeScript-də Klassın üzvləri (xüsusiyyətlər və metodlar) tipləndirilə bilər.
//? Klassın daxilindəki dəyişənlərə tip əlavə edirik, beləliklə, onlara düzgün verilənlər növü tətbiq etmiş oluruq.
//? Aşağıdakı nümunədə `name` adlı xüsusiyyətə `string` tipi verilir və bu, `Person` klassında bir üzv olur.

class Person {
  name: string; //? `name` xüsusiyyəti `string` tipindədir.
}

const person = new Person(); //? Yeni bir `Person` obyekti yaradılır
person.name = "Jane"; //? `name` xüsusiyyətinə "Jane" dəyəri təyin edilir

//? Burada, `name` dəyişəninə tipin verilməsi sayəsində, `name` yalnız `string` tipində dəyərləri qəbul edəcək.

//* Klassın Üzvləri: Görünürlük (Members: Visibility)
//? TypeScript-də, Klassın üzvlərinin görünürlüyünü idarə etmək üçün xüsusi modifikatorlar istifadə edə bilərik.
//? Bu modifikatorlar Klass üzvlərinin hansı sahələrdən əlçatan olacağını təyin edir.
//? Üç əsas görünürlük modifikatoru mövcuddur:
//? 1. **public**: Bu modifikator Klassın üzvlərinə hər yerdən giriş imkanı verir. (Bu, default modifikatorlardır, əgər modifikator göstərilməyibsə, `public` qəbul edilir)
//? 2. **private**: Bu modifikator Klass üzvlərinin yalnız o Klass daxilində istifadə olmasına imkan verir. Xaricdən giriş qadağandır.
//? 3. **protected**: Bu modifikator Klassın üzvlərinə yalnız Klass daxilində və ya ondan irs alan siniflər tərəfindən girişə imkan verir.

class Person3 {
  private name: string; //? `name` xüsusiyyəti `private` olaraq təyin olunub, bu o deməkdir ki, yalnız Klass daxilində istifadə edilə bilər.

  public constructor(name: string) {
    //? `constructor` metodunda `name` parametrinin tipi `string`-dir və bu parametr `private` modifikatoru ilə təyin olunub.
    this.name = name; //? Bu yerdə Klassın daxilində `name` dəyəri təyin edilir.
  }

  public getName3(): string {
    //? `getName` metodunun məqsədi `name` xüsusiyyətinin dəyərini qaytarmaqdır.
    return this.name; //? `name` yalnız `getName` metodu ilə əldə edilə bilər.
  }
}

const person3 = new Person3("Jane"); //? Yeni `Person` obyekti yaradılır və `name`-ə "Jane" dəyəri təyin edilir
console.log(person3.getName3()); //? `getName` metodu vasitəsilə `name` xüsusiyyətinin dəyəri əldə edilir. Bu, "Jane" olacaq.

//? `name`-ə xaricdən birbaşa giriş əldə edilə bilməz, çünki o `private` olaraq təyin edilib.
//? Bu, obyektin xüsusiyyətlərini qorumağa və yalnız müəyyən metodlar vasitəsilə onlara giriş etməyə imkan verir.

//* `this` Açar Sözü (The this keyword)
//? TypeScript və JavaScript-də `this` açar sözü, adətən, sinifin nümunəsinə (instance) işarə edir.
//? Klass daxilində `this`, o sinifin konkret obyekti ilə əlaqəli olur. Bu, metodlarda və xüsusiyyətlərdə istifadə olunur.
//? Yəni, `this` obyektin özünü göstərir və bu obyektin üzvlərinə daxil olmaq üçün istifadə edilir.

//* Parametr Xüsusiyyətləri (Parameter Properties)
//? TypeScript, konstruktorda parametrdən istifadə edərək sinifin üzvlərini asanlıqla təyin etməyə imkan verir.
//? Bu xüsusiyyət, parametrin həmçinin bir üzv olaraq avtomatik təyin olunmasına səbəb olur.
//? Biz, parametrin önündə görünürlük modifikatorları əlavə edirik (məsələn, `private`, `public`).

class Person2 {
  //? Konstruktorda `name` parametrini `private` olaraq təyin edirik. Bu həmçinin sinifin üzvü olacaq.
  public constructor(private name: string) {}

  public getName2(): string {
    //? `getName` metodu ilə `name`-i əldə edirik
    return this.name;
  }
}

const person2 = new Person2("Jane"); //? Yeni `Person` obyekti yaradılır və `name` parametrinə "Jane" dəyəri verilir
console.log(person2.getName2()); //? "Jane" dəyəri ekranda çap olunacaq

//? Bu halda, parametrin tipi həm konstruktor daxilində təyin olunur, həm də o, sinifin bir üzvü olur.

//* Readonly Xüsusiyyəti (Readonly)
//? `readonly` açar sözü, dəyişənin yalnız bir dəfə təyin edilməsinə imkan verir.
//? Yəni, bir dəfə təyin olunduqdan sonra bu dəyişən dəyişdirilə bilməz.
//? Bu xüsusiyyət, obyektin müəyyən xüsusiyyətlərini qorumaq üçün istifadə olunur.

class Person1 {
  private readonly name: string; //? `name` xüsusiyyəti yalnız bir dəfə təyin edilə bilər.

  public constructor(name: string) {
    this.name = name; //? `name` yalnız konstruktor daxilində təyin oluna bilər.
  }

  public getName1(): string {
    //? `getName` metodu ilə `name`-in dəyəri əldə edilir.
    return this.name;
  }
}

const person1 = new Person1("Jane"); //? Yeni `Person` obyekti yaradılır və `name` parametrinə "Jane" dəyəri verilir
console.log(person1.getName1()); //? "Jane" dəyəri ekranda çap olunacaq

//? `readonly` ilə təyin edilən xüsusiyyətlərdən sonra heç bir dəyişiklik edilə bilməz.
//? Bu, məlumatın etibarlılığını qorumaq və səhv nəticələrdən qaçmaq üçün vacibdir.

//* Nəticə
//? TypeScript-də Klasslar, obyektlərin şablonlarını yaratmaq üçün güclü bir üsuldur.
//? Klasslar vasitəsilə məlumatları daha yaxşı təşkil etmək, daha yaxşı tip təhlükəsizliyi təmin etmək və məlumatların düzgün idarə edilməsini təmin etmək mümkündür.
//? Klass üzvlərinin görünürlüyünü (`public`, `private`, `protected`) və digər xüsusiyyətləri (`readonly`, `parameter properties`) istifadə edərək məlumatları qorumaq və kodunuzu daha təhlükəsiz etmək mümkündür.
//? Bu mövzuları başa düşmək, TypeScript-də effektiv və təhlükəsiz tətbiqlər yaratmağa kömək edəcək.
