//* React Class Komponentləri (React Class Components)
//? React 16.8-dən əvvəl, **Class komponentləri** React komponentlərində vəziyyəti (state) və həyat dövrünü (lifecycle) izləmək üçün yeganə yol idi.
//? Funksiya komponentləri ("state-less" idi, yəni vəziyyəti izləmirdilər).
//? Amma, **Hooks** xüsusiyyəti əlavə olunduqdan sonra, **Funksiya komponentləri** indi Class komponentlərinə çox bənzəyir və demək olar ki, eyni şəkildə işləyir.
//? Funksiya komponentləri daha sadə olduğu üçün artıq daha çox istifadə olunur, lakin Class komponentləri React-də hələ də mövcuddur.
//? Bu dərs, Class komponentlərini necə istifadə edəcəyinizi göstərir. Amma **Class komponentlərini** istifadə etmək yerinə, **Funksiya komponentlərini** istifadə etməyiniz tövsiyə olunur.

//* React Komponentləri (React Components)
//? **Komponentlər**, müstəqil və təkrar istifadə edilə bilən kod parçalarıdır.
//? Onlar JavaScript funksiyalarına bənzəyir, amma öz başlarına işləyirlər və **render()** funksiyası vasitəsilə HTML qaytarırlar.
//? Komponentlər iki növə bölünür: **Class komponentləri** və **Funksiya komponentləri**.
//? Bu dərsdə biz **Class komponentləri** haqqında danışacağıq, amma sonrakı dərslərdə **Funksiya komponentlərini** daha çox istifadə edəcəyik.

//* Class Komponenti Yaratmaq (Create a Class Component)
//? React komponentləri yaratdığınız zaman, komponentin adı **böyük hərflə** başlamalıdır. Bu React-in tələblərindən biridir.
//? **Class komponenti** yaratmaq üçün, **extends React.Component** bəyanatını daxil etməlisiniz. Bu, komponentin **React.Component**-dən irs almasını təmin edir və ona **React.Component**-in funksiyalarına daxil olmağa imkan verir.
//? **Class komponenti** həmçinin bir **render()** metoduna ehtiyac duyur. Bu metod, HTML qaytarır.

//* Məsələn, "Car" adlı bir **Class komponenti** yaradaq:

class Car extends React.Component {
  // Car komponenti React.Component-dən irs alır
  render() {
    return <h2>Hi, I am a Car!</h2>; // Bu komponent bir h2 elementi qaytarır
  }
}

//? Burada, biz **Car** adlı bir Class komponenti yaratdıq. Bu komponent **render()** metodu vasitəsilə HTML qaytarır.
//? **Car** komponenti ekranda bir başlıq olan `<h2>Hi, I am a Car!</h2>` göstərəcək.

//* Class Komponentini Göstərmək (Displaying the Class Component)
//? İndi React tətbiqinizdə **Car** adlı bir komponent var. Bu komponenti göstərmək üçün, sadə HTML kimi aşağıdakı sintaksisi istifadə edirik:
//? `<Car />` yazaraq bu komponenti tətbiqimizdə istifadə edirik.
//? **render()** metodu nəticəsində, HTML qaytarılır və **Car** komponenti tətbiqdə göstərilir.

//* Məsələn, **Car** komponentini "root" elementində göstərək:

const root = ReactDOM.createRoot(document.getElementById("root")); // 'root' elementini tapırıq
root.render(<Car />); // Car komponentini bu elementdə göstəririk

//? Burada, `ReactDOM.createRoot()` istifadə edərək "root" adlı bir DOM elementini tapırıq və sonra `root.render()` ilə **Car** komponentini göstəririk.
//? Bu, React-in DOM-u necə idarə etdiyini göstərir. Komponentlərin necə yaradılacağı və tətbiqdə necə göstəriləcəyi ilə tanış oluruq.

//* Nəticə (Conclusion)
//? **Class komponentləri**, əvvəlki React versiyalarında daha çox istifadə edilirdi, amma **Hooks** ilə Funksiya komponentləri daha çox yayılmağa başladı.
//? **Class komponentləri** hələ də mövcud olsa da, **Funksiya komponentləri** daha sadə və effektiv olduğu üçün daha çox tövsiyə olunur.
//? Ancaq bu, React-in gələcəkdə **Class komponentlərini** tamamilə siləcəyi demək deyil. Hələlik **Class komponentləri** ilə işləmək mümkündür və onlar React-in vacib hissəsidir.
//? Komponentləri yaratmaq və istifadə etmək üçün **Class** və **Funksiya komponentlərini** başa düşmək çox vacibdir.
//? Bu dərsdə biz **Class komponentləri** ilə tanış olduq, amma gələcəkdə **Funksiya komponentləri** və **Hooks**-u daha çox öyrənəcəyik.

//* Komponentin Constructor-u (Component Constructor)
//? React komponentində bir **constructor()** funksiyası varsa, bu funksiya komponentin işə salınması (initiation) zamanı çağırılacaq.
//? **Constructor()** funksiyası komponentin başlanğıc parametrlərini təyin etdiyimiz yerdir.
//? Bu funksiya komponentin ilkin vəziyyətini (state) təyin etmək üçün istifadə olunur.
//? **React**-da komponent parametrləri **state** adlı bir obyektin içində saxlanılır.
//? Bu, komponentin vəziyyətini saxlamağa və idarə etməyə kömək edir.
//? Bu dərsdə **state** haqqında daha çox məlumat əldə edəcəksiniz.
//? **Constructor()** funksiyası həmçinin, komponentin valideyn komponentinin (yəni `React.Component`-in) irsini qəbul edərkən **super()** bəyanatını da ehtiva etməlidir.
//? **super()** funksiyası valideyn komponentinin constructor funksiyasını çağırır, bu da sizin komponentinizə **React.Component**-in bütün funksiyalarına daxil olmağa imkan verir.

//* Məsələn, **Car** komponentində bir **constructor()** funksiyası yaradaq və orada bir **color** (rəng) xüsusiyyəti əlavə edək:

class Car extends React.Component {
  // Car komponenti yaradılır
  constructor() {
    // Constructor funksiyası
    super(); // Valideynin constructor funksiyasını çağırırıq
    this.state = { color: "red" }; // state obyektini yaradıb, color xüsusiyyətini "red" olaraq təyin edirik
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>; // Burada state-dəki color xüsusiyyətini göstəririk
  }
}

//? Burada **Car** komponentinin içində bir **constructor()** funksiyası yaratdıq.
//? **constructor()** funksiyası, komponent yaradıldıqda ilk dəfə işə düşür və komponentin vəziyyətini təyin edir.
//? Biz **this.state** obyektini təyin edirik və ona bir **color** xüsusiyyəti əlavə edirik.
//? Bu xüsusiyyətin dəyəri "red"-dir. Yəni, bu komponenti ekrana çıxartdığınızda "I am a red Car!" mesajını görəcəksiniz.

//* Componentin Vəziyyətini (State) Göstərmək (Displaying Component's State)
//? İndi **Car** komponentinin içində olan **state** obyektindəki **color** xüsusiyyətini göstəririk.
//? **render()** funksiyasında, **this.state.color** ilə state-in içindəki rəngi əldə edirik.
//? Bu şəkildə, **color** xüsusiyyətini istifadə edərək, komponenti dinamik hala gətiririk.
//? **state** obyektindəki dəyəri dəyişdirmək, istifadəçi qarşılıqlı əlaqəsi və digər hadisələr əsasında komponenti yenidən render etmək mümkündür.

//* **super()** funksiyasının rolu
//? **super()** funksiyasını çağırmaq, sizin komponentinizin React-in bütün funksiyalarını istifadə etməsinə imkan verir.
//? Valideyn komponentinin (yəni **React.Component**) constructor funksiyasını çağırmaq, bütün miras alınan metodları sizin komponentinizə ötürür.
//? Bu, React-in komponentlərində miras almaq və əlavə funksiyalar əldə etmək üçün vacibdir.

//* Nəticə (Conclusion)
//? **Constructor()** funksiyası, komponentin ilkin vəziyyətini və parametrlərini təyin etməyə imkan verir.
//? **super()** funksiyası ilə valideyn komponentinin metodlarına daxil oluruq.
//? **state** obyektinin içində vəziyyəti saxlayırıq və onu komponentin render edilməsi zamanı istifadə edirik.
//? **state** obyektini dəyişdirmək, komponenti yenidən render etmək və istifadəçi qarşılıqlı əlaqəsinə uyğun olaraq vəziyyəti idarə etmək React-in əsas prinsiplərindəndir.
//? Gələcək dərslərdə daha çox **state** və **Hooks**-lar haqqında məlumat alacaqsınız.
//? İndi siz komponentlərin necə yaradıldığını və vəziyyətin necə idarə olunduğunu başa düşdünüz.

//* Props ilə işləmək (Working with Props)
//? Komponentlərin xüsusiyyətlərini (properties) idarə etməyin başqa bir yolu **props** istifadə etməkdir.
//? **Props**, funksiyaların parametrlərinə bənzəyir. Onları komponentə atribut kimi göndərirsiniz.
//? **Props**-lar komponentlərə əlavə məlumatlar ötürməyə və komponenti dinamik hala gətirməyə kömək edir.
//? **Props**-lar haqqında daha çox məlumatı gələcək dərslərdə öyrənəcəksiniz.

//* Məsələn, **Car** komponentinə bir **color** (rəng) atributu göndərərək onu **render()** funksiyasında istifadə edək:

class Car extends React.Component {
  // Car komponentini yaradırıq
  render() {
    return <h2>I am a {this.props.color} Car!</h2>; // Props ilə rəngi göstəririk
  }
}

//? Burada **this.props.color** ilə komponentə göndərilən rəng dəyərini əldə edirik.
//? Bu, komponenti daha dinamik və dəyişkən etməyə imkan verir.
//? **props.color** ilə komponentin xarakteristikasını (məsələn, rəngini) dəyişdirə bilərik.

const root4 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />); // Burada **Car** komponentinə rəng atributu göndəririk, bu da "I am a red Car!" mesajını göstərir.

//* **Props** constructor-da (Props in the Constructor)
//? Əgər komponentinizin **constructor()** funksiyası varsa, **props**-u constructor-a ötürməlisiniz.
//? Bu zaman **props**-u **super(props)** vasitəsilə **React.Component**-ə göndərirsiniz.
//? Bu, komponentin düzgün işləməsi və valideyn komponentindən bütün xüsusiyyətləri qəbul etməsi üçün vacibdir.

class Car extends React.Component {
  constructor(props) {
    // props-u constructor-a göndəririk
    super(props); // Valideynin constructor funksiyasını çağırırıq
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>; // Burada props.model ilə modelini göstəririk
  }
}

const root3 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car model="Mustang" />); // Burada **Car** komponentinə **model** props-u göndəririk, bu da "I am a Mustang!" mesajını göstərir.

//* Komponentlər İçində Komponentlər (Components inside Components)
//? Komponentlər, digər komponentlər içində istifadə oluna bilər. Bu, React-də daha mürəkkəb və dinamik tətbiqlər yaratmağa imkan verir.
//? Bu yolla bir neçə komponenti birləşdirərək, daha böyük və funksional tətbiqlər yarada bilərsiniz.

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>; // Burada sadəcə "I am a Car!" mesajı göstəririk
  }
}

class Garage extends React.Component {
  // Garage komponenti
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car /> {/* Burada Car komponentini istifadə edirik */}
      </div>
    );
  }
}

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // Burada **Garage** komponentini göstəririk, bu da içindəki **Car** komponentini göstərir.

/* Komponentləri Fərqli Fayllarda Saxlamaq (Components in Separate Files)
  ? React tətbiqində kodunuzu təkrar istifadə etmək üçün komponentləri ayrıca fayllara ayırmaq tövsiyə edilir.
  ? Bu, tətbiqinizin daha təmiz və idarə edilə bilən olmasına kömək edir. 
  ? Faylların daha yaxşı təşkili, böyük layihələrdə xüsusilə vacibdir.
  
  ? Komponentləri fərqli fayllarda yaratmaq üçün aşağıdakıları etməlisiniz:
  1. Yeni bir fayl yaradın və onun uzantısı `.js` olsun.
  2. Komponent kodunu bu faylda yerləşdirin.
  3. Faylın sonunda **export default** bəyanatını istifadə edərək komponenti ixrac edin.
  
  */

// **Car.js** faylı:
import React from "react"; // React-i daxil edirik

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>; // Car komponentinin render funksiyası
  }
}

export default Car; // Car komponentini ixrac edirik

//**Komponenti İxrac Etmək və İdxal Etmək (Exporting and Importing Components)**
//? Komponentin başqa faylında istifadə olunması üçün əvvəlcə onu ixrac etməliyik.
//? Bu zaman **import** bəyanatını istifadə edərək **Car** komponentini layihəmizə daxil edirik.

import React from "react"; // React-i daxil edirik
import ReactDOM from "react-dom/client"; // ReactDOM-u daxil edirik
import Car from "./Car.js"; // **Car** komponentini **Car.js** faylından idxal edirik

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />); // Burada artıq **Car** komponentini istifadə edirik

//* React Class Komponentlərində State (React Class Component State)
//? React class komponentləri, daxilində **state** adlı bir obyektə malikdir.
//? **State** komponentin daxili vəziyyətini (yəni, komponentin məlumatlarını) idarə edir. Bu vəziyyət zamanla dəyişə bilər və hər dəfə dəyişdikdə komponent yenidən render olunur.

//* State Obyektini Yaratmaq (Creating the State Object)
//? **State** obyekti komponentin **constructor** metodunda yaradılır. **Constructor**, komponentin başlatma və ilkin dəyərlərin təyin olunması üçün istifadə olunur.
//? **State** obyektini yaratmaq üçün **this.state** sintaksisindən istifadə edirik.

//* Misal: **State** obyektini constructor metodunda müəyyən etmək
class Car extends React.Component {
  constructor(props) {
    super(props); // React.Component-in konstruktorunu çağırırıq
    this.state = { brand: "Ford" }; // Burada **brand** dəyəri "Ford" olaraq təyin olunur
  }
  render() {
    return (
      <div>
        <h1>My Car</h1> {/* "My Car" başlığını göstəririk */}
      </div>
    );
  }
}

//? **State** obyekti bir neçə xüsusiyyət (property) də saxlaya bilər.
//? Məsələn, avtomobilin markası, modeli, rəngi və ili kimi xüsusiyyətləri **state** obyektində saxlayırıq.

//* Misal: **State** obyektinə bir neçə xüsusiyyət əlavə etmək
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford", // Markası
      model: "Mustang", // Modeli
      color: "red", // Rəngi
      year: 1964, // İli
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1> {/* "My Car" başlığını göstəririk */}
      </div>
    );
  }
}

//* **State** Obyektindən İstifadə Etmək (Using the State Object)
//? **State** obyektini komponentin içində istənilən yerdə **this.state.propertyName** sintaksisi ilə istinad edərək istifadə edirik.
//? Bu, bizim komponentin içində saxladığımız məlumatları ekranda göstərməyə imkan verir.

//* Misal: **State** obyektini **render()** metodunda istifadə etmək
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1> {/* Avtomobilin markasını göstəririk */}
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.{" "}
          {/* Avtomobilin rəngini, modelini və ilini göstəririk */}
        </p>
      </div>
    );
  }
}

//* **State** Obyektini Dəyişdirmək (Changing the State Object)
//? **State** obyektinin dəyərini dəyişdirmək üçün **this.setState()** metodundan istifadə edirik.
//? **setState()**, **state** obyektini dəyişdirir və komponentin yenidən render olunmasına səbəb olur.
//? Bu, istifadəçi ilə qarşılıqlı əlaqə qurduqda məlumatları yeniləmək üçün çox faydalıdır.

//* Misal: Rəngi dəyişən bir düymə əlavə etmək
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  // Bu metod, rəngi "blue" olaraq dəyişir
  changeColor = () => {
    this.setState({ color: "blue" }); // Burada rəngi "blue" olaraq dəyişirik
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1> {/* Markanı göstəririk */}
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}. {/* Rəngini, modelini və ilini göstəririk */}
        </p>
        {/* Bu düymə, rəngi dəyişmək üçün istifadə olunur */}
        <button
          type="button"
          onClick={this.changeColor} // Bu düyməyə klik edildikdə rəng dəyişəcək
        >
          Change color
        </button>
      </div>
    );
  }
}

//? **this.setState()** metodu, avtomobilin rəngini dəyişəndə komponentin yenidən render olunmasına səbəb olur.
//? Nəticədə ekran üzərindəki məlumatlar yenilənir və rəng dəyişir.



//* React Class Komponentlərinin Lifecycle (Life Cycle) 
//? Hər React komponentinin öz "lifecycle" (yaş dövrü) var. Komponentin həyat dövrünü izləmək və idarə etmək mümkündür.
//? Bu dövr 3 əsas fazadan ibarətdir: **Mounting**, **Updating** və **Unmounting**.
//? Bu dövrə əsasən, komponent DOM-a daxil edilir, yenilənir və sonda DOM-dan çıxarılır. 

//* Mounting Fazası (Mounting Phase)
//? **Mounting**, komponentin DOM-a yerləşdirilməsi deməkdir.
//? **Mounting** fazasında React aşağıdakı 4 metoddan istifadə edir:
//? 1. **constructor()** - Komponent yaradılmadan əvvəl çağırılır. Başlangıç dəyərləri və **state** burada təyin edilir.
//? 2. **getDerivedStateFromProps()** - Komponent render edilmədən əvvəl çağırılır, burada **props**-dan istifadə edərək **state** dəyişdirilə bilər.
//? 3. **render()** - Komponentin HTML-i (və ya JSX) burada gerçəkdən DOM-a çıxarılır.
//? 4. **componentDidMount()** - Komponentin DOM-a tam daxil olmasından sonra çağırılır. Bu metodda API çağırışları və ya başqa əlavə işlər edilə bilər.

//* 1. constructor() metodu
//? **constructor()** metodu komponentin yaranmasından əvvəl çağırılır və burada ilkin **state** və digər başlanğıc dəyərləri təyin edirik.
//? **super(props)** metodunu çağırmaq vacibdir, çünki bu, valideyn komponentinin konstruktorunu çağırır və bu metod vasitəsilə **React.Component**-dən miras alınan metodları istifadə edə bilirik.

//* Misal: **constructor()** metodunun istifadəsi
class Header extends React.Component {
    constructor(props) {
      super(props); // Valideynin constructor metodunu çağırırıq
      this.state = {favoritecolor: "red"}; // Burada başlangıçda rəng "red" olaraq təyin edirik
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1> /* **state** içində saxladığımız rəngi ekrana çıxarırıq */
      );
    }
  }
  
  const root8 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // "Header" komponentini DOM-a render edirik
  
  //* 2. getDerivedStateFromProps() metodu
  //? **getDerivedStateFromProps()** metodu, render edilmədən əvvəl çağırılır. Bu metodda **props**-dan istifadə edərək **state**-i yeniləyirik.
  //? Bu metodun əsas məqsədi, **props** dəyişdikdə, **state**-in də uyğun şəkildə dəyişməsini təmin etməkdir.
  //? Bu metod **static** olduğu üçün, burada `this` istifadə edilə bilməz. Yalnız **props** və **state**-i arqument olaraq alır.
  
  //* Misal: **getDerivedStateFromProps()** metodunun istifadəsi
  class Header extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red" təyin olunub
    }
    
    // **getDerivedStateFromProps()** metodu, props dəyişdikdə **state**-i yeniləyir
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol }; // **favcol** prop-u ilə **state**-i yeniləyirik
    }
  
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1> /* Yenilənmiş rəngi göstəririk */
      );
    }
  }
  
  const root7 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header favcol="yellow"/>); // **favcol** prop-u vasitəsilə "yellow" rəngini ekrana çıxarırıq
  
  //* 3. render() metodu
  //? **render()** metodu React komponentində mütləq şəkildə olmalı və DOM-a HTML-i çıxaracaq. 
  //? Bu metodda JSX yazılır və HTML elementləri geri qaytarılır. Render metodu hər dəfə komponentin **state**-i dəyişdikdə və ya **props** dəyişdikdə çağırılır.
  
  //* Misal: Sadə bir komponentin **render()** metodunun istifadəsi
  class Header extends React.Component {
    render() {
      return (
        <h1>This is the content of the Header component</h1> /* Header komponenti */
      );
    }
  }
  
  const root6 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // Bu, sadəcə "Header" komponentini render edir
  
  //* 4. componentDidMount() metodu
  //? **componentDidMount()** metodu, komponent DOM-a tam daxil olduqdan sonra çağırılır.
  //? Bu metod əsasən API çağırışları etmək, data yükləmək və ya bir dəfəlik başqa əməliyyatlar üçün istifadə olunur.
  
  //* Misal: **componentDidMount()** metodunun istifadəsi
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
  
    componentDidMount() {
      // Bu metod komponentin DOM-a əlavə olunduqdan sonra bir dəfə işləyir.
      console.log("Component has mounted!");
    }
  
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  const root5 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);
  

  //* componentDidMount() metodu
//? **componentDidMount()** metodu komponent render edildikdən sonra çağırılır.
//? Bu metodda, komponent DOM-a tam olaraq yerləşdikdən sonra yerinə yetirilməsi lazım olan əməliyyatları icra edirik.
//? Məsələn, burada biz "setTimeout" funksiyasından istifadə edərək, müəyyən bir müddət sonra rəngi dəyişdiririk.

//* Misal: componentDidMount() metodunun istifadəsi
class Header extends React.Component {
    constructor(props) {
      super(props); // Valideynin constructor metodunu çağırırıq
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
  
    // componentDidMount() metodunda rəngi dəyişirik
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"}); // Bir saniyədən sonra rəngi "yellow" edirik
      }, 1000); // 1 saniyə gecikmə ilə rəng dəyişir
    }
  
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1> /* Hal-hazırda rəngi göstəririk */
      );
    }
  }
  
  const root12 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // "Header" komponentini render edirik
  
  //* Updating Fazası (Updating Phase)
  //? **Updating** fazası, komponentin **state** və ya **props**-unda dəyişiklik olduğu zaman baş verir. Komponent yenidən render edilir.
  //? React, komponentin **state**-ində və ya **props**-unda dəyişiklik olduqda, komponenti yenidən render etmək üçün bir neçə metod istifadə edir.
  //? Aşağıdakı metodlar **Updating** fazasında çağırılır:
  //? 1. **getDerivedStateFromProps()**
  //? 2. **shouldComponentUpdate()**
  //? 3. **render()** (Bu metod hər zaman çağırılır)
  //? 4. **getSnapshotBeforeUpdate()**
  //? 5. **componentDidUpdate()**
  
   //* 1. getDerivedStateFromProps() metodu
  //? **getDerivedStateFromProps()** metodu **Updating** fazasında ilk çağırılan metoddur. Bu metod, komponentin **props**-larını əsas alaraq **state**-i yeniləməyə imkan verir.
  //? Komponentin props-u dəyişdikdə, bu metod yenilənən **state**-i qaytarmaq üçün istifadə olunur.
  
  //* Misal: getDerivedStateFromProps() metodu ilə rəngin dəyişməsi
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
  
    // **getDerivedStateFromProps()** metodu, komponentin props-u dəyişdikdə **state**-i yeniləyir
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol }; // **favcol** prop-dan istifadə edərək **state**-i yeniləyirik
    }
  
    changeColor = () => {
      this.setState({favoritecolor: "blue"}); // Burada rəngi "blue" edirik
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1> {/* Yenilənmiş rəngi göstəririk */}
          <button type="button" onClick={this.changeColor}>Change color</button> {/* Burada istifadəçi rəngi dəyişə bilər */}
        </div>
      );
    }
  }
  
  const root11 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header favcol="yellow" />); // **favcol** prop-u vasitəsilə "yellow" rəngini ekrana çıxarırıq
  
  //* 2. shouldComponentUpdate() metodu
  //? **shouldComponentUpdate()** metodu React-a komponentin yenidən render ediləcəyi barədə məlumat verir.
  //? Bu metodun qaytardığı **Boolean** (doğru və ya yanlış) dəyər, React-a komponenti yenidən render edib-etməyəcəyini söyləyir.
  //? Default olaraq, bu metod **true** dəyərini qaytarır, yəni hər zaman komponent yenidən render edilir.
  //? Əgər bu metod **false** qaytararsa, komponentin render olunması dayandırılır və yenidən render edilməyəcəkdir.
  
  //* Misal: **shouldComponentUpdate()** metodunun istifadəsi ilə komponentin yenidən render edilməməsi
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
  
    // **shouldComponentUpdate()** metodu "false" qaytararsa, render edilməyəcək
    shouldComponentUpdate() {
      return false; // Burada "false" qaytarırıq, yəni komponentin yenidən render olunmasını dayandırırıq
    }
  
    changeColor = () => {
      this.setState({favoritecolor: "blue"}); // Rəngi dəyişsə də, render edilmir
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1> {/* Bu rəng dəyişəcək, amma komponent render edilməyəcək */}
          <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  const root10 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // Komponenti render edirik, amma yenidən render olunmamalıdır
  
  //* 3. render() metodu
  //? **render()** metodu hər zaman yenilənmiş **state** və ya **props**-a uyğun olaraq HTML-i (JSX) DOM-a çıxarır.
  //? Burada istifadəçi bir düyməni basaraq **state**-i dəyişdirə bilər və komponent yenidən render olunacaq.
  
  //* Misal: **render()** metodu ilə rəngin dəyişməsi
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
  
    changeColor = () => {
      this.setState({favoritecolor: "blue"}); // Rəngi "blue" etmək üçün **state**-i dəyişirik
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1> {/* Yenilənmiş rəngi göstəririk */}
          <button type="button" onClick={this.changeColor}>Change color</button> {/* Düymə ilə rəng dəyişir */}
        </div>
      );
    }
  }
  
  const root9 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // Komponenti render edirik
  
  //* Qısa İzah:
  // 1. **componentDidMount()** metodu, komponent DOM-a əlavə olunduqdan sonra işləyir. Burada, API çağırışları və ya digər işlər edilə bilər.
  // 2. **shouldComponentUpdate()** metodu komponentin yenidən render edilib-edilməməsini təyin edir.
  // 3. **render()** metodu isə komponentin HTML-i göstərmək üçün hər zaman çağırılır. **state** dəyişdikdə, bu metod yenidən işləyir və yeni HTML göstərilir.
  // 4. **getDerivedStateFromProps()** metodu **props** dəyişəndə, **state**-i yeniləmək üçün istifadə olunur.
  
 /* Bu kod nümunələri və izahlar tələbələrə React komponentlərinin həyat dövrü (lifecycle) və **state** dəyişikliklərinin necə idarə olunduğunu anlamağa kömək edəcək. Hər bir metodun funksiyasını aydın şəkildə başa düşmək üçün bu izahları addım-addım izah etmək vacibdir. */
  
 //* getSnapshotBeforeUpdate() metodu
//? **getSnapshotBeforeUpdate()** metodu, komponentin yenilənməsindən əvvəlki **props** və **state**-ə girişi təmin edir.
//? Yəni, bu metodda komponentin əvvəlki vəziyyətini yoxlaya bilərsiniz, yenilənmədən əvvəlki dəyərləri görmək mümkün olur.
//? Bu metodun istifadəsi, əgər komponentdə **getSnapshotBeforeUpdate()** metodu varsa, **componentDidUpdate()** metodunun da olması tələb olunur.
//? Əks halda, bir xəta alarsınız.
//? Aşağıdakı misalda, komponent **mount** ediləndə "red" rəngi ilə render edilir.
//? Komponent mount edildikdən sonra bir zamanlayıcı ilə **state** dəyişdirilir və 1 saniyə sonra rəng "yellow" olur.
//? Bu hərəkət **update** fazasını işə salır, və çünki bu komponentdə **getSnapshotBeforeUpdate()** metodu var, bu metod işləyir və mesajı "div1" elementinə yazır.
//? Daha sonra **componentDidUpdate()** metodu işləyir və mesajı "div2" elementinə yazır.

//* Misal: getSnapshotBeforeUpdate() metodunun istifadəsi ilə əvvəlki **state**-i görmək
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
    
    // componentDidMount() metodu ilə rəng "yellow" olaraq dəyişir
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"});
      }, 1000); // 1 saniyə sonra rəngi "yellow" edirik
    }
  
    // getSnapshotBeforeUpdate() metodu, yenilənmə başlamazdan əvvəl **prevState**-i əldə etməyə imkan verir
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Burada əvvəlki rəngi "div1" elementinə yazdırırıq
      document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
  
    // componentDidUpdate() metodu, yeniləmədən sonra işləyir və yeni rəng məlumatını "div2"-yə yazdırır
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div> {/* Əvvəlki rəngin göstəriləcəyi element */}
          <div id="div2"></div> {/* Yeni rəngin göstəriləcəyi element */}
        </div>
      );
    }
  }
  
  const root15 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // Komponenti render edirik
  
  //* componentDidUpdate metodu
  //? **componentDidUpdate()** metodu, komponent DOM-da yeniləndikdən sonra çağırılır.
  //? Aşağıdakı misalda, komponent "mount" edildikdən sonra "red" rəngində render edilir.
  //? Sonra, **componentDidMount()** metodunda bir zamanlayıcı ilə **state** dəyişdirilir və rəng "yellow" olur.
  //? Bu hərəkət **update** fazasını tetikler və **componentDidUpdate()** metodu işləyir, burada yeni rəng **div** elementinə yazılır.
  
  //* Misal: componentDidUpdate() metodu ilə yenilənmiş rəngin göstərilməsi
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"}; // Başlangıçda rəng "red"
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"}); // 1 saniyə sonra rəng "yellow" olur
      }, 1000);
    }
  
    // componentDidUpdate() metodu, yeniləmə tamamlandıqdan sonra çağırılır
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
  
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1> {/* Yenilənmiş rəngi göstəririk */}
          <div id="mydiv"></div> {/* Yeni rəngin göstəriləcəyi element */}
        </div>
      );
    }
  }
  
  const root14 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // Komponenti render edirik
  
  //* Unmounting (Komponentin Silinməsi)
  //? Sonrakı faza, komponent DOM-dan silindikdə baş verir. React buna **Unmounting** deyir.
  //? React-un yalnız bir **built-in** metodu var ki, komponent silinərkən çağırılır: **componentWillUnmount()**
  //? **componentWillUnmount()** metodu komponent DOM-dan silinməzdən əvvəl çağırılır. Bu metodda komponentin təmizlənməsi ilə bağlı əməliyyatlar (məsələn, event listener-lərin silinməsi) edə bilərsiniz.
  
  //* Misal: **componentWillUnmount()** metodu ilə komponentin silinməsi
  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true}; // Başlangıçda header göstərilir
    }
  
    delHeader = () => {
      this.setState({show: false}); // Başlıq gizlədilir
    }
  
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />; // Başlıq göstərilir
      }
  
      return (
        <div>
          {myheader} {/* Başlıq burada göstərilir */}
          <button type="button" onClick={this.delHeader}>Delete Header</button> {/* Başlığı silmək üçün düymə */}
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    // componentWillUnmount() metodu, komponent silinməzdən əvvəl çağırılır
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
      // Komponent silinmədən əvvəl xəbərdarlıq mesajı göstəririk
    }
  
    render() {
      return (
        <h1>Hello World!</h1> /* Bu, başlıq komponentinin içindəki məzmundur */
      );
    }
  }
  
  const root13 = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Container />); // "Container" komponentini render edirik
  
  //* Qısa İzah:
  // 1. **getSnapshotBeforeUpdate()** metodu, komponentin **state** və ya **props**-unda yenilənmə baş vermədən əvvəlki vəziyyəti əldə etməyə imkan verir.
  // 2. **componentDidUpdate()** metodu isə, yenilənmə tamamlandıqdan sonra, yeni **state** və **props** ilə işləyir və DOM-a yazılır.
  // 3. **componentWillUnmount()** metodu komponent silinməzdən əvvəl çağırılır və komponentin təmizlənməsi üçün istifadə olunur.
  
  //? Bu metodlar, React komponentlərinin həyat dövrünün vacib mərhələlərindəndir və hər birinin fərqli məqsədləri və istifadəsi var. 
  //? Tələbələrə hər bir metodun funksiyasını başa düşməyə və tətbiq etməyə kömək edəcək. Bu izahlar, onların React lifecycle haqqında daha yaxşı anlayış əldə etmələrini təmin edəcək.
  