//* 17. Dərs – Algoritm Yazarkən Addımlar

//? **Algoritm problemi veriləndə nə etməliyik?**
//? Tələbələr üçün ən vacib dərslərdən biri budur – “problemi oxudum, amma haradan başlayım?” deyə düşünəndə bu addımlar çox işə yarayacaq.

//? **1. Problemi diqqətlə oxu**
//? - Giriş (input) və çıxış (output) nədir?
//? - Verilənlər sıralanıb? Unikal dəyərlərdir? Mənfi ola bilər?

//? **2. Misal çək**
//? - Əl ilə 1-2 nümunə yaz
//? - Gözlə gördüyün cavab çıxırsa, kompüterə də öyrədə bilərsən

//? **3. Sadə, Brute Force yanaşmanı düşün**
//? - Ən bəsit, amma işləyən həll üsulu nə ola bilər?
//? - Bu kodda hansı hissə yavaşdır?

//? **4. Daha sürətli yanaşma barədə düşün**
//? - Two pointers, sliding window, hashmap, set, recursion… hansından istifadə edə bilərsən?
//? - Məlumatın strukturu necə kömək edir?

//? **5. Addım-addım kod yaz**
//? - Əvvəl ən sadə versiyasını yaz
//? - Sonra edge-case-ləri düşün (boş array, 0, mənfi dəyərlər)

//? **6. Test et və optimallaşdır**
//? - Sınaqdan keçmiş input-larla yoxla
//? - Time və space complexity-ni təhlil et

//* --------------------------------------------
//* Nümunə: "İki ədədin cəmi target-a bərabər olan cütü tap"
//* --------------------------------------------

//? Addım 1 – input və output: massiv və bir ədəd (target) → iki indeks qaytar
//? Addım 2 – misal: [2, 7, 11, 15], target = 9 → cavab: [0, 1]
//? Addım 3 – brute force: 2 döngü ilə bütün cütləri yoxla
//? Addım 4 – daha sürətli: hashmap ilə fərqə bax
//? Addım 5 – kod yaz, test et, done.

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.hasOwnProperty(diff)) return [map[diff], i];
    map[nums[i]] = i;
  }

  return [];
}

console.log("Two Sum Result:", twoSum([2, 7, 11, 15], 9)); //? [0, 1]

//* --------------------------------------------
//* Bonus: Həmişə aşağıdakı sualları ver:
//? - Bu problem hansı məlum texnikaya uyğundur?
//? - Yaddaş və sürət baxımından optimallaşdırmaq olar?
//? - Edge case varmı? (boş input, eyni ədədlər, ədəd tapılmır və s.)

//? **Nəticə:** Algoritm yazmaq yalnız kod yazmaq deyil – əvvəl düşünmək, planlamaq və sonra kodlaşdırmaqdır.
//? Əvvəl beyinlə yazırsan, sonra əllə. 💻🧠
