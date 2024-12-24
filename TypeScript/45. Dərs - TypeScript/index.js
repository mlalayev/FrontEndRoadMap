//* 45. Gün - TypeScript

//? **TypeScript Nədir?**
//? TypeScript, JavaScript-in sintaktik bir superseti olaraq, statik tipləmə əlavə edir. Yəni JavaScript kodunun üzərinə əlavə sintaksis gətirərək, verilənlərin tipini göstərmək imkanı verir.
//? JavaScript-in ən əsas problemi, dəyişənlərin və funksiyaların tiplərinin müəyyən olmamasıdır. Bu, səhv anlayışlara və kodun daha çətin başa düşülməsinə səbəb ola bilər.
//? TypeScript bu problemi həll edir və kodun yazılması zamanı tiplərin uyğun olub-olmadığını yoxlayır, beləliklə səhvləri erkən aşkar etməyə kömək edir.

//* **TypeScript və JavaScript Fərqi**
//? TypeScript, JavaScript-in tamamilə düzgün işləyən bir üstəgəlməsi olduğu üçün JavaScript kodu, TypeScript-də də işləyəcəkdir.
//? Lakin TypeScript, JavaScript-in mövcud xüsusiyyətlərinə əlavə olaraq statik tipləmə, interfeys, generiklər və daha çoxunu təqdim edir.
//? TypeScript, səhvləri kodun işə salınmasından əvvəl müəyyən edir, buna **compile-time type checking** deyilir, bu isə kod yazılarkən səhvlərin aşkar edilməsinə kömək edir.

//* **Nümunə**:
//? JavaScript-də tip müəyyən edilməsi yoxdur:

//function greet(name) {
//  return "Hello, " + name;
//}

//console.log(greet("John"));  //Hello, John

//? TypeScript-də tip təyini:

`function greet(name: string): string {
  //? "name" dəyişəninin tipi "string" olaraq təyin edilir.
  return "Hello, " + name;
}`

console.log(greet("John")); //Hello, John
//? Bu zaman `name` dəyişəni yalnız `string` tipini ala bilər, əgər başqa bir tip verilsə, TypeScript səhv verəcəkdir.

//* **TypeScript-in Faydaları**:
//? 1. **Daha Etibarlı Kodu Təmin Edir**: TypeScript-də yazdığınız kodun tipini əvvəlcədən müəyyən etdiyiniz üçün səhv tapmaq daha asandır.
//? 2. **Kodunoxudulmasını Artırır**: Tiplər kodu daha anlaşılan edir. Hər hansı bir dəyişənin və ya funksiyanın hansı növ verilənlərlə işlədiyini görmək asandır.
//? 3. **Daha Yaxşı IDE Dəstəyi**: TypeScript-də tiplərin mövcudluğu, IDE-lərin (məsələn, Visual Studio Code) daha yaxşı tamamlanma, səhv tapma və refaktorinq dəstəyi təqdim etməsini təmin edir.
//? 4. **Böyük Kod Bazaları Üçün Daha Uyğundur**: TypeScript, böyük layihələrdə kodun idarə olunmasını asanlaşdırır, çünki yazılmış hər bir dəyişən və funksiya tipi müəyyən edilmişdir.

//* **TypeScript-i Necə İstifadə Edirik?**
//? TypeScript istifadə etmək üçün öncə **TypeScript compiler**-ini (tsc) quraşdırmaq lazımdır. Bu, TypeScript kodunu JavaScript-ə çevirməyə imkan verir.

//* **TypeScript Compiler-in Quraşdırılması**:
```
  npm install -g typescript
```;

//? Yuxarıdakı əmrlə TypeScript quraşdırıldıqdan sonra, .ts uzantılı faylları yaratmağa başlaya bilərsiniz. //? TypeScript Faylının Transpiles Edilməsi: TypeScript faylını JavaScript-ə çevirmək üçün aşağıdakı əmrdən istifadə edə bilərsiniz:

//* tsc app.ts

//? Bu əmr, app.ts faylını JavaScript faylına çevirəcək və app.js faylını yaradacaq. //? TypeScript yazdıqca IDE-niz səhvləri anında göstərəcəkdir və bu da kodun daha sürətli inkişafına kömək edəcəkdir.

//* TypeScript-də Funksiya Tipləri: //? TypeScript-də funksiyaların parametrləri və dönüş dəyərləri üçün tiplər təyin edilə bilər. Bu, funksiyanın necə istifadə ediləcəyini və hansı verilənləri qəbul edəcəyini dəqiq göstərir.

//* Nümunə: function add(a: number, b: number): number { //? a və b dəyişənlərinin tipi number olaraq təyin edilir. return a + b; }

console.log(add(5, 10)); //15 //? a və b yalnız number tipini qəbul edə bilər, başqa tip verilsə, TypeScript səhv göstərəcəkdir.

//* Nəticə: 
//? TypeScript, JavaScript-in çox faydalı və etibarlı bir uzantısıdır. Tipləri və digər inkişaf etmiş xüsusiyyətləri ilə proqramçıların səhv etməsinin qarşısını alır və daha yaxşı kod yazılmasını təmin edir. TypeScript, həmçinin böyük layihələrdə daha yaxşı idarəetmə və daha asan inkişaf təmin edir.
