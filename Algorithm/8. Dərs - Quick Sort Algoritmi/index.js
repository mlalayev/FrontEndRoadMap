//? **Quick Sort Algoritmi**

//? Quick Sort, "Böl və İdarə et" (Divide and Conquer) yanaşması ilə işləyən effektiv sıralama metodudur.
//? Merge Sort kimi O(n log n) mürəkkəbliyinə malikdir, lakin əksər hallarda Merge Sort-dan daha sürətlidir.

//? **Quick Sort Necə İşləyir?**
//? 1) Bir "pivot" (dəstək nöqtəsi) elementi seçilir.
//? 2) Massiv pivotdan kiçik və böyük elementlərə ayrılır (partitioning).
//? 3) Kiçik və böyük hissələr rekursiv şəkildə Quick Sort ilə sıralanır.
//? 4) Nəticədə bütün elementlər düzgün düzülür.

//* **Quick Sort Algoritmi (Kod ilə İzah)**

function quickSort(arr) {
  if (arr.length <= 1) return arr; //? Əsas hal (Base Case) – 1 və ya 0 elementli massivlər artıq sıralıdır.

  let pivot = arr[arr.length - 1]; //? Pivot kimi son elementi seçirik
  let left = []; //? Pivotdan kiçik elementlər
  let right = []; //? Pivotdan böyük elementlər

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); //? Kiçik elementləri sol hissəyə atırıq
    } else {
      right.push(arr[i]); //? Böyük elementləri sağ hissəyə atırıq
    }
  }

  //? Rekursiya ilə sol və sağ hissələri sort edib birləşdiririk
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const nums = [8, 4, 3, 7, 6, 5, 2];
console.log(quickSort(nums)); //? [2, 3, 4, 5, 6, 7, 8]

//? **Big O Notasiyası:**
//? - Ən pis halda (O(n²)) – Əgər hər dəfə ən böyük və ya ən kiçik element pivot seçilərsə.
//? - Orta və ən yaxşı halda (O(n log n)) – Çünki massiv hər dəfə yarıya bölünür və hər bölmədə O(n) əməliyyat aparılır.
//? - Ən sürətli sıralama metodlarından biridir və böyük verilənlər üçün effektivdir.
