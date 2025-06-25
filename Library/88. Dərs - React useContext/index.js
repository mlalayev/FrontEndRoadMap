//* useContext nədir?

//? `useContext` – React-də komponentlər arasında **birbaşa məlumat paylaşmaq** üçündür.
//? Əvvəllər bir məlumatı dərinlikdəki komponentlərə ötürmək üçün onu props ilə **əl-ələ ötürmək** lazım olurdu – bu isə props drilling adlanır.

//? useContext vasitəsilə bir dəfə context yaradılır və istənilən komponent bu məlumatı **birbaşa istifadə edə bilir**, heç bir props vermədən.

//* İstifadə addımları:
//? 1) Context yaradılır → `createContext()`
//? 2) Provider komponenti ilə context value paylaşılır
//? 3) `useContext()` ilə istənilən komponentdə həmin dəyərə çıxış edilir

//* İstifadə sahələri:
//? - İstifadəçi məlumatı (login olan user)
//? - Mövzu idarəsi (dark/light theme)
//? - Dil dəyişimi (i18n)
//? - Auth yoxlamaları
//? - Form məlumatlarını paylaşmaq

//* İndi isə bu strukturda tam nümunəyə baxaq:
//? └─ context/UserContext.jsx     → Context və Provider
//? └─ components/Header.jsx       → Məlumatı oxuyan komponent
//? └─ components/Profile.jsx      → Məlumatı dəyişən komponent
//? └─ App.jsx                     → Provider və komponentlər birləşir

//* UserContext.jsx

import { createContext, useState } from "react";

//* Context yaradılır
export const UserContext = createContext();

//* Provider komponenti yaradılır
export function UserProvider({ children }) {
  const [user, setUser] = useState({ ad: "Murad", yas: 23 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

//* Header.jsx

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//* İstifadəçi məlumatını oxuyan komponent
function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h2>Salam, {user.ad}</h2>
    </header>
  );
}

export default Header;

//* Profile.jsx

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//* Məlumatı dəyişdirən komponent
function Profile() {
  const { user, setUser } = useContext(UserContext);

  const yasArtir = () => {
    setUser({ ...user, yas: user.yas + 1 });
  };

  return (
    <section>
      <p>İstifadəçi yaşı: {user.yas}</p>
      <button onClick={yasArtir}>Yaşı artır</button>
    </section>
  );
}

export { Profile };

//* App.jsx

import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Profile from "./components/Profile";

//* Bütün komponentlər Provider içində yerləşdirilir
function App() {
  return (
    <UserProvider>
      <Header />
      <Profile />
    </UserProvider>
  );
}

export { App };

//? 🔹 createContext – context obyektini yaradır
//? 🔹 Provider – context dəyərini paylaşır
//? 🔹 useContext – dəyəri istənilən komponentdə oxumağa imkan verir

//? 🔸 Ən böyük üstünlüyü: props drilling-in qarşısını alır
