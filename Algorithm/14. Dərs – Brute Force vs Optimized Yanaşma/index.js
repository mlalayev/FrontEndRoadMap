//* 14. Dərs – Brute Force vs Optimized Yanaşma

//? Bro, bu dərs kod yazan hər kəs üçün vacib dərsdi.
//? Çünki proqramlaşdırmada çox vaxt bir problemi birdən çox üsulla həll etmək olur:
//? - biri sadə, amma yavaşdır (brute force),
//? - biri isə daha ağıllı və sürətlidir (optimized).

//? **Brute Force nədir?**
//? Əlindəki problemi “ağlına ilk gələn üsulla” həll edirsən.
//? Bütün mümkün variantları yoxlayırsan – yəni kod iş görür, amma sürət sıfır 😂

//? **Optimized nədir?**
//? Problemi daha az addımda, daha ağıllı yollarla həll edirsən. Performansı yaxşı olur,
//? yəni RAM da ağlamır, CPU da "aaa bəsdi də!" demir 😂

//* --------------------------------------------
//* Nümunə 1: İki ədədin cəmi target-a bərabər olan cütü tap (Two Sum)
//* --------------------------------------------

//* Brute Force – iki döngü ilə
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}
//? Time Complexity: O(n²)

console.log("Brute:", twoSumBrute([2, 7, 11, 15], 9)); //? [0, 1]

//* Optimized – HashMap ilə
function twoSumOptimized(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.hasOwnProperty(diff)) return [map[diff], i];
    map[nums[i]] = i;
  }

  return [];
}
//? Time Complexity: O(n)

console.log("Optimized:", twoSumOptimized([2, 7, 11, 15], 9)); //? [0, 1]

//* --------------------------------------------
//* Nümunə 2: Subarray-in ən böyük cəmini tap (Kadane's vs Brute)
//* --------------------------------------------

//* Brute Force – bütün mümkün alt massivlərin cəmini yoxlayır
function maxSubArrayBrute(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }

  return max;
}
//? Time: O(n²)

console.log(
  "Brute Max Sum:",
  maxSubArrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4])
); //? 6

//* Optimized – Kadane's Algorithm
function maxSubArrayKadane(nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
}
//? Time: O(n)

console.log("Kadane:", maxSubArrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //? 6

//* --------------------------------------------
//* Qısa Dərs Mesajı:
//? 🧠 Brute Force – yazmaq asandır, amma "toydan sonra peşmançılıq" effekti verir 😂
//? ⚙️ Optimized – bir az beynimizi yandırır, amma nəticə: sürətli, şax, problemsiz!

//? ✅ Hər problemdə əvvəl sadə yanaşma düşün, sonra onu necə optimallaşdırmaq olar, onu analiz elə.
//? Bu vərdiş səni LeetCode döyüşçüsünə çevirəcək bro 💪😄
