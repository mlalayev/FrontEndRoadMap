//* 8. Gün - CSS Typography və Mətnin Stilizə Edilməsi

//? **CSS Typography Nədir?**
//? Typography, veb səhifədə mətnin necə görünəcəyini idarə edən bir anlayışdır.
//? CSS Typography, mətni estetik və oxunaqlı etmək üçün fontları, ölçüləri, sıralamaları, və s. təyin etməyə kömək edir.
//? Mətnin təyin edilməsi və stilizə edilməsi istifadəçilər üçün oxuma təcrübəsini yaxşılaşdırmağa imkan verir.

//* **Fontların Təyin Edilməsi**:
//? CSS-də mətnin fontunu təyin etmək üçün `font-family` xüsusiyyətindən istifadə olunur.
//? Fontlar ümumiyyətlə birinci dərəcəli font (preferred font) və ehtiyat fontlarla təyin edilir.
//? Ən populyar font növləri serif, sans-serif və monospace-dir.

//* **Font Family Nümunəsi**:
//* `p {`
//* `  font-family: 'Arial', sans-serif;`  //? Mətnin fontu Arial və ya sans-serif olacaq.
//* `}`

//* **Font ölçüsünün təyin edilməsi**:
//? `font-size` xüsusiyyəti mətnin ölçüsünü təyin edir.
//? Bu xüsusiyyət piksel (px), em, rem və s. kimi müxtəlif ölçü vahidləri ilə istifadə edilə bilər.
//? Em və rem ölçü vahidləri, responsiv dizayn üçün daha uyğun olur.

//* **Font Size Nümunəsi**:
//* `p {`
//* `  font-size: 16px;`  //? Mətnin ölçüsü 16px olacaq.
//* `}`
//* `h1 {`
//* `  font-size: 2em;`  //? Başlıq ölçüsü 2 em olacaq, bu da əsas ölçünün iki qatıdır.
//* `}`

//* **Font Ağırlığı və Stil**:
//? CSS-də mətnin ağırlığını (qalınlığını) və stilini təyin etmək üçün `font-weight` və `font-style` istifadə olunur.
//? `font-weight` xüsusiyyəti mətnin qalınlığını təyin edir (normal, bold, bolder, light).
//? `font-style` isə, mətnin şrift stilini (normal, italic) təyin edir.

//* **Font Weight və Font Style Nümunələri**:
//* `p {`
//* `  font-weight: bold;`  //? Mətn qalın (bold) olacaq.
//* `  font-style: italic;`  //? Mətn italik (əğrəbi) olacaq.
//* `}`

//* **Line Height (Sətir hündürlüyü)**:
//? `line-height` xüsusiyyəti, mətnin sətirləri arasındakı məsafəni təyin edir.
//? Bu, mətnin oxunabilirliyini artırır və sıx mətnin görünüşünü tənzimləyir.

//* **Line Height Nümunəsi**:
//* `p {`
//* `  line-height: 1.5;`  //? Sətir hündürlüyü 1.5 olacaq, yəni sətirlər arasındakı məsafə 1.5 dəfə böyük olacaq.
//* `}`

//* **Text Alignment (Mətnin hizalanması)**:
//? `text-align` xüsusiyyəti mətnin üfüqi olaraq necə hizalanacağını təyin edir.
//? Dəyərlər: `left`, `right`, `center`, `justify`.

//* **Text Align Nümunəsi**:
//* `p {`
//* `  text-align: center;`  //? Mətn mərkəzə hizalanır.
//* `}`

//* **Text Decoration (Mətnin bəzədilməsi)**:
//? `text-decoration` xüsusiyyəti mətnin altında xətt çəkmək, yuxarı xətt çəkmək və ya xətti silmək üçün istifadə olunur.
//? Mətnə xət çəkilməsi ən çox hyperlinklərdə və ya vurğulanan mətnlərdə istifadə olunur.
//? Dəyərlər: `underline`, `line-through`, `overline`, `none`.

//* **Text Decoration Nümunəsi**:
//* `a {`
//* `  text-decoration: underline;`  //? Linklərin altını çəkmək.
//* `}`

//* **Letter Spacing və Word Spacing**:
//? `letter-spacing` mətnin hər bir hərfi arasındakı məsafəni təyin edir, `word-spacing` isə sözlər arasındakı məsafəni təyin edir.
//? Bu xüsusiyyətlər, mətnin daha yaxşı oxunmasını və dizaynın estetik görünməsini təmin edə bilər.

//* **Letter Spacing və Word Spacing Nümunəsi**:
//* `p {`
//* `  letter-spacing: 2px;`  //? Hərflər arasında 2px boşluq olacaq.
//* `  word-spacing: 5px;`  //? Sözlər arasında 5px boşluq olacaq.
//* `}`

//* **Text Transform (Mətnin transformasiyası)**:
//? `text-transform` xüsusiyyəti mətnin hərflərinin formatını dəyişir.
//? Dəyərlər: `uppercase`, `lowercase`, `capitalize`, `none`.
//? Bu xüsusiyyət, mətnin yazılma formasını dəyişmək üçün istifadə olunur.

//* **Text Transform Nümunəsi**:
//* `h1 {`
//* `  text-transform: uppercase;`  //? Başlıq hərfləri böyük olacaq.
//* `}`

//* **Text Shadow (Mətn kölgəsi)**:
//? `text-shadow` xüsusiyyəti mətnə kölgə əlavə etməyə imkan verir. Bu, mətni daha vurğulu və diqqət çəkici edər.
//? `text-shadow` 3 parametrdən ibarətdir: `horizonal` offset, `vertical` offset, `blur` radius və rəng.

//* **Text Shadow Nümunəsi**:
//* `h1 {`
//* `  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);`  //? Başlığa 2px sağa, 2px aşağıya, 5px bulanıqlıq və qara rəngdə kölgə əlavə edilir.
//* `}`

//* **Font Variations (Font dəyişiklikləri)**:
//? Müasir brauzerlərdə fontların fərqli üslub və çəki dəyişikliklərini tətbiq etmək mümkündür.
//? Font variabiləri ilə istifadəçi xüsusi font stil və çəkiyi seçə bilər, bu isə təcrübəni daha çevik edir.
//? `font-variant` xüsusiyyəti, xüsusi stil dəyişikliklərini təyin etmək üçün istifadə edilir.

//* **Font Variations Nümunəsi**:
//* `p {`
//* `  font-variant: small-caps;`  //? Kiçik baş hərflər (small-caps) ilə göstərilir.
//* `}`

//? **Yekun Nəticə**:
//? CSS Typography, veb səhifələrində mətni daha yaxşı dizayn etmək üçün vacib bir vasitədir.
//? Fontları, ölçüləri, hizalanmanı, mətn bəzəklərini və digər xüsusiyyətləri düzgün istifadə edərək istifadəçi təcrübəsini yaxşılaşdıra bilərik.
//? Müxtəlif font və mətni stilizə etmə üsulları ilə, dizaynınız daha cazibədar və oxunaqlı olacaq.
