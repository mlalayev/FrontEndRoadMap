//* **TypeScript Xüsusi Tiplər (Special Types)**

//? **Xüsusi Tiplər Nədir?**
//? TypeScript-də xüsusi tiplər spesifik verilənlər tipini göstərmir. Bu tiplər daha çevik kod yazmaq üçün istifadə edilir.
//? Aşağıda `any`, `unknown`, `never`, `undefined`, və `null` tiplərinin istifadə qaydaları və nümunələri izah olunur.

//* **1. Tip: any**
//? `any` tipi hər hansı bir tip yoxlanışını söndürür və bütün verilənlər tiplərini qəbul etməyə imkan verir.
//? Bu, tiplərə nəzarəti tamamilə ləğv edir və kod təhlükəsizliyini azalda bilər.

//* Nümunə: any istifadə edilmədən
let u = true;
// u = "string"; //? Səhv: 'string' tipi 'boolean' tipinə təyin edilə bilməz.
// Math.round(u); //? Səhv: 'boolean' tipi 'number' parametrinə təyin edilə bilməz.

//* Nümunə: any istifadə edilərək
let v: any = true;
v = "string"; //? Heç bir səhv yoxdur, çünki "any" tipi hər şey ola bilər.
Math.round(v); //? Heç bir səhv yoxdur, çünki tip yoxlanışı yoxdur.

//? **Qeyd:** `any` istifadə edərkən TypeScript-in təhlükəsizlik və avtomatik tamamlama xüsusiyyətləri işləməyəcək.

//* **2. Tip: unknown**
//? `unknown` tipi `any`-yə bənzərdir, lakin daha təhlükəsizdir. `unknown` tipləri birbaşa istifadə edilə bilməz, əvvəlcə yoxlanmalı və ya cast edilməlidir.

//* Nümunə: unknown istifadəsi
let w: unknown = 1;
w = "string"; //? Heç bir səhv yoxdur, çünki `unknown` tiplərini dəyişdirmək olar.
w = {
  runANonExistentMethod: () => {
    console.log("Mən düşünürəm, ona görə mövcudam.");
  },
} as { runANonExistentMethod: () => void };

//! `w.runANonExistentMethod();`  //? Səhv: 'unknown' tipi istifadə edilə bilməz.

//* Təhlükəsiz yoxlama və casting:
if (typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

//? **Qeyd:** `unknown` tipi məlumatın tipini əvvəlcədən bilmədiyiniz hallarda faydalıdır. Daha sonra bu tipə cast etməklə istifadə edə bilərsiniz.

//* **3. Tip: never**
//? `never` tipi heç vaxt dəyər qəbul etmir və adətən səhvlər yaratmaq üçün istifadə olunur.
//? Bu tip adətən generiklərdə və ya funksiya heç vaxt dəyər qaytarmadıqda istifadə edilir.

//* Nümunə:
function throwError(message: string): never {
  throw new Error(message); //? Funksiya heç vaxt qaytarmır.
}

let x: never;
// x = true; //? Səhv: 'boolean' tipi 'never' tipinə təyin edilə bilməz.

//* **4. Tiplər: undefined & null**
//? `undefined` və `null` JavaScript-in müvafiq primitivlərini göstərir.
//? Əksər hallarda faydalı deyillər, lakin `strictNullChecks` aktivdirsə daha konkret tipləmə üçün istifadə edilə bilər.

let y: undefined = undefined;
let z: null = null;

//* Nümunə: strictNullChecks aktivdir
function processValue(value: string | null): string {
  if (value === null) {
    return "Dəyər yoxdur.";
  }
  return `Dəyər: ${value}`;
}
console.log(processValue(null)); //? "Dəyər yoxdur."
console.log(processValue("Hello")); //? "Dəyər: Hello"

//* **5. Digər nümunələr və izahlar:**

let someValue: any = "123";
let stringLength: number = (someValue as string).length; //? `any` tipini `string` tipinə cast edirik.
console.log(stringLength); //? 3

let unknownValue: unknown = 42;
if (typeof unknownValue === "number") {
  console.log(unknownValue.toFixed(2)); //? 42.00
}

//* **Generiklərdə never istifadəsi**
type ExcludeType<T, U> = T extends U ? never : T;
type Result = ExcludeType<"a" | "b" | "c", "a">; //? 'b' | 'c'

//* **Nəticə:**
//? Xüsusi tiplər TypeScript-də daha çevik və güclü kod yazmağa imkan verir.
//? Ancaq bu tipləri düzgün istifadə etmək üçün onların məhdudiyyətlərini başa düşmək vacibdir.
