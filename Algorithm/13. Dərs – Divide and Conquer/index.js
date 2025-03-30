//* 13. Dərs – Divide and Conquer (Böl və Fəth Et)

//? Bro bu texnika elədir ki, böyük problemi götürürsən, tikə-tikə doğrayırsan, hər tikəni həll eləyib birləşdirirsən və nəticə – şah əsər 🔥
//? Divide and Conquer əsasən **rekursiya** ilə işləyir. Həm kodun strukturunu gözəlləşdirir, həm də performansı artırır.

//? Əsas prinsipləri:
//? 1. **Divide (Böl):** Problemi kiçik hissələrə böl
//? 2. **Conquer (Fəth Et):** Kiçik problemləri həll et (rekursiv)
//? 3. **Combine (Birləşdir):** Alt problemlərin nəticələrini birləşdir

//? Məşhur tətbiqlər:
//? - Merge Sort
//? - Quick Sort
//? - Binary Search
//? - Karatsuba (rəqəm vurma)
//? - FFT (Fast Fourier Transform – bu hələ bizlik deyil 😂)

//* --------------------------------------------
//* Nümunə 1: Merge Sort (sorted nəticə ilə birləşdirmə)
//* --------------------------------------------

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log("Merge Sort:", mergeSort([8, 3, 5, 1, 9, 2])); //? [1, 2, 3, 5, 8, 9]

//* --------------------------------------------
//* Nümunə 2: Binary Search (Divide & Conquer-in sadə nümunəsi)
//* --------------------------------------------

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  return binarySearch(arr, target, mid + 1, end);
}

console.log("Binary Search:", binarySearch([1, 3, 5, 7, 9, 11], 9)); //? 4

//* --------------------------------------------
//* Edge-lər və Bəzi Fikirlər:
//? - Rekursiya varsa, stack overflow riski var, amma D&C-də adətən çox dərinə getmir
//? - Performans baxımından çox güclüdür: Merge Sort → O(n log n), Binary Search → O(log n)
//? - D&C problemləri vizual blok-sxemlə başa düşmək çox rahat olur

//? **Nəticə:** Bro, Divide and Conquer elə bir fəndir ki, kod yazan adamın professional səviyyəyə keçdiyini göstərir. Sən bu texnikanı bacarırsansa – get LeetCode-a, çempionluq sənin 💪
