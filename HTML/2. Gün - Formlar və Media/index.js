//* 2. Gün - Formlar və Media

//? Formlar və Media veb səhifələrində məlumat toplamaq və vizual məzmun göstərmək üçün istifadə olunur. Bu dərs vasitəsilə HTML formalarının qurulması və media elementlərinin işlədilməsi barədə məlumat verəcəyik.

//* HTML Formaları

//? HTML formaları, istifadəçilərdən məlumat toplamaq üçün istifadə olunur. Formanın içində müxtəlif elementlər ola bilər: inputlar, düymələr, seçimlər və s.
//* Əsas forma elementləri:
//* - `<form>`: Formanın başlanğıcı və bitişini müəyyən edir.
//* - `<input>`: İstifadəçinin daxil etməsi üçün bir sahə. Fərqli `type` atributları ilə istifadə edilə bilər (text, password, email və s.).
//* - `<label>`: Form sahələrinin adlarını göstərmək üçün istifadə olunur.
//* - `<textarea>`: Bir neçə sətirlik mətni daxil etmək üçün sahə.
//* - `<button>`: Formu göndərmək üçün istifadə olunur.
//* - `<select>`: Seçimlərdən birini seçmək üçün istifadə olunur.

//? HTML Formasının Strukturunu Yaradın:

//? Bir forma elementinin sadə quruluşu:
//* `<form action="/submit" method="POST">`
//* `<label for="name">Adınız:</label>`
//* `<input type="text" id="name" name="name">`
//* `<button type="submit">Göndər</button>`
//* `</form>`

//* Media Elementləri

//? Media elementləri veb səhifəsində şəkil, video və səs kimi müxtəlif məzmunları göstərmək üçün istifadə olunur.
//? HTML-də şəkil, video və audio elementlərini yerləşdirmək üçün aşağıdakı etiketlərdən istifadə olunur:

//? 1. **Şəkillər:**
//* - `<img>`: Şəkil əlavə etmək üçün istifadə olunur.
//* - `src` atributu şəkilin ünvanını göstərir.
//* - `alt` atributu şəkil yüklənmədikdə alternativ mətn göstərir.

//* Şəkil elementinin nümunəsi:
//* `<img src="image.jpg" alt="Açıklama">`

//? 2. **Video:**
//* - `<video>`: Video əlavə etmək üçün istifadə olunur.
//* - `controls` atributu istifadəçiyə videonu idarə etməyə imkan verir.

//* Video elementinin nümunəsi:
//* `<video controls>`
//* `  <source src="video.mp4" type="video/mp4">`
//* `  Sizin brauzeriniz video etiketini dəstəkləmir.`
//* `</video>`

//? 3. **Audio:**
//* - `<audio>`: Səs faylını əlavə etmək üçün istifadə olunur.
//* - `controls` atributu istifadəçiyə audioyu idarə etməyə imkan verir.

//* Audio elementinin nümunəsi:
//* `<audio controls>`
//* `  <source src="audio.mp3" type="audio/mp3">`
//* `  Sizin brauzeriniz audio etiketini dəstəkləmir.`
//* `</audio>`

//? Formların təhlükəsizliyi çox vacibdir. Formlardan istifadəçi məlumatları əldə edildiyi zaman, bu məlumatların düzgün şəkildə toplanması və göndərilməsi lazımdır.
//* 1. **Verilənlərin Təhlükəsizliyini Təmin Etmək:** 
//*Formlar HTTP və HTTPS protokolları ilə göndərilməlidir. HTTPS, məlumatların şifrələnməsini təmin edir.
//? 2. **Xüsusi Təhlükəsizlik Tədbirləri:** 
//* Formda istifadəçi girişi yoxlanmalıdır (validasiya), spam botların qarşısını almaq üçün CAPTCHA istifadə edilə bilər.

//* HTML Form Elementləri:

//? Formada istifadə edilən digər əhəmiyyətli elementlər:
//? 1. **Radio Button:** İstifadəçiyə yalnız bir seçim etməyə imkan verir.
//todo - `<input type="radio">`
//? 2. **Checkbox:** Bir və ya bir neçə seçim etməyə imkan verir.
//todo - `<input type="checkbox">`
//? 3. **Select Box:** Bir neçə seçimdən istifadəçiyə seçim imkanı verir.
//todo - `<select>` ve `<option>`
//? 4. **File Input:** İstifadəçiyə fayl yükləməyə imkan verir.
//todo - `<input type="file">`

//? Formu işlədikdən sonra məlumatlar serverə göndərilərək işlənir. Bütün bu elementlər istifadəçi qarşılıqlı əlaqəsini təmin etmək və məlumat toplamaq üçün vacibdir.
