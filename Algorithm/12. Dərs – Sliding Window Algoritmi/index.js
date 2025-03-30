//* 12. Dərs – Sliding Window Texnikası

//? Bro, bu texnika elədi ki, nə qədər problem varsa, birini tut, Sliding Window-la çöz getsin 😂
//? Adından da bəlli: "Sürüşən pəncərə" kimi düşün – massivdə və ya stringdə bir hissəyə fokuslanırsan, sonra o hissəni sürüşdürürsən.

//? İki növ olur:
//? - **Fixed Window (Sabit ölçülü)** – məsələn: ən böyük 3-lük cəmi
//? - **Variable Window (Dəyişən ölçülü)** – məsələn: təkrarsız ən uzun substring

//? Time Complexity: O(n) – yəni 🔥 səmərəli işləyir

//* --------------------------------------------
//* Nümunə 1: Sabit ölçülü – Ən böyük 3-lük cəm
//* --------------------------------------------

function maxSum(arr, k) {
  let max = 0;
  let windowSum = 0;

  //? İlk pəncərəni hesabla
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  max = windowSum;

  //? Pəncərəni sağa sürüşdür
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    max = Math.max(max, windowSum);
  }

  return max;
}

console.log("Max sum of 3:", maxSum([2, 1, 5, 1, 3, 2], 3)); //? 9

//* --------------------------------------------
//* Nümunə 2: Dəyişən ölçülü – Təkrarsız ən uzun substring
//* --------------------------------------------

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log("Longest unique substring:", lengthOfLongestSubstring("abcabcbb")); //? 3

//* --------------------------------------------
//* Edge Case-lər:
//? - Əgər massiv boşdursa vəya k > arr.length-disə → dərhal geri dön
//? - Substring məsələsində təkrarlananlar olanda pəncərəni daraltmaq lazımdır
//* --------------------------------------------

//? **Nəticə:** Bro, Sliding Window həm sadədir, həm də su kimi axar. LeetCode-da, müsahibədə qarşına çıxsa – "gəlin sliding window tətbiq edək" deyirsən, səni lap müdrik kimi görürlər 😎
