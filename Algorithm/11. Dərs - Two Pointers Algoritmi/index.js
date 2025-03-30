//* 11. Dərs - Two Pointers Texnikası

//? **Two Pointers (İki Göstərici) Nədir?**
//? Two Pointers texnikası massivlər və stringlər üzərində səmərəli şəkildə işləmək üçün istifadə olunur.
//? İki fərqli indeks (göstərici) eyni massiv üzərində fərqli istiqamətlərdə hərəkət edir.

//? Bu texnika aşağıdakı problemlərdə istifadə olunur:
//? - Cəmi müəyyən ədədə bərabər olan cütləri tapmaq
//? - Palindrom olub-olmadığını yoxlamaq
//? - Dublikatların silinməsi
//? - Reverse əməliyyatlar
//? - Merge prosesləri və Sliding Window ilə birlikdə

//? **Time Complexity:** O(n) — çünki hər elementi maksimum bir dəfə yoxlayırıq.

//* --------------------------------------------
//* Nümunə 1: Cəmi 10 olan iki ədədi tapmaq (Sorted array)
//* --------------------------------------------

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }

  return []; //? Tapılmadısa
}

console.log("Two Sum:", twoSumSorted([1, 2, 4, 5, 7, 10], 9)); //? [2, 7]

//* --------------------------------------------
//* Nümunə 2: String-in Palindrom olub-olmadığını yoxlamaq
//* --------------------------------------------

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log("Palindrome:", isPalindrome("level")); //? true
console.log("Palindrome:", isPalindrome("hello")); //? false

//* --------------------------------------------
//* Nümunə 3: Dublikatları yerində silmək (LeetCode Style)
//* --------------------------------------------

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1; //? Yeni massivdə unikal elementlərin sayı
}

let nums = [1, 1, 2, 2, 3];
console.log("New Length:", removeDuplicates(nums)); //? 3
console.log("Unique Array:", nums.slice(0, 3)); //? [1, 2, 3]

//* --------------------------------------------
//* Edge Case-lər:
//? - Boş massivlə başlasa, nəticə dərhal dönməlidir
//? - İki göstərici eyni anda eyni yeri göstərirsə, təkrarlanan element ola bilər
//* --------------------------------------------

//? **Nəticə:** Two Pointers texnikası, O(n) zaman mürəkkəbliyi ilə çoxlu problemi
//? səmərəli həll etməyə kömək edir və bir çox müsahibə sualının əsasında dayanır.
