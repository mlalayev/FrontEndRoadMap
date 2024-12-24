//* 32. Gün - TypeScript Arrays ilə işləmək

//? **TypeScript-də Array-lar**
//? TypeScript-də array-lar tək tipli və ya müxtəlif tipli verilənləri saxlamaq üçün istifadə edilir.
//? Əsas fərq: TypeScript-də array-lar üçün verilənlərin növü öncədən təyin edilə bilər ki, bu da kodun daha etibarlı olmasını təmin edir.

//todo **1. Əsas Array Sintaksisi:**
const adlar: string[] = []; // Yalnız string tipli dəyərlər saxlaya bilər
adlar.push("Dylan"); //? Problem yoxdur
// adlar.push(3); //todo Xəta: 'number' tipi 'string' tipinə təyin edilə bilməz

//todo **2. Array-in readonly (yalnız oxunan) təyin edilməsi:**
//? Array-in dəyişdirilməsinin qarşısını almaq üçün `readonly` açar sözündən istifadə edilir.
const adlar2: readonly string[] = ["Dylan"];
// adlar2.push("Jack"); //todo Xəta: 'readonly string[]' tipində 'push' metodu mövcud deyil
//? Array-i dəyişdirmək üçün `readonly` açar sözünü silin və yoxlayın.

//todo **3. Növlərin Avtomatik Anlaşılması (Type Inference):**
//? TypeScript bir array-dəki dəyərlərin tipini avtomatik olaraq anlaya bilər.
const reqemler = [1, 2, 3]; //? Tip avtomatik olaraq `number[]` kimi təyin edilir
reqemler.push(4); //? Problem yoxdur
// reqemler.push("2"); //todo Xəta: 'string' tipi 'number' tipinə təyin edilə bilməz
let ilkReqem: number = reqemler[0]; //? Problem yoxdur

//todo **4. Müxtəlif Tipli Array-lar (Tuples və ya Any[]):**
//? Array bir neçə fərqli tipdə dəyər saxlaya bilər, amma bunun üçün uyğun tip təyin edilməlidir.
const qarışıqArray: (string | number)[] = ["Dylan", 25];
qarışıqArray.push("Yeni Dəyər"); //? Problem yoxdur
qarışıqArray.push(30); //? Problem yoxdur
// qarışıqArray.push(true); //todo Xəta: 'boolean' tipi 'string | number' tipinə təyin edilə bilməz

//? Yaxud 'any[]' istifadə edərək hər hansı tip qəbul edilə bilər:
const herHansiArray: any[] = ["Dylan", 25, true];
herHansiArray.push({ ad: "Jack" }); //? Problem yoxdur

//todo **5. Tuple-lar:**
//? Tuple-lar, TypeScript-də sıralı və əvvəlcədən təyin olunmuş tiplərdə dəyərləri saxlamaq üçün istifadə edilir.
const tupleArray: [string, number, boolean] = ["Dylan", 30, true];
// tupleArray[0] = 25; //todo Xəta: 'number' tipi 'string' tipinə təyin edilə bilməz

//todo **6. Multidimensional Array-lar (Çoxölçülü Array-lar):**
//? Çox ölçülü array-lar yaratmaq üçün array-ları iç-içə istifadə etmək mümkündür.
const matris: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matris[1][2]); //? 6

//todo **7. Array-lar Üçün Faydalı Metodlar:**
//? TypeScript, JavaScript-də mövcud olan bütün array metodlarını dəstəkləyir. Bunlara aşağıdakılar daxildir:

//* `forEach` Metodu:
adlar.forEach((ad) => {
  console.log(`Ad: ${ad}`);
});

//* `map` Metodu:
const uzunAdlar = adlar.map((ad) => ad.toUpperCase());
console.log(uzunAdlar); //? ['DYLAN']

//* `filter` Metodu:
const reqemFiltresi = reqemler.filter((reqem) => reqem > 2);
console.log(reqemFiltresi); //? [3, 4]

//* `reduce` Metodu:
const toplam = reqemler.reduce((cem, reqem) => cem + reqem, 0);
console.log(toplam); //? 10

//* `some` və `every` Metodları:
const varmi = reqemler.some((reqem) => reqem > 2); //? true
const hamisiBoyukdurmu = reqemler.every((reqem) => reqem > 0); //? true

//todo **8. Array-dan Növlərin Ayrılması (Destructuring):**
//? Array-lar üzərində növləri daha rahat əldə etmək üçün destrukturizasiya istifadə olunur.
const [birinci, ikinci, ...qalanlari] = reqemler;
console.log(birinci); //? 1
console.log(ikinci); //? 2
console.log(qalanlari); //? [3, 4]

//todo **9. Optional və Nullable Array-lar:**
//? Optional array-lar array-in mövcud olmamasına icazə verir.
let optionalArray: string[] | undefined;
optionalArray = ["Optional"];

//? Nullable array-lar null və ya array ola bilər.
let nullableArray: string[] | null = null;
nullableArray = ["Nullable"];

//todo **10. TypeScript ilə İleri Array Tipləri:**
//? Məsələn, yalnız müəyyən uzunluqdakı array-lar:
type SabitUzunluqluArray = [number, number, number];
const sabitArray: SabitUzunluqluArray = [1, 2, 3];

//todo **Nəticə:**
//? TypeScript array-larla işləyərkən həm daha etibarlı, həm də daha çevik imkanlar təqdim edir.
//? Növ təhlükəsizliyi səhvlərin qarşısını alır və kodunuzu daha sabit edir.
