//* Algoritm Analizi: Algoritmlərin Effektivliyinin Qiymətləndirilməsi

//? **Algoritm Analizi Nədir?**
//? Algoritm analizi, bir algoritmin performansını qiymətləndirmək üçün onun vaxt (time complexity) və yaddaş (space complexity) səmərəliliyini ölçmə prosesidir.
//? Bunun üçün riyazi metodlardan və Big O notasiya sistemindən istifadə olunur.

//? **Niyə Algoritm Analizi Vacibdir?**
//? - **Performansı Qiymətləndirmək:** Algoritmin effektivliyi proqramın sürətini və yaddaş istifadəsini təyin edir.
//? - **Optimal Həll Seçimi:** Eyni problemi həll edən bir neçə algoritm arasından ən səmərəlisini seçməyə imkan yarıdır.
//? - **Böyük Miqyasda Uygunluq:** Məlumatlar artdıqca algoritmin performansını qoruyub saxlaması önəmlidir.



//* **1. Big O Notasiyası** 
//? Big O, algoritmin çalışma vaxtını və ya yaddaş istifadəsini asimptotik olaraq qiymətləndirən bir metoddur.
//? Yəni, giriş verilənləri n artdıqda, algoritmin nə qədər sürətdə işlədiyini təyin edir.

//? **Əsas Big O Notasiya Növləri:**
//? - **O(1) - Sabit vaxt**: Algoritm hər zaman eyni sürətdə işləyir.
//? - **O(log n) - Logaritmik vaxt**: Məlumatlar artdıqca sürət nisbətən yavaş azalır.
//? - **O(n) - Xətti vaxt**: Algoritmin vaxtı girişin ölçüsünə görə düz mütənasib artır.
//? - **O(n^2) - Kvadratik vaxt**: Məlumat iki qat artsa, vaxt dörd qat artar.
//? - **O(2^n) - Eksponensial vaxt**: Hər yeni addımda sürət eksponensial artır.

const arr = [11, 15, 81, 3981, 3218, 218, 921, 2198, 921, 2, 7];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 9) {
      return [i, j];
    }
  }
}

//* **2. Omega (Ω) Notasiyası**
//? Omega notası, algoritmin ən yaxşı halda (best case) işləmə vaxtını göstərir.
//? **Məsələn:** Bir axtarış algoritmi ən yaxşı halda ilk addımda nəticəni taparsa, bu O(1) olur.

//* **3. Theta (Θ) Notasiyası**
//? Theta notası, algoritmin həm ən yaxşı, həm də ən pis halda eyni performansı göstərdiyini ifadə edir.
//? **Məsələn:** Bir dövr (loop) hər zaman n dəfə işləyirsə, onun vaxt mürəkkəbliyi Θ(n) olur.

//* **4. Algoritm Analizi Misallarla**
//? **O(1) - Sabit vaxt**
function sabitFunksiya(arr) {
  return arr[0];
}
console.log(sabitFunksiya([1, 2, 3, 4])); //? 1

//? **O(n) - Xətti vaxt**
function cem(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(cem([1, 2, 3, 4])); //? 10

//? **O(n^2) - Kvadratik vaxt**
function kvadratikFunksiya(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
kvadratikFunksiya([1, 2, 3]);

//? **O(log n) - Logaritmik vaxt (Binary Search misalı)**
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); //? 3
