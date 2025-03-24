//? **Axtarış (Search) Algoritmləri**

//? Axtarış (search) algoritmləri verilənlər massivində və ya strukturlarında konkret dəyəri tapmaq üçün istifadə olunur.
//? Əsas iki axtarış üsulu var: **Linear Search (Xətti Axtarış)** və **Binary Search (İkili Axtarış)**.

//* **1. Linear Search (Xətti Axtarış) - O(n)**

//? Linear search massivdə ardıcıl şəkildə bütün elementləri yoxlayır.
//? Əgər axtarılan element tapılarsa, onun indeksi qaytarılır. Tapılmazsa, -1 qaytarılır.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //? Element tapıldı, indeksi qaytarırıq
    }
  }
  return -1; //? Element tapılmadı
}

const numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30)); //? 2
console.log(linearSearch(numbers, 100)); //? -1

//? **Big O Notasiyası:**
//? - Ən pis halda (element massivdə yoxdur və ya sondadır), bütün elementlər yoxlanılır: **O(n)**
//? - Ən yaxşı halda (ilk element axtarılır), **O(1)** ola bilər.

//* **2. Binary Search (İkili Axtarış) - O(log n)**

//? Binary search yalnız **sıralanmış massivlərdə** işləyir!
//? Massivin ortasını tapır, əgər target daha kiçikdirsə sol hissədə, böyükdürsə sağ hissədə axtarır.
//? Beləliklə, hər addımda axtarış sahəsi 2 dəfə azalır.

//? **2.1 - Dəyişənlər ilə (Iterative Binary Search)**
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; //? Element tapıldı
    } else if (arr[mid] < target) {
      left = mid + 1; //? Sağ hissəyə keç
    } else {
      right = mid - 1; //? Sol hissəyə keç
    }
  }
  return -1; //? Element tapılmadı
}

const sortedNumbers = [10, 20, 30, 40, 50];
console.log(binarySearch(sortedNumbers, 30)); //? 2
console.log(binarySearch(sortedNumbers, 100)); //? -1

//? **2.2 - Rekursiv Binary Search**
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; //? Element tapılmadı

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid; //? Element tapıldı
  if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
}

console.log(binarySearchRecursive(sortedNumbers, 30)); //? 2
console.log(binarySearchRecursive(sortedNumbers, 100)); //? -1

//? **Big O Notasiyası:**
//? - Binary Search massiv hər bölünmədə yarıya bölündüyü üçün **O(log n)** mürəkkəbliyinə malikdir.
//? - Ən pis halda O(log n), ən yaxşı halda O(1) (ilk tapıldığı zaman).
//? - Linear Search isə həmişə O(n) işləyir.

//* **Nəticə:**
//? - **Linear Search** sıralanmamış massivlər üçün uyğundur.
//? - **Binary Search** sıralanmış massivlərdə daha sürətli işləyir və böyük verilənlərdə performansı çox yaxşıdır.
