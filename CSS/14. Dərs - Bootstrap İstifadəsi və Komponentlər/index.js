//* 14. Gün - Bootstrap İstifadəsi və Komponentlər

//? **Bootstrap Grid Sistemi**
//? Bootstrap-in **Grid Sistemi** veb səhifələrin reaktiv dizaynını yaratmaq üçün çox faydalıdır.
//? Grid sistemi, 12 sütundan ibarət bir quruluşdan istifadə edir.
//? Siz bir sıra daxilində müxtəlif ölçülü sütunlar yarada bilərsiniz.
//? Grid sistemi ilə həmçinin müxtəlif ekran ölçüləri üçün uyğunlaşma təmin etmək mümkündür.

//* **Row və Col**:
//? **row** sinifi, elementləri üfüqi sırada yerləşdirir, **col** sinifi isə sütunları təyin edir.
//? Hər bir **row** daxilində 12 sütun yerləşdirə bilərsiniz.
//* **Nümunə**: 12 sütunun tam genişliyini istifadə etmək.
//* `div.row {`
//* `  <div class="col-12">Content 1</div>`  //? 12 sütun tam genişlik alır
//* `}</div>`

//? **İki Sütunlu Layout**:
//* `div.row {`
//* `  <div class="col-md-6">Content 1</div>`  //? 6 sütun, ekran ölçüsünə uyğun olaraq yarıya bölünür.
//* `  <div class="col-md-6">Content 2</div>`  //? 6 sütun, digər yarım.
//* `}</div>`

//? **Sütun Genişliklərini Təyin Etmək**:
//* `div.row {`
//* `  <div class="col-4">Content 1</div>`  //? 4 sütun genişlik alır.
//* `  <div class="col-8">Content 2</div>`  //? 8 sütun genişlik alır.
//* `}</div>`

//? **Responsive Grid**:
//? Bootstrap-in `col-`, `col-sm-`, `col-md-`, `col-lg-` sinifləri ilə sütunlar, müxtəlif ekran ölçülərinə uyğunlaşır.
//* `div.row {`
//* `  <div class="col-sm-12 col-md-6 col-lg-4">Content</div>`  //? 12 sütun kiçik ekranlar üçün, 6 orta ölçülər üçün və 4 böyük ekranlar üçün.
//* `}</div>`

//* **Bootstrap Table Komponentləri**:
//? Bootstrap, müxtəlif növ cədvəllər yaratmağa imkan verir və bu cədvəllərin responsive olmasını təmin edir.

//* **Sadə Cədvəl**:
//* `table` sinifi ilə cədvəl yarada bilərsiniz.
//* `<table class="table">`
//* `  <thead>`
//* `    <tr>`
//* `      <th>#</th>`
//* `      <th>Ad</th>`
//* `      <th>Yaş</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>1</td>`
//* `      <td>Ali</td>`
//* `      <td>25</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? **Responsive Cədvəl**:
//? Cədvəlin genişliyi ekranda sıxılmaması üçün **table-responsive** sinifini əlavə edirik.
//* `<div class="table-responsive">`
//* `  <table class="table">`
//* `    ...`
//* `  </table>`
//* `</div>`

//? **Cədvəl Stilizasiya**:
//? Bootstrap həmçinin cədvəl üçün müxtəlif stildə komponentlər təqdim edir:
//* `table-bordered` - Sərhədlərlə cədvəl.
//* `table-striped` - Çizgilərlə cədvəl.
//* `table-hover` - Hover (üzərinə gələndə) effektləri.
//* `table-sm` - Kiçik ölçülü cədvəl.

//* **Form Komponentləri**:
//? Bootstrap form elementləri ilə istifadənin asanlığına görə, çox vaxt istifadə olunur. İstifadəçilərin rahat məlumat daxil etməsi üçün aşağıdakı komponentlər mövcuddur.

//* **Text Input**:
//* `input` sinifi ilə forma daxilində mətn daxil edilə bilər.
//* `<input class="form-control" type="text" placeholder="Adınızı daxil edin">`

//* **Color Input**:
//* İstifadəçiyə rəng seçmək imkanı verən form sahəsi.
//* `<input class="form-control" type="color">`

//* **Checkbox və Radio Button**:
//* Çoxlu seçimlər üçün checkbox və radio buttonlar istifadə edilir.
//* `<input class="form-check-input" type="checkbox" id="checkbox1">`
//* `<label class="form-check-label" for="checkbox1">Checkbox</label>`
//* `<input class="form-check-input" type="radio" name="exampleRadios" id="radio1">`
//* `<label class="form-check-label" for="radio1">Radio Button</label>`

//* **Toggle Switch**:
//* `form-switch` sinifi ilə toggle switch (keçid düyməsi) yarada bilərsiniz.
//* `<div class="form-check form-switch">`
//* `  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">`
//* `  <label class="form-check-label" for="flexSwitchCheckDefault">Toggle switch</label>`
//* `</div>`

//* **Input Group**:
//? Input group ilə müxtəlif form elementlərini birləşdirə bilərsiniz (məsələn, mətn və ikonu birləşdirmək).
//* `<div class="input-group">`
//* `  <div class="input-group-prepend">`
//* `    <span class="input-group-text">@</span>`
//* `  </div>`
//* `  <input type="text" class="form-control" placeholder="Username">`
//* `</div>`

//* **Floating Labels**:
//* Floating labels istifadəçi ilə forma daxil edərkən labelın üzərində durmasını təmin edir.
//* `<div class="form-floating">`
//* `  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">`
//* `  <label for="floatingInput">Email address</label>`
//* `</div>`

//* **Input Group Text**:
//* `input-group-text` ilə input sahəsinə əlavə mətni daxil edə bilərsiniz.
//* `<div class="input-group">`
//* `  <span class="input-group-text">$</span>`
//* `  <input type="text" class="form-control" placeholder="Amount">`
//* `</div>`

//* **Input Range**:
//* `input type="range"` ilə istifadəçilərə qiymət seçmək imkanı verən bir element yaratmaq mümkündür.
//* `<input type="range" class="form-range" id="customRange1">`

//* **Button Group və Vertical Button Group**:
//? Butonlar arasında qruplar yaratmaq üçün Bootstrap-in **btn-group** sinifindən istifadə edilir.
//* `div.btn-group {`
//* `  <button class="btn btn-primary">Button 1</button>`
//* `  <button class="btn btn-secondary">Button 2</button>`
//* `}</div>`

//? **Vertical Button Group**:
//? Butonları şaquli yığmaq üçün `btn-group-vertical` sinifindən istifadə edilir.
//* `div.btn-group-vertical {`
//* `  <button class="btn btn-primary">Button 1</button>`
//* `  <button class="btn btn-secondary">Button 2</button>`
//* `}</div>`

//? **Button Sinifləri**:
//? Bootstrap müxtəlif növ butonlar üçün fərqli siniflər təqdim edir:
//* `btn-primary`, `btn-secondary`, `btn-danger`, `btn-success`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`
