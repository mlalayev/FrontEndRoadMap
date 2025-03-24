//? **Merge Sort Algoritmi**

//? Merge Sort, "Böl və İdarə et" (Divide and Conquer) prinsipinə əsaslanan sıralama metodudur.
//? Quick Sort kimi O(n log n) mürəkkəbliyinə malikdir və stabil sıralama metodudur.

//? **Merge Sort Necə İşləyir?**
//? 1) Massiv iki yarıya bölünür.
//? 2) Hər bir hissə rekursiv olaraq Merge Sort ilə sıralanır.
//? 3) İki sıralanmış hissə "merge" (birləşdirmə) əməliyyatı ilə düzgün qaydada birləşdirilir.

//* **Merge Sort Algoritmi (Kod ilə İzah)**

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //? Əsas hal (Base Case) – 1 və ya 0 elementli massivlər artıq sıralıdır.

  let mid = Math.floor(arr.length / 2); //? Massivin ortasını tapırıq
  let left = mergeSort(arr.slice(0, mid)); //? Sol hissəni rekursiv sort edirik
  let right = mergeSort(arr.slice(mid)); //? Sağ hissəni rekursiv sort edirik

  return merge(left, right); //? İki hissəni birləşdiririk
}

//? **Merge (Birləşdirmə) Funksiyası**
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //? Əgər sol və ya sağ hissədə element qalıbsa, onları əlavə edirik
  return [...result, ...left.slice(i), ...right.slice(j)];
}

const nums = [8, 4, 3, 7, 6, 5, 2];
console.log(mergeSort(nums)); //? [2, 3, 4, 5, 6, 7, 8]

//? **Big O Notasiyası:**
//? - Ən pis, orta və ən yaxşı halda: O(n log n) – Çünki massiv hər dəfə yarıya bölünür və O(n) əməliyyat aparılır.
//? - Quick Sort-dan fərqli olaraq, Merge Sort **stabil sıralama** metodudur (bərabər elementlərin sırası dəyişmir).
//? - Lakin, əlavə yaddaş tələb etdiyi üçün (O(n) space complexity), bəzən Quick Sort daha üstün ola bilər.
