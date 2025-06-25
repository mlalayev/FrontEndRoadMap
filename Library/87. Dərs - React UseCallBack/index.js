//* useCallback nədir?

//? `useCallback` – React-də **funksiya referensiyasını yadda saxlamaq üçün** istifadə olunur.
//? Başqa sözlə, hər render zamanı **yenidən yaradılmayan** bir funksiyanı saxlamaq üçündür.

//? Əgər bir komponent və ya hook hər dəfə **yeni bir funksiya obyektinə** reaksiya verirsə, bu performans problemlərinə səbəb ola bilər.

//? `useCallback` funksiyanı yadda saxlayır və yalnız müəyyən dəyişənlər dəyişəndə yenidən yaradır.

//* Sintaksis:
const memoizedFunction = useCallback(() => {
  // Funksiya kodu
}, [asılılıqlar]);

//? Birinci parametr – funksiyanın özüdür
//? İkinci parametr – hansı dəyişənlər dəyişəndə bu funksiyanın yenidən yaradılacağını göstərir

//* Sadə Nümunə – callback funksiyasını yadda saxlamaq

import { useState, useCallback } from "react";

function Parent() {
  const [say, setSay] = useState(0);
  const [tema, setTema] = useState("ağ");

  const logMesaj = useCallback(() => {
    console.log("Say:", say);
  }, [say]);

  return (
    <div>
      <Child onClick={logMesaj} />
      <button onClick={() => setSay(say + 1)}>Sayı artır</button>
      <button onClick={() => setTema(tema === "ağ" ? "qara" : "ağ")}>
        Temanı dəyiş
      </button>
    </div>
  );
}

function Child({ onClick }) {
  console.log("Child render oldu");
  return <button onClick={onClick}>Mesajı göstər</button>;
}

//? Bu nümunədə:
//? - `logMesaj` funksiyası yalnız `say` dəyişəndə yenidən yaradılır
//? - `tema` dəyişsə belə, `Child` komponenti təkrar render olmur
//? - Əgər `useCallback` istifadə etməsəydik, hər renderdə `logMesaj` dəyişərdi və `Child` yenidən render olunardı

//* useCallback nə vaxt lazımdır?

//? 🔹 Bir funksiyanı `props` kimi alt komponentə göndərdiyində
//? 🔹 Həmin komponent `React.memo` ilə yadda saxlanılırsa (re-render olmasın deyə)
//? 🔹 useEffect içində `callback` funksiyanı dependency array-də istifadə edirsənsə

//* Qısa müqayisə:

//? - useMemo → dəyəri (hesablanmış nəticəni) yadda saxlamaq üçün
//? - useCallback → funksiyanı yadda saxlamaq üçün

//* Diqqət:
//? Əgər komponent çox kiçik və funksiyanın performans problemi yoxdursa, `useCallback` istifadəsi vacib deyil
//? Əks halda artıq komplekslik gətirər və faydadan çox zərər verə bilər
