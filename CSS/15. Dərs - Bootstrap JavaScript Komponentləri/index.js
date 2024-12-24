//* 15. Gün - Bootstrap 5 Komponentləri

//? **Bootstrap 5 Cards**
//? **Card** komponenti, kontentləri daha cəlbedici bir şəkildə təqdim etmək üçün istifadə olunur. 
//? Kartlar başlıqlar, mətnlər, şəkillər və düymələr daxil olmaqla müxtəlif elementlərdən ibarət ola bilər.
//* **.card** sinifi ilə kart komponenti yaradılır.
//* **.card-header**, **.card-body**, **.card-footer** kartın müxtəlif hissələrini təyin edir.
//* **.card-img-top**, **.card-img-bottom** şəkilləri kartın başına və altına əlavə edir.

`<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="Card image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

//? **Bootstrap 5 Dropdowns**
//? **Dropdown** komponenti istifadəçiyə menyular təqdim etməyə imkan verir. 
//? **.dropdown-toggle** sinifi, menyunun açılmasını təmin edir və **.dropdown-menu** sinifi içindəki elementləri göstərir.
//* **.dropdown-item** hər bir elementin görünüşünü təyin edir.

`<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`

//? **Bootstrap 5 Collapse**
//? **Collapse** komponenti, səhifədəki elementləri gizlətmək və ya göstərmək üçün istifadə olunur.
//? **.collapse** sinifi elementin gizlədilməsini təmin edir, **data-bs-toggle="collapse"** ilə açılmasını təmin edə bilərsiniz.

`<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</button>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component.
  </div>
</div>`

//? **Bootstrap 5 Navbars**
//? **Navbar** komponenti, səhifənin başında naviqasiya menyusu üçün istifadə olunur.
//? **.navbar**, **.navbar-nav** sinifləri ilə menyu yaratmaq olur.
//* **.navbar-toggler** düyməsi menyunun mobil cihazlarda açılmasını təmin edir.

`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
    </ul>
  </div>
</nav>`

//? **Bootstrap 5 Modals**
//? **Modal** komponenti, səhifədə yeni bir pəncərə açaraq istifadəçiyə məlumat və ya form təqdim edir.
//? **.modal** sinifi, modalı təyin edir və **.modal-dialog** sinifi pəncərəni düzgün ölçüdə göstərir.
//* **data-bs-toggle="modal"** ilə modalı açan düymələr istifadə olunur.

`<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Content goes here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`

//? **Bootstrap 5 Forms**
//? **Form** komponenti istifadəçilərin məlumat daxil etməsini təmin etmək üçün geniş imkanlar təqdim edir.
//? **.form-control** sinifi mətn sahələrinin, seçimlərin və digər form elementlərinin stilizasiya edilməsini təmin edir.

`<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`

//? **Bootstrap 5 Form Validation**
//? Bootstrap 5-də form doğrulaması, istifadəçilərdən düzgün məlumat toplamağa kömək edir.
//? **.is-invalid** və **.is-valid** sinifləri ilə səhv və doğru məlumatlar göstərilir.

`<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control is-invalid" id="validationCustom01" required>
    <div class="invalid-feedback">
      Please provide a valid first name.
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`

//? **Bootstrap 5 Inputs, Range, Color, Switch Toggle**
//? Bootstrap 5-də müxtəlif form elementləri üçün siniflər mövcuddur:
//* **.form-control** - əsas mətn sahələri üçün istifadə olunur.
//* **.form-range** - diapazon seçmək üçün istifadə edilir.
//* **.form-color** - rəng seçmək üçün istifadə olunur.
//* **.form-check-input** - checkbox və radio düymələri üçün istifadə edilir.
//* **.form-switch** - toggle switch (keçid düyməsi) üçün istifadə olunur.

`<input type="range" class="form-range" id="customRange1">
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c">
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Check this switch</label>
</div>`

//? **Bootstrap 5 Input Group, Floating Label, InputGroupText**
//? **Input Group** komponenti form elementlərini birləşdirmək üçün istifadə olunur.
//? **.input-group** ilə mətn və ikonları birləşdirmək mümkündür.
//? **.form-floating** ilə forma etiketləri, sahənin üzərinə "yüksəlir" və daha estetik olur.

`<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>`

`<div class="form-floating">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>`

//? **Bootstrap 5 Checkbox və Radio**
//? **.form-check** ilə checkbox və radio düymələri yaradılır. **.form-check-input** ilə girişləri təyin edirik.

`<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>`

//? **Nəticə**:
//? Bootstrap 5, veb inkişafı üçün çoxlu komponentlər təqdim edir. Bunlar, dizaynın həm estetik, həm də funksional cəhətdən zəngin və responsiv olmasını təmin edir. Kartlar, dropdowns, modallar, form komponentləri və daha çoxu ilə, səhifələr daha interaktiv və istifadəçi dostu olur.
