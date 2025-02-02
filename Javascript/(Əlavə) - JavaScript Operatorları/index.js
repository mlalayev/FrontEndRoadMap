//* **JavaScript Operatorları və Aritmetik Operatorlar**

//* **Operator Nədir?**
//? Operatorlar verilənlər üzərində əməliyyat aparmaq üçün istifadə olunur.
//? Məsələn, toplama, çıxma, müqayisə və ya məntiqi əməliyyatlar.
//? JavaScript-də müxtəlif növ operatorlar mövcuddur:

//* **1. Aritmetik Operatorlar**
//? - Rəqəmlər üzərində hesablama aparmaq üçün istifadə olunur.

let a = 10;
let b = 5;

console.log(a + b); //* Toplama: 15
console.log(a - b); //* Çıxma: 5
console.log(a * b); //* Vurma: 50
console.log(a / b); //* Bölmə: 2
console.log(a % b); //* Qalıq (modulus): 0
console.log(a ** 2); //* Kvadrat: 10^2 = 100

//? **Artırma və Azaltma Operatorları**
let c = 1;
console.log(c++); //* Artırmadan əvvəl dəyər: 1
console.log(c); //* Artırmadan sonra dəyər: 2
console.log(--c); //* Azaltmadan əvvəl dəyər: 1

//* **2. Təyinat Operatorları**
//? Bir dəyişkənə dəyər təyin etmək üçün istifadə olunur.

let x = 10; //* Təyinat operatoru
x += 5; //* x = x + 5, nəticə: 15
x -= 3; //* x = x - 3, nəticə: 12
x *= 2; //* x = x * 2, nəticə: 24
x /= 4; //* x = x / 4, nəticə: 6
x %= 2; //* x = x % 2, nəticə: 0

//* **3. Müqayisə Operatorları**
//? İki dəyəri müqayisə etmək üçün istifadə olunur. Həmişə boolean (true/false) dəyər qaytarır.

let y = 10;
let z = 20;

console.log(y == z); //* Bərabərdirmi? false
console.log(y != z); //* Fərqlidirmi? true
console.log(y > z); //* Böyükdürmü? false
console.log(y < z); //* Kiçikdirmi? true
console.log(y >= 10); //* Böyük və ya bərabərdirmi? true
console.log(y === 10); //* Dəyər və tip eynidirmi? true
console.log(y !== "10"); //* Dəyər və ya tip fərqlidirmi? true

//* **4. Məntiqi Operatorlar**
//? Boolean dəyərlər üzərində əməliyyat aparır.

let p = true;
let q = false;

console.log(p && q); //* Və (AND): false (Hər ikisi true olmalıdır)
console.log(p || q); //* Və ya (OR): true (Birinin true olması kifayətdir)
console.log(!p); //* Tərs (NOT): false (Əks dəyər)

//* **5. Bitwise Operatorlar**
//? İkilik (binary) səviyyəsində əməliyyatlar aparmaq üçün istifadə olunur.

console.log(5 & 1); //* AND: 1
console.log(5 | 1); //* OR: 5
console.log(5 ^ 1); //* XOR: 4
console.log(~5); //* NOT: -6
console.log(5 << 1); //* Sol sürüşdürmə: 10
console.log(5 >> 1); //* Sağ sürüşdürmə: 2

//* **6. Şərt (Ternary) Operatoru**
//? If-else ifadəsini qısaca yazmaq üçün istifadə olunur.

let age = 18;
let access = age >= 18 ? "Giriş icazəsi var" : "Giriş icazəsi yoxdur";
console.log(access); //* "Giriş icazəsi var"

//* **7. Nümunə: Hesablayıcı**
//? Aritmetik operatorlardan istifadə edərək sadə bir hesablayıcı.

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "0-a bölmək olmaz";
    case "%":
      return a % b;
    default:
      return "Etibarsız operator";
  }
}

console.log(calculator(10, 5, "+")); //* 15
console.log(calculator(10, 0, "/")); //* "0-a bölmək olmaz"

//* **Xülasə:**
//? 1. **Aritmetik operatorlar:** Hesablama əməliyyatları üçün istifadə olunur.
//? 2. **Təyinat və müqayisə operatorları:** Dəyərləri təyin edir və müqayisə edir.
//? 3. **Məntiqi operatorlar:** Boolean dəyərləri idarə edir.
//? 4. **Ternary operatoru:** Şərti ifadələri qısa yazmaq üçün istifadə olunur.

//* **JavaScript-də `=` , `==` və `===` Fərqləri**

//* **1. Təyinat Operatoru (`=`)**
//? Dəyəri bir dəyişkənə təyin etmək üçün istifadə olunur.

// let a = 10; //* `a` dəyişkəninə 10 təyin edildi.
console.log(a); //* Nəticə: 10

//* **2. Bərabərlik Operatoru (`==`)**
//? İki dəyəri müqayisə edir, amma yalnız onların dəyərini yoxlayır. Tip fərqini nəzərə almır.

console.log(10 == "10"); //* true (dəyərlər eynidir, tip nəzərə alınmır)
console.log(0 == false); //* true (0 və false dəyərləri eyni sayılır)
console.log(null == undefined); //* true (null və undefined eyni sayılır)

//* **3. Sərt Bərabərlik Operatoru (`===`)**
//? Həm dəyəri, həm də tipləri müqayisə edir. Daha dəqiq müqayisə üçün istifadə olunur.

console.log(10 === "10"); //* false (dəyərlər eyni olsa da, tiplər fərqlidir)
console.log(0 === false); //* false (tiplər fərqlidir: number və boolean)
console.log(null === undefined); //* false (həm dəyər, həm də tip fərqlidir)

//* **Nümunə ilə İzah:**

// let x = 5;
// let y = "5";

console.log(x == y); //* true (dəyərlər eyni, tip fərqi nəzərə alınmır)
console.log(x === y); //* false (tip fərqi nəzərə alınır)

//? Müqayisə aparmaq üçün həmişə `===` istifadə etmək tövsiyə olunur, çünki bu daha dəqiq nəticələr verir.

//* **Xülasə:**
//? 1. `=` -> Təyinat üçün istifadə olunur.
//? 2. `==` -> Dəyəri yoxlayır, tip fərqini nəzərə almır.
//? 3. `===` -> Həm dəyəri, həm də tipi yoxlayır (ən etibarlı seçimdir).

//* **JavaScript Təyinat (Assignment) Operatorları**

//? Təyinat operatorları dəyişkənlərə dəyər təyin etmək və həmin dəyər üzərində əməliyyatlar aparmaq üçün istifadə olunur.

//* **1. Sadə Təyinat Operatoru (`=`)**
//? Dəyəri bir dəyişkənə təyin edir.

// let a = 10; //* `a` dəyişkəninə 10 təyin edildi.
console.log(a); //* Nəticə: 10

//* **2. Toplama və Təyinat Operatoru (`+=`)**
//? Mövcud dəyərə yeni dəyəri əlavə edir və nəticəni dəyişkənə təyin edir.

// let b = 5;
b += 3; //* Eynidir: b = b + 3
console.log(b); //* Nəticə: 8

//* **3. Çıxma və Təyinat Operatoru (`-=`)**
//? Mövcud dəyərdən yeni dəyəri çıxarır və nəticəni dəyişkənə təyin edir.

// let c = 10;
c -= 4; //* Eynidir: c = c - 4
console.log(c); //* Nəticə: 6

//* **4. Vurma və Təyinat Operatoru (`*=`)**
//? Mövcud dəyəri verilən dəyərlə vurur və nəticəni dəyişkənə təyin edir.

let d = 7;
d *= 2; //* Eynidir: d = d * 2
console.log(d); //* Nəticə: 14

//* **5. Bölmə və Təyinat Operatoru (`/=`)**
//? Mövcud dəyəri verilən dəyərlə bölür və nəticəni dəyişkənə təyin edir.

let e = 20;
e /= 5; //* Eynidir: e = e / 5
console.log(e); //* Nəticə: 4

//* **6. Qalıq və Təyinat Operatoru (`%=`)**
//? Mövcud dəyərin verilən dəyərlə bölünməsindən alınan qalıq nəticəni dəyişkənə təyin edir.

let f = 15;
f %= 4; //* Eynidir: f = f % 4
console.log(f); //* Nəticə: 3

//* **7. Üst Dərəcə və Təyinat Operatoru (`**=`)**
//? Mövcud dəyərin verilən dərəcəyə yüksəldilmiş nəticəsini dəyişkənə təyin edir.

let g = 3;
g **= 3; //* Eynidir: g = g ** 3 (3-ün kubu)
console.log(g); //* Nəticə: 27

//* **8. Bitwise Operatorlar (`&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=`)**
//? Bitwise səviyyəsində əməliyyatlar həyata keçirir və nəticəni dəyişkənə təyin edir.

//* **Nümunə:**
let h = 5; //* İkilik: 0101
h &= 3; //* İkilik: 0101 & 0011 -> 0001
console.log(h); //* Nəticə: 1

//* **Xülasə:**
//? - `=` -> Dəyəri təyin edir.
//? - `+=` -> Toplama və təyinat.
//? - `-=` -> Çıxma və təyinat.
//? - `*=` -> Vurma və təyinat.
//? - `/=` -> Bölmə və təyinat.
//? - `%=` -> Qalıq və təyinat.
//? - `**=` -> Üst dərəcə və təyinat.
//? - Bitwise operatorlar -> Bit səviyyəsində əməliyyatlar üçün.
