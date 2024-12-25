//* React ilə Başlanğıc - Əsas Addımlar

//* React Nədir və Nəyə Lazımdır?
//? React, Facebook tərəfindən yaradılmış bir JavaScript kitabxanasıdır.
//? React istifadəçi interfeyslərini (UI) yaratmaq üçün ideal bir vasitədir.
//? React ilə tək səhifəli (single-page) tətbiqlər hazırlaya və yenidən istifadə edilə bilən komponentlər yarada bilərsiniz.

//* React-in Xüsusiyyətləri
//? React-in əsas xüsusiyyəti virtual DOM-dur.
//? Brauzerin DOM-u ilə birbaşa işləmək əvəzinə, React yaddaşda virtual DOM yaradır.
//? Lazım olan dəyişiklikləri bu virtual DOM üzərində edərək, son olaraq brauzerin DOM-na tətbiq edir.
//? Bu yanaşma yalnız lazım olan dəyişikliklərin həyata keçirilməsini təmin edir, bu da sürəti və performansı artırır.

//* React Tətbiqi İstifadəsində Tələblər
//? React tətbiqlərini istehsalda (production) istifadə etmək üçün Node.js və npm lazımdır.
//? npm vasitəsilə React üçün lazım olan alətləri və paketləri quraşdıra bilərsiniz.

//* React-i HTML Fayllarında İstifadə Etmək
//? React-i öyrənməyə başlamağın ən asan yolu React kodunu birbaşa HTML fayllarında yazmaqdır.
//? Bu üsul test məqsədləri üçün əlverişlidir, lakin istehsalda React mühiti qurulmalıdır.

//* HTML Faylında React Kodunun Yazılması
//? React kodunu yazmaq üçün üç əsas skripti HTML faylınıza daxil etməlisiniz:
//! 1. React kitabxanasını əlavə edən skript.
//! 2. ReactDOM kitabxanasını əlavə edən skript.
//! 3. Babel, JSX sintaksisini və ES6 kodunu köhnə brauzerlərdə dəstəkləmək üçün istifadə olunur.

//<!DOCTYPE html>
<html>
  <head>
    //* React və ReactDOM əlavə edirik
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    //* Babel skriptini əlavə edirik
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    //* React komponentinin göstərilməsi üçün div yaradılır
    <div id="mydiv"></div>
    //* React kodunu yazmaq üçün script əlavə edilir
    <script type="text/babel">
      function Hello() {
        `return <h1>Hello World!</h1>` //* JSX sintaksisi ilə React komponenti yaradılır
      }
      const container = document.getElementById('mydiv'); //* Div elementi alınır
      const root = ReactDOM.createRoot(container); //* React DOM-u ilə əlaqə qurulur
      root.render(<Hello />); //* React komponenti göstərilir
    </script>
  </body>
</html>

//* Bu üsul React-i öyrənməyə başlamaq üçün idealdır, lakin istehsalda React mühiti qurulmalıdır.

//* React Mühitinin Qurulması
//? React mühitini qurmaq üçün Node.js və npx lazımdır.
//? create-react-app aləti React tətbiqlərini yaratmaq üçün istifadə olunur.
//todo Global olaraq quraşdırılmış create-react-app varsa, onu silmək tövsiyə olunur:
//! npm uninstall -g create-react-app

//? Yeni React tətbiqi yaratmaq üçün bu əmri işlədirik:
//! npx create-react-app my-react-app
//? Bu əmr tətbiq üçün lazım olan hər şeyi quracaq.

//* React Tətbiqinin İşlədilməsi
//? Yaradılmış tətbiqi işlətmək üçün əvvəlcə tətbiqin qovluğuna keçirik:
//! cd my-react-app
//? Daha sonra tətbiqi işə salırıq:
//! npm start
//? Brauzer avtomatik olaraq localhost:3000 ünvanında tətbiqi göstərəcək.

//* React Tətbiqinin Dəyişdirilməsi
//? Tətbiq məzmununu dəyişmək üçün `src/App.js` faylını redaktə edirik. 
//? Misal üçün, HTML məzmununu <div className="App"> daxilində dəyişərək "Hello World!" göstərmək üçün dəyişiklik edə bilərik.

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1> //* Sadə bir məzmun göstərilir
    </div>
  );
}

export default App;

//* Gözəl bir xüsusiyyət: Dəyişiklik etdikdən sonra faylı yadda saxlayın, brauzer avtomatik yenilənəcək!

//* Daha Sadə React Mühiti
//? src qovluğunu sadələşdirərək yalnız `index.js` faylını saxlamaq mümkündür.
//? Aşağıdakı kimi sadə bir React tətbiqi yaradın:

import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>; //* JSX ilə ilk komponentimiz yaradılır

const root = ReactDOM.createRoot(document.getElementById('root')); //* React DOM quraşdırılır
root.render(myFirstElement); //* Komponent brauzerdə göstərilir

//* Nəticə
//? React-in əsas funksionallıqlarını və mühitin necə qurulacağını öyrəndiniz.
//? İndi React-in müxtəlif xüsusiyyətlərini öyrənməyə hazırsınız!
