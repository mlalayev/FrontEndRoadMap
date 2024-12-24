//* 46. Gün - TypeScript Sadə Tiplər

//? **TypeScript Sadə Tipləri**
//? TypeScript, JavaScript-də olan bəzi sadə tipləri dəstəkləyir. Bu tipləri artıq tanıyırsınız.

//? **Üç əsas sadə tip**:
//? - **boolean**: true və ya false dəyərləri.
//? - **number**: tam ədədlər və ondalıklı ədədlər.
//? - **string**: "TypeScript Rocks" kimi mətn dəyərləri.

//? **Daha az yayılmış iki sadə tip**:
//? - **bigint**: Tam ədədlər və ondalıklı ədədlər, lakin **number** tipindən daha böyük müsbət və mənfi ədədlərə imkan verir.
//? - **symbol**: Qlobal olaraq unikaldır və identifikator yaratmaq üçün istifadə olunur.

//* **Tip Təyini**
//? Bir dəyişən yaradarkən, TypeScript tipini iki əsas şəkildə təyin edir:

//? - **Explicit (Aydın)**
//? - **Implicit (İmplikit)**

//* **Aydın Tip Təyini**:
//? Tipi açıq şəkildə yazmaq:
//* ```typescript
// let firstName: string = "Dylan";
// ```

//? **Aydın tip təyini** oxunması daha asandır və məqsədli şəkildə tip müəyyən edir.

//* **İmplikit Tip Təyini**:
//? TypeScript, dəyişənin təyin olunan dəyərinə əsasən tipi "tahmin" edəcək:
//* ```typescript
// let firstName = "Dylan"; // TypeScript avtomatik olaraq "string" tipi təyin edir.
// ```

//? **İmplikit tip təyini** TypeScript-ə tipi çıxarmağa məcbur edir.
//? Tip təyini daha qısa və sürətli olur, inkişaf və test prosesində çox istifadə olunur.

//* **Tip Təyini Xətası**:
//? TypeScript, məlumat tipinin uyğun gəlməməsi halında xəta verir:

//* ```typescript
// let firstName: string = "Dylan"; // tip string
// firstName = 33; // fərqli tipdə dəyər təyin etməyə cəhd edir
// ```

//? **İmplikit tip təyini** ilə də eyni xəta meydana gələcək:
//* ```typescript
// let firstName = "Dylan"; // təyin olunan tip "string" olacaq
// firstName = 33; // fərqli tipə təyin etməyə cəhd edir
// ```

//? JavaScript-də isə uyğunsuz tiplər üçün heç bir xəta meydana gəlməz.

//* **Tip Təyini Çətinliyi**:
//? TypeScript hər zaman dəyişənin hansı tip olduğunu düzgün şəkildə çıxara bilməz. Bu halda, tipi `any` olaraq təyin edər və bu da tip yoxlanmasını dayandırar.
//* Məsələn, `JSON.parse` metodundan istifadə etdikdə, onun qaytardığı dəyər `any` tipinə çevriləcək:

//* ```typescript
// const json = JSON.parse("55"); // json tipi "any" olacaq
// console.log(typeof json); // json-un tipi unknown ola bilər, məsələn string və ya number
// ```

//? Bu davranış, `tsconfig.json` faylında `noImplicitAny` seçimi ilə deaktiv edilə bilər. `tsconfig.json`, TypeScript layihəsində bəzi parametrləri tənzimləmək üçün istifadə olunur.

//? **Boolean və Boolean Tipi**:
//? **boolean** kiçik hərflə yazılır, lakin **Boolean** böyük hərflə yazılır və yalnız çox spesifik hallar üçün istifadə edilir.
//? Bu dərs üçün sadəcə kiçik hərflə yazmağa diqqət edin. Böyük hərflə yazılmış tiplər xüsusi hallarda istifadə olunur.
