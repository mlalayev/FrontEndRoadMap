//* useState nədir?

//? `useState` – React funksional komponentində **daxili vəziyyət (state)** saxlamaq və onu dəyişmək üçün istifadə olunur.
//? State – komponentin yaddaşında saxlanılan dəyərdir və o dəyişdikdə komponent avtomatik **yenidən render** olunur.

//* React-də state dəyişmədən heç bir dəyişiklik ekranda görünmür!
//? `useState` isə bu dəyişiklikləri izləyir və komponenti yenidən qurur.

//* Sintaksis:
const [state, setState] = useState(ilkinDəyər);

//? `state` – mövcud dəyəri oxumaq üçündür
//? `setState` – həmin dəyəri dəyişmək və komponenti yenidən qurmaq üçündür
//? `useState(...)` – dəyərin ilkin versiyasını təyin edir

//* Sadə Nümunə: Sayğac

import { useState } from "react";

function Counter() {
  const [say, setSay] = useState(0); //? ilkin dəyər 0 olan say dəyişəni yaradılır

  const artir = () => {
    setSay(say + 1); //? yeni dəyər təyin olunur – komponent yenidən render olunur
  };

  return (
    <div>
      <h2>Say: {say}</h2>
      <button onClick={artir}>Artır</button>
    </div>
  );
}

//* Nə baş verir?
//? İlk render zamanı `say` = 0 olur.
//? `Artır` düyməsinə klik etdikdə `setSay` funksiyası çağırılır və dəyər +1 olur.
//? React dəyişiklik olduğunu görür → komponenti təkrar render edir → yeni dəyər görünür.

//* Bir neçə useState istifadəsi

function Info() {
  const [ad, setAd] = useState("Murad");
  const [yas, setYas] = useState(23);

  return (
    <div>
      <p>Ad: {ad}</p>
      <p>Yaş: {yas}</p>
      <button onClick={() => setYas(yas + 1)}>Yaşı artır</button>
    </div>
  );
}

//? `useState` bir komponentdə istədiyin qədər istifadə oluna bilər.
//? Hər biri öz dəyərini saxlayır və yalnız özü dəyişdikdə yenidən render edir.

//* Diqqət Ediləsi Nöqtələr:

//? `useState` asinxrondur – yəni dəyəri dərhal dəyişməz, bir render sonra dəyişir
//? Əgər yeni dəyər əvvəlki dəyərdən asılıdırsa, funksional versiyadan istifadə et:
//?   setSay(prev => prev + 1);
//? State dəyişənini birbaşa dəyişmək olmaz: `say++` → ❌
//?   Həmişə `setSay(...)` istifadə olunmalıdır.

//* ✅ Doğru:
setSay((say) => say + 1);

//* ❌ Səhv:
say++;
