//* useMemo nədir?

//? `useMemo` – React-də **bahalı (çox hesablama tələb edən)** funksiyaların nəticəsini yadda saxlamaq üçün istifadə olunur.
//? Yəni hər render zamanı eyni hesablamanı yenidən etməmək üçün onu "xatırlayır" və lazım olanda yenidən istifadə edir.

//? Bu, performansı optimallaşdırmaq və artıq hesablama aparmamaq üçün çox faydalıdır.

//* Sintaksis:
const memoizedValue = useMemo(() => {
  // hesablanacaq dəyər
  return nəticə;
}, [asılılıqlar]);

//? Birinci parametr – hansı funksiyanın işləyəcəyidir
//? İkinci parametr – hansı dəyişənlər dəyişəndə bu hesablamanın yenidən aparılacağını göstərir
//? Əgər heç nə dəyişmirsə – əvvəlki nəticə istifadə olunur

//* Sadə Nümunə: Bahalı Hesablama

import { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [say, setSay] = useState(0);
  const [tema, setTema] = useState("ağ");

  const bahaliHesablama = (n) => {
    console.log("Bahalı hesablama aparılır...");
    let toplam = 0;
    for (let i = 0; i < 1000000000; i++) {
      toplam += i;
    }
    return toplam + n;
  };

  const hesablanmisDeyer = useMemo(() => bahaliHesablama(say), [say]);

  return (
    <div>
      <p>Hesablanmış nəticə: {hesablanmisDeyer}</p>
      <button onClick={() => setSay(say + 1)}>Sayı artır</button>
      <button onClick={() => setTema(tema === "ağ" ? "qara" : "ağ")}>
        Temanı dəyiş
      </button>
    </div>
  );
}

//? Bu nümunədə:
//? - `say` dəyəri dəyişmədikcə, `bahaliHesablama` funksiyası təkrar işə düşmür
//? - `tema` dəyişsə belə, `useMemo` nəticəni yadda saxladığı üçün yenidən hesablama aparılmır
//? - Konsola yalnız `say` dəyişəndə "Bahalı hesablama aparılır..." yazılır

//* Nəzərə alınmalı nüanslar:

//? 🔸 `useMemo` yalnız performans problemi varsa istifadə olunmalıdır
//? 🔸 Əks halda kodu qarışdırar və əksinə performansa mənfi təsir edə bilər
//? 🔸 `useMemo` həqiqətən bahalı funksiyaları cache-ləmək üçündür
//? 🔸 Hər dəfə renderdə eyni funksiyanı təkrar hesablamaq əvəzinə əvvəlki nəticəni saxlayır

//* Qısa müqayisə:
//? - useState → dəyəri saxlamaq və dəyişdirmək üçün
//? - useRef → dəyəri saxlamaq, amma renderə təsir etməmək üçün
//? - useMemo → funksiyanın nəticəsini saxlamaq və render zamanı onu təkrar hesablamamaq üçün
