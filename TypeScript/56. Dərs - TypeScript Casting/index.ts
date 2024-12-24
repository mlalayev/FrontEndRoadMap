//* TypeScript-də Tipin Keçirilməsi (Casting)
//? TypeScript-də bəzi hallarda dəyişənin tipini dəyişdirmək, yəni keçirmək (casting) lazım olur.
//? Bu, xüsusilə səhv tipin verildiyi kitabxanalarda və ya tipin avtomatik olaraq müəyyən edilmədiyi hallarda istifadə edilir.
//? Keçirmə prosesi bir dəyişənin tipini dəyişdirmək deməkdir. Lakin burada məlumatın özü dəyişmir, yalnız bu məlumatın hansı tipdə olduğunu göstəririk.


//* `as` ilə Keçirmə (Casting with as)
//? Bir dəyişəni keçirmək üçün ən asan üsul `as` açar sözündən istifadə etməkdir.
//? Bu üsul birbaşa olaraq verilən dəyişənin tipini dəyişir.
//? Aşağıdakı nümunədə `x` dəyişəni əvvəlcə `unknown` tipindədir, amma biz onu `string` tipinə çeviririk və `length` xüsusiyyətini çağırırıq.

//? `x` dəyişənini əvvəlcə `unknown` tipi ilə təyin etdik və sonra `as string` ilə onu `string` tipinə keçirdik
let x5: unknown = 'hello';  //? `x` dəyişəni `unknown` tipindədir
console.log((x as string).length);  //? `x` dəyişənini `string`-ə çevirərək onun `length` xüsusiyyətini çap edirik

//? Keçirmə prosesi məlumatın içindəki dəyəri dəyişdirmir, yalnız onun tipini göstərir.
//? Məsələn, aşağıdakı kod işləməyəcək, çünki `x` dəyişəni hələ də bir `number`-dir və `number` tipinin `length` xüsusiyyəti yoxdur.

//? `x` dəyişənini `unknown` tipində təyin etmişik və sonra onu `string` tipinə keçirməyə çalışırıq,
//? amma bu səhv olacaq çünki `number` tipinin `length` xüsusiyyəti yoxdur
let x2: unknown = 4;  //? `x` dəyişəni bu dəfə `number` tipindədir
console.log((x as string).length);  //? `length` xüsusiyyəti `number` tipində mövcud deyil, buna görə `undefined` çap olunacaq

//? TypeScript, keçirmənin səhv olmasını qarşısını almağa çalışacaq və doğru olmayan keçirmələr üçün tip xətası atacaq.
//? Məsələn, aşağıdakı kod səhv verəcək, çünki `string`-i `number`-ə keçirmək məntiqli deyil.

//console.log((4 as string).length);  //? Tip səhvi: `number` tipi `string` tipinə çevrilə bilməz

//* `< >` ilə Keçirmə (Casting with <>)
//? `< >` sintaksisi də `as` ilə keçirməyə bənzəyir və eyni məqsəd üçün istifadə edilir.
//? Lakin bu üsul TSX (React faylları) ilə işləyərkən istifadə edilə bilməz, çünki TSX React-də bu sintaksis səhv olur.

//? Aşağıdakı nümunədə, `x` dəyişənini `unknown` tipindən `string` tipinə keçirdirik, lakin burada `<string>` sintaksisindən istifadə edirik.
let x3: unknown = 'hello';  //? `x` dəyişəni `unknown` tipindədir
console.log((<string>x3).length);  //? `x` dəyişənini `string`-ə keçirdik və onun uzunluğunu çap etdik


//* Tip Səhvlərini Zorla Keçirmək (Force Casting)
//? Bəzən TypeScript tip səhvlərini qarşısını almağa çalışır, amma biz bəzi hallarda bu səhvləri zorla keçirmək istəyə bilərik.
//? Bu halda, əvvəlcə dəyişəni `unknown` tipinə keçirmək və sonra istədiyimiz tipə çevirmək lazımdır.
//? Bu cür keçirmə TypeScript-in yazılış qaydalarına zidd olsa da, bəzən lazım ola bilər.

//? Aşağıdakı nümunədə, `x` dəyişəni əvvəlcə `string` tipindədir, amma biz onu əvvəlcə `unknown` tipinə, sonra isə `number` tipinə keçiririk.
//? Amma burada `x` hələ də `string` tipində olduğuna görə, bu kod `undefined` qaytaracaq.
let x4 = 'hello';  //? `x` dəyişəni `string` tipindədir
//console.log(((x4 as unknown) as number).length);  //? Bu kod səhv olmayacaq, amma `length` undefined olacaq, çünki `x` əslində `number` deyil

//? Bu növ keçirmə çox diqqətlə istifadə edilməlidir, çünki həqiqətən səhv olan tip keçirmələri səhv nəticələrə gətirib çıxara bilər.


//* Keçirmənin İstifadə Sahələri
//? Keçirmə, bəzən avtomatik olaraq verilən tiplərin düzgün olmadığını bildiyimiz zaman faydalı ola bilər.
//? Məsələn, bəzi JavaScript kitabxanalarında tiplər tam və ya düzgün şəkildə müəyyən edilmir, belə hallarda biz bu tipli dəyişənləri düzgün şəkildə keçirməli oluruq.
//? Keçirmə ilə TypeScript-ə, dəyişənin doğru tipə malik olduğunu bildirmiş oluruq, amma hər zaman diqqətli olmaq lazımdır, çünki səhv keçirmə proqramın səhv işləməsinə səbəb ola bilər.


//* Nəticə
//? Keçirmə TypeScript-də güclü bir xüsusiyyətdir, lakin diqqətlə istifadə edilməlidir.
//? Dəyişənin tipini zorla dəyişdirmək, əslində səhvlərə və gözlənilməz nəticələrə yol aça bilər.
//? Hər zaman keçirmə zamanı doğru tipin təyin edildiyinə əmin olun və TypeScript-in verdiyi səhv mesajlarını diqqətlə nəzərdən keçirin.
