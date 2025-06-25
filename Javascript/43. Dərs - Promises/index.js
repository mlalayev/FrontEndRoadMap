//* **Promises**

//* **Promise Nədir?**

//* Promise
//* İnsanlar bir fəaliyyət görmək üçün ya özlərinə, ya da başqalarına vəd verirlər. Əgər biz verdiyimiz vədi tutarsaq, başqalarını sevindirərik, əgər tutmasaq, narazılıq doğura bilər. JavaScript-də Promise də yuxarıdakı misallara oxşar bir konseptə malikdir.

//* Promise, JavaScript-də asinxron əməliyyatları idarə etmək üçün bir yoldur. Bu, asinxron əməliyyatların gələcəkdə uğurlu nəticəsini və ya uğursuzluq səbəbini idarə etməyə imkan verir. Bu, asinxron metodların sinxron metodlar kimi dəyərləri geri qaytarmasına imkan verir: dərhal son dəyəri qaytarmaq əvəzinə, asinxron metod, gələcəkdə bu dəyəri təmin etmək üçün bir vəd (Promise) qaytarır.

//* Promise-in bir neçə vəziyyəti var:

//? pending: başlanğıc vəziyyəti, nə yerinə yetirilib, nə də rədd edilib.
//? fulfilled: əməliyyatın müvəffəqiyyətlə tamamlandığını bildirir.
//? rejected: əməliyyatın uğursuz olduğunu bildirir.

//* Pending vəziyyətində olan bir Promise, ya dəyər (value) ilə yerinə yetirilə bilər, ya da səbəb (reason) ilə rədd edilə bilər. Bu iki variantdan biri baş verdikdə, promise-in then metoduyla qoşulmuş əlaqəli idarəçilər çağırılır. (Əgər promise artıq yerinə yetirilib və ya rədd edilibsə, uyğun idarəçi əlavə olunduqda belə çağırılacaq, buna görə də asinxron əməliyyat tamamlanması ilə idarəçilərin əlavə edilməsi arasında yarış vəziyyəti yoxdur.)

// Promise.prototype.then() və Promise.prototype.catch() metodları da promise qaytardığı üçün zəncirlənə bilər.

// Callback
// Promise-i yaxşı anlamaq üçün əvvəlcə callback funksiyasını anlamaq lazımdır. Gəlin aşağıdakı callback-lara baxaq. Aşağıdakı kod bloklarında callback və promises arasındakı fərqi görəcəksiniz.

// callback
// Gəlin iki parametr qəbul edə bilən bir callback funksiyasını nəzərdən keçirək. Birinci parametr err, ikinci parametr isə nəticədir. Əgər err parametri false olsa, səhv olmayacaq, əks halda səhv dövrü qaytarılacaq.

// Bu nümunədə err dəyəri var və err blokunu qaytaracaq.
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("ERROR", skills);
  }, 2000);
};
const callback = (err, result) => {
  if (err == true) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);
// 2 saniyədən sonra yazılacaq
// ERROR

// Bu nümunədə err false-dir və nəticə dövrü qaytaracaq.

const doSomething1 = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err == true) {
    return console.log(err);
  }
  return console.log(result);
})[
  // 2 saniyədən sonra bacarıqlar yazılacaq
  ("HTML", "CSS", "JS")
];

// Promise konstruktoru
// Promise-i Promise konstruktoru istifadə edərək yarada bilərik. Yeni bir promise yaratmaq üçün new sözünü və ardınca Promise sözünü və sonra mötərizələri istifadə edirik. Mötərizələrdə callback funksiyası daxil edilir. Promise callback funksiyasının iki parametri var: resolve və reject funksiyaları.

const promise = new Promise((resolve, reject) => {
  resolve("uğur");
  resolve("salam");
  reject("uğursuzluq");
});

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Nəsə səhv olub");
    }
  }, 2000);
});

doPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// ["HTML", "CSS", "JS"]

// Yuxarıdakı promise resolve ilə yerinə yetirildi. İndi promise-in reject ilə yerinə yetirildiyi bir nümunəyə baxaq.

const doPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Nəsə səhv olub");
    }
  }, 2000);
});

doPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// Nəsə səhv olub

// Fetch API
// Fetch API, resursları (şəbəkə üzərindən də daxil olmaqla) əldə etmək üçün interfeys təmin edir. XMLHttpRequest istifadə edən hər kəs üçün tanış olacaq, lakin yeni API daha güclü və çevik xüsusiyyətlər təqdim edir. Bu çağırışda fetch istifadə edərək URL və API-lərə necə müraciət edəcəyimizi görəcəyik. Bundan əlavə, fetch API istifadə edərək şəbəkə resurslarına girmək üçün promises-in necə istifadə edildiyini nümayiş etdirəcəyik.

const url = "https://restcountries.com/v2/all"; // ölkələr API-si
fetch(url)
  .then((response) => response.json()) // API məlumatlarını JSON olaraq əldə etmək
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); // əgər nəsə səhv olsa, səhvi idarə edirik

// Async və Await
// Async və await promises-ləri idarə etməyin zərif bir yoludur. Bunun başa düşülməsi asan və yazılması təmizdir.

const square = async function (n) {
  return n * n;
};

square(2)`Promise {<resolved>: 4}`;
// Funksiyanın önündəki async sözü o deməkdir ki, həmin funksiya promise qaytaracaq. Yuxarıdakı square funksiyası dəyər əvəzinə promise qaytarır.

// Promise-dən dəyəri necə əldə edirik? Promise-dən dəyəri əldə etmək üçün await açar sözündən istifadə edəcəyik.

const square1 = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value);
// 4

// İndi, yuxarıdakı nümunədən göründüyü kimi, funksiyanın önündə async yazmaq promise yaradır və promise-dən dəyəri əldə etmək üçün await istifadə edirik. Async və await bir yerdə işləyir, biri olmadan digəri mövcud ola bilməz.

// İndi, həm promise metodunu, həm də async və await metodunu istifadə edərək API məlumatlarını əldə edək.

// Promise
const url1 = "https://restcountries.com/v3.1/all";
fetch(url1)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// async və await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async və await");
fetchData();

//? - Promise JavaScript-də asenkron əməliyyatların idarə edilməsi üçün istifadə olunur.
//? - Promise gələcəkdə tamamlanacaq və ya xəta ilə nəticələnəcək bir əməliyyatı təsvir edir.
//? - 3 vəziyyəti var:
//?   1. **Pending (Gözləmə):** Əməliyyat hələ tamamlanmayıb.
//?   2. **Fulfilled (Tamamlanmış):** Əməliyyat uğurla tamamlanıb, nəticə əldə olunub.
//?   3. **Rejected (Rədd edilmiş):** Əməliyyat uğursuz olub və xəta baş verib.

//* **Promise Nümunəsi:**
const promiseExample = new Promise((resolve, reject) => {
  const success = true; //* Şərti olaraq uğurlu bir əməliyyatı simulyasiya edirik.

  if (success) {
    resolve("Əməliyyat uğurla tamamlandı."); //* Uğur halında `resolve` çağırılır.
  } else {
    reject("Əməliyyat uğursuz oldu."); //* Xəta halında `reject` çağırılır.
  }
});

//? **Promise-dən İstifadə (then və catch ilə):**
promiseExample
  .then((message) => {
    console.log("Success:", message); //* Uğurlu əməliyyat üçün.
  })
  .catch((error) => {
    console.error("Error:", error); //* Xəta üçün.
  });

//? **finally ilə Promise:**
//? - Əməliyyatın nəticəsindən asılı olmayaraq həmişə işləyir.
promiseExample
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Əməliyyat tamamlandı."); //* Həmişə işləyir.
  });

//* **Niyə Promise İstifadə Edilir?**
//? 1. Callbacks yerinə daha oxunaqlı kod yazmağa imkan verir.
//? 2. "Callback Hell" problemini aradan qaldırır.
//? 3. Əməliyyatların zəncirvari şəkildə asan idarə edilməsini təmin edir.

//* **Promise Methods (Metodlar):**
//? **Promise.all:** Bir neçə Promise-i paralel icra edir və hamısı tamamlandıqda nəticəni qaytarır.
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("Bütün nəticələr:", values); //* [10, 20, 30]
  })
  .catch((error) => {
    console.error("Xəta:", error);
  });

//? **Promise.race:** İlk tamamlanan Promise-i qaytarır.
Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log("İlk tamamlanan:", value);
  })
  .catch((error) => {
    console.error("Xəta:", error);
  });

//? **Promise.allSettled:** Bütün Promise-lərin nəticəsini qaytarır, uğur və ya xəta fərqi yoxdur.
Promise.allSettled([promise1, Promise.reject("Xəta"), promise3]).then(
  (results) => {
    console.log("Bütün nəticələr:", results);
  }
);

//? **Promise.any:** İlk uğurlu Promise-i qaytarır, bütün Promiselər uğursuz olarsa xəta qaytarır.
Promise.any([Promise.reject("Xəta"), promise2, promise3])
  .then((value) => {
    console.log("İlk uğurlu:", value);
  })
  .catch((error) => {
    console.error("Xəta:", error);
  });

//* **Promise Zənciri (Chaining):**
//? - Bir Promise-dən əldə olunan nəticə digər Promise üçün istifadə edilə bilər.
const chainExample = new Promise((resolve) => {
  resolve(5);
});

chainExample
  .then((number) => {
    console.log("Əsas rəqəm:", number);
    return number * 2; //* Yeni nəticə qaytarır.
  })
  .then((newNumber) => {
    console.log("Yeni rəqəm:", newNumber);
    return newNumber * 3;
  })
  .then((finalNumber) => {
    console.log("Son nəticə:", finalNumber); //* 30
  })
  .catch((error) => {
    console.error("Xəta:", error);
  });

//* **Async/Await ilə Promise İdarəetməsi:**
//? Async/Await Promiseləri daha oxunaqlı və sadə şəkildə idarə etməyə imkan verir.
async function fetchData() {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve("Məlumat yükləndi."), 2000);
    });
    console.log(data);
  } catch (error) {
    console.error("Xəta:", error);
  }
}

fetchData();

//* **Xülasə:**
//? 1. **Promise:** Asinxron əməliyyatları daha sadə idarə etmək üçün əsas mexanizmdir.
//? 2. **Methods:** `all`, `race`, `allSettled`, `any` müxtəlif ssenarilər üçün istifadə olunur.
//? 3. **Chaining və Async/Await:** Promiselərin oxunaqlı idarə edilməsi üçün geniş istifadə edilir.
//? 4. **Error Handling:** `catch` və `finally` ilə xətalar effektiv şəkildə idarə edilir.
