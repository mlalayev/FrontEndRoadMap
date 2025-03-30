//* 16. Dərs – Backtracking Giriş

//? **Backtracking nədir?**
//? Backtracking – "geri addımlayaraq" düzgün cavabı axtaran alqoritmdir. Rekursiyanın bir növüdür.
//? Əsas ideya: bir yol seç, irəlilə, əgər alınmazsa – geri qayıt və başqa yolu sınamağa davam et.

//? **İstifadə olunur:**
//? - Permutation və Combination problemlərində
//? - Sudoku, Maze (labirint), N-Queens
//? - Parol generasiyası, decision tree qurulması və s.

//? **Əsas addımlar:**
//? 1. Mümkün variantı seç
//? 2. Şərti yoxla: bu yol keçərlidirmi?
//? 3. Əgər düzgündürsə – davam et
//? 4. Əgər səhvdirsə – geri qayıt (backtrack)

//* --------------------------------------------
//* Nümunə: Bütün permutasiyaları çıxart (LeetCode 46 kimi)
//* --------------------------------------------

function permute(nums) {
  const result = [];

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      path.push(remaining[i]);

      const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack(path, next);

      path.pop(); // geri qayıt
    }
  }

  backtrack([], nums);
  return result;
}

console.log("Permutations:", permute([1, 2, 3]));
//? Gözlənilən çıxış:
//? [
//?   [1, 2, 3], [1, 3, 2],
//?   [2, 1, 3], [2, 3, 1],
//?   [3, 1, 2], [3, 2, 1]
//? ]

//* --------------------------------------------
//* Başqa Məşhur Backtracking problemləri:
//? - N-Queens problemi
//? - Subsets (hər alt qrupun tapılması)
//? - Maze traversal (a-dan b-yə yol tapmaq)
//? - Sudoku həll etmə (constraint-based backtracking)

//? **Əlavə Qeyd:**
//? - Backtracking çox güclü texnikadır, amma performans baxımından yavaş ola bilər (çünki çox yol yoxlayır).
//? - Ona görə də hər dəfə şərt yoxlamaları düzgün yazılmalıdır (pruning).

//? Nəticə: Backtracking kod yazanın “b planı” kimidir – bir yol olmadısa, geri dön, başqa yolu sınamaq üçün güclü alətdir.
