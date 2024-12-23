//* 7. Gün - HTML-də İstifadə Olunmayan Etiketlər və Funksiyalar

//? **HTML-də İstifadə Olunmayan Etiketlər**
//? HTML-də çox sayda etiket mövcuddur ki, onlar müasir veb dizaynında çox istifadə olunmur, amma yenə də bəzi maraqlı və əyləncəli layihələrdə istifadə oluna bilər.
//? Bu etiketlər, JavaScript və ya CSS istifadə etmədən bəzi vizual və funksional xüsusiyyətlər yaratmağa kömək edir.

//* **1. `<marquee>` - Marqit (Scrollable Text)**:
//? `<marquee>` etiketi sayəsində səhifədə mətni sağdan sola və ya yuxarı-aşağı hərəkət etdirmək mümkündür.
//? Lakin bu etiket müasir veb standartlarına uyğun deyil, amma bəzi əyləncəli tətbiqlər üçün istifadə oluna bilər.
//? **Nümunə**:
//* `<marquee direction="left">Bu mətn sağdan sola hərəkət edir!</marquee>`
//* `<marquee direction="up">Bu mətn yuxarıya hərəkət edir!</marquee>`

//* **2. `<blink>` - Blink edən mətn**:
//? `<blink>` etiketi ilə mətni blink (yanıb-sönən) etmək mümkündür. Bu, çox vaxt diqqət çəkmək üçün istifadə olunur.
//? Bu etiket də müasir brauzerlərdə dəstəklənmir, amma bəzi nostaljik layihələrdə faydalı ola bilər.
//? **Nümunə**:
//* `<blink>Bu mətn blink edir!</blink>`

//* **3. `<bgsound>` - Arxa Planda Səs**:
//? `<bgsound>` etiketi səhifənin arxa fonunda musiqi və ya səs səsləndirmək üçün istifadə oluna bilər. Bu etiket yalnız Internet Explorer-də işləyirdi.
//? Bu xüsusiyyət müasir brauzerlərdə dəstəklənməsə də, bəzi nostaljik veb səhifələrdə istifadə edilə bilər.
//? **Nümunə**:
//* `<bgsound src="song.mp3" loop="true">`  //? Musiqi təkrarlanacaq şəkildə çalışacaq.

//* **4. `<center>` - Mərkəzləşdirmə**:
//? `<center>` etiketi səhifədəki məzmunu mərkəzləşdirmək üçün istifadə olunsa da, bu etiket müasir CSS ilə əvəz olunub.
//? Bu etiketi hələ də istifadə edərək mətnləri və ya şəkilləri mərkəzləşdirə bilərsiniz.
//? **Nümunə**:
//* `<center>Bu mətn mərkəzləşdirilib!</center>`

//* **5. `<font>` - Şrift üslubu**:
//? `<font>` etiketi ilə şriftin növünü, ölçüsünü və rəngini təyin etmək mümkündür. Lakin müasir dövrdə CSS şrift tərtibatı üçün istifadə olunur.
//? Bu etiketin istifadəsi bəzi köhnə layihələrdə faydalı ola bilər.
//? **Nümunə**:
//* `<font face="Arial" size="4" color="blue">Bu mavi rəngli Arial şriftində yazılmış mətn!</font>`

//* **6. `<tt>` - Monospace Şrift**:
//? `<tt>` etiketi mətnin monospace (təqdimat şəklində) şriftlə göstərilməsini təmin edir. Bu da köhnə HTML təcrübələrində istifadə olunurdu.
//? **Nümunə**:
//* `<tt>Bu mətn monospace şriftindədir.</tt>`

//* **7. `<u>` - Alt xətləmə**:
//? `<u>` etiketi mətnin altını çəkmək üçün istifadə olunurdu, amma bu funksionallıq artıq müasir HTML-də CSS ilə təmin olunur.
//? Həmçinin, bu etiketin köhnə istifadəsi bəzi dizaynlarda əyləncəli ola bilər.
//? **Nümunə**:
//* `<u>Bu mətnin altı çəki olub.</u>`

//* **8. `<s>` - Üstü xətti mətn**:
//? `<s>` etiketi mətnin üzərinə xətt çəkmək üçün istifadə edilirdi. Bu etiket müasir dövrdə "strikethrough" olaraq CSS ilə istifadə olunur.
//? **Nümunə**:
//* `<s>Bu mətnin üzərinə xətt çəkilmişdir.</s>`

//* **9. `<isindex>` - Axtarış sahəsi**:
//? `<isindex>` etiketi veb səhifəsində axtarış sahəsi yaratmaq üçün istifadə olunurdu, lakin bu xüsusiyyət müasir dövrdə HTML5 ilə əvəzlənib.
//? Həmçinin, `input` etiketləri istifadə edilərək axtarış funksiyaları yaradılır.
//? **Nümunə**:
//* `<isindex prompt="Axtarışınızı daxil edin:">`

//* **10. `<frame>` və `<frameset>` - Çərçivələr**:
//? `<frame>` və `<frameset>` etiketləri veb səhifələrini çərçivələrlə bölmək üçün istifadə olunurdu.
//? Bu etiketlər müasir veb dizaynlarında artıq istifadə edilmir, amma bəzi köhnə veb səhifələrdə yer alır.
//? **Nümunə**:
//* `<frameset cols="50%, 50%">`  //? Çərçivəni iki sütunlu bölür.
//* `<frame src="page1.html">`  //? İlk çərçivə üçün səhifə məzmunu.
//* `<frame src="page2.html">`  //? İkinci çərçivə üçün səhifə məzmunu.

//* **11. `<noframes>` - Çərçivələrdə yoxlama**:
//? `<noframes>` etiketi, çərçivələrin dəstəklənmədiyi brauzerlərdə görünəcək məzmunu təmin edir.
//? Bu etiket də yalnız köhnə brauzerlərdə istifadə olunur və müasir brauzerlərdə artıq dəstəklənmir.
//? **Nümunə**:
//* `<noframes>Bu brauzer çərçivələri dəstəkləmir.</noframes>`


//? **Accordion nədir?**
//? Accordion, veb səhifələrində istifadə olunan interaktiv bir komponentdir, burada istifadəçilər tıkladıqda müəyyən bir məzmun açılır və ya bağlanır.
//? Biz yalnız HTML istifadə edərək sadə bir accordion yaratmaq üçün `<details>`, `<summary>` və digər elementlərdən istifadə edəcəyik.

//* **HTML-də Accordion yaratmaq üçün istifadə olunan etiketlər**:

//* **1. `<details>` - Detallar Etiketi**:
//? `<details>` etiketi, istifadəçiyə göstəriləcək və gizlədiləcək məlumatları daxil etmək üçün istifadə olunur. Bu etiketin daxilində olan məlumatlar əvvəlcə gizlidir, amma istifadəçi tıkladıqda göstərilir.
//? **Nümunə**:
//* `<details>`
//*   <summary>Əlavə məlumat</summary>
//*   <p>Bu məlumat yalnız istifadəçi tıkladıqda görünəcəkdir.</p>
//* `</details>`

//* **2. `<summary>` - Xülasə Etiketi**:
//? `<summary>` etiketi, `<details>` etiketinin başlığını müəyyən edir və istifadəçinin klikləməsi üçün olan yerdir. Bu başlıq üzərinə klikləndikdə, `<details>` içərisindəki məzmun açılır.
//? **Nümunə**:
//* `<summary>Bu bir başlıqdır</summary>` 

//* **Tam Nümunə - Accordion**:
//? Bu sadə HTML accordion nümunəsində, istifadəçilər hər bir başlıq üzərinə tıkladıqda, altındakı məzmunu görə bilərlər.

```html
<details>
  <summary>Birinci Bölmə</summary>
  <p>Bu birinci bölmənin məzmunudur. Burada daha çox məlumat əlavə edə bilərsiniz.</p>
</details>

<details>
  <summary>İkinci Bölmə</summary>
  <p>Bu ikinci bölmənin məzmunudur. Burada əlavə məlumatlar və ya başqa bölmələr yerləşdirilə bilər.</p>
</details>

<details>
  <summary>Üçüncü Bölmə</summary>
  <p>Bu üçüncü bölmənin məzmunudur. İstədiyiniz hər hansı məlumatı buraya əlavə edə bilərsiniz.</p>
</details>
```