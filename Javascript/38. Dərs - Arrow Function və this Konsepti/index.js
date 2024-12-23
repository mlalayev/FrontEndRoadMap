//* 35. Gün - Arrow Function və "this" Konsepti

//? **Arrow Funksiyaları Nədir?**
//? Arrow funksiyaları (`=>`) JavaScript-də funksiyaların yazılma formasını sadələşdirən xüsusiyyətdir.
//? Onlar normal funksiyalardan fərqli olaraq, daha qısa sintaksisə malikdir və müəyyən hallarda "this" davranışı fərqlidir.

//* **Arrow Funksiyanın Sintaksisi:**
//? Arrow funksiyalarının sintaksisi, ənənəvi funksiyalardan fərqli olaraq, açılış və bağlanış parantezlərinin arasındakı `function` açar sözünü istifadə etmədən qısa şəkildə yazılır.
const add = (a, b) => a + b;
console.log(add(3, 4)); //? 7 olacaq

//* **Arrow Funksiya ilə "this" Davranışı**
//? Arrow funksiyalarının ən böyük fərqi, onların `this`-i özləri üçün təyin etməməsidir.
//? Arrow funksiyalar `this`-i, onları əhatə edən mühitdən miras alırlar (lexical scoping).
//? Yəni, arrow funksiyalar `this`-i, onları yaradıldığı kontekstdən götürürlər və özləri dəyişdirmirlər.

const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Normal Function: ", this.name); //? Normal funksiya, obyektin `this`-inə işarə edəcək
  },
  greetArrow: () => {
    console.log("Arrow Function: ", this.name); //? Arrow funksiya, global `this`-i alacaq
  },
};

person.greet(); //? "Normal Function: Alice"
person.greetArrow(); //? "Arrow Function: undefined" - çünki arrow funksiya global `this`-i alır və `name` dəyişəni yoxdur

//* **Arrow Funksiyanın Üstünlükləri və Məhdudiyyətləri**
//? Arrow funksiyalar daha qısa sintaksis təklif etsə də, bəzi hallarda onların istifadə edilməsi yaxşı bir yanaşma deyil.
//? - Arrow funksiyalar "this" ifadəsini çevirmir, buna görə `this`-i təyin etmək istəyirsinizsə, ənənəvi funksiyalardan istifadə etmək daha yaxşı ola bilər.
//? - Arrow funksiyalar həmçinin `arguments` obyektini də təklif etmir, buna görə dinamik arqumentlərə ehtiyac varsa, ənənəvi funksiyalar daha uyğun ola bilər.

//* **Nümunə: "this" ilə Arrow Funksiyanın Fərqi**
//? `this`-in dəyişmədiyi bir nümunə:
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++; //? Arrow funksiya olduğu üçün `this` Counter obyektinə işarə edir
    console.log(this.count); //? Hər 1 saniyədə 1 artırılacaq
  }, 1000);
}

const counter = new Counter(); //? Counter işə düşəcək və count hər saniyədə artıracaq

//* **Nəticə**
//? Arrow funksiyalar daha qısa yazılır və müəyyən hallarda daha sadə və oxunaqlı kod yazmağa kömək edir.
//? Ancaq onların `this` davranışı fərqlidir və onları istifadə edərkən bu fərqi nəzərə almaq vacibdir.
