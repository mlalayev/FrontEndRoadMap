//? **Sıralama (Sorting) Algoritmləri və Niyə Lazımdır?**

//? Sıralama algoritmləri verilənlərdəki elementləri müəyyən qaydaya görə düzür (artan və ya azalan).
//? Sıralanmış verilənlər daha effektiv analiz və axtarış üçün vacibdir.

//? **Sıralama Algoritmlərinin İstifadə Sahələri**
//? - **Axtarış əməliyyatlarını sürətləndirmək** – Binary Search kimi metodlar yalnız sıralanmış massivlərdə işləyir.
//? - **Məlumatları daha effektiv analiz etmək** – Məsələn, medianı tapmaq üçün verilənlər sıralanmalıdır.
//? - **Müxtəlif proqramlaşdırma tətbiqlərində** – Verilənlərin düzgün düzülməsi istifadəçi təcrübəsini yaxşılaşdırır.

//? **Ən Məşhur Sıralama Algoritmləri**
//? - **Bubble Sort** – Sadə amma yavaş (O(n²))
//? - **Selection Sort** – Hər dəfə ən kiçik elementi seçir (O(n²))
//? - **Insertion Sort** – Kart düzəltmək prinsipi ilə işləyir (O(n²), lakin kiçik massivlərdə effektivdir)
//? - **Merge Sort** – Böl və idarə et (Divide and Conquer) yanaşması ilə işləyir (O(n log n))
//? - **Quick Sort** – Çox effektiv və sürətli metodlardan biridir (O(n log n))
//? - **Heap Sort** – Binary heap istifadə edərək sıralayır (O(n log n))

//* **Insertion Sort Necə İşləyir?**

//? Insertion Sort kart düzəltmə prinsipi ilə işləyir. Kiçik massivlərdə effektiv olsa da, böyük verilənlər üçün yavaşdır (O(n²)).
//? Addım-addım iş prinsipi:

//? **1) Massivi nəzəri olaraq iki hissəyə ayırırıq: sıralanmış və sıralanmamış hissə.**
//? **2) İlk elementi sıralanmış hesab edirik, qalanları isə sıralanmamış.**
//? **3) Sıralanmamış hissədən bir element seçirik və sıralanmış hissədə yerini tapmaq üçün müqayisə edirik.**
//? **4) Əgər sıralanmış hissədə daha böyük elementlər varsa, onları sağa sürüşdürürük.**
//? **5) Seçilmiş elementi düzgün mövqeyə yerləşdiririk.**
//? **6) Bütün elementlər yerinə oturana qədər prosesi təkrarlayırıq.**

//* **Insertion Sort Algoritmi (Kod ilə İzah)**

function insertionSort(arr) {   
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //? Sıralanmamış hissədən bir element seçirik
    let j = i - 1;

    //? Daha böyük elementləri sağa sürüşdürürük
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    //? Seçilmiş elementi düzgün yerə yerləşdiririk
    arr[j + 1] = current;
  }

  return arr;
}

const nums = [8, 4, 3, 7, 6, 5, 2];
console.log(insertionSort(nums)); //? [2, 3, 4, 5, 6, 7, 8]

//? **Big O Notasiyası:**
//? - Ən pis və orta halda: O(n²) – Çünki hər element üçün əvvəlki elementlər müqayisə edilir.
//? - Ən yaxşı halda (artıq sıralanmış massiv): O(n) – Çünki heç bir sürüşdürmə olmur.
//? - Kiçik massivlər üçün effektivdir, lakin böyük massivlərdə Merge və Quick Sort daha yaxşı seçimdir.
