//* JSX Nədir? (What is JSX?)
//? JSX (JavaScript XML), React-da HTML yazmağa imkan verən bir sintaksisdir.
//? JSX, HTML elementlərini JavaScript daxilində yazmağa və DOM-a əlavə etməyə imkan verir.
//? React ilə işləyərkən, HTML yazmaq daha asan və rahat olur, çünki JSX vasitəsilə HTML kodunu birbaşa JavaScript-də yazırıq.
//? JSX həmçinin, HTML taglarını React elementlərinə çevirir və daha sonra bu elementləri render etmək üçün istifadə edir.

//* JSX ilə kod yazmaq (Coding JSX)
//? JSX, `createElement()` və ya `appendChild()` kimi metodlar istifadə etmədən, HTML elementlərini birbaşa JavaScript-ə daxil etməyə imkan verir.
//? Bu, daha təmiz və oxunaqlı kod yazmağa kömək edir.
//? JSX, HTML kodunu React elementlərinə çevirir və bu, React tərəfindən işlənərək səhifəyə əlavə edilir.
//? JSX istifadə etməklə daha sürətli və rahat React tətbiqləri yazmaq mümkündür.

//* JSX istifadəsinin bir nümunəsi (Using JSX Example)
//? Aşağıdakı kodda JSX istifadə edərək HTML yazılır və sonra bu HTML React tətbiqində göstərilir:

const myElement = <h1>I Love JSX!</h1>; // JSX ilə bir başlıq yaradılır
const root = ReactDOM.createRoot(document.getElementById('root')); // HTML-də id="root" olan konteyneri seçirik
root.render(myElement); // JSX-dəki `myElement` dəyişənini render edirik

//* JSX istifadə etmədən yazmaq (Writing without JSX)
//? JSX olmadan, React-də HTML elementlərini yazmaq daha çətin və uzun olur.
//? JSX istifadə etmədən `React.createElement()` metodundan istifadə edərək HTML elementi yaratmalıyıq.
//? Aşağıda JSX olmadan yazılmış bir nümunə göstəririk:

const myElement1 = React.createElement('h1', {}, 'I do not use JSX!'); // `createElement` ilə HTML başlıq elementi yaradılır
const root1 = ReactDOM.createRoot(document.getElementById('root')); // HTML-də id="root" olan konteyneri seçirik
root.render(myElement); // `myElement` dəyişənini render edirik

//? Göründüyü kimi, birinci nümunədə JSX istifadə edərək HTML-i birbaşa yazdıq, lakin ikinci nümunədə `createElement()` istifadə etməli olduq.
//? JSX, bu cür uzun və mürəkkəb kod yazmaqdan daha asan və rahat bir yol təqdim edir.

//* JSX-in üstünlükləri (Benefits of JSX)
//? JSX istifadə etmək React tətbiqlərini daha asan və daha sürətli yazmağa imkan verir.
//? Kodun daha oxunaqlı olmasına və səhv etmə ehtimalının azalmasına kömək edir.
//? JSX, HTML və JavaScript-in birləşdirilməsi ilə daha təbii bir yazı üsulu təqdim edir.
//? JSX istifadə edərək yazılan React tətbiqi daha təmiz və peşəkar olur.
//? JSX həmçinin, React komponentləri ilə işləmək üçün daha əlverişli bir mühit təmin edir.

//* JSX-in necə işlədiyini başa düşmək (Understanding how JSX works)
//? JSX, JavaScript dilinin ES6 versiyasına əsaslanan bir uzantıdır.
//? JSX, yazıldıqdan sonra, brauzer tərəfindən standart JavaScript-ə çevrilir.
//? Bu çevrilmə prosesi `React.createElement()` metodunu çağırır və HTML elementlərini React komponentlərinə çevirir.
//? Beləliklə, JSX yazarkən, əslində, JavaScript ilə işləyirsiniz, amma sintaksis HTML kimi görünür.

//* Nəticə (Conclusion)
//? JSX React ilə işləyərkən istifadə etməyiniz üçün çox faydalı və rahat bir xüsusiyyətdir.
//? React tətbiqlərini daha səliqəli və oxunaqlı yazmağa kömək edir.
//? JSX ilə React-də HTML yaratmaq çox asandır və həmçinin yazdığınız kodu daha səmərəli edir.
//? JSX-i öyrənmək və istifadə etmək React tətbiqini qurmağı daha sürətli və effektiv hala gətirəcək.

//? Yəni, JSX istifadə etmək React tətbiqlərini yazmağı asanlaşdırır və daha oxunaqlı edir, bu da tələbələriniz üçün çox faydalıdır.

//* JSX-də ifadələr (Expressions in JSX)
//? JSX-də, ifadələri qıvrımlı mötərizələr { } içində yaza bilərik.
//? Burada yazılan ifadə, React dəyişəni, xüsusiyyət və ya başqa hər hansı bir düzgün JavaScript ifadəsi ola bilər.
//? JSX bu ifadəni işlədəcək və nəticəni qaytaracaq.

//* İfadə nümunəsi (Expression Example)
//? Məsələn, 5 + 5 ifadəsini yerinə yetirək:

const myElement6 = <h1>React is {5 + 5} times better with JSX</h1>; // JSX-də bir ifadə yazılıb, nəticə ekranda göstəriləcək

//* Böyük HTML bloklarını daxil etmək (Inserting a Large Block of HTML)
//? HTML-i çox sətirdə yazmaq üçün HTML-i mötərizələrə (parentheses) yerləşdirmək lazımdır.
//? Bu, kodun daha oxunaqlı və səliqəli olmasına kömək edir.

//* Məsələn, üç siyahı maddəsindən ibarət bir siyahı yaradaq:

const myElement5 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
); // HTML kodu çox sətirə bölünərək yazılıb və müvafiq olaraq JSX-ə çevrilir

//* Yuxarıdakı tək bir element (One Top Level Element)
//? JSX-də yazılan HTML kodu mütləq bir tək üst elementdə olmalıdır.
//? Yəni, əgər iki paragraf yazmaq istəyirsinizsə, onları bir ana elementin içərisində yerləşdirməlisiniz, məsələn, bir div elementində.

//* Məsələn, iki paragrafı bir DIV elementinin içində yerləşdirək:

const myElement4 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
); // İki paragraf div ilə sarılır, çünki JSX-də tək bir üst element lazımdır

//? JSX-də HTML doğru yazılmalıdır və ya valide olmalıdır, əks halda xəta verəcək.
//? Əgər HTML-da valide olmayan bir şey varsa və ya bir ana element əskikdirsə, JSX xəta verəcək.
//? Bu səbəbdən hər zaman HTML-nin doğru olduğuna əmin olun.

//* Alternativ olaraq, bir "fragment" istifadə edərək çoxsaylı sətirləri sarıya bilərsiniz. Bu, DOM-a əlavə node-lar (elementlər) əlavə etməməyə kömək edəcək.
//? Fragment, boş bir HTML tagı kimi görünür: <></>.

//* Məsələn, iki paragrafı bir fragment içərisində sarmayaq:

const myElement3 = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
); // Bu nümunədə div əvəzinə, fragment istifadə edərək iki paragrafı sarmış oluruq

//* Elementlər düzgün bağlanmalıdır (Elements Must be Closed)
//? JSX, XML qaydalarına riayət edir və buna görə HTML elementləri düzgün bağlanmalıdır.
//? Bu, düzgün işləməsi və səhvlərin qarşısını almaq üçün vacibdir.

//* Məsələn, boş elementləri bağlamaq üçün /> istifadə edilir:

const myElement2 = <input type="text" />; // <input> elementi, boş olduğu üçün düzgün bağlanıb (/> istifadə edilir)

//? JSX-də hər bir element düzgün bağlanmalı və açıq olmalıdır, çünki bu, səhvlərin qarşısını alır.
//? Əgər bir elementi düzgün bağlamazsınızsa, React bunu aşkar edəcək və xəta verəcək.
//? Buna görə də, HTML elementlərinin düzgün yazılmasına diqqət yetirmək çox vacibdir.

//* Nəticə (Conclusion)
//? JSX-də ifadələr, HTML yazarkən çox güclü bir vasitədir.
//? İfadələri qıvrımlı mötərizələrdə yazmaq, kodu dinamik və təmiz etmək üçün əla bir yoldur.
//? Böyük HTML bloklarını yazarkən, onları mötərizələrdə yazmaq kodun oxunaqlı olmasına kömək edir.
//? Bir üst elementin olması, JSX-in düzgün işləməsi üçün çox vacibdir.
//? Elementləri düzgün bağlamaq isə səhvlərin qarşısını almağa və React tətbiqinizin daha yaxşı işləməsinə kömək edir.
//? Bu qaydalar tələbələrinizin React tətbiqlərini daha sağlam və işlək hala gətirəcək.

//* JSX HTML Elementlərinin düzgün bağlanmaması (JSX will throw an error if the HTML is not properly closed)
//? Əgər HTML elementləri düzgün bağlanmazsa, JSX xəta verəcəkdir.
//? JSX, HTML kodunu JavaScript-ə çevirdiyinə görə, HTML elementlərinin düzgün bağlanması vacibdir.
//? HTML-də bir çox element bağlanmalıdır, məsələn, <input> və <img> kimi elementlər.
//? Hər bir açıq elementin düzgün şəkildə bağlanması React-in düzgün işləməsi üçün çox önəmlidir.
//? Bu qayda tələbələrinizin səhvsiz və düzgün işləyən React tətbiqləri yaratmasına kömək edəcəkdir.


//* class atributu - className (Attribute class = className)
//? HTML-də çox istifadə olunan class atributu, JSX-də istifadə edilə bilməz, çünki JavaScript-də class açar sözü var.
//? JavaScript-də class, sinifləri yaratmaq üçün istifadə edilir və bu səbəbdən JSX-də "class" atributu mövcud deyil.
//? Bunun əvəzinə JSX-də "className" istifadə edilməlidir.
//? JSX render edildikdə, "className" atributları avtomatik olaraq HTML-dəki "class" atributlarına çevrilir.

//* Məsələn, className atributunu istifadə edək:

const myElement10 = <h1 className="myclass">Hello World</h1>; // className istifadə edirik, çünki class işləməz

//? React, className-ı "class" olaraq HTML-ə çevirdiyi üçün bu problem həll olunur və React düzgün işləyir.


//* Şərtlər - if ifadələri (Conditions - if statements)
//? React-də if ifadələri istifadə oluna bilər, amma bunlar birbaşa JSX-in içində yazıla bilməz.
//? JSX-in içində şərtli ifadələr (if statements) yazmaq mümkün deyil. Bunun üçün ya şərti ifadələri JSX-in xaricində yazmalıyıq, ya da ternary operator (üçlü operator) istifadə etməliyik.
//? Şərtləri React-də düzgün istifadə etmək üçün, aşağıdakı üsullardan biri ilə şərt yazmağı öyrənəcəyik.

//* Birinci üsul (Option 1): if ifadələrini JSX kodundan kənarda yazın
//? Bu üsulda, if ifadəsini əvvəlcə yuxarıda yazırıq, sonra isə JSX içində bu nəticəni istifadə edirik.

//* Məsələn, x 10-dan kiçik olduqda "Hello" yazılacaq, əks halda "Goodbye" yazılacaq:

const x = 5;
let text = "Goodbye"; // Əvvəlcə "Goodbye" yazırıq
if (x < 10) { // Əgər x 10-dan kiçikdirsə, "Hello" yazırıq
  text = "Hello"; 
}

//* Sonra JSX içində bu dəyişəni istifadə edirik:

const myElement9 = <h1>{text}</h1>; // Bu JSX-də {text} istifadə edirik və nəticədə "Hello" görəcəyik


//* İkinci üsul (Option 2): Ternary operator (üçlü operator) istifadə edin
//? Bu üsulda, ternary operator istifadə edərək şərtli ifadə yazırıq. Bu, çox qısa və səmərəli bir üsuldur.
//? Ternary operator üç hissədən ibarətdir: şərt, şərt doğru olduqda nə olacaq, şərt səhv olduqda nə olacaq.

//* Məsələn, x 10-dan kiçik olduqda "Hello" yazılacaq, əks halda "Goodbye" yazılacaq:

const x1 = 5;

const myElement8 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>; // Burada ternary operator istifadə edirik

//? Bu ifadə ilə, əgər x 10-dan kiçikdirsə, "Hello" görünəcək, əks halda "Goodbye" görəcəksiniz.


//* JavaScript ifadələrini JSX-də istifadə etmək (Embedding JavaScript expressions in JSX)
//? JSX-də JavaScript ifadələrini istifadə etmək üçün, həmin ifadəni qıvrımlı mötərizələr { } içində yazmalıyıq.
//? { } içində yazılan hər bir JavaScript ifadəsi JSX tərəfindən işlənir və nəticə ekranda göstərilir.
//? Bu qayda, tələbələrinizin React tətbiqində dinamizmi idarə etməsinə kömək edir.

//* Məsələn, bir dəyişəni JSX-də istifadə edək:

const name = "Jesse";
const myElement7 = <h1>Hello, {name}!</h1>; // name dəyişəni JSX-də istifadə edilib, nəticədə "Hello, Jesse!" göstəriləcək


//* Nəticə (Conclusion)
//? JSX-də şərtli ifadələri düzgün şəkildə istifadə etmək vacibdir. if ifadələri JSX-də birbaşa istifadə oluna bilməz, amma ya şərtləri JSX xaricində yazıb, ya da ternary operator istifadə edərək bu şərtləri rahatlıqla idarə edə bilərik.
//? class atributunu istifadə etmək üçün className istifadə edilməlidir, çünki JSX-də class açar sözü JavaScript üçün ayrılmışdır.
//? JSX-də ifadələri { } ilə əhatə edərək JavaScript kodunu yazmaq mümkündür və bu tələbələrinizə React tətbiqlərini dinamik hala gətirməkdə kömək edir.
//? Bu qaydaları başa düşmək və düzgün tətbiq etmək tələbələrinizin React-də daha effektiv və səhvsiz işləməsinə səbəb olacaq.
