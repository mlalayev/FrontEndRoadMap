//* useEffect nədir?

//? React komponentində müəyyən hadisələr baş verdikdə – məsələn, komponent ekrana gəldikdə,
//? məlumat yüklənəndə, dəyişkən dəyişdikdə və ya komponent silindikdə – bir funksiyanı işə salmaq lazım olur.
//? Bunlara **yan təsir** (side effect) deyilir.

//? `useEffect` hook-u React funksional komponentində bu cür yan təsirləri idarə etmək üçündür.
//? Başqa sözlə, `useEffect` bizə deyir: "Filan hadisə olduqda bu funksiyanı işə sal."

//* Sintaksis:
useEffect(() => {
  // buraya ediləcək əməliyyatlar yazılır
}, [asılılıqlar]);

//? Birinci parametr – hansı funksiyanın işləyəcəyidir
//? İkinci parametr – hansı dəyişən(ler) dəyişəndə bu funksiyanın işləyəcəyini bildirir

//* Mühüm Qaydalar:
//? - `useEffect` komponent render olduqdan sonra işə düşür
//? - İkinci parametr olan array (dependency array) `[]` ilə boş verilərsə – yalnız bir dəfə işləyir
//? - Əgər konkret dəyişən(lər) verilərsə – yalnız onlar dəyişdikcə işləyir
//? - Əgər heç bir ikinci parametr verilməzsə – **hər render** zamanı işləyir

//* Əsas istifadə sahələri:
//? - API-dən məlumat çəkmək
//? - LocalStorage ilə işləmək
//? - Timer və interval yaratmaq
//? - Event listener-lər əlavə etmək və silmək

//* Sadə Nümunə: Komponent mount olduqda mesaj göstər

import { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Komponent ekrana əlavə olundu");
  }, []);

  return <h2>Xoş gəldiniz</h2>;
}

//? Bu kodda yalnız bir dəfə – komponent DOM-a daxil olanda konsola mesaj yazılır.

//* Dəyişkənə görə işləmə nümunəsi:

import { useState, useEffect } from "react";

function Counter() {
  const [say, setSay] = useState(0);

  useEffect(() => {
    console.log("Say dəyişdi:", say);
  }, [say]);

  return (
    <div>
      <p>Say: {say}</p>
      <button onClick={() => setSay(say + 1)}>Artır</button>
    </div>
  );
}

//? Hər dəfə `say` dəyişəndə useEffect içindəki kod işə düşür və konsola yazır.

//* Cleanup funksiyası – komponent silindikdə bir əməliyyatı dayandırmaq üçün

useEffect(() => {
  const interval = setInterval(() => {
    console.log("Her saniye işə düşür");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Komponent silindi – interval dayandırıldı");
  };
}, []);

//? Bu nümunədə komponent silindikdə interval ləğv olunur
//? Yəni `useEffect` funksiyası içindəki return ilə "təmizləmə" funksiyası yazmaq olur

//* Nəzərə alınmalı nüanslar:

//? - useEffect renderdən sonra işləyir, yəni JSX return olunduqdan sonra
//? - Daxilində asinxron kod işlətmək olar, amma async birbaşa useEffect funksiyasının başına yazmaq olmaz
//?   Doğru üsul: daxilində async funksiyanı ayrıca yaratmaq
//? - Dependency array-ə diqqətlə yanaşmaq lazımdır – unutduğunuz dəyişənlər səbəbindən effekt işə düşməyə bilər

//* Sadə qayda:
//? useEffect – "Nə vaxtsa bu komponentdə bir şey olduqda, bu kodu işə sal" demək üçündür
//? Əgər istədiyin bir şeyi komponent render olunduqdan sonra görmək istəyirsənsə, useEffect-dən istifadə et
