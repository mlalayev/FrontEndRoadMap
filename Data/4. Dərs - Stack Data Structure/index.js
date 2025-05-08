//* 4. Dərs – Stack Data Structure (JavaScript)

//? **Stack nədir?**
//? Stack – yəni yığım – son daxil olan ilk çıxar (LIFO – Last In, First Out) prinsipinə əsaslanan data structure-dir.
//? Yəni içəri son daxil olan element, ilk çıxarılan olur. Kitabları üst-üstə qoymağı təsəvvür et, ən üstdə olanı ilk götürürsən.

//? **Stack nə üçün istifadə olunur?**
//? - Browser tarama tarixçəsi (geri düyməsi)
//? - Undo/Redo funksiyaları
//? - Funksiya çağırış stack-i (Call Stack)
//? - Mətnin tərsinə çevrilməsi
//? - Simvol balansını yoxlama (valid parentheses)

//* --------------------------------------------
//* Stack yaratmaq üçün sadə class nümunəsi:

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack boşdur";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" - "));
  }
}


//* İstifadəsi:
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.print(); //? 1 - 2

//* --------------------------------------------
//* **Stack metodlarının zaman mürəkkəbliyi (Time Complexity):**
//? - push(): O(1)
//? - pop(): O(1)
//? - peek(): O(1)
//? - isEmpty(), size(): O(1)
//? - print(): O(n)

//* **Space Complexity:** O(n) – daxil etdiyimiz elementlərin sayına görə

//* --------------------------------------------

//? ✅ Stack JS-də çox yayılmış və effektiv strukturdur.
//? Əgər hansısa problemi "tərsinə getmək" və ya "geri qayıtmaq" kimi düşünürüksə, Stack bu iş üçün əladır.
//? DFS (Depth-First Search) kimi algoritmlər də bu struktura əsaslanır.

//? Növbəti dərs: Queue – First In First Out prinsipi ilə işləyən növbə strukturu ilə tanışlıq.
