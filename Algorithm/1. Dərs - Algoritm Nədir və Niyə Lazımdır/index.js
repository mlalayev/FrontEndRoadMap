//* 1. Algoritmlərə Giriş: Algoritm Nədir və Niyə Lazımdır?

//? **Algoritm Nədir?**
//? Algoritm, müəyyən bir problemi həll etmək üçün addım-addım yazılmış dəqiq təlimatlar toplusudur.
//? Kompüterlər və proqramlaşdırma dilləri vasitəsilə bu təlimatlar icra edilərək nəticə əldə edilir.
//? Hər bir proqramın əsasında müəyyən bir və ya bir neçə algoritm dayanır.

//? **Algoritmlər Nə Üçün Lazımdır?**
//? - **Problemləri həll etmək:** Proqramlaşdırmada verilənlərin işlənməsi, axtarış, sıralama və digər əməliyyatlar algoritmlər vasitəsilə həyata keçirilir.
//? - **Səmərəlilik:** Düzgün seçilmiş algoritm, proqramın daha sürətli və effektiv işləməsinə kömək edir.
//? - **Modularlıq və Təkrarlana Bilənlik:** Eyni problemi müxtəlif girişlər üçün həll etməyə imkan yaradır.
//? - **Strukturlaşdırılmış Düşünmə:** Algoritmlər yazaraq daha məntiqli və sistemli şəkildə düşünməyi öyrənirik.

//* **1. Algoritmin Əsas Xüsusiyyətləri**
//? - **Dəqiqlik:** Hər addımın konkret bir mənası və məqsədi olmalıdır.
//? - **Sonluluq:** Algoritm müəyyən sayda addımdan sonra tamamlanmalıdır.
//? - **Deterministiklik:** Eyni giriş verilənlərinə görə həmişə eyni nəticəni verməlidir.
//? - **Giriş və Çıxış:** Algoritm müəyyən girişlər alıb, müəyyən çıxışlar təqdim etməlidir.

//* **2. Algoritmin Təsviri**
//? Algoritmləri müxtəlif yollarla təsvir etmək mümkündür:
//? - **Adi dil ilə** (insan dili ilə izah edərək)
//? - **Psevdokod ilə** (proqramlaşdırma dilinə oxşar yazı formatında)
//? - **Blok-sxemlər ilə** (qrafik təsvirlərdən istifadə edərək)
//? - **Proqramlaşdırma dili ilə** (müəyyən bir proqramlaşdırma dilində yazaraq)

//* **3. Sadə Algoritm Misalı (JavaScript ilə)**

//? Aşağıdakı misalda iki ədədin cəmini hesablayan sadə bir funksiyanı algoritm kimi yazaq:

function topla(a, b) {
  return a + b;
}

const netice = topla(5, 3);
console.log("Cəmi:", netice); //? Cəmi: 8

//? Bu funksiyanın algoritmi belə təsvir edilə bilər:
//? 1. İki ədəd qəbul et (a, b).
//? 2. Onların cəmini hesabla.
//? 3. Nəticəni qaytar.
//? 4. Çıxışa (console.log) çap et.
