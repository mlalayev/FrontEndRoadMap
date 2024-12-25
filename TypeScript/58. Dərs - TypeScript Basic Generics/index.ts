//* TypeScript-də Temel Generics (Basic Generics)
//? Generics, 'tip dəyişənləri' yaratmağa imkan verir və bu, siniflər, funksiyalar və tip aliasları yaratmağa kömək edir. Bu yolla, istifadə olunan tipləri açıq şəkildə təyin etməyə ehtiyac qalmır.
//? Bu xüsusiyyət, ümumiləşdirilmiş kod yazmağa imkan verir və kodun təkrar istifadəsini asanlaşdırır.
//? Generics, müxtəlif tip mülahizələrini dəstəkləyərək daha çevik və istifadəyə uyğun kod yazmağa imkan verir.


//* Funksiyalar (Functions)
//? Generics ilə funksiyalar, daha ümumiləşdirilmiş metodlar yaratmağa kömək edir. Bu metodlar, istifadə olunan və qaytarılan tipləri daha doğru şəkildə təmsil etməyə imkan verir.
//? Bu, müxtəlif verilənlər növləri ilə işləyən funksiyalar yaratmağa imkan verir. Aşağıda `createPair` adlı bir funksiya nümunəsi təqdim olunur:

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2]; //? Bu funksiya, `v1` və `v2` parametrini alır və onların cütünü (`pair`) qaytarır. `S` və `T` parametr tipləri, istifadəçinin daxil etdiyi tiplərdən müəyyən olunur.
  }
  
  console.log(createPair<string, number>('hello', 42));  // ['hello', 42]  //? Burada, `S` tipi `string`, `T` tipi isə `number` olaraq təyin olunub. Bu halda, `createPair` funksiyası "hello" və 42-nin cütünü qaytarır.
  //? TypeScript, generics istifadə edərkən parametrlərdən tipləri təyin edə bilir. Bu, kodun daha qısa və oxunaqlı olmasını təmin edir.
  
  
  //* Siniflər (Classes)
  //? Generics, siniflər üçün də istifadə oluna bilər və siniflərin tiplərini ümumiləşdirməyə imkan verir.
  //? Siniflərdə generics istifadə etmək, ümumi siniflərin yaradılmasına imkan verir. Məsələn, `Map` sinifi bir generics sinifidir.
  
  class NamedValue<T> {
    private _value: T | undefined;  //? `T` tipi burada generics kimi istifadə olunur və `value` dəyişəni bu tipdən olacaq.
  
    constructor(private name: string) {}  //? Konstruktor, `name` parametrini alır və sinifin üzvü olaraq saxlayır.
  
    public setValue(value: T) {  //? `setValue` metodu, `T` tipində bir dəyəri qəbul edir və `_value`-yə təyin edir.
      this._value = value;
    }
  
    public getValue(): T | undefined {  //? `getValue` metodu, `_value`-ni qaytarır. Bu da `T` tipində olacaq.
      return this._value;
    }
  
    public toString(): string {  //? `toString` metodu, sinifin `name` və `_value` xüsusiyyətlərini mətn şəklində geri qaytarır.
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');  //? Burada `NamedValue` sinifi `number` tipi ilə istifadə olunur. `name` olaraq "myNumber" verilir.
  value.setValue(10);  //? `setValue` metodu vasitəsilə `_value` dəyişəni təyin olunur.
  console.log(value.toString());  //? `toString` metodu çağırılır və "myNumber: 10" çap olunur.
  
  
  //* Tip Aliasları (Type Aliases)
  //? TypeScript-də generics, daha çevik və təkrar istifadə oluna bilən tiplər yaratmaq üçün istifadə oluna bilər.
  //? Type aliasları ilə, yeni tip adları yaradılır və bunlar generics ilə daha çevik olur.
  //? Bu da kodun daha təkrar istifadə edilə bilən və oxunaqlı olmasına kömək edir.
  
  type Wrapped<T> = { value: T };  //? `Wrapped` tip aliası, `value` adlı bir xüsusiyyətə malik olan bir tip yaradıb, bu tipin tipi `T` olacaq.
  
  const wrappedValue: Wrapped<number> = { value: 10 };  //? Burada `Wrapped<number>` istifadə edilir və `value` 10 olaraq təyin olunur.
  //? `Wrapped` aliası sayəsində, çoxsaylı növ dəyərlər üçün eyni strukturu istifadə etmək mümkündür.
  
  
  //* Default Dəyər (Default Value)
  //? Generics, heç bir xüsusi dəyər göstərilmədikdə və ya tipi çıxarıla bilmədikdə, bir default dəyər təyin edilməsinə imkan verir.
  //? Default dəyərlər, istifadəçinin xüsusi tip təyin etmədiyi hallarda tətbiq olunur və bu, daha çevik və istifadəyə uyğun olur.
  
  class NamedValue1<T = string> {
    private _value: T | undefined;  //? Burada, `T` üçün default dəyər olaraq `string` təyin edilib.
  
    constructor(private name: string) {}
  
    public setValue(value: T) {  //? `setValue` metodunda, `T` tipi istifadə edilir və bu, default olaraq `string` olacaq.
      this._value = value;
    }
  
    public getValue(): T | undefined {  //? `getValue` metodu `_value`-ni qaytarır.
      return this._value;
    }
  
    public toString(): string {  //? `toString` metodu `name` və `_value`-ni birləşdirərək bir mətn qaytarır.
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value1 = new NamedValue1('myNumber');  //? `NamedValue` sinifi default olaraq `string` tipi ilə istifadə olunur.
  value1.setValue('myValue');  //? `setValue` metodunda `string` dəyəri təyin olunur.
  console.log(value.toString());  //? "myNumber: myValue" çap olunur.
  
  
  //* Extends (Məhdudiyyətlər)
  //? Generics-də məhdudiyyətlər (`extends`) əlavə edilə bilər. Bu məhdudiyyətlər, hansı növ verilənlərin istifadə oluna biləcəyini təyin edir.
  //? Məhdudiyyətlər, generics-in daha spesifik tiplərlə işləməsinə imkan verir. Bu, kodun daha düzgün işləməsini təmin edir.
  
  function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);  //? Bu funksiyada, `S` və `T` yalnız `string` və ya `number` tipləri ilə məhdudlaşdırılır.
    return [v1, v2];  //? Bu cütü qaytarır.
  }
  
  createLoggedPair(5, 'hello');  //? Bu işləyəcək, çünki həm `5` (number), həm də `'hello'` (string) uyğun gəlir.
  //createLoggedPair(true, 'hello');  //? Bu səhv olacaq, çünki `true` (`boolean`) tipi `string` və `number` ilə uyğun deyil.
  
  
  //* Nəticə
  //? Generics, TypeScript-də kodun daha çevik və təkrar istifadə edilə bilən olmasını təmin edir.
  //? Funksiyalar, siniflər və tip aliasları ilə işləyərkən generics istifadə edərək çoxsaylı verilənlər tipləri ilə uyğun kod yaza bilərsiniz.
  //? Default dəyərlər və məhdudiyyətlər əlavə edərək generics-in gücünü daha da artırmaq mümkündür.
  