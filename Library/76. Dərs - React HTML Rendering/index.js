//* React HTML Render etmək (HTML Rendering)
//? React-də əsas məqsədimiz səhifəyə HTML render etməkdir. Bunu React funksiyası olan `createRoot()` və onun `render()` metodu vasitəsilə edirik.
//? React DOM istifadə edərək HTML elementlərini səhifəyə render etmək çox asandır.
//? Gəlin bunu addım-addım izah edək.

//* createRoot() funksiyası:
//? `createRoot()` funksiyası bir parametr alır - HTML elementini.
//? Bu funksiya, React komponentlərinin göstəriləcəyi HTML elementini müəyyən etmək məqsədini daşıyır.
//? `createRoot()` funksiyası, React komponentini göstərmək üçün əsas konteyneri təyin edəcək.
//* Məsələn:
//* HTML faylında bir `div` elementi var və biz burada React tətbiqimizi göstərəcəyik.
//? Bu HTML kodu, tətbiqin göstəriləcəyi əsas yer olacaq.

//* render() metodu:
//? `render()` metodu `createRoot()` funksiyasından sonra çağırılır və hansı React komponentinin render olunacağını təyin edir.
//? Bu metodla biz HTML elementini ekrana çıxarmağa başlayırıq.

//? React layihəsində `public` adlı bir qovluq var. Bu qovluğun içində `index.html` adlı bir fayl mövcuddur.
//? HTML faylının bədənində yalnız bir `div` elementi yerləşir. Bu div, bizim React tətbiqimizin görsənəcəyini yer olacaq.
//? Gəlin, burada bir nümunə göstərək:
//* Aşağıdakı kod, HTML-də id-si "root" olan bir `div` elementində bir paraqraf göstərir:

// HTML elementində "root" ID-si olan bir konteyner yaradıb, bir paraqraf render edirik
const container = document.getElementById('root'); // HTML-də id="root" olan div elementini seçirik
const root = ReactDOM.createRoot(container); // Bu konteyneri React-ə əlavə edirik
root.render(<p>Hello</p>); // React-də `<p>Hello</p>` komponentini göstəririk

//? Bu kod nəticəsində, `<div id="root"></div>` olan yerdə "Hello" yazısı göstəriləcək.
//? İndi isə HTML kodunun əsas hissəsinə baxaq:

// HTML kodunda, aşağıdakı şəkildə bir `div` ilə React tətbiqi göstərilir:
<body>
  <div id="root"></div> // React tətbiqi burada göstəriləcək
</body>

//? Diqqət edin ki, `id="root"` olması vacib deyil. Bu, yalnız bir konvensiyadır və başqa adlar da istifadə oluna bilər.
//? İstədiyiniz adla da bu id-ni təyin edə bilərsiniz. Sadəcə React kodunuzda uyğun olaraq həmin adla əlaqələndirməlisiniz.

//* JSX (JavaScript XML) ilə HTML yazmaq:
//? React-də HTML yazarkən `JSX` sintaksisini istifadə edirik. JSX, HTML kimi görünən, amma JavaScript-də işləyən xüsusi bir sintaksisdir.
//? JSX ilə yazılan HTML kodu, React tərəfindən render edilə bilər.
//? JSX, `React.createElement` funksiyasına çevrilir və bu funksiya real DOM-a əlavə olunur.
//? JSX ilə HTML yazmağa başlayacaq və çox rahat şəkildə HTML elementlərini JavaScript daxilində istifadə edəcəyik.

//? Aşağıda `JSX` ilə HTML kodu nümunəsi göstəririk. Bu kodda HTML cədvəlini React tətbiqində göstərəcəyik:

// HTML kodunu saxlayan bir dəyişən yaratdıq və onu render edirik
const myelement = (
  <table> 
    <tr>
      <th>Name</th> {/* Cədvəlin başlıq hissəsi */}
    </tr>
    <tr>
      <td>John</td> {/* Birinci sətir */}
    </tr>
    <tr>
      <td>Elsa</td> {/* İkinci sətir */}
    </tr>
  </table>
);

const container2 = document.getElementById('root'); // HTML-də id="root" olan elementi seçirik
const root2 = ReactDOM.createRoot(container); // Bu konteyneri React-ə əlavə edirik
root.render(myelement); // JSX-dəki `myelement` dəyişənini render edirik

//* Root Node:
//? `root node` - React tətbiqinin göstəriləcəyi əsas HTML elementidir.
//? Bu node, React tətbiqinin işlədiyi əsas konteynerdir və biz onu istifadə edirik ki, React səhifəyə HTML elementləri əlavə etsin.
//? Bu root node istədiyiniz adla verilə bilər. Məsələn, bu `div`, `header` və ya başqa bir HTML elementi ola bilər.
//? Məsələn, aşağıda `header` elementi istifadə olunur:

//* HTML-də root node olaraq `header` seçirik
<body>
  <header id="sandy"></header> {/* Bu yerə React komponenti göstəriləcək */}
</body>

//* React-də bu elementdə nəticəni göstəririk:
const container1 = document.getElementById('sandy'); // HTML-də id="sandy" olan elementi seçirik
const root1 = ReactDOM.createRoot(container); // Bu konteyneri React-ə əlavə edirik
root.render(<p>Hallo</p>); // "Hallo" yazısını göstəririk

//? Nəticədə, React `id="sandy"` olan `header` elementində `Hallo` yazısını göstərəcək.
//? İstənilən HTML elementi ilə bu üsuldan istifadə edə bilərsiniz. Bu, çox çevik və rahat bir metodologiyadır.
//? Beləliklə, React komponentlərini istənilən HTML elementində göstərmək mümkündür.

//* Əlavə məlumat:
//? React tətbiqlərində `JSX` və `ReactDOM.createRoot()` funksiyası ilə HTML-i render etmək çox vacibdir.
//? Bu metodlar, React komponentlərimizin səhifədə göstərilməsi və istifadəsi üçün əsasdır. Bu üsul həmçinin React-ın əsas işləmə prinsipidir.

