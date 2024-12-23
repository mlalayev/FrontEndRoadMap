//* CSS Selectors - Hər Birini Anlamaq

//? **CSS Selectors Nədir?**
//? CSS Selectors, HTML elementlərini seçmək və onlara stil tətbiq etmək üçün istifadə olunur.
//? Onlar, elementlərin ID, class, tipi, atributu və digər xüsusiyyətləri əsasında müəyyən edilir.
//? CSS Selectors tək bir elementi seçə bilər və ya çoxlu elementlərə stil verə bilər.
//? Bu, veb səhifələrin dizaynını və görünüşünü idarə etmək üçün çox önəmlidir.

//* **1. Universal Selector `*`**:
//? Universal Selector, səhifədəki bütün elementləri seçir.
//? Bu selector çox geniş tətbiq sahəsinə malikdir, amma çox istifadə edilməməlidir, çünki bütün elementlərə stil tətbiq etmək performans problemlərinə yol aça bilər.
//* `* {`
//* `  color: red;`  //? Bütün elementlərin rəngini qırmızı edər.
//* `}`

//* **2. Type Selector (Element Selector)**:
//? Type Selector, bir elementin tipi üzrə seçiş edir. Məsələn, `div`, `p`, `h1` kimi.
//? Bu selector müəyyən bir növ HTML elementinə stil tətbiq etmək üçün istifadə edilir.
//* `p {`
//* `  font-size: 16px;`  //? `p` (paraqraf) elementinin yazı ölçüsünü 16px edər.
//* `}`

//* **3. Class Selector `.class-name`**:
//? Class Selector, HTML elementlərinin `class` atributuna əsaslanaraq seçim edər.
//? `.` işarəsi ilə başlanır və bir və ya daha çox elementə tətbiq edilə bilər.
//* `.button {`
//* `  background-color: blue;`  //? `.button` class-ına sahib bütün elementlər mavi fon rənginə sahib olacaq.
//* `}`
//* `<div class="button">Button</div>`

//* **4. ID Selector `#id-name`**:
//? ID Selector, HTML elementinin `id` atributu əsasında seçim edir.
//? `#` işarəsi ilə başlanır və hər id yalnız bir elementə tətbiq edilir.
//* `#header {`
//* `  font-size: 24px;`  //? `header` id-ə sahib elementin yazı ölçüsünü 24px edər.
//* `}`
//* `<div id="header">Header</div>`

//* **5. Descendant Selector (Aşağı Təsir Edən Seçici)**:
//? Descendant Selector bir elementi seçir ki, həmin element başqa bir elementin daxilində yerləşir.
//? Bu, bir elementin daxilindəki başqa elementləri seçmək üçün istifadə edilir.
//* `div p {`
//* `  color: green;`  //? `div` elementinin içindəki bütün `p` elementlərinin rəngini yaşıl edər.
//* `}`

//* **6. Child Selector `>`**:
//? Child Selector, yalnız bir elementin birbaşa uşaq elementlərini seçmək üçün istifadə edilir.
//? Bu, yalnız ilk səviyyə uşaq elementlərini hədəfləyir, daha dərin səviyyədəki elementlər seçilmir.
//* `ul > li {`
//* `  list-style-type: square;`  //? Yalnız `ul` içindəki birbaşa `li` elementlərinin siyahı növünü kvadrat edər.
//* `}`

//* **7. Adjacent Sibling Selector `+`**:
//? Adjacent Sibling Selector, bir elementin dərhal əvvəlindəki digər elementləri seçir.
//? Bu selector yalnız iki elementin bir-birinin dərhal yanında yerləşməsi ilə işləyir.
//* `h1 + p {`
//* `  color: orange;`  //? `h1` elementindən dərhal sonra gələn `p` elementinin rəngini narıncı edər.
//* `}`

//* **8. General Sibling Selector `~`**:
//? General Sibling Selector, bir elementin eyni səviyyədəki digər bütün elementlərini seçir.
//? Yalnız eyni valideyn elementinin içindəki digər elementlər seçilir.
//* `h1 ~ p {`
//* `  font-weight: bold;`  //? `h1` elementindən sonra gələn bütün `p` elementlərinin şriftini qalın edər.
//* `}`

//* **9. Attribute Selector `[attribute]`**:
//? Attribute Selector, HTML elementlərində müəyyən bir atributa sahib olan elementləri seçir.
//? Atributun dəyəri müəyyən edilməsə də seçici işləyəcək.
//* `input[type="text"] {`
//* `  border: 1px solid blue;`  //? `type="text"` atributu olan bütün `input` elementlərinin sərhədini mavi edər.
//* `}`

//* **10. Pseudo-classes `:pseudo-class`**:
//? Pseudo-class, müəyyən bir vəziyyətə və ya vəziyyətə görə bir elementi seçmək üçün istifadə edilir.
//? Bunlar interaktiv vəziyyətləri və elementlərə bağlı müxtəlif vəziyyətləri idarə etmək üçün faydalıdır.
//* `a:hover {`
//* `  color: red;`  //? `a` (link) elementinə hover edildikdə, onun rəngini qırmızı edər.
//* `}`
//* `input:focus {`
//* `  border: 2px solid green;`  //? İstifadəçi `input` sahəsinə fokuslandıqda, onun sərhədini yaşıl edər.
//* `}`

//* **11. Pseudo-elements `::pseudo-element`**:
//? Pseudo-elementlər, elementin müəyyən bir hissəsini seçmək və ona stil tətbiq etmək üçün istifadə edilir.
//? Bu, əlavə məzmun yaratmağa və ya elementin xüsusi hissələrini formatlamağa imkan verir.
//* `p::first-letter {`
//* `  font-size: 24px;`  //? `p` elementinin ilk hərfini 24px ölçüsünə gətirər.
//* `}`
//* `div::before {`
//* `  content: "Text";`  //? `div` elementindən əvvəl məzmun əlavə edər.
//* `}`

//* **12. Grouping Selectors `,`**:
//? Grouping Selectors, eyni stil xüsusiyyətlərini birdən çox elementə tətbiq etmək üçün istifadə olunur.
//? Bir çox seçicini birləşdirərək, kodu daha qısa və oxunaqlı edə bilərsiniz.
//* `h1, h2, h3 {`
//* `  color: blue;`  //? `h1`, `h2` və `h3` elementlərinin rəngini mavi edər.
//* `}`

//* **13. :not() Pseudo-class Selector**:
//? `:not()` pseudo-class, müəyyən bir elementin xaricindəki bütün elementləri seçməyə imkan verir.
//? Bu, müəyyən bir sinifi və ya ID-ni istisna edərək digər elementlərə stil tətbiq etmək üçün istifadə edilir.
//* `div:not(.active) {`
//* `  background-color: gray;`  //? `.active` class-ı olmayan bütün `div` elementlərinin fonunu boz edər.
//* `}`

