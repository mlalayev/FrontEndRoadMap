//* 7. Gün - CSS Flexbox və Grid Layouts

//? **CSS Flexbox və Grid Layouts**
//? CSS Flexbox və Grid, veb səhifələrində məzmunu asanlıqla yerləşdirmək və nizamlamaq üçün istifadə olunan güclü alətlərdir.
//? Bu gün bu iki layout sistemini dərindən öyrənəcəyik.

//* **1. CSS Flexbox**:
//? **Flexbox**, elementləri ardıcıl olaraq yerləşdirmək üçün istifadə olunur və boşluqları bərabər şəkildə yaymaqda çox faydalıdır.
//? Flexbox, məzmunun yönünü və sırasını idarə etmək üçün çox rahatdır.
//? Əsas xüsusiyyətlər:
//? - Yatay və şaquli istiqamətdə hizalama
//? - Əsas ox (row) və ya şaquli ox (column) istiqamətində yerləşdirmə
//? - Flex xüsusiyyətləri ilə elementlərin ölçülərini idarə etmə
//? **Flexbox Nümunəsi**:

//* <div style="display: flex; justify-content: space-between;">
//*   <div>Element 1</div>
//*   <div>Element 2</div>
//*   <div>Element 3</div>
//* </div>

//? **2. Flexbox Açıklaması**:
//? `display: flex;` - Flex konteynerini yaratmaq üçün istifadə olunur.
//? `justify-content: space-between;` - Elementləri sağa və sola yayır, aralarındaki boşluğu bərabər paylayır.
//? Flexbox daha çox elementin müvafiq ölçülərdə yerləşməsi və uyğun istiqamətə yönəlməsi üçün istifadə olunur.

//* **Flexbox Əlavə Xüsusiyyətlər**:
//? - `align-items`: Elementləri şaquli olaraq hizalayır.
//? - `flex-direction`: Flex konteynerinin elementlərini müəyyən istiqamətdə yerləşdirir (row, column, row-reverse, column-reverse).
//? - `flex-wrap`: Elementlərin bir xəttə sığmaması halında növbəti sətirdə yerləşdirilməsini təmin edir.
//? - `align-self`: Müəyyən bir elementin hizalanmasını tənzimləməyə imkan verir.
//? **Nümunə**:

//* <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
//*   <div style="flex: 1;">Element 1</div>
//*   <div style="flex: 1;">Element 2</div>
//*   <div style="flex: 1;">Element 3</div>
//* </div>

//* **3. CSS Grid Layout**:
//? **Grid Layout**, daha mürəkkəb və çox sətirli dizaynlar üçün istifadə olunur. Elementləri həm şaquli, həm də üfüqi olaraq yerləşdirmək üçün çox güclüdür.
//? `display: grid;` ilə grid konteyneri yaratmaq və sonra `grid-template-columns`, `grid-template-rows` ilə sütun və sətir ölçülərini təyin etmək mümkündür.
//? **Grid Layout Nümunəsi**:

//* <div style="display: grid; grid-template-columns: auto auto auto;">
//*   <div>Element 1</div>
//*   <div>Element 2</div>
//*   <div>Element 3</div>
//* </div>

//? **4. Grid Layout Açıklaması**:
//? `display: grid;` - Grid konteynerini yaratmaq üçün istifadə olunur.
//? `grid-template-columns: auto auto auto;` - Üç sütunlu bir grid düzəldir, hər biri eyni ölçüdədir.

//* **Grid Layout Əlavə Xüsusiyyətlər**:
//? - `grid-template-areas`: Qeyri-adi yerlərdə və xüsusi sahələrdə elementlər yerləşdirmək üçün istifadə olunur.
//? - `grid-column`, `grid-row`: Elementləri xüsusi bir sütun və ya sətrə yerləşdirmək üçün istifadə edilir.
//? - `gap`: Sətir və sütun arasındakı boşluğu müəyyənləşdirir.
//? - `justify-items`, `align-items`: Grid elementlərini üfüqi və şaquli olaraq hizalayır.
//? **Nümunə**:

//* <div style="display: grid; grid-template-columns: 1fr 2fr 1fr; grid-gap: 10px;">
//*   <div>Element 1</div>
//*   <div>Element 2</div>
//*   <div>Element 3</div>
//* </div>

//* **5. Flexbox və Grid Arasındakı Fərqlər**:
//? - Flexbox bir ölçü üzrə (yəni yalnız bir sətir və ya sütun üzrə) yaxşı işləyir, ancaq Grid daha mürəkkəb və çox ölçülü dizaynlar üçün uyğundur.
//? - Flexbox-un yönünü dəyişdirmək asan olsa da, Grid çox daha dəqiq nizamlamalar etməyə imkan verir.
//? - Hər iki sistemdə də boşluqları, hizalanmanı və ölçüləri asanlıqla tənzimləmək mümkündür.

//* **Qısa Xülasə**:
//? - Flexbox, elementlərin ardıcıl olaraq yerləşdirilməsini və boşluqların idarə olunmasını təmin edir.
//? - Grid Layout, kompleks şəbəkə tərtibatları və müxtəlif ölçülü düzülüşlər üçün daha güclü və daha çevikdir.
//? Hər iki sistem müasir veb dizaynlarında geniş istifadə olunur və birləşdirilərək daha mürəkkəb tərtibatlar yaradıla bilər.
