//* useRef nədir?

//? `useRef` – React-də **referans (istiqamət)** saxlamaq üçün istifadə olunan hook-dur.
//? Onun köməyi ilə həm DOM elementinə, həm də dəyişməyən (re-render etməyən) bir dəyərə çıxış əldə edə bilərik.

//? Adı “reference” sözündən gəlir və əsas məqsədi –
//? komponentin içində bir dəyəri yadda saxlamaq və ona birbaşa çıxış verməkdir.

//* İstifadə ssenariləri:
//? - DOM elementinə birbaşa çıxmaq (məs: input-a fokus vermək)
//? - Dəyişən saxlamaq (ancaq re-render etməmək üçün)
//? - Timer və interval-ları saxlayıb idarə etmək
//? - Əvvəlki dəyəri yadda saxlamaq

//* Sintaksis:
const ref = useRef(ilkinDəyər);

//? ref.current – həmin dəyəri saxlayır və ona çıxmaq üçün istifadə olunur

//* Sadə Nümunə: Input-a kliklə fokus vermək

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(); //? input DOM elementini saxlamaq üçün ref yaradılır

  const fokusla = () => {
    inputRef.current.focus(); //? input-a birbaşa çıxış və fokus vermək
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={fokusla}>Fokusla</button>
    </>
  );
}

//? Bu nümunədə, input elementinə ref təyin olunur və klik zamanı ona fokus verilir
//? Bu, real DOM-a birbaşa çıxışın ən sadə nümunəsidir

//* useRef ilə dəyişməyən dəyər saxlamaq

import { useRef, useState } from "react";

function Saygac() {
  const renderSayi = useRef(1); //? dəyişməyən dəyər
  const [say, setSay] = useState(0);

  useEffect(() => {
    renderSayi.current++;
    console.log("Render sayı:", renderSayi.current);
  });

  return (
    <>
      <p>Dəyər: {say}</p>
      <button onClick={() => setSay(say + 1)}>Artır</button>
    </>
  );
}

//? Burada useRef hər dəfə komponent render olunsa belə, öz dəyərini itirmir
//? Amma bu dəyişiklik re-render yaratmır

//* Qısa izah:

//? 🔹 useRef ilə DOM elementinə çıxış edə bilərik
//? 🔹 useRef ilə bir dəyəri yadda saxlayıb, onu dəyişsək belə komponent yenidən render olunmur
//? 🔹 ref.current dəyəri dəyişdikdə React heç nəyi yeniləmir
//? 🔹 State ilə fərqi – state dəyişəndə komponent yenidən render olur, useRef dəyişəndə isə olmur

//* Fərq:
//? useState – dəyişiklik komponenti yenidən render edir
//? useRef – dəyişiklik komponenti **yenidən render etmir**
