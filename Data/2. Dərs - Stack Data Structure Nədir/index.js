//* Stack (Yığın) Məlumat Strukturu

//? **Stack (Yığın) Nədir?**
//? Stack - verilənlərin müəyyən bir qaydada saxlanmasını təmin edən məlumat strukturudur.
//? Bu struktur "Last In, First Out" (LIFO) prinsipi ilə işləyir, yəni ən son əlavə edilən element birinci çıxarılır.

//? **Stack-in Real Həyat Analogiyası**
//? Stack-i bir-birinin üstünə yığılan boşqablar kimi düşünə bilərik.
//? Ən son qoyulan boşqab birinci götürülür.

//? **Stack-in Əsas Əməliyyatları**
//? 1. **Push** - Yığına yeni element əlavə edir.
//? 2. **Pop** - Yığından ən son əlavə edilən elementi çıxarır.
//? 3. **Peek** - Yığının ən üstündəki elementi qaytarır, lakin onu silmir.
//? 4. **isEmpty** - Yığının boş olub-olmadığını yoxlayır.
//? 5. **size** - Yığındakı elementlərin sayını qaytarır.

//? **JavaScript-də Stack-in İmplementasiyası**

class Stack {
  constructor() {
    this.items = [];
  }

  // Element əlavə edir (push)
  push(element) {
    this.items.push(element);
  }

  // Son elementi çıxarır (pop)
  pop() {
    if (this.isEmpty()) {
      return "Stack boşdur";
    }
    return this.items.pop();
  }

  // Son elementi qaytarır (peek)
  peek() {
    if (this.isEmpty()) {
      return "Stack boşdur";
    }
    return this.items[this.items.length - 1];
  }

  // Stack boş olub olmadığını yoxlayır (isEmpty)
  isEmpty() {
    return this.items.length === 0;
  }

  // Stack-in ölçüsünü qaytarır (size)
  size() {
    return this.items.length;
  }
}

//? **Stack-in İstifadəsi**

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 2
