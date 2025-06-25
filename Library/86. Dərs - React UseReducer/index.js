//* useReducer nədir?

//? `useReducer` – React komponentində **daha kompleks state idarəetməsi** üçün istifadə olunan hook-dur.
//? Bu hook `useState`-ə alternativdir və əsasən **bir neçə əlaqəli dəyəri** və ya **daha mürəkkəb dəyişiklikləri** idarə etmək üçün uyğundur.

//? `useReducer` ideyası – dəyişiklikləri bir funksiya (reducer) vasitəsilə idarə etməkdir
//? Biz bir **action** göndəririk və reducer funksiyası yeni state-i qaytarır

//* Sintaksis:
const [state, dispatch] = useReducer(reducer, ilkinDəyər);

//? `state` – cari vəziyyəti saxlayır
//? `dispatch` – dəyişiklik göndərmək üçün funksiyadır
//? `reducer` – action-a əsasən yeni state qaytaran funksiyadır

//* Sadə Nümunə: Sayğac

import { useReducer } from "react";

//* Reducer funksiyası – əvvəlki state və gələn action-u qəbul edir
function reducer(state, action) {
  switch (action.type) {
    case "ARTIR":
      return { say: state.say + 1 };
    case "AZALT":
      return { say: state.say - 1 };
    case "SIFIRLA":
      return { say: 0 };
    default:
      return state;
  }
}

//* Komponent
function Counter() {
  const [state, dispatch] = useReducer(reducer, { say: 0 });

  return (
    <div>
      <h2>Say: {state.say}</h2>
      <button onClick={() => dispatch({ type: "ARTIR" })}>Artır</button>
      <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
      <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
    </div>
  );
}

//? Bu nümunədə:
//? - `dispatch` funksiyası vasitəsilə bir action göndərilir
//? - `reducer` funksiyası həmin action-u işləyir və yeni state-i qaytarır
//? - React yeni state ilə komponenti yenidən render edir

//* useState ilə fərqləri:

//? 🔹 useState – sadə vəziyyətlər üçün
//? 🔹 useReducer – əlaqəli və ya ardıcıl dəyişikliklər üçün daha uyğun
//? 🔹 useReducer ilə daha **strukturlaşdırılmış**, **aydın**, və **kontrollu** state idarəsi mümkündür

//* Nə vaxt useReducer istifadə etməli?

//? - Bir neçə state dəyəri bir-biri ilə əlaqəlidirsə
//? - State dəyişmələri çoxdursa (məsələn, form dəyişiklikləri, çoxlu action-lar)
//? - State dəyişmə qaydaları daha kompleksdirsə və kodun aydın qalması vacibdirsə

//* Qısa izah:
//? useReducer – sadəcə `state`-i dəyişmək yox, onu **nə etdiyini izah edən action-larla** idarə etmək üçündür
//? Bu yanaşma daha sabit və oxunaqlı kod yazmağa kömək edir
