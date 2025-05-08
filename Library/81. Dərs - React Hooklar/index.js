//* React-də Hook-lar nə üçün lazımdır?

//? React-də funksional komponentlər əslində sadə JavaScript funksiyalarıdır.
//? Bu funksiyalar çağırılır, müəyyən JSX strukturu qaytarır və React həmin quruluşu ekranda göstərir.

//? Amma bu komponentlər **öz daxilində vəziyyət (state)** saxlaya bilmirlər.
//? Yəni, məsələn, bir düyməyə klikləyib sayğacı artırmaq istəyirsinizsə —
//? funksional komponent bu dəyəri yadda saxlaya və dəyişiklik zamanı yenidən render edə bilmir.

//* Misal: (hook-larsız komponent)
//? Bu komponentdə hər dəfə render olunduqda `say` dəyişəni sıfırdan başlayır.

function Counter() {
  let say = 0;

  function artir() {
    say++;
    console.log(say);
  }

  return (
    <div>
      <h2>Say: {say}</h2>
      <button onClick={artir}>Artır</button>
    </div>
  );
}

//? Bu kodda `say++` ilə dəyəri artırırıq, amma bu dəyişiklik **ekrana əks olunmur**!
//? Niyə? Çünki komponentin yenidən render olunması üçün React-in öz mexanizmi lazım idi.
//? React yalnız **state dəyişəndə** və ya **props dəyişəndə** komponenti yenidən render edir.

//* Problem nədədir?
//? JavaScript-də sadəcə bir dəyişəni artırmaqla saytı yenidən "təzələyə" bilmərik.
//? HTML özü dəyişənlərin dəyişməsini hiss etmir — onu bizə göstərmək üçün yenidən render olunmalıdı.
//? Amma React-də sadə funksional komponent bu davranışı təkbaşına idarə edə bilmir.

//* Bəs həll nədir?
//? React deyir ki: "Əgər sən komponent içində vəziyyət (state) saxlamaq istəyirsənsə,
//? və o dəyişdikcə komponentin avtomatik yenidən işləməsini istəyirsənsə,
//? onda bu işi mənim vasitəmlə — **Hook-lar** ilə gör!"

//* Hook-ların əsas funksiyası:
//? Komponent daxilində dəyişənlər yaratmaq, onları dəyişdikdə avtomatik yenidən render etmək
//? Başqa sözlə, **"komponentin yaddaşı"nı yaratmaq** və ona nəzarət etmək.

//* Qısa məntiq:
//? - HTML: statikdir, dəyişiklikləri özü idarə etmir
//? - JavaScript dəyişiklik edir, amma bu dəyişiklik HTML-ə əks olunmur
//? - React komponenti hər dəyişiklikdə yenidən render olunmalıdır
//? - Bunun üçün isə React-ə **deyilməlidir ki, nə dəyişdi**
//? - Bu "nə dəyişdi" məlumatını ötürən sistem – **state**-dir
//? - Funksional komponentdə bu state-i yaratmaq və izləmək üçün isə – **Hook-lar** lazımdır

//* Hooks olmadan:
//? - Funksional komponentlər statik olur
//? - Daxili dəyişikliklər görsənmir
//? - Dinamik interaktivlik mümkün olmur

//* Hooks ilə:
//? - Daxili vəziyyətlər idarə olunur
//? - Yan təsirlər (API çağırışı, interval, scroll və s.) izlənir
//? - Komponentlər özləri ilə "danışa bilir" və **canlanır**
