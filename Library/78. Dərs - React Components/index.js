//* React komponentləri (React Components)
//? Komponentlər, HTML elementləri qaytaran funksiyalara bənzərdir.
//? React komponentləri, tətbiqinizin müxtəlif hissələrini təşkil edən və müstəqil olaraq işləyən kod parçalarıdır. Hər bir komponent öz içində müstəqil çalışır və HTML qaytarır.
//? Komponentlər iki cür ola bilər: **Class komponentləri** və **Function komponentləri**.
//? Bu dərsdə **Function komponentlərinə** diqqət yetirəcəyik, çünki bu tip komponentlər daha qısa, daha asan anlaşılan və istifadə üçün daha müasir bir üsuldur. Class komponentləri isə əvvəlki React versiyalarında daha çox istifadə olunurdu, amma indi React 16.8-dən sonra **Hooks** ilə Function komponentləri daha çox istifadə olunur.

//* Komponent yaratmaq
//? React komponentinin adı həmişə **böyük hərflə** başlamalıdır. Bu React-in komponentləri düzgün tanıması üçün vacibdir.
//? React-də bir komponent yaratmaq üçün **JSX** sintaksisini istifadə edirik. JSX ilə biz HTML elementlərini JavaScript-in içində yazırıq.
//? Komponentin adını **böyük** hərflə yazmaq bir qaydadır, çünki React-də kiçik hərflərlə yazılan komponentlər HTML etiketləri kimi qəbul edilir.

//* Class komponenti (Class Component)
//? **Class komponentləri** React-də köhnə metodla yazılmış komponentlərdir. Bu tip komponentlər JavaScript-in **class** anlayışına əsaslanır və React.Component-dən miras alır.
//? **extends React.Component** ifadəsi React-dən miras almanı təmin edir və komponentə React-in əsas funksiyalarına (məsələn, render()) giriş imkanı verir.
//? Class komponentləri həmçinin **render()** metoduna malikdir. Bu metod komponentin qaytardığı HTML kodunu müəyyən edir.

//* Məsələn, "Car" adlı bir Class komponenti yaradaq:

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>; // Bu, "Car" komponentinin HTML-də göstərdiyi mətndir
  }
}

//? Bu Class komponenti "Car" adlı bir başlıq ("h2") qaytarır, burada "Hi, I am a Car!" yazılıb.
//? class komponentləri biraz daha mürəkkəb və daha çox kod tələb edən komponentlərdir, lakin onlar daha çox imkanlar təqdim edirlər.
//? Bu tip komponentləri artıq daha az istifadə edirik, amma bəzən layihələrdə hələ də görə bilərsiniz.

//* Function komponenti (Function Component)
//? **Function komponentləri**, Class komponentlərindən daha sadə və daha qısa olan komponentlərdir. Onlar həmçinin daha asan anlaşılan və yazılması daha rahatdır.
//? Function komponentləri **render()** metoduna ehtiyac duymur, çünki HTML-i birbaşa return vasitəsilə qaytarır.
//? React 16.8-dən sonra Function komponentlərinə yeni funksionallıqlar (məsələn, Hooks) əlavə olunub, buna görə bu komponentlər daha çox istifadə olunur.

//* Məsələn, "Car" adlı bir Function komponentini yaradaq:

function Car() {
  return <h2>Hi, I am a Car!</h2>; // Burada, "Car" komponenti HTML-də "Hi, I am a Car!" yazdıracaq
}

//? Bu, Class komponenti ilə eyni işləri görən bir Function komponentidir. Lakin bu komponent daha qısa və anlaşıqlıdır.
//? Function komponenti birbaşa HTML qaytarır və asanlıqla başa düşülür. Function komponentlərini bu dərsdə daha çox istifadə edəcəyik, çünki onlar daha müasir və sadədir.
//? Əgər əvvəlki versiyalarda JavaScript-in **class** anlayışını istifadə etməyi öyrənsək, bu gün daha çox **function** istifadə edəcəyik.

//* Function vs. Class komponentləri (Function vs. Class Components)
//? Hər iki komponentin də öz üstünlükləri və istifadə sahələri var. Lakin, bu günlərdə **Function komponentləri** daha çox tövsiyə olunur.
//? Function komponentləri **daha sadə** və **daha az kod** tələb edir. Ayrıca, React 16.8-dən sonra gələn **Hooks** xüsusiyyəti ilə Function komponentləri daha güclü olub.
//? **Class komponentləri** daha köhnə üsullarla yazılır və bəzən daha çox kod tələb edir. Lakin bəzi hallarda bu komponentlər daha mürəkkəb vəziyyətlərdə daha faydalı ola bilər.

//* Nəticə (Conclusion)
//? React-də komponentlər müstəqil işləyən və təkrarlana bilən kod parçalarıdır. Komponentlər həm **Function**, həm də **Class** kimi ola bilər.
//? Bu dərsdə **Function komponentlərinə** diqqət yetirdik, çünki onlar daha qısa və müasir bir yanaşmadır.
//? Komponentin adı hər zaman **böyük** hərflə başlamalıdır.
//? React-də komponentlərin istifadəsi sadə və güclü tətbiqlər yaratmağa imkan verir, çünki biz hər bir hissəni müstəqil şəkildə idarə edə və təkrarlaya bilirik.
//? Bu məlumatları başa düşmək tələbələrinizin React-də komponentləri daha effektiv istifadə etməsinə kömək edəcəkdir.

//* React komponentini göstərmək (Rendering a Component)
//? İndi tətbiqinizdə "Car" adlı bir komponent var. Bu komponent HTML-də bir `<h2>` elementi qaytarır.
//? Bu komponenti tətbiqinizdə istifadə etmək üçün sadə HTML sintaksisindən istifadə edirik. Məsələn, `<Car />` şəklində.
//? Komponentləri HTML-dəki etiketlər kimi göstərmək çox asandır.

//* Məsələn, "Car" komponentini "root" elementində göstərək:

const root = ReactDOM.createRoot(document.getElementById("root")); // Bu, 'root' elementini tapır
root.render(<Car />); // Car komponentini göstəririk

//? Burada, "Car" komponenti React-də düzgün göstəriləcək. Bu, sadəcə olaraq komponentin HTML-də göstərilməsi deməkdir.

//* Props (Xüsusiyyətlər)
//? Komponentlərə **props** (xüsusiyyətlər) göndərilə bilər. **Props** komponentlərə verilən verilənlərdir, bu da funksiyalara göndərilən arqumentlərə bənzəyir.
//? Props vasitəsilə, komponentə atribut kimi verilənlər ötürülür.
//? Bu dərsdə props-u daha dərindən öyrənəcəyik, amma əsas anlayışı başa düşmək üçün hələlik bu cür izah edək: Props ilə komponentlərə əlavə məlumat göndərə bilərik.

//* Məsələn, "Car" komponentinə **color** adlı bir prop göndərək və bunu render() funksiyasında istifadə edək:

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>; // Burada "props.color" ilə rəng məlumatını əldə edirik
}

const root3 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />); // Car komponentinə "red" rəngi göndəririk

//? Burada, "Car" komponentinə rəng olaraq "red" dəyəri göndəririk və nəticədə ekranda "I am a red Car!" göstərilir.
//? **Props** vasitəsilə biz bir komponenti daha çevik və təkrar istifadə edilə bilən edirik, çünki onu fərqli verilənlərlə yenidən istifadə edə bilərik.

//* Komponentlər iç-içə (Components in Components)
//? Biz komponentləri digər komponentlərin içində istifadə edə bilərik. Yəni, bir komponenti digər bir komponentdə daxil edə bilərik.
//? Bu, tərtibatımızı daha çevik və modul edərək kodu təkrar istifadə etməyə imkan verir.
//? Misal olaraq, **Garage** komponentində **Car** komponentini istifadə edək:

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car /> {/* Burada Car komponentini istifadə edirik */}
    </>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // Garage komponentini göstəririk

//? Burada, **Garage** komponenti içində **Car** komponentini çağırırıq. Bu şəkildə komponentləri iç-içə istifadə edərək daha geniş və strukturlu tətbiqlər yarada bilərik.
//? Bu, React-in əsas xüsusiyyətlərindən biridir - **komponentləri** təkrar istifadə etmək və strukturlu şəkildə tərtib etmək.

//* Komponentləri fərqli fayllarda saxlamaq (Components in Files)
//? React-də kodu təkrarlamamaq və daha yaxşı strukturlaşdırmaq üçün komponentləri müxtəlif fayllarda saxlamağı tövsiyə edirik.
//? Hər bir komponent üçün ayrıca `.js` uzantısına sahib bir fayl yarada bilərik. Bu şəkildə hər bir komponenti ayrı-ayrılıqda idarə etmək çox asanlaşır.
//? Həmçinin, fayl adları da **böyük** hərflə başlamalıdır, çünki React komponentləri böyük hərflərlə tanınır.

//* Məsələn, "Car.js" adlı yeni bir fayl yaradaq və burada "Car" komponentini yerləşdirək:

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car; // Bu komponenti digər fayllarda istifadə etmək üçün eksport edirik

//? Bu, **Car** komponentinin ayrı bir faylda yazılmasını göstərir. İndi biz bu komponenti başqa bir faylda istifadə edə bilərik.

//* Komponenti idxal etmək (Importing Components)
//? Artıq "Car" komponentini başqa faylda istifadə etmək üçün onu **import** etməliyik. React-də bir komponenti başqa bir faylda istifadə etmək üçün, **import** əmri istifadə olunur.
//? Faylın adını yazıb, o fayldan lazım olan komponenti daxil edirik.

//* Məsələn, **Car.js** faylını tətbiqdə istifadə edək:

import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Car.js"; // Car komponentini idxal edirik

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />); // Artıq burada "Car" komponentini istifadə edirik

//? Burada, biz **Car** komponentini `import` edirik və sonra tətbiqdə istifadə edirik.
//? **import** və **export** ifadələri React-in əsas hissələrindəndir və kodu modullar şəklində daha yaxşı təşkil etməyə imkan verir.

//* Nəticə (Conclusion)
//? **Komponentlər** React tətbiqlərinin əsasını təşkil edir və onlar kodu daha sadə və təkrar istifadə edilə bilən edir.
//? **Props** ilə komponentlərə əlavə məlumat göndərə bilərik, bu da onları daha çevik və dinamik edir.
//? Komponentləri bir-birinin içində istifadə edərək (nested components), kodun strukturlarını daha da yaxşılaşdıra bilərik.
//? Komponentləri fərqli fayllarda saxlamaq (modularization), tətbiqimizin daha oxunaqlı və idarəedilməsi asan olur.
//? Ümumiyyətlə, React-də **komponentləri** yaxşı idarə etmək və təşkil etmək, tətbiqlərin effektivliyini artırır və gələcəkdə daha rahat inkişaf etməyə kömək edir.
