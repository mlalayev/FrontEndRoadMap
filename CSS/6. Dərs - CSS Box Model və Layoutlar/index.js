//* 6. Gün - CSS Box Model və Layoutlar

//? **CSS Box Model Nədir?**
//? CSS Box Model, hər bir HTML elementinin görünən hissəsini təşkil edən bir anlayışdır.
//? Box Modelin əsas hissələri aşağıdakılardır:
//? 1. **Content**: Əsas məzmunu təmsil edir (məsələn, mətn və ya şəkil).
//? 2. **Padding**: Content ilə border arasında olan boşluq.
//? 3. **Border**: Elementin kənarını təmsil edən xətt.
//? 4. **Margin**: Elementin xarici sərhədini təmsil edən boşluq.

//* **Box Modelin Tətbiqi**:
//? Box modelinin tətbiqi elementlərin ölçülərini və yerləşməsini tənzimləmək üçün çox vacibdir.
//? Məsələn, bir elementin genişliyini və hündürlüyünü təyin etmək üçün padding, border və margin də nəzərə alınır.
//* `div {`
//* `  width: 300px;`  //? Content sahəsi 300px.
//* `  padding: 20px;`  //? Content ilə padding arasında 20px boşluq.
//* `  border: 5px solid black;`  //? Elementin 5px sərhədi.
//* `  margin: 30px;`  //? Elementin xarici margin sahəsi 30px.
//* `}`

//? **Box Modelin Hesablanması**:
//? - `box-sizing` xüsusiyyəti ilə Box Modelin hesablanmasını tənzimləyə bilərsiniz.
//? - `box-sizing: border-box;` ilə elementin ölçüsü border və padding daxil olaraq təyin edilir.
//* `div {`
//* `  box-sizing: border-box;`  //? Border və padding daxil ölçüləri dəyişir.
//* `}`

//? **Block, Inline, və Inline-Block Elementlər Nədir?**
//? Bu dərs, CSS-də üç növ əsas element növünü təhlil edəcək: block, inline, və inline-block.
//? Bu növlər HTML elementlərinin necə yerləşdirildiyini və digər elementlərlə qarşılıqlı əlaqələrini müəyyən edir.
//? Onlar veb səhifələrində dizayn qurmaq və elementləri yerləşdirmək üçün çox vacibdir.


//* **Block Elementlər**:
//? Block elementlər, adətən tam eni götürürlər və növbəti elementin üzərinə yerləşmirlər. Yəni, block elementlər öz ətrafındakı bütün yeri tuturlar.
//? Block elementləri səhifədə bir sətir boyunca yer alır və hər zaman yeni sətirdə başlar.
//? **Block Elementlərə Misal**:
//? - `div`
//? - `p`
//? - `h1-h6`
//? - `ul`, `ol`, `li`
//? **Block Elementlərinin Xüsusiyyətləri**:
//? - Tam genişlik alır, özündən sonra gələn elementlərə yer buraxmır.
//? - Hər block element yeni bir sətirdə yerləşir.

//* **Block Elementin Nümunəsi**:
//* `div {`
//* `  width: 100%;`  //? Block elementin tam genişliyini alır.
//* `  background-color: lightblue;`  //? Elementin fonu mavi olur.
//* `}`

//* **Inline Elementlər**:
//? Inline elementlər yalnız lazım olduğu qədər yer tutur. Yəni, onlar yalnız öz məzmunlarının yerləşdiyi yerin eni qədər genişlik alırlar.
//? Bu elementlər növbəti elementlə yan-yana yerləşirlər, və bir blok kimi davam etmirlər.
//? **Inline Elementlərə Misal**:
//? - `span`
//? - `a`
//? - `img`
//? - `strong`, `em`
//? **Inline Elementlərinin Xüsusiyyətləri**:
//? - Genişlik və hündürlük təyin edilə bilməz.
//? - Sadece məzmunları qədər yer tutar.
//? - Elementlər arasındakı boşluq növbəti elementlə sərhəd olur.

//* **Inline Elementin Nümunəsi**:
//* `span {`
//* `  background-color: lightgreen;`  //? Elementin fonu yaşıl olacaq.
//* `}`

//* **Inline-Block Elementlər**:
//? Inline-Block, həm block, həm də inline elementlərinin xüsusiyyətlərini birləşdirən bir növdür.
//? Bu elementlər genişlik və hündürlük təyin edilə bilər, lakin bir sətirdə digər inline- və ya inline-block elementlərlə yanaşı yerləşə bilər.
//? Inline-Block, block element kimi davranır, amma başqa elementlərlə yanaşı sıraya düzülə bilər.
//? **Inline-Block Elementlərinin Xüsusiyyətləri**:
//? - Həm block, həm inline xüsusiyyətlərini təklif edir.
//? - Yəni, genişlik və hündürlük təyin edilə bilər, lakin onlar yanaşı yerləşə bilər.
//? - Layoutları daha çevik hala gətirir.

//* **Inline-Block Elementin Nümunəsi**:
//* `div {`
//* `  display: inline-block;`  //? Elementi inline-block edir, yəni block element kimi ölçüləri təyin edilə bilər, amma başqa elementlərlə yan-yana yerləşə bilər.
//* `  width: 200px;`  //? Genişlik təyin edilir.
//* `  background-color: lightcoral;`  //? Elementin fonu qırmızı olur.
//* `}`

//? **Blok və İnline Elementlərin Birləşdirilməsi**:
//? Bəzi hallarda həm block, həm də inline elementlərdən istifadə edərək elementləri dizayn etmək istəyirik.
//? Inline elementlər, adətən mətnin içində istifadə olunur, block elementlər isə səhifədəki əsas strukturu yaradır.
//? **Misal**: 

//* `div {`
//* `  display: inline-block;`  //? Inline-block edirik, beləliklə elementlər bir sətirdə yerləşə bilər.
//* `  width: 200px;`  //? Elementin genişliyi 200px-dir.
//* `}`
//* `span {`
//* `  display: block;`  //? Span elementini block edirik, beləliklə hər biri yeni bir sətirdə olacaq.
//* `}`

//? **Blok və Inline Elementlər Arasındakı Fərqlər**:
//? 1. **Block Elements**: Tam genişlik alır və yeni bir sətirdə başlar.
//? 2. **Inline Elements**: Yalnız lazım olduğu qədər genişlik alır və digər elementlərlə eyni sətirdə olur.
//? 3. **Inline-Block Elements**: Həm block, həm də inline xüsusiyyətlərini birləşdirir, genişlik və hündürlük təyin edilə bilər, digər inline- və ya inline-block elementlərlə eyni sətirdə yerləşir.

//* **Nəticə**:
//? Blok, inline və inline-block elementlərini öyrənmək, veb səhifələrin layoutunu düzgün qurmaq üçün çox vacibdir.
//? Hər birinin öz xüsusiyyətləri vardır və müxtəlif dizayn məqsədləri üçün istifadə olunur.
