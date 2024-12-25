//* React
//? React nədir?
//? React, istifadəçi interfeysləri yaratmaq üçün JavaScript kitabxanasıdır.
//? Əsasən tək səhifəli tətbiqlər (Single-Page Applications - SPA) qurmaq üçün istifadə olunur.
//? React bizə təkrar istifadə edilə bilən UI (istifadəçi interfeysi) komponentləri yaratmağa imkan verir.
//? Bununla yanaşı, React komponentlər arasında məlumat axınını asanlıqla idarə etməyə imkan verir.

//? React-in iş prinsipini və gücünü anlamağın ən yaxşı yolu nümunələr üzərində işləməkdir.
//? Bunun üçün React kodunu və nəticəsini görmək üçün sadə bir misal yaradaq:

//* React və ReactDOM-u layihəmizə daxil edirik:
//? React komponentləri yaratmaq üçün React kitabxanasını əlavə edirik.
//? ReactDOM isə bu komponentləri HTML DOM (Document Object Model)-a daxil etmək üçün istifadə olunur.

import React from 'react'; // React kitabxanasını daxil edirik.
import ReactDOM from 'react-dom/client'; // ReactDOM kitabxanasını daxil edirik.

//* Sadə bir React komponenti yaradaq:
//? React komponentləri funksiya və ya siniflər kimi yaradılır.
//? Burada sadə bir funksiya komponenti nümunə olaraq yaradılır:


function Hello(props) {
  //? Bu komponent HTML sətiri qaytarır: "Hello World!"
  return <h1>Hello World!</h1>; // JSX sintaksisi ilə yazılıb.
}

//* Komponenti HTML DOM-a daxil edirik:
//? HTML-də "root" id-si olan elementi tapırıq.
//? Bu elementi React tətbiqimizin əsas konteyneri kimi istifadə edirik.
const container = document.getElementById("root");

//? ReactDOM-un "createRoot" metodu ilə bir kök yaratırıq.
//? Bu kökün daxilində React komponentləri yerləşdiriləcək.
const root = ReactDOM.createRoot(container);

//? Nəhayət, yaradılan "Hello" komponentimizi bu konteynerə render edirik:
root.render(<Hello />); 
//? Burada `<Hello />` React komponentidir və o, ekranda "Hello World!" yazısını göstərir.

//* JSX (JavaScript XML) nədir?
//? `return <h1>Hello World!</h1>;` sətrində JSX istifadə olunur.
//? JSX, JavaScript kodunun içində HTML yazmağa imkan verir və bu kod daha sonra JavaScript-ə çevrilir.
//? JSX React-də işləməyi asanlaşdırır və kodu daha oxunaqlı edir.

//* Nəticə:
//? Bu nümunə, React-də komponentlərin necə yaradıldığını və HTML DOM-a necə yerləşdirildiyini göstərir.
//? React-dən istifadə edərək istənilən mürəkkəblikdə tətbiqlər yarada bilərsiniz.
//? Dərslərimizin davamında daha mürəkkəb komponentlər, məlumat axını və vəziyyət idarəsini öyrənəcəyik.

//* Əlavə Məlumat:
//? - `props` nədir? Komponentlərə xaricdən məlumat göndərmək üçün istifadə olunur.
//? - React komponentlərini digər komponentlərin içində istifadə edə bilərsiniz.
//? - React layihənizdə tətbiqi inkişaf etdirmək üçün əlavə kitabxanalardan istifadə edə bilərsiniz, məsələn: React Router, Redux və s.


//* React Tətbiqi Yaratmaq üçün Mühit Qurulması
//? React-i öyrənmək və test etmək üçün kompüterinizdə React mühiti qurmalısınız.
//? Bu dərslikdə React tətbiqləri yaratmaq üçün rəsmi dəstəkli "create-react-app" vasitəsindən istifadə edirik.

//* "create-react-app" nədir?
//? React tətbiqi yaratmaq üçün sadə və sürətli bir alətdir.
//? Lazım olan bütün faylları, strukturu və konfiqurasiyanı avtomatik olaraq sizin üçün qurur.
//? Qeyd: Bu alətdən istifadə etmək üçün kompüterinizdə Node.js quraşdırılmalıdır.

//* React Tətbiqi Necə Yaradılır?
//? Kompüterinizdə terminalı açın və tətbiqinizi yaratmaq istədiyiniz qovluğa keçin.
//? Aşağıdakı əmri icra edin:
// npx create-react-app my-react-app 
//? Bu əmr "my-react-app" adlı yeni bir React tətbiqi yaradacaq.
//? create-react-app bütün lazımi faylları və konfiqurasiyaları avtomatik olaraq quracaq.

//* Diqqət:
//? Əgər əvvəllər create-react-app qlobal olaraq quraşdırılıbsa, ən son versiyanı istifadə etmək üçün onu silmək tövsiyə olunur.
//? Silmək üçün bu əmrdən istifadə edin:
// npm uninstall -g create-react-app

//* React Tətbiqini İşə Salmaq
//? Tətbiqin yaradıldığı qovluğa keçmək üçün bu əmri icra edin:
// cd my-react-app 
//? React tətbiqini başlatmaq üçün isə aşağıdakı əmrdən istifadə edin:
// npm start 
//? Bu əmr tətbiqinizi işə salacaq və brauzerinizdə yeni bir pəncərə açılacaq.
//? Əgər brauzer avtomatik açılmasa, `localhost:3000` ünvanını əl ilə daxil edin.

//* Nəticə:
//? React tətbiqinizin ilkin şablonu hazırdır! Brauzerinizdə işlək vəziyyətdə olan sadə bir React tətbiqi görəcəksiniz.

//* Qeyd:
//? React tətbiqi qurarkən "create-react-app" sizə lazım olan hər şeyi (fayllar, qovluqlar, alətlər və s.) avtomatik təmin edir.
//? Dərslərimizin davamında React tətbiqinin strukturunu və onun necə işlədiyini daha dərindən öyrənəcəyik.

//* React-i Öyrənməyə Başlamazdan Əvvəl Nələri Bilməlisiniz?
//? React-i öyrənməyə başlamazdan əvvəl aşağıdakı mövzularda ara bilikləriniz olmalıdır:
//? - HTML: Veb səhifələrin strukturunu yaratmaq üçün.
//? - CSS: Veb səhifələrin dizaynını tərtib etmək üçün.
//? - JavaScript: Dinamik funksionallıq əlavə etmək üçün.
//? - ECMAScript 6 (ES6): React-in əsaslandığı yeni JavaScript xüsusiyyətlərini başa düşmək üçün.

//* React üçün Hazırlıq:
//? React ilə daha effektiv işləmək üçün ES6-dakı bəzi əsas xüsusiyyətləri öyrənməlisiniz:
//? - Arrow Functions (Ox funksiyaları)
//? - Destructuring Assignment (Strukturlaşdırma)
//? - Modules (Modullar)
//? - Spread və Rest operatorları (`...`)

//* Nəticə:
//? Bu dərs, React mühitini qurmaq və ilk tətbiqinizi yaratmaq üçün lazım olan əsas addımları izah edir.
//? İrəlidə daha mürəkkəb mövzulara keçərək React-i dərinliklə öyrənəcəyik.


//* React ilə Tanışlıq - Nədir və Necə İşləyir?
//* React nədir?
//? React, bəzən frontend JavaScript framework-u kimi tanınsa da, əslində Facebook tərəfindən yaradılmış bir JavaScript kitabxanasıdır.
//? React, istifadəçi interfeysi (UI) komponentlərini yaratmaq üçün bir alətdir.
//? Bu alət bizə tətbiqimizdə təkrar istifadə edilə bilən komponentlər qurmağa imkan verir.

//* React necə işləyir?
//? React brauzerin DOM-un (Document Object Model) birbaşa idarə olunmasından fərqli olaraq "Virtual DOM" adlı bir texnologiyadan istifadə edir.
//? Virtual DOM - Brauzerin əsas DOM-un surətidir, lakin yaddaşda saxlanılır və React manipulyasiyalarını burada edir.
//? Nəticədə, yalnız dəyişən hissələr brauzer DOM-una ötürülür, bu da tətbiqimizin daha sürətli və effektiv işləməsini təmin edir.

//* React yalnız lazım olan dəyişiklikləri edir!
//? React əvvəlcə hansı dəyişikliklərin olduğunu tapır və sonra yalnız bu dəyişiklikləri həyata keçirir.
//? Bu, React-in performansını artırır və digər hissələrə toxunmadan yalnız lazım olanı dəyişdirir.

//* React-in bu prosesi necə yerinə yetirdiyini dərslərin davamında öyrənəcəyik.

//* React-in Tarixi
//? - React.JS ilk dəfə 2011-ci ildə Facebook-un "Xəbərlər Lentində" istifadə edilmişdir.
//? - Jordan Walke adlı bir Facebook mühəndisi tərəfindən yaradılmışdır.
//? - İctimaiyyətə ilk buraxılışı (V0.3.0) 2013-cü ilin iyul ayında olub.
//? - Hazırkı versiya React.JS V18.0.0 (Aprel 2022) tarixində buraxılıb.
//? - React-in rəsmi aləti olan "create-react-app"-ın hazırkı versiyası V5.0.1-dir (Aprel 2022).

//* "create-react-app" nədir?
//? - "create-react-app" React tətbiqləri yaratmaq üçün lazım olan bütün alətləri özündə birləşdirən bir vasitədir.
//? - İçərisində Webpack, Babel və ESLint kimi inkişaf etdirici vasitələr daxildir.
//? - Bu vasitə ilə tətbiq yaratmaq həm asan, həm də daha strukturlu olur.

//* React-in Üstünlükləri:
//? - Yüksək Performans: React Virtual DOM-dan istifadə edərək tətbiqin sürətini artırır.
//? - Təkrar İstifadə Edilə Bilən Komponentlər: Bir dəfə yaratdığınız komponentləri tətbiqin müxtəlif yerlərində təkrar istifadə edə bilərsiniz.
//? - Ətraflı Ekosistem: React-in ətrafında geniş ekosistem mövcuddur - Redux, Next.js və daha çox.

//* React ilə Tətbiq Qurarkən Nələri Bilməliyik?
//? - HTML, CSS və JavaScript haqqında əsas biliklərə sahib olmaq.
//? - ES6 xüsusiyyətlərini (Arrow Functions, Classes, Modules və s.) başa düşmək.
//? - JSX haqqında məlumat əldə etmək (React-də HTML və JavaScript birləşməsi).

//* React-i öyrənmək nə üçün vacibdir?
//? React, bu gün ən geniş istifadə olunan frontend kitabxanalarından biridir.
//? Facebook, Instagram, Airbnb, Netflix və s. kimi məşhur şirkətlər React-dən istifadə edir.
//? Bu səbəbdən React öyrənmək proqramlaşdırma karyeranızı irəli aparmaq üçün çox vacibdir.

//* Nəticə:
//? React istifadəsi asan, güclü və geniş imkanlara malik bir alətdir.
//? Tətbiq yaradarkən performans və struktur baxımından üstünlüklər təqdim edir.
//? React-in əsaslarını başa düşmək üçün bu dərslik sizə rəhbərlik edəcək!
