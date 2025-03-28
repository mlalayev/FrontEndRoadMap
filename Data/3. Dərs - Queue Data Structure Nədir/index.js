//* 3. Queue: Növbə Məlumat Strukturu

//? **Queue (Növbə) Nədir?**
//? Növbə, "ilk daxil olan, ilk çıxar" (FIFO - First In, First Out) prinsipi ilə işləyən bir məlumat strukturudur.
//? Bu o deməkdir ki, növbəyə ilk daxil olan element, ilk olaraq çıxarılır.
//? Növbə məlumat strukturu, məsələn, printer növbələri, serverlərin tələb qəbul etməsi və əməliyyat sistemləri kimi çoxsaylı tətbiqlərdə istifadə olunur.

//? **Queue-ın Əsas Xüsusiyyətləri**
//? - **İlk Daxil Olan, İlk Çıxarılacaq (FIFO):** Növbəyə ilk daxil olan element ilk çıxarılır.
//? - **İki Əsas Əməliyyat:**
//?    - **Enqueue:** Yeni elementin növbəyə əlavə edilməsi.
//?    - **Dequeue:** Növbədən ilk elementin çıxarılması.
//? - **Giriş və Çıxış:** Yalnız növbənin baş hissəsindən çıxarış edilə bilər, yalnız son hissəsindən isə əlavə etmə aparıla bilər.

//? **Növbənin Tətbiq Sahələri**
//? - **Əməliyyat Sistemləri:** İşlərin icra olunma sırasını idarə etmək üçün növbə istifadə edilir. Məsələn, əməliyyat sistemləri hər bir işi növbə ilə icra edir.
//? - **İnternet Tətbiqləri:** Web serverləri, sorğuları növbəyə əlavə edir və sonra bu sorğuları müvafiq qaydada emal edir.
//? - **Simulyasiya:** Məsələn, banklarda müştərilərin xidmət alması növbə ilə idarə olunur.

//? **Növbə Məlumat Strukturunun Əsas Metodları**
//? - **Enqueue (Əlavə Etmək):** Yeni elementin növbənin sonuna əlavə edilməsi.
//? - **Dequeue (Çıxarmaq):** Növbənin baş hissəsindən elementin çıxarılması.
//? - **Front (Ön hissə):** Növbənin başındakı elementin əldə edilməsi.
//? - **IsEmpty (Boşdurmu?):** Növbənin boş olub-olmadığının yoxlanılması.
//? - **Size (Ölçü):** Növbənin içindəki element sayını göstərir.

//? **Queue-nin JavaScript-də İmplementasiyası:**

class Queue {
  constructor() {
    this.items = []; // Növbəni təmsil edən array
  }

  //? **Enqueue** - Yeni elementin növbəyə əlavə edilməsi
  enqueue(element) {
    this.items.push(element);
  }

  //? **Dequeue** - Növbənin baş hissəsindən elementin çıxarılması
  dequeue() {
    if (this.isEmpty()) return "Növbə boşdur";
    return this.items.shift(); // İlk elementi çıxarır
  }

  //? **Front** - Növbənin başındakı elementi göstərir
  front() {
    if (this.isEmpty()) return "Növbə boşdur";
    return this.items[0];
  }

  //? **IsEmpty** - Növbənin boş olub-olmadığını yoxlayır
  isEmpty() {
    return this.items.length === 0;
  }

  //? **Size** - Növbədəki elementlərin sayını göstərir
  size() {
    return this.items.length;
  }

  //? **Clear** - Növbəni tamamilə təmizləyir
  clear() {
    this.items = [];
  }
}

// Nümunə istifadəsi:
const queue = new Queue();

queue.enqueue(10); // Növbəyə 10 əlavə et
queue.enqueue(20); // Növbəyə 20 əlavə et
queue.enqueue(30); // Növbəyə 30 əlavə et

console.log(queue.dequeue()); // 10 çıxarılacaq
console.log(queue.front()); // 20 olacaq (növbənin başındakı element)
console.log(queue.size()); // Növbədəki elementlərin sayı (2)
