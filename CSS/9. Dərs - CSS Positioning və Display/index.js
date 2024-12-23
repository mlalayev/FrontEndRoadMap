//* 9. Gün - CSS Positioning və Display

//? **CSS Positioning Nədir?**
//? CSS Positioning, elementlərin səhifə üzərindəki yerlərini təyin etmək üçün istifadə olunur.
//? 4 əsas `position` növü var:
//? 1. **static**: Varsayılan mövqeləmə növüdür, element səhifədə normal axınla yerləşir.
//? 2. **relative**: Elementin orijinal mövqeyinə görə yerini dəyişdirmək üçün istifadə olunur.
//? 3. **absolute**: Elementin ən yaxın `position: relative;` olan elementinə görə mövqeləndirilməsi.
//? 4. **fixed**: Elementin ekranın müəyyən bir yerində sabit qalmasını təmin edir.
//? 5. **sticky**: Elementin səhifə ilə scroll edərkən müəyyən bir yerdə qalmasını təmin edir.

//* **1. Static Position**:
//? Bu, varsayılan mövqeləmə növüdür. `position: static;` verilən element səhifədə təbii axına uyğun olaraq yerləşir.
//* `div {`
//* `  position: static;`  //? Element normal səhifə axını ilə yerləşir.
//* `}`

//* **2. Relative Position**:
//? `position: relative;` ilə element öz orijinal mövqeyinə görə yerini dəyişdirə bilər.
//? `top`, `right`, `bottom`, və `left` xüsusiyyətləri ilə mövqeyi tənzimləyə bilərik.
//? **Relative positioning** ilə element hələ də digər elementlərin yerini dəyişdirmir, yalnız öz mövqeyini dəyişdirir.

//* **Relative Position Nümunəsi**:
//* `div {`
//* `  position: relative;`  //? Elementin mövqeyini orijinal yerindən dəyişdirir.
//* `  top: 20px;`  //? Elementin üst kənarını 20px aşağıya çəkir.
//* `  left: 10px;`  //? Elementin sol kənarını 10px sağa çəkir.
//* `}`

//* **3. Absolute Position**:
//? `position: absolute;` ilə elementin yerləşməsi ən yaxın `position: relative;` olan elementə görə təyin edilir.
//? Bu, daha sərbəst yerləşdirmə və səhifə layoutunu daha mükəmməl idarə etməyə imkan verir.

//* **Absolute Position Nümunəsi**:
//* `div.container {`
//* `  position: relative;`  //? Ən yaxın relative element burada təyin olunur.
//* `}`
//* `div.item {`
//* `  position: absolute;`  //? Element ən yaxın relative konteynerə görə yerləşir.
//* `  top: 50px;`  //? Elementin üst kənarı 50px olacaq.
//* `  left: 50px;`  //? Elementin sol kənarı 50px olacaq.
//* `}`

//* **4. Fixed Position**:
//? `position: fixed;` ilə element, səhifənin müəyyən bir yerində sabit qalır. Bu xüsusiyyət sayfanın scroll edilməsi zamanı da dəyişməz qalır.
//? Məsələn, səhifənin üstündə və ya sol tərəfində sabit bir başlıq yaratmaq üçün istifadə olunur.

//* **Fixed Position Nümunəsi**:
//* `header {`
//* `  position: fixed;`  //? Element sabit olacaq.
//* `  top: 0;`  //? Element səhifənin üst hissəsində sabit olacaq.
//* `  width: 100%;`  //? Elementin eni 100% olacaq.
//* `}`

//* **5. Sticky Position**:
//? `position: sticky;` ilə element səhifə ilə birlikdə yuxarıya və ya aşağıya doğru sürüşərkən müəyyən bir mövqedə qalır.
//? Məsələn, səhifənin başlığını scroll edərkən sabit saxlamaq üçün istifadə edilir.

//* **Sticky Position Nümunəsi**:
//* `header {`
//* `  position: sticky;`  //? Elementin mövqeyi səhifə ilə birlikdə qalacaq.
//* `  top: 0;`  //? Element səhifənin üst hissəsinə yerləşəcək.
//* `}`

//? **CSS Display Nədir?**
//? `display` xüsusiyyəti, elementlərin necə göstəriləcəyini müəyyən edən CSS xüsusiyyətidir.
//? `display` xüsusiyyətinin ən çox istifadə edilən dəyərləri:
//? - `block`: Block-level elementlər, tam genişlik alır və növbəti elementdən əvvəl yerləşir.
//? - `inline`: Inline elementlər, yalnız lazım olan qədər genişlik alır və növbəti elementlə yan-yana yerləşir.
//? - `inline-block`: Inline və block elementlərinin birləşməsidir, həm block, həm də inline xüsusiyyətləri var.
//? - `none`: Elementin görünməməsini təmin edir, lakin layoutdan silinmir.

//* **Display Block Nümunəsi**:
//* `div {`
//* `  display: block;`  //? Element tam genişlik alacaq və növbəti elementin üzərinə yerləşməyəcək.
//* `}`

//* **Display Inline Nümunəsi**:
//* `span {`
//* `  display: inline;`  //? Element yalnız lazım olduğu qədər genişlik alacaq və növbəti elementlə yan-yana yerləşəcək.
//* `}`

//* **Display Inline-Block Nümunəsi**:
//* `div {`
//* `  display: inline-block;`  //? Element inline olaraq yerləşəcək, amma öz ölçüsünü müəyyən edə biləcək.
//* `}`

//* **Display None Nümunəsi**:
//? `display: none;` ilə bir elementin tamamilə görünməz edilməsini təmin edə bilərik.
//? Bu, HTML elementini gizlətmək və səhifədən silmək üçün istifadə olunur, amma elementin hələ də DOM-da olduğunu unutmayın.

//* **Display None Nümunəsi**:
//* `div {`
//* `  display: none;`  //? Element tamamilə gizlədilir.
//* `}`