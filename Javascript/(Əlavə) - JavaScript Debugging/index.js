//* **JavaScript Debugging**
//? Debugging, kodun səhvlərini tapmaq və düzəltmək üçün istifadə olunan bir prosesdir. Hər hansı bir proqramlaşdırma dilində, məsələn, JavaScript-də də sintaksis səhvləri və ya məntiqi səhvlər meydana çıxa bilər. Bu səhvlər çox zaman izləmək və tapmaq çətin olur. Kod səhv yazıldığında, bəzən heç bir xəbərdarlıq mesajı olmur, buna görə də səhvləri tapmaq və onları düzəltmək çətinləşir.

//* **JavaScript Debugger-ləri**
//? Debugging, çətin olsa da, müasir brauzerlərdə JavaScript üçün daxil edilmiş debugger-lər mövcuddur. Bu debugger-lər səhvlərin aşkar edilməsinə kömək edir və kodun hər bir hissəsini analiz etmək üçün imkanlar təqdim edir. Debugger-lərlə, həmçinin kodun icrasını dayandırmaq üçün breakpoints (dayandırma nöqtələri) təyin edə bilərsiniz və bu vaxt kodun dəyişənlərini yoxlamağa imkan verir.

//? Debugging üçün ümumiyyətlə brauzerinizdə F12 düyməsini basmaq və "Console" sekmesini seçmək lazımdır.

//* **console.log() metodu**
//? `console.log()` metodu, JavaScript kodunun işləyişi zamanı dəyişənlərin və digər məlumatların konsolda göstərilməsi üçün istifadə olunur. Bu üsul sadə debugging üçün çox faydalıdır və kodunuzun müəyyən hissələrindəki məlumatları görməyə imkan verir.

//* **Breakpoints təyin etmək**
//? Debugger pəncərəsində breakpoints təyin edərək, müəyyən nöqtədə JavaScript kodunun icrasını dayandırmaq mümkündür. Bu dayandırma nöqtələrində kod icrası dayanacaq və burada dəyişənləri araşdırmaq üçün imkanlar olacaq. Dəyişənləri yoxladıqdan sonra, kodun icrasına davam etmək (adətən "play" düyməsi ilə) mümkündür.

//* **debugger açar sözü**
//? `debugger` açar sözü JavaScript-də kodun icrasını dayandırır və debugging funksiyasını işə salmağa cəhd edir. Bu, debugger-də breakpoinq təyin etmək kimi işləyir. Əgər debugging funksiyası mövcud deyilsə, `debugger` açar sözünün heç bir effekti olmayacaq. Aşağıdakı nümunədə, kodun üçüncü sətrindən əvvəl icra dayandırılacaq:
//? **Nümunə**:
function myFunction() {
  debugger; //? Burada kod dayandırılacaq.
  let x = 10;
  console.log(x);
}

myFunction(); //? Burada debugger pəncərəsi açılacaq və kodun icrası dayandırılacaq.

//* **Əsas Brauzerlərdə Debugging Alətləri**
//? Müasir brauzerlərdə debugging alətləri mövcuddur və onlar istifadəçilərə JavaScript kodlarını izləməkdə kömək edir. Ən populyar brauzerlərdə debugging alətləri mövcuddur:
//? - **Chrome**: F12 ilə açılır, "Developer tools" seçilir, sonra "Console" seçilir.
//? - **Firefox**: F12 ilə açılır, "Web Developer" sekmesi, sonra "Web Console" seçilir.
//? - **Edge**: F12 ilə açılır, "Developer Tools" seçilir, sonra "Console" seçilir.
//? - **Opera**: F12 ilə açılır, "Developer" seçilir, sonra "Developer tools" seçilir, son olaraq "Console" seçilir.
//? - **Safari**: Safari-də "Preferences" sekmesindən "Advanced" seçilir, sonra "Enable Show Develop menu in menu bar" aktivləşdirilir və "Develop" sekmesindən "Show Error Console" seçilir.

//* **Did You Know?**
//? Debugging, kompüter proqramlarında səhvləri tapmaq, yoxlamaq və azaldmaq prosesidir. İlk məlum kompüter səhvi bir həşərat (inset) idi ki, bu, bir elektron cihazın içində ilişib qalmışdı və bu hadisə "bug" (səhv) anlayışını doğurdu.

//* **Debugging üsulları**:
//? - **Console log**: Çox sadə debugging üsuludur, JavaScript-də dəyişənləri konsola yazdıraraq kodu yoxlamağa imkan verir.
//? - **Breakpoints**: Kodun müəyyən nöqtələrində dayandırılmasını təmin edir, beləliklə kodun icrası dayandırılır və siz həmin anki dəyərləri yoxlaya bilərsiniz.
//? - **Step Through**: Kodun hər bir sətrini tək-tək icra edərək problemləri tapmağa kömək edir.
//? - **Watch Expressions**: Bu, müəyyən dəyişənlərin izlənməsi üçün istifadə olunur və həmin dəyişənlərin dəyərləri dəyişdikcə sizə məlumat verir.

//* **Nümunə: Console.log() ilə Debugging**
function sum(a, b) {
  console.log("a:", a); //? A dəyişənini konsola yazdırır.
  console.log("b:", b); //? B dəyişənini konsola yazdırır.
  return a + b;
}

let result = sum(10, 5);
console.log("Result:", result); //? Neticəni konsola yazdırır.

//* **Nümunə: Breakpoint istifadə edərək Debugging**
function calculate() {
  let x = 5;
  let y = 10;
  debugger; //? Burada breakpoint təyin edirik.
  return x + y;
}

calculate(); //? Kod breakpoint-də dayanacaq və icra dayandırılacaq.
