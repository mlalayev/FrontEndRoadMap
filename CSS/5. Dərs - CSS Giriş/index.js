//* 5. Gün - CSS Giriş və Tətbiqi

//? **CSS Nədir?**
//? CSS (Cascading Style Sheets) veb səhifələrinin görünüşünü tənzimləyən bir dildir.
//? CSS, HTML-in strukturunu dəyişdirmir, ancaq onu daha estetik və istifadəçi dostu etmək üçün dizayn və stil tətbiq edir.

//? **CSS-ın Əsas Qaydalı Sintaksisi**
//? CSS qaydası belə yazılır:
//? `selector { property: value; }`
//? **selector**: Tətbiq olunan HTML elementini seçir.
//? **property**: Dəyişdirilən xüsusiyyəti göstərir (məsələn, rəng, ölçü və s.)
//? **value**: Xüsusiyyətin yeni dəyərini göstərir (məsələn, `red`, `16px`, və s.)

//* **CSS-ın Faylına Necə Qoşulur?**
//? CSS üslublarını HTML sənədinə üç fərqli üsulla əlavə edə bilərsiniz:
//? 1. **İnline CSS**: HTML elementində birbaşa stil əlavə etmək.
//? 2. **Internal CSS**: HTML sənədinin `<head>` hissəsində `<style>` etiketi ilə əlavə etmək.
//? 3. **External CSS**: Xarici CSS faylını `<link>` etiketi ilə qoşmaq.

//* **1. Inline CSS**:
//? Bu üsulda stil birbaşa HTML elementində tətbiq edilir.
//? Məsələn:
//* `<h1 style="color: red;">Salam, Dünya!</h1>`  //? Başlıq qırmızı olacaq.

//* **2. Internal CSS**:
//? Bu üsulda, HTML sənədinin `<head>` hissəsində `<style>` etiketi ilə CSS kodunu əlavə edirik.
//* `<head>`
//* `<style>`
//* `  h1 {`
//* `    color: blue;`  //? Başlığı mavi edirik.
//* `  }`
//* `</style>`
//* `</head>`

//* **3. External CSS**:
//? Ən çox istifadə olunan üsuldur. Xarici CSS faylını HTML sənədinə qoşmaq üçün `<link>` etiketi istifadə edilir.
//? Məsələn, `style.css` adlı bir CSS faylını qoşuruq:
//* `<link rel="stylesheet" href="style.css">`

//* **CSS Faylının Təkrarı (Yenidən istifadə)**
//? CSS qaydaları təkrarlanaraq müxtəlif elementlərə tətbiq oluna bilər.
//? Bu, kodun daha səliqəli və təkrar istifadəsi asan edir.

//* CSS Seçiciləri (Selectors)

//? **CSS Seçiciləri**
//? Seçicilər, hansı HTML elementlərinin stilini dəyişdirmək istədiyimizi müəyyən edir.
//? CSS-də ən çox istifadə olunan seçicilər:
//? - **Element Seçicisi**: HTML elementinin adı ilə stil tətbiq edilir. (məsələn, `h1`, `p`, `div`)
//? - **ID Seçicisi**: Hər bir ID-ni unikal edir və o ID-yə stil tətbiq edir. (məsələn, `#header`)
//? - **Class Seçicisi**: Həmçinin bir neçə elementə stil tətbiq etməyə imkan verir. (məsələn, `.container`)
//? - **Universal Seçici**: Bütün elementlərə stil tətbiq edir. (məsələn, `*`)

//* **1. Element Seçicisi**:
//? Bu seçici HTML elementinin adı ilə stil tətbiq edir:
//* `h1 {`
//* `  color: green;`  //? Başlığı yaşıl rəngə dəyişdiririk.
//* `}`

//* **2. ID Seçicisi**:
//? ID seçicisi birbaşa ID-yə istinad edərək stil tətbiq edir. ID unikal olmalıdır.
//* `#header {`
//* `  font-size: 24px;`  //? Header-a 24px ölçüsündə şrift təyin edirik.
//* `}`

//* **3. Class Seçicisi**:
//? Class seçicisi bir və ya bir neçə elementə eyni stili tətbiq etməyə imkan verir.
//* `.container {`
//* `  background-color: #f0f0f0;`  //? Container-a açıq boz rəng arxa plan əlavə edirik.
//* `}`

//* **4. Universal Seçici**:
//? Universal seçici bütün HTML elementlərinə stil tətbiq edir:
//* `* {`
//* `  margin: 0;`  //? Bütün elementlərə sıfır margin əlavə edirik.
//* `}`

//* **CSS-ın Tətbiqi və Klasslar**

//? Element, ID və class seçicilərini kombinə edərək daha məqsədyönlü stil tətbiq etmək mümkündür.

//* CSS Background Properties

//? CSS Background Properties, veb səhifələrində arxa planı idarə etmək üçün istifadə olunan xüsusiyyətlərdir.
//? Bu xüsusiyyətlərlə arxa plan rənglərini, şəkillərini, ölçülərini və mövqelərini dəyişdirə bilərik.

//* **background-color**: Elementin arxa planının rəngini təyin edir.
//? Məsələn:
//* `div {`
//* `  background-color: blue;`  //? Arxa planı mavi rəngə təyin edirik.
//* `}`

//* **background-image**: Arxa planda bir şəkil göstərir.
//? Məsələn:
//* `div {`
//* `  background-image: url('image.jpg');`  //? Arxa planda şəkil göstəririk.
//* `}`

//* **background-repeat**: Arxa planın təkrarlanıb-təkrarlanmayacağını təyin edir.
//? Məsələn:
//* `div {`
//* `  background-repeat: no-repeat;`  //? Arxa planda şəkil təkrarlanmayacaq.
//* `}`

//* **background-position**: Arxa planın yerləşməsini idarə edir.
//? Şəkilin harada yerləşəcəyini təyin etmək üçün istifadə olunur:
//* `div {`
//* `  background-position: center;`  //? Şəkil mərkəzdə yerləşəcək.
//* `}`

//* **background-size**: Arxa planın ölçüsünü təyin edir.
//? Məsələn:
//* `div {`
//* `  background-size: cover;`  //? Şəkil konteynerin tam ölçüsünü əhatə edəcək.
//* `}`

//* **background-attachment**: Arxa planın səhifə ilə birlikdə hərəkət edib-etməyəcəyini idarə edir.
//? Məsələn:
//* `div {`
//* `  background-attachment: fixed;`  //? Şəkil səhifə ilə hərəkət etməyəcək.
//* `}`
