//* 14. Gün - Bootstrap 5 İstifadəsi və Komponentlər

//? **Bootstrap 5 Containers və Breakpoints**
//? Bootstrap 5-də **Container** komponentləri veb səhifə dizaynını çevik və reaktiv etmək üçün istifadə olunur.
//? Container-lar səhifənin içeriğini düzgün bir şəkildə mərkəzləşdirir və ona müəyyən bir maksimal genişlik təyin edir.

//* **Container**:
//? **.container** sinifi tam genişlikdə olan, lakin müəyyən bir maksimal ölçüyə sahib konteynerdir.
//? **.container-fluid** sinifi tam genişlikdə olan və ekranın ölçüsünə uyğunlaşan konteynerdir. 
//* Məsələn, bu iki konteyner sinifi aşağıdakı kimi istifadə edilir:
`<div class="container">
  <p>Bu konteynerin eni 1200px-dən çox olmayacaq.</p>
</div>

<div class="container-fluid">
  <p>Bu konteyner tam genişlikdədir.</p>
</div>`

//? **Breakpoints**:
//? Bootstrap 5, responsiv dizayn yaratmaq üçün **breakpoints** istifadə edir. Bu breakpoints, müxtəlif ekran ölçülərinə uyğunlaşmağa imkan verir.
//? Aşağıdakı siniflər breakpoints ilə işləyir: 
//? **.col-sm-**, **.col-md-**, **.col-lg-**, **.col-xl-**, **.col-xxl-**.
//* Məsələn, aşağıdakı kodla ekran ölçüsünə görə sütun ölçülərini təyin edə bilərsiniz:
`<div class="row">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">Content</div>
</div>
`
//? **Grid Sistemi (Basic)**
//? Bootstrap-in Grid sistemi 12 sütunlu bir quruluş istifadə edir. `col-*` sinifləri ilə, müxtəlif ekran ölçülərinə uyğunlaşan sütunlar yaradılır.
//? `col-12` bütün genişliyi alır, `col-sm-6` isə kiçik ekranlarda iki sütunlu bir layout yaradır.
`<div class="row">
  <div class="col-12 col-md-6">Content 1</div>
  <div class="col-12 col-md-6">Content 2</div>
</div>`

//? **Bootstrap Typography**
//? Bootstrap 5-də typografi komponentləri, mətni tərtib etmək və stil vermək üçün asan yollar təqdim edir. 
//? Aşağıdakı siniflər mətnin ölçüsünü, qalınlığını və rəngini dəyişdirmək üçün istifadə olunur:
//* **.text-center**, **.text-right**, **.text-left** - mətni sırasıyla mərkəzləşdirir, sağa və ya sola hizalayır.
//* **.text-uppercase**, **.text-lowercase**, **.text-capitalize** - mətni böyük, kiçik və ya baş hərflə yazdırır.
//* **.font-weight-bold**, **.font-weight-normal** - mətnin qalınlığını təyin edir.
//* **.lead** - mətni vurğulamaq üçün istifadə olunur.

`<p class="text-center text-uppercase font-weight-bold">Bu bir başlıqdır.</p>`

//? **Bootstrap 5 Colors**
//? Bootstrap 5-də rənglər müxtəlif komponentlər üçün əksər hallarda istifadə olunur.
//? Bunlar həm fon, həm də mətni təyin etmək üçün istifadə edilə bilər.
//? **.bg-primary**, **.bg-success**, **.bg-danger** və s. siniflər arxa plan rəngini təyin edir.
//? **.text-white**, **.text-dark**, **.text-muted** sinifləri isə mətn rənglərini təyin edir.

`<div class="bg-primary text-white p-3">Bu mətn ağ rəngdədir, fon mavi olacaq</div>`
//? **Bootstrap 5 Tables**
//? Bootstrap 5 cədvəllər üçün stilizasiya təklif edir. Cədvəlin daha yaxşı görünməsi üçün müxtəlif siniflər mövcuddur:
//* **.table** - sadə cədvəl yaratmaq üçün istifadə olunur.
//* **.table-striped** - cədvəldə çubuqlar əlavə edir.
//* **.table-bordered** - cədvəli sərhədlərlə bəzəyir.
//* **.table-hover** - cədvəlin üzərinə gəldikdə hover effekti əlavə edir.
//* **.table-sm** - cədvəli kiçik ölçüdə göstərir.

`<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Ad</th>
      <th>Yaş</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ali</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
`
//? **Bootstrap 5 Images**
//? Bootstrap 5-də şəkillər ilə işləyərkən reaktiv və uyumlu dizayn üçün müxtəlif siniflər mövcuddur:
//* **.img-fluid** - şəkli resizdən asılı olmayaraq ekran ölçüsünə uyğunlaşdırır.
//* **.rounded** - şəkli yuvarlaqlaşdırır.
//* **.img-thumbnail** - şəkli bir çərçivə ilə göstərir.

`<img src="image.jpg" class="img-fluid rounded" alt="Şəkil">`

//? **Bootstrap 5 Jumbotron**
//? Jumbotron komponenti, böyük, vurğulanan bir məzmun bloku yaratmaq üçün istifadə olunur. Bu komponentdə əsasən başlıqlar və mətnlər göstərilir.
//? **.jumbotron** sinifi artıq Bootstrap 5-də mövcud deyil, amma özünüz yaratmaq üçün bu stil təklif edilə bilər.

`<div class="jumbotron">
  <h1 class="display-4">Salam, dünya!</h1>
  <p class="lead">Bu, Bootstrap 5-in təklif etdiyi böyük bir məzmundur.</p>
</div>`

//? **Bootstrap 5 Alerts**
//? Bootstrap 5-in alert komponenti, səhifədəki müxtəlif vəziyyətlərə cavab olaraq istifadəçiyə məlumat vermək üçün istifadə olunur.
//? **.alert**, **.alert-success**, **.alert-danger** və digər siniflər ilə müxtəlif rənglərdə bildirişlər yaradıla bilər.
`<div class="alert alert-success" role="alert">
  Bu uğurlu əməliyyat idi!
</div>`

//? **Bootstrap 5 Buttons**
//? Bootstrap 5-də butonlar üçün müxtəlif siniflər mövcuddur:
//* **.btn-primary**, **.btn-secondary**, **.btn-danger**, **.btn-success** və s. - müxtəlif rənglərdə butonlar yaradır.
//* **.btn-lg**, **.btn-sm** - butonun ölçüsünü dəyişir.
//* **.btn-block** - butonu tam genişlikdə göstərir.

`<button class="btn btn-primary">Primary Button</button>`

//? **Bootstrap 5 Button Groups**
//? Butonlar arasında qruplar yaratmaq üçün **.btn-group** sinifindən istifadə edilir. 
//* **.btn-group-vertical** sinifi ilə butonlar şaquli şəkildə yerləşdirilə bilər.
`<div class="btn-group">
  <button class="btn btn-secondary">Button 1</button>
  <button class="btn btn-secondary">Button 2</button>
</div>`

//? **Bootstrap 5 Badges**
//? **.badge** sinifi ilə kiçik etiketlər və bildirişlər yaradılır. Məsələn, sayı göstərmək üçün istifadə edilir.
//* **.badge-pill** - yuvarlaqlaşdırılmış etiketlər.

`<span class="badge bg-primary">Yeni</span>`

//? **Bootstrap 5 Progress Bars**
//? **.progress** və **.progress-bar** sinifləri ilə yükləmə çubuqları və irəliləyiş göstəriciləri yaradılır.
//* **.progress-bar-striped** - çubuğa şaquli xətt əlavə edir.
//* **.progress-bar-animated** - çubuğu animasiya ilə hərəkət etdirir.

`<div class="progress">
  <div class="progress-bar" style="width: 50%"></div>
</div>`

//? **Bootstrap 5 List Groups**
//? **.list-group** sinifi ilə bir sıra elementlər yığılır və onlara fərqli stillər tətbiq edilir.
//* **.list-group-item** - siyahı elementi.
`<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Item 1</a>
  <a href="#" class="list-group-item list-group-item-action">Item 2</a>
</div>`

//? **Nəticə**:
//? Bootstrap 5, responsiv dizayn yaratmaq üçün güclü bir alətdir. Container, grid sistemi, typography, rənglər, cədvəllər, şəkillər, butonlar və s. komponentlər, istifadəçilərin rahatlıqla reaktiv və estetik səhifələr yaratmasına imkan verir.
