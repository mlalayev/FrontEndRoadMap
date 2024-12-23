//* Closures (Bağlamalar)

//? **Closure Nədir?**
//? Closure, JavaScript-də bir funksiyanın başqa bir funksiyanı əhatə etdiyi və daxili funksiyanın xarici funksiyanın dəyişənlərinə daxil ola bildiyi bir vəziyyətdir.
//? Bu, dəyişənlərin əlçatanlığını təmin edir və JavaScript-də funksiyaların işləmə şəkildəki vacib bir konseptdir.
//? Closure, funksiyanın özünün müəyyənləşdirdiyi dəyəri yadda saxlamasına imkan verir.

//* **Closure Necə İşləyir?**
//? Closure, bir funksiyanın daxili funksiyasının xarici funksiyanın dəyişənlərinə daxil olmasına imkan tanıyır.
//? Bu, həmçinin bir funksiyanın öz mühitindəki məlumatları yadda saxlamağa kömək edir.

//* **Closure Nümunəsi:**
//? Aşağıdakı nümunədə, `outerFunction` xarici funksiyasının daxilindəki `innerFunction` daxili funksiyası ona daxil ola bilir.
function outerFunction() {
  let counter = 0; //? Bu dəyişən yalnız `outerFunction`-un daxilində mövcuddur
  function innerFunction() {
    counter++; //? Daxili funksiya xarici funksiyanın dəyişəninə daxil ola bilir
    console.log(counter); //? Hər dəfə çağırıldıqda `counter`-u artırır
  }
  return innerFunction; //? `innerFunction`-u return edirik, beləliklə ona xarici mühitdən daxil ola bilərik
}

const counter1 = outerFunction(); //? `outerFunction` çağrıldığında `innerFunction` qaytarılır
counter1(); //? 1
counter1(); //? 2
counter1(); //? 3

//* **Closure və Lexical Scope**
//? Closure, "lexical scoping" konseptinə əsaslanır. Yəni, funksiyanın daxilində olduğu mühitdən dəyişənlərə daxil olmaq olur.
//? Funksiya daxilində hər hansı bir dəyişənə müraciət, həmin funksiyanın deklarasiya olunduğu mühitə aiddir.

//* **Closure ilə Məlumatın Gizlədilməsi (Data Encapsulation)**
//? Closure, məlumatı gizlətmək və onu yalnız müəyyən metodlar vasitəsilə əldə etməyə imkan tanıyır. Bu, məlumatın manipulyasiyasını idarə etməyə kömək edir.
function createCounter() {
  let count = 0; //? Bu dəyişən `createCounter` funksiyasının daxilində gizlidir
  return {
    increment: function () {
      //? `increment` funksiyası `count` dəyişəninə daxil ola bilir
      count++;
      console.log(count);
    },
    decrement: function () {
      //? `decrement` funksiyası da `count` dəyişəninə daxil olur
      count--;
      console.log(count);
    },
    getCount: function () {
      //? `getCount` funksiyası `count` dəyişənini geri qaytarır
      return count;
    },
  };
}

const counter2 = createCounter(); //? `createCounter` çağırıldıqda `increment`, `decrement` və `getCount` metodlarını alır
counter2.increment(); //? 1
counter2.increment(); //? 2
counter2.decrement(); //? 1
console.log(counter2.getCount()); //? 1 - `count` dəyişəni gizlidir, yalnız metodlar vasitəsilə əldə edilir

// //* **Closure və Asinxron Funksiyalar**
// //? Closure həmçinin asinxron funksiyaların işində istifadə olunur. Asinxron funksiyalar, daxili funksiyalarda dəyişənləri saxlaya bilir və callback funksiyalarında istifadə edə bilərlər.
// function fetchData(url) {
//     let result = null;
//     fetch(url)  //? Asinxron əməliyyat
//         .then(response => response.json())
//         .then(data => {
//             result = data;  //? `result` dəyişəni burada saxlanılır
//             console.log("Data fetched:", result);
//         })
//         .catch(error => console.log("Error:", error));
// }

// fetchData("https://api.example.com/data");  //? Fetch data from API

//* **Closure-nun Faydaları və İstifadə Məqsədləri**
//? - **Məlumatın gizlədilməsi**: Daxili dəyişənlərə yalnız müəyyən funksiyalar daxil ola bilir.
//? - **Funksiya təkrarı**: Funksiyalar arasında məlumatı yadda saxlamaq, məsələn, sayaç funksiyalarında istifadə edilə bilər.
//? - **Asinxron əməliyyatlarda saxlama**: Asinxron əməliyyatların nəticələri yaddaşda saxlanıla bilər və callback funksiyalarında istifadə edilə bilər.

//* **Closure-un Məhdudiyyətləri**
//? Closure-lar çoxsaylı məlumatı saxladıqda, çoxlu sayda funksiya işləyirsə, yaddaş problemi yarana bilər.
//? Bununla yanaşı, closure-dan istifadə edərkən, "memory leak" (yaddaş sızıntısı) problemini də nəzərə almaq vacibdir.

//* **Nəticə**
//? Closure, JavaScript-də funksiyalar arasında məlumatların saxlanmasını təmin edir. Funksiya daxilindəki dəyişənlər digər funksiyalar tərəfindən əlçatan olur və bu, məlumatların gizlədilməsi və asinxron funksiyaların idarə edilməsi kimi faydalıdır.
