//* 11. Gün - CSS Pseudo-Classes və Pseudo-Elements

//? **CSS Pseudo-Classes Nədir?**
//? CSS Pseudo-Classes, elementin müəyyən bir vəziyyətinə əsaslanaraq stil tətbiq etməyə imkan verir.
//? Bunlar, elementin qarşılıqlı əlaqəyə girdiyi və ya müəyyən bir şərtə cavab verdiyi anları təmsil edir.
//? Pseudo-classes istifadə edərək, istifadəçi ilə qarşılıqlı əlaqə zamanı səhifənin görünüşünü dəyişə bilərsiniz.
//? Aşağıda bəzi əsas pseudo-class növlərini qeyd edirik:

//* **1. `:hover`**:
//? `:hover` pseudo-class, istifadəçi bir elementin üzərinə gəldikdə aktivləşir.
//? Bu, çox vaxt linklərin və düymələrin hover effektlərini yaratmaq üçün istifadə edilir.
//* `a:hover {`
//* `  color: red;`  //? Linkə hover edildikdə, rəngini qırmızı edər.
//* `}`

//* **2. `:focus`**:
//? `:focus` pseudo-class, istifadəçi elementə fokuslandıqda tətbiq olunur. Əsasən form elementləri üçün istifadə edilir.
//* `input:focus {`
//* `  border-color: blue;`  //? `input` sahəsinə fokuslandıqda, sərhədini mavi edər.
//* `}`

//* **3. `:active`**:
//? `:active` pseudo-class, istifadəçi bir elementi basdıqda və basılı saxladıqda aktivləşir.
//? Bu xüsusiyyət, düymələr və linklər üçün klik effekti yaratmaq üçün istifadə edilə bilər.
//* `button:active {`
//* `  transform: scale(0.98);`  //? `button` basıldıqda, ölçüsünü azaldar.
//* `}`

//* **4. `:nth-child()`**:
//? `:nth-child()` pseudo-class, valideyn elementinin içindəki müəyyən uşaq elementlərini seçmək üçün istifadə edilir.
//? Burada parametr kimi ədədi qiymət, növbəti ədədi dəyərlər (məsələn, `odd`, `even`) və ya həndəsi ardıcıllıqla ifadə verilə bilər.
//* `li:nth-child(odd) {`
//* `  background-color: lightgray;`  //? Tək nömrəli `li` elementlərinin fonunu boz edər.
//* `}`

//* **5. `:first-child` və `:last-child`**:
//? `:first-child` pseudo-class, valideynin ilk uşaq elementini seçir.
//? `:last-child` isə valideynin son uşaq elementini seçir.
//* `div:first-child {`
//* `  font-weight: bold;`  //? Valideynin ilk `div` elementinin şriftini qalın edər.
//* `}`

//* **6. `:not()`**:
//? `:not()` pseudo-class, müəyyən bir elementdən başqa bütün elementləri seçməyə imkan verir.
//? Bu, istədiyiniz elementi istisna edərək digər elementləri seçmək üçün istifadə edilə bilər.
//* `p:not(.highlight) {`
//* `  color: gray;`  //? `.highlight` class-ına sahib olmayan bütün `p` elementlərini boz rəngdə göstərər.
//* `}`

//* **7. `:empty`**:
//? `:empty` pseudo-class, heç bir uşağı olmayan elementləri seçir.
//? Bu xüsusiyyət, boş elementləri tapan və onlara fərqli stil tətbiq edən üsul olaraq istifadə edilir.
//* `div:empty {`
//* `  display: none;`  //? Boş `div` elementlərini gizlədər.
//* `}`

//* **8. `:first-of-type` və `:last-of-type`**:
//? `:first-of-type` pseudo-class, müəyyən bir tipdəki ilk elementi seçir.
//? `:last-of-type` isə həmin tipin sonuncu elementini seçir.
//* `p:first-of-type {`
//* `  font-style: italic;`  //? Səhifədəki ilk `p` elementini italic edər.
//* `}`

//* **9. `:checked`**:
//? `:checked` pseudo-class, form elementlərinin seçili vəziyyətini yoxlayır.
//? Məsələn, checkbox və radio düymələrinə tətbiq edilə bilər.
//* `input[type="checkbox"]:checked {`
//* `  background-color: green;`  //? Seçilmiş checkbox elementinin fonunu yaşıl edər.
//* `}`

//* **10. `:disabled` və `:enabled`**:
//? `:disabled` pseudo-class, deaktiv edilmiş elementləri seçir.
//? `:enabled` isə aktivləşdirilmiş elementləri seçir.
//* `button:disabled {`
//* `  background-color: gray;`  //? Deaktiv edilmiş `button` elementini boz fonla göstərər.
//* `}`

//? **CSS Pseudo-Elements Nədir?**
//? CSS Pseudo-Elements, elementin xüsusi hissələrini seçmək və onlara stil tətbiq etmək üçün istifadə olunur.
//? Bu, məzmunu dəyişdirmədən əlavə vizual elementlər yaratmağa imkan verir.
//? Pseudo-elementlər `::` ilə başlanır və aşağıda bəzi əsas pseudo-elementlər var:

//* **1. `::before`**:
//? `::before` pseudo-elementi, bir elementin əvvəlində əlavə məzmun yaradaraq tətbiq edilir.
//? Bu, hər hansı bir elementin əvvəlində əlavə kontent yaratmağa imkan verir.
//* `div::before {`
//* `  content: "Prefix: ";`  //? `div` elementinin əvvəlində "Prefix: " mətnini əlavə edər.
//* `}`

//* **2. `::after`**:
//? `::after` pseudo-elementi, bir elementin sonunda əlavə məzmun yaratmağa imkan verir.
//* `p::after {`
//* `  content: " End.";`  //? Hər bir `p` elementinin sonunda " End." mətnini əlavə edər.
//* `}`

//* **3. `::first-letter`**:
//? `::first-letter` pseudo-elementi, bir elementin ilk hərfini seçir və ona xüsusi stil tətbiq edir.
//* `p::first-letter {`
//* `  font-size: 2em;`  //? `p` elementinin ilk hərfini iki dəfə daha böyük göstərər.
//* `}`

//* **4. `::first-line`**:
//? `::first-line` pseudo-elementi, bir elementin ilk sətirini seçir.
//* `p::first-line {`
//* `  font-weight: bold;`  //? `p` elementinin ilk sətirini qalın edər.
//* `}`

//* **5. `::selection`**:
//? `::selection` pseudo-elementi, istifadəçi məzmunu seçdikdə, yəni, mətni seçdikdə tətbiq olunur.
//* `::selection {`
//* `  background-color: yellow;`  //? Seçilən mətnin fonunu sarı edər.
//* `}`