//* Arrow Functions (Ox İşarəsi ilə Funksiyalar)
//? Arrow functionlar, funksiyaların daha qısa və sadə yazılmasına imkan verir. Bu, kodu daha təmiz və oxunaqlı edir.
//? Ənənəvi funksiyaları yazmaq üçün `function` açar sözündən istifadə edirik, amma arrow function-da bu əvəzinə `=>` işarəsindən istifadə olunur.
//? Arrow function-ların əsas xüsusiyyəti sintaksisin sadələşməsidir.

//* Ənənəvi Funksiya (Before)
hello = function() {
    return "Hello World!"; // Bu funksiyada "Hello World!" mətnini qaytarırıq.
  }
  
  //* Arrow Function (Ox işarəsi ilə Funksiya)
  hello = () => {
    return "Hello World!"; // Arrow function ilə bu kod daha qısa yazılır.
  }
  
  //* Funksiya yalnız bir cümlədən ibarət olduqda, `{}` mötərizələrini və `return` açar sözünü çıxara bilərik.
  //? Yəni aşağıdakı şəkildə, bir cümlə varsa, kod daha da qısa olur:
  hello = () => "Hello World!"; // Bu funksiya yalnız bir mətn qaytarır.
  
  //* Parametrlərlə Arrow Function (Ox işarəsi ilə Funksiya və Parametrlər)
  //? Arrow function-larda parametrləri mötərizədə təyin edirik.
  //? Parametrləri `()` mötərizələrinə yazırıq və onları funksiyaya daxil edirik.
  //? Aşağıdakı nümunədə, `val` parametrini alıb `Hello` ilə birləşdiririk:
  hello = (val) => "Hello " + val; // "Hello" ilə verilən parametri birləşdiririk.
  
  //* Bir parametr varsa, mötərizələri da çıxara bilərik
  //? Əgər yalnız bir parametr varsa, onu yazmaq üçün mötərizələri istifadə etməyə də ehtiyac yoxdur.
  //? Aşağıdakı nümunədə, `val` yalnız bir parametr olduğu üçün mötərizə istifadə edilmir:
  hello = val => "Hello " + val; // Bu, sadə bir arrow function nümunəsidir.
  
  //* `this` ilə necə işləyir?
  //? Arrow function-ların əsas fərqlərindən biri `this` açar sözünün işləmə tərzidir.
  //? Ənənəvi funksiyalarda `this` açar sözü, funksiyanı çağıran obyektə işarə edir. Məsələn, `window`, `document`, `button` və s.
  //? Arrow function-larda isə `this` açar sözü, funksiyanın özünü təyin edən obyektə işarə edir.
  //? Gəlin bunu daha yaxşı başa düşmək üçün nümunələrə baxaq:
  
  //* Ənənəvi Funksiya ilə `this` istifadə etmək
  //? Bu nümunədə, `this` funksiyanı çağıran obyektə işarə edir:
  class Header {
    constructor() {
      this.color = "Red"; // Başlıq rəngini təyin edirik
    }
  
    // Ənənəvi funksiya:
    changeColor = function() {
      document.getElementById("demo").innerHTML += this; // `this` burada `window` və ya `button` ola bilər.
    }
  }
  
  const myheader1 = new Header(); // `Header` sinifindən bir obyekt yaradırıq
  
  // Sayfa yükləndikdə funksiyanı çağırırıq:
  window.addEventListener("load", myheader.changeColor); // `window` obyektinin `this` açar sözü `window` olacaq
  
  // Düyməyə kliklənəndə funksiyanı çağırırıq:
  document.getElementById("btn").addEventListener("click", myheader.changeColor); // `button` obyektinin `this` açar sözü `button` olacaq
  
  //* Arrow Function ilə `this` istifadə etmək
  //? Arrow function-larda isə `this` açar sözü funksiyanı təyin edən obyektə işarə edir:
  //? Yəni, burada hər iki halda da `this`, `Header` sinifinin `myheader` obyektinə işarə edəcək.
  class Header {
    constructor() {
      this.color = "Red"; // Başlıq rəngini təyin edirik
    }
  
    // Arrow function:
    changeColor = () => {
      document.getElementById("demo").innerHTML += this; // Burada `this` həmişə `Header` obyektinə işarə edəcək
    }
  }
  
  const myheader = new Header(); // `Header` sinifindən bir obyekt yaradırıq
  
  // Sayfa yükləndikdə funksiyanı çağırırıq:
  window.addEventListener("load", myheader.changeColor); // `this` həmişə `myheader` olacaq
  
  // Düyməyə kliklənəndə funksiyanı çağırırıq:
  document.getElementById("btn").addEventListener("click", myheader.changeColor); // `this` yenə də `myheader` olacaq
  
  //* `this` ilə fərqlilik
  //? Yuxarıdakı iki nümunədə göründüyü kimi, ənənəvi funksiya ilə `this` açar sözü çağıran obyektə işarə edir, amma arrow function-larda `this` açar sözü həmişə funksiyanı təyin edən obyektə işarə edir.
  //? Bu, arrow function-ları daha asan və təkrarlanması çətin kod yazmağa imkan verir.
  
  //* Arrow Functions ilə yazmaq nəyə yarayır?
  //? Arrow function-lar daha qısa və təmiz sintaksis təklif edir. 
  //? Kodu qısa saxlamağa kömək edir və xüsusilə sadə funksiyalar üçün çox faydalıdır.
  //? Bununla yanaşı, `this` açar sözünün fərqli işləmə qaydası, onu müəyyən hallarda daha uyğun edir.
  
  //* Nə zaman hansı funksiyanı istifadə etməliyik?
  //? Bəzən ənənəvi funksiyalar lazım olur, çünki onlar daha çox esneklik təqdim edir, amma əksər hallarda arrow function-lar daha yaxşıdır, çünki onlar daha qısa və asan anlaşılır.
  //? Əgər `this` açar sözünü istifadə edərkən, arrow function-lar daha doğru nəticələr verə bilər.
  