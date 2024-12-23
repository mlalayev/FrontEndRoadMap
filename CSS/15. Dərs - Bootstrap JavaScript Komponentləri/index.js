//* 15. Gün - Bootstrap JavaScript Komponentləri

//? **Button Toggles**:
//? Bootstrap-də button toggle, istifadəçiyə bir neçə vəziyyət arasında keçid etməyə imkan verir.
//? Bu, məsələn, **collapse**, **dropdown**, və ya **tab** keçidləri üçün istifadə edilə bilər.

//* **Collapse Button (Toggle)**:
//? Collapse ilə düyməyə klikləməklə bir elementi gizlədib, yenidən göstərmək mümkündür.
//* `<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">`
//* `  Toggle Collapse`
//* `</button>`
//* `<div class="collapse" id="collapseExample">`
//* `  <div class="card card-body">`
//* `    This is some placeholder content for the collapse component.`
//* `  </div>`
//* `</div>`

//? **Dropdown Button (Toggle)**:
//? Dropdown menyusu açmaq üçün düymə istifadə edilir.
//* `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">`
//* `  Dropdown button`
//* `</button>`
//* `<ul class="dropdown-menu">`
//* `  <li><a class="dropdown-item" href="#">Action</a></li>`
//* `  <li><a class="dropdown-item" href="#">Another action</a></li>`
//* `</ul>`

//? **Links (`<a>` Tags) ilə Toggles**:
//? `data-bs-toggle` atributu ilə linkləri dinamik şəkildə istifadə etmək mümkündür. Məsələn, accordion və ya tabs istifadə edərkən `a` tags istifadə olunur.

//* **Tab Toggle (Using `<a>` tag)**:
//* `a` etiketi ilə tablar arasında keçid etmək mümkündür.
//* `<ul class="nav nav-tabs" id="myTab" role="tablist">`
//* `  <li class="nav-item" role="presentation">`
//* `    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>`
//* `  </li>`
//* `</ul>`
//* `<div class="tab-content" id="myTabContent">`
//* `  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">`
//* `    Tab content goes here.`
//* `  </div>`
//* `</div>`

//? **Accordion**:
//? Accordion komponenti, bir neçə içeriği daxil edib yalnız birini eyni anda göstərmək imkanı verir.
//* `<div class="accordion" id="accordionExample">`
//* `  <div class="accordion-item">`
//* `    <h2 class="accordion-header" id="headingOne">`
//* `      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">`
//* `        Accordion Item #1`
//* `      </button>`
//* `    </h2>`
//* `    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">`
//* `      <div class="accordion-body">`
//* `        Some placeholder content for the first accordion panel.`
//* `      </div>`
//* `    </div>`
//* `  </div>`
//* `</div>`

//? **Cards**:
//? Bootstrap-də kartlar (cards) dinamik və zəngin interfeyslər üçün istifadə edilir. Kartlar, başlıq, məzmun, şəkil və digər komponentləri daxil edə bilər.
//* `<div class="card" style="width: 18rem;">`
//* `  <img src="..." class="card-img-top" alt="...">`
//* `  <div class="card-body">`
//* `    <h5 class="card-title">Card title</h5>`
//* `    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`
//* `    <a href="#" class="btn btn-primary">Go somewhere</a>`
//* `  </div>`
//* `</div>`

//? **Responsive Images**:
//? Bootstrap-də şəkillər üçün `img-fluid` sinifi istifadə edərək şəkilin tam genişlikdə və müvafiq ekran ölçüsünə uyğun olmasını təmin etmək mümkündür.
//* `<img src="image.jpg" class="img-fluid" alt="Responsive image">`

//? **Modals**:
//? Modallar, istifadəçiyə əlavə məlumat və ya əməliyyat təklif edən popup pəncərələridir.
//? Modalın görünüşünü idarə etmək üçün **data-bs-toggle="modal"** istifadə olunur.

//* **Modal Trigger**:
//* `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">`
//* `  Launch modal`
//* `</button>`

//* **Modal İçeriği**:
//* `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`
//* `  <div class="modal-dialog">`
//* `    <div class="modal-content">`
//* `      <div class="modal-header">`
//* `        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>`
//* `        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
//* `      </div>`
//* `      <div class="modal-body">`
//* `        ...`
//* `      </div>`
//* `      <div class="modal-footer">`
//* `        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`
//* `        <button type="button" class="btn btn-primary">Save changes</button>`
//* `      </div>`
//* `    </div>`
//* `  </div>`
//* `</div>`

//? **Modal Dinamik Bağlantı**:
//? Modalı JavaScript ilə da başlatmaq mümkündür.
//* `var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))`
//* `myModal.show();`

//? **Carousel (Slideshow)**:
//? Carousel, şəkillər və ya məzmun arasında keçid etməyə imkan verir.
//* `<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">`
//* `  <div class="carousel-inner">`
//* `    <div class="carousel-item active">`
//* `      <img src="..." class="d-block w-100" alt="...">`
//* `    </div>`
//* `    <div class="carousel-item">`
//* `      <img src="..." class="d-block w-100" alt="...">`
//* `    </div>`
//* `  </div>`
//* `  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">`
//* `    <span class="carousel-control-prev-icon" aria-hidden="true"></span>`
//* `    <span class="visually-hidden">Previous</span>`
//* `  </button>`
//* `  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">`
//* `    <span class="carousel-control-next-icon" aria-hidden="true"></span>`
//* `    <span class="visually-hidden">Next</span>`
//* `  </button>`
//* `</div>`
