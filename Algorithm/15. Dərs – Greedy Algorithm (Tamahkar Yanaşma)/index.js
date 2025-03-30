//* 15. Dərs – Greedy Algorithm (Tamahkar Yanaşma)

//? **Greedy Algorithm nədir?**
//? Greedy yanaşma hər addımda lokal olaraq ən yaxşı qərarı (ən böyük, ən kiçik və s.) seçməklə problemi həll etməyə çalışır.
//? Məqsəd, ümumi nəticənin də optimal olmasıdır. Amma unutma: greedy hər zaman düzgün nəticə vermir!
//? Ona görə də greedy metod tətbiq edərkən problemin uyğun olub-olmadığını test etmək vacibdir.

//? **Əsas prinsip:**
//? - "Bu anda ən yaxşısı nədirsə, onu seç" – gələcəyi düşünmədən
//? - Daha sürətlidir (çox zaman O(n))
//? - Sadə tətbiq olunur, amma düzgün işləməsi problemə bağlıdır

//* --------------------------------------------
//* Nümunə 1: Activity Selection Problem
//* Mümkün qədər çox tədbir seçmək (start və end vaxtları verilib), overlap olmadan
//* --------------------------------------------

function activitySelection(activities) {
  // Bitmə vaxtına görə sırala
  activities.sort((a, b) => a[1] - b[1]);

  let selected = [activities[0]];
  let lastEnd = activities[0][1];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEnd) {
      selected.push(activities[i]);
      lastEnd = activities[i][1];
    }
  }

  return selected;
}

const acts = [
  [1, 3],
  [2, 5],
  [4, 6],
  [7, 8],
  [5, 9],
];

console.log("Selected activities:", activitySelection(acts));
//? Gözlənilən çıxış: [ [1, 3], [4, 6], [7, 8] ]

//* --------------------------------------------
//* Nümunə 2: Minimum Coin Change (Greedy versiya)
//* Məqsəd: Məbləği minimum sayda sikkə ilə ödəmək
//* Qeyd: Bu yanaşma bəzi hallarda düzgün işləməyə bilər (bax: DP versiyası)
//* --------------------------------------------

function minCoins(coins, amount) {
  coins.sort((a, b) => b - a); // Ən böyükdən başla

  let count = 0;
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }

  return amount === 0 ? count : -1; // -1: mümkün deyil
}

console.log("Min coins:", minCoins([1, 5, 10, 25], 30)); //? 2 (25 + 5)

//* --------------------------------------------
//* Əlavə Qeyd:
//? - Greedy həllər optimal cavabı verirsə, çox effektiv olur.
//? - Amma hər problemə tətbiq etmək olmaz – həmişə düzgün nəticə vermir!
//? - Buna görə greedy işlətməzdən əvvəl problem analiz olunmalıdır.

//? **Real həyatda greedy misallar:**
//? - Scheduling (tədbir, tapşırıq paylaşımı)
//? - Kruskal's Algorithm (Minimum Spanning Tree)
//? - Dijkstra's Algorithm (qısa yol tapmaq)

//? Nəticə: Greedy metodu sənin alətlər çantanındakı ən sürətli alətlərdən biridir.
//? Amma bəzən iti bıçaq əvəzinə qayçı istifadə eləmək lazım olur – uyğun olanı seç! 😉
