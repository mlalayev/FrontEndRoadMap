//* 10. Dərs - Binary Search və İkili Bölmə Metodu

//? **Binary Search Nədir?**
//? Binary Search (İkili Axtarış), sıralanmış massivlərdə element axtarmaq üçün istifadə olunan səmərəli bir axtarış alqoritmidir.
//? Əsas ideya: Hər addımda massiv ikiyə bölünür və ortadakı elementlə hədəf dəyər müqayisə olunur.

//? **Binary Search Necə İşləyir?**
//? 1. Ortadakı elementi tap (start + end) / 2
//? 2. Əgər ortadakı element axtarılan elementə bərabərdirsə: tapıldı!
//? 3. Əgər ortadakı element axtarılandan böyükdürsə: sağ hissəni at, sola bax
//? 4. Əgər ortadakı element axtarılandan kiçikdirsə: sol hissəni at, sağa bax
//? 5. Bu prosesi element tapılana və ya start > end olana qədər təkrarla.

//? **Time Complexity:** O(log n)
//? Çünki hər addımda axtarış sahəsi yarıya endirilir.

//* -------------------------------
//* Iterative (Döngü ilə) Versiyası
//* -------------------------------

function binarySearchIterative(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1; //? Tapılmadısa
}

console.log("Iterative:", binarySearchIterative([1, 3, 5, 7, 9, 11], 7)); //? 3

//* -------------------------------
//* Recursive (Özünü Çağırma ilə) Versiyası
//* -------------------------------

function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target)
    return binarySearchRecursive(arr, target, start, mid - 1);
  return binarySearchRecursive(arr, target, mid + 1, end);
}

console.log("Recursive:", binarySearchRecursive([1, 3, 5, 7, 9, 11], 9)); //? 4

//* -------------------------------
//* Edge Case-lər:
//? - Əgər massiv boşdursa, dərhal -1 qaytar
//? - Əgər massiv sıralanmayıbsa, əvvəlcə sort etmək lazımdır!
//* -------------------------------

//* Bonus: Binary Search yalnız sıralanmış massivlərdə işləyir!
//? Əgər sıralanmayıbsa: [7, 2, 9, 1] → əvvəlcə sort → sonra binary search
