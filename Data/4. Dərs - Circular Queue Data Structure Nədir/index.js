//* 4. Circular Queue: Dairəvi Növbə Məlumat Strukturu

//? **Circular Queue (Dairəvi Növbə) Nədir?**
//? Dairəvi növbə, normal növbənin təkmilləşdirilmiş bir növüdür. Bu, növbənin sonunda növbə başlanğıcı ilə birləşərək dövr edir.
//? Bu məlumat strukturu, elementlərin sırasını daha səmərəli şəkildə idarə etmək üçün istifadə edilir.
//? Növbənin sonu başladığı yerə qayıtdıqda, növbə əvvəlki boşluqları təkrar istifadə edərək davam edir.
//? Bu xüsusiyyət, xüsusən yaddaşın effektiv istifadəsi baxımından faydalıdır.

//? **Dairəvi Növbənin Əsas Xüsusiyyətləri:**
//? - **Dairəvi Davranış:** Növbənin sonu başa bağlanır və beləliklə boş yer olmadan növbə elementi əlavə etmək və çıxarmaq mümkündür.
//? - **İki Göstərici:** Növbə strukturu adətən `front` və `rear` göstəriciləri ilə idarə olunur.
//?    - `front`: Növbənin başında olan elementin indeksini göstərir.
//?    - `rear`: Növbənin sonunda olan elementin indeksini göstərir.
//? - **Tam və Boş Növbə:** Dairəvi növbənin tam olub-olmaması, `front` və `rear` göstəricilərinin mövqeyinə görə müəyyən edilir.
//? - **FIFO (İlk Daxil Olan, İlk Çıxarılacaq):** Əsas olaraq FIFO prinsipi ilə işləyir.

//? **Dairəvi Növbə Əməliyyatları:**
//? - **Enqueue:** Növbəyə yeni element əlavə etmək.
//? - **Dequeue:** Növbədən ən əvvəlki elementin çıxarılması.
//? - **Front:** Növbənin başındakı elementi göstərir.
//? - **Rear:** Növbənin sonunda olan elementi göstərir.
//? - **IsFull:** Növbənin dolub-dolmadığını yoxlayır.
//? - **IsEmpty:** Növbənin boş olub-olmadığını yoxlayır.

//? **Dairəvi Növbənin İmplementasiyası:**

class CircularQueue {
  constructor(size) {
    this.size = size; // Növbənin maksimal ölçüsü
    this.queue = new Array(size); // Dairəvi növbə üçün array
    this.front = -1; // Növbənin başı
    this.rear = -1; // Növbənin sonu
  }

  //? **Enqueue** - Yeni elementin növbəyə əlavə edilməsi
  enqueue(element) {
    // Növbə dolubsa, əlavə etmək mümkün deyil
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Növbə doludur!");
      return;
    }

    // Əgər növbə boşdursa, həm front, həm də rear göstəricisini sıfır et
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      // Sonra rear göstəricisini dövr etməklə növbəyə yeni element əlavə et
      this.rear = (this.rear + 1) % this.size;
    }

    this.queue[this.rear] = element;
    console.log(`${element} növbəyə əlavə olundu`);
  }

  //? **Dequeue** - Növbənin başındakı elementin çıxarılması
  dequeue() {
    // Növbə boşdursa, heç bir element çıxarılmayacaq
    if (this.front === -1) {
      console.log("Növbə boşdur!");
      return;
    }

    const removedElement = this.queue[this.front];
    // Yalnız bir element qalmışsa, növbəni təmizlə
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Front göstəricisini dövr etməklə növbədən element çıxar
      this.front = (this.front + 1) % this.size;
    }

    console.log(`${removedElement} növbədən çıxarıldı`);
  }

  //? **Front** - Növbənin başındakı elementi göstərir
  frontElement() {
    if (this.front === -1) {
      console.log("Növbə boşdur!");
      return;
    }

    console.log(`Növbənin başındakı element: ${this.queue[this.front]}`);
  }

  //? **Rear** - Növbənin sonunda olan elementi göstərir
  rearElement() {
    if (this.rear === -1) {
      console.log("Növbə boşdur!");
      return;
    }

    console.log(`Növbənin sonunda olan element: ${this.queue[this.rear]}`);
  }

  //? **IsFull** - Növbənin dolub-dolmadığını yoxlayır
  isFull() {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Növbə doludur");
      return true;
    }
    return false;
  }

  //? **IsEmpty** - Növbənin boş olub-olmadığını yoxlayır
  isEmpty() {
    if (this.front === -1) {
      console.log("Növbə boşdur");
      return true;
    }
    return false;
  }
}

// Nümunə istifadəsi:
const circularQueue = new CircularQueue(5); // Maksimum ölçü 5 olan dairəvi növbə

circularQueue.enqueue(10); // 10 növbəyə əlavə olundu
circularQueue.enqueue(20); // 20 növbəyə əlavə olundu
circularQueue.enqueue(30); // 30 növbəyə əlavə olundu
circularQueue.dequeue(); // 10 növbədən çıxarıldı
circularQueue.frontElement(); // Növbənin başındakı element: 20
circularQueue.rearElement(); // Növbənin sonunda olan element: 30
circularQueue.isFull(); // Növbə doludur (əgər artıq 5 element əlavə olunarsa)
circularQueue.isEmpty(); // Növbə boşdur (əgər heç bir element qalmamışsa)

// Circular Queue (Dairəvi Növbə): Normal növbənin təkmilləşdirilmiş formasıdır
// və növbənin sonunda yer qalmasa da əvvəlki boş yer istifadə edilə bilər.
// Bu şəkildə yaddaşın daha effektiv istifadəsi mümkün olur.

// Əsas Əməliyyatlar: enqueue (əlavə etmək), dequeue (çıxarmaq),
// frontElement (başındakı element), rearElement (sondakı element),
// isFull (dolub-dolmadığını yoxlamaq), isEmpty (boş olub-olmadığını yoxlamaq).

// İmplementasiya: CircularQueue sinfi ilə dairəvi növbə qurulub. 
// Növbənin başı (front) və sonu (rear) dövr edir.
