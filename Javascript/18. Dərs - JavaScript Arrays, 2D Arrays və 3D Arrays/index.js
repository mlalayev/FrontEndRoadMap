//* 18. Gün - JavaScript Arrays, 2D Arrays və 3D Arrays

//? **Array (Massiv) Nədir?**
//? Array, birdən çox dəyəri bir arada saxlamağa imkan verən bir JavaScript məlumat strukturudur.
//? Hər bir elementə indeks vasitəsilə daxil olmaq mümkündür və indekslər 0-dan başlayır.

//* **Sintaksis**:
//* let arrayName = [dəyər1, dəyər2, dəyər3, ...];

//? **Nümunə**: Sadə bir array yaratmaq:
let fruits = ["alma", "çiyələk", "kivi", "portağal"];
console.log(fruits[0]);  //? "alma" ekrana yazılacaq


//? **Array-lara Dəyər Təyin Etmək və Göstərmək**
//? Array-lara dəyər təyin etmək üçün indekslərdən istifadə edirik.
//? Məsələn, arrayName[index] vasitəsilə bir elementin dəyərinə daxil ola bilərik.

//* **Array-ın elementinə daxil olmaq**:
console.log(fruits[1]);  //? "banan" ekrana yazılacaq

//* **Array-a yeni element əlavə etmək**:
fruits[4] = "nar";  //? Array-ın 4-cü indeksinə yeni dəyər əlavə edilir
console.log(fruits[4]);  //? "nar" ekrana yazılacaq

//* **Array-ın uzunluğunu tapmaq**:
console.log(fruits.length);  //? Array-ın uzunluğu: 5


//? **2D Array (İki Ölçülü Massiv) Nədir?**
//? 2D array, array içində başqa array-ları saxlayan bir array-dir.
//? Bu, tablolarda olduğu kimi satır və sütunları təmsil edə bilər.

//* **Sintaksis**:
//* let array2D = [[dəyər1, dəyər2], [dəyər3, dəyər4], ...];

//? **Nümunə**: 2D array yaratmaq:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]);  //? "2" ekrana yazılacaq (0-ci satır, 1-ci sütun)

//? **Açıqlama**:
//? Burada `matrix[0][1]` 0-cı satır və 1-ci sütundakı dəyəri təmsil edir.

//* **2D Array-ın uzunluğunu tapmaq**:
console.log(matrix.length);  //? Matrix-ın satır sayı, yəni 3

//* **2D Array-da Dövr vasitəsilə Yerləşdirmə**:
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);  //? Bütün elementlər ekrana yazılacaq
    }
}

//? **3D Array (Üç Ölçülü Dizi) Nədir?**
//? 3D array, 2D array-ları saxlayan bir array-dir və bu da daha mürəkkəb verilən strukturlar yaratmaq üçün istifadə edilir.

//* **Sintaksis**:
//* let array3D = [[[dəyər1, dəyər2], [dəyər3, dəyər4]], [[dəyər5, dəyər6], [dəyər7, dəyər8]], ...];

//? **Nümunə**: 3D array yaratmaq:
let cube = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ],
    [
        [9, 10],
        [11, 12]
    ]
];

console.log(cube[0][1][0]);  //? "3" ekrana yazılacaq (0-cı dəst, 1-ci satır, 0-cı sütun)

//? **Açıqlama**:
//? `cube[0][1][0]` 0-cı dəst, 1-ci satır və 0-cı sütundakı dəyəri təmsil edir.

//* **3D Array-da Dövr vasitəsilə Yerləşdirmə**:
for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube[i].length; j++) {
        for (let k = 0; k < cube[i][j].length; k++) {
            console.log(cube[i][j][k]);  //? Bütün elementlər ekrana yazılacaq
        }
    }
}

//? **Array-ın Əlavə Əməliyyatları**:
//? - **push()**: Array-ın sonuna yeni element əlavə edir.
//* fruits.push("ananás");  //? "ananás" əlavə edilir
//* console.log(fruits);

//? - **pop()**: Array-ın sonundakı elementi silir.
//* fruits.pop();  //? Sonuncu elementi silir
//* console.log(fruits);

//? - **shift()**: Array-ın əvvəlindən elementi silir.
//* fruits.shift();  //? İlk elementi silir
//* console.log(fruits);

//? - **unshift()**: Array-ın əvvəlinə yeni element əlavə edir.
//* fruits.unshift("kişmiş");  //? "kişmiş" əlavə edilir
//* console.log(fruits);


//? **Xülasə**:
//? 1. **Array (Dizi)**: Birdən çox dəyəri saxlayan verilən strukturu. Dəyərlərə indeks vasitəsilə daxil olunur.
//? 2. **2D Array**: Array içində digər array-ları saxlayan array-dir, məsələn, tablo kimi.
//? 3. **3D Array**: 2D array-ları saxlayan array-dir, çoxölçülü verilən strukturları saxlamaq üçün istifadə olunur.
//? 4. Array-ın müxtəlif əməliyyatları ilə array-lara dəyər əlavə etmək və ya silmək mümkündür.

