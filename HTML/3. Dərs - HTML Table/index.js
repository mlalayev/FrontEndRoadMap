//* 3. Gün - HTML Table

//? Bu gün HTML cədvəlləri ilə tanış olacağıq. Cədvəllər məlumatların təşkilatlı şəkildə göstərilməsi üçün istifadə olunur.
//? HTML-də cədvəl yaratmaq üçün müxtəlif elementlərdən istifadə edirik. Bu elementlər məlumatları sətir və sütun şəklində təşkil etməyə kömək edir.

//* HTML Cədvəlinin Əsas Elementləri

//? HTML cədvəlləri aşağıdakı əsas elementlərlə yaradılır:
//* 1. **`<table>`:** Cədvəl yaratmaq üçün əsas elementdir.
//* 2. **`<tr>`:** Cədvəlin bir sətirini təmsil edir.
//* 3. **`<td>`:** Cədvəlin bir hüceyrəsini təmsil edir. Hər hüceyrə məlumatları saxlayır.
//* 4. **`<th>`:** Cədvəlin başlıq hüceyrələrini təmsil edir. Başlıq hüceyrələri, məlumatların başlıqlarını göstərir.
//* 5. **`<thead>`:** Cədvəlin başlıq hissəsini təşkil edir.
//* 6. **`<tbody>`:** Cədvəlin əsas məlumat hissəsini təşkil edir.
//* 7. **`<tfoot>`:** Cədvəlin alt hissəsini təşkil edir, ümumiyyətlə cədvəlin yekunları və ya ümumi məlumatlar burada göstərilir.

//* HTML Cədvəlinin Nümunəsi

//? Cədvəl nümunəsi olaraq sadə bir cədvəl yaradaq:

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th>Ad</th>`
//* `      <th>Yaş</th>`
//* `      <th>Şəhər</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>Ali</td>`
//* `      <td>25</td>`
//* `      <td>Bakı</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Aysel</td>`
//* `      <td>30</td>`
//* `      <td>Gəncə</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Ramin</td>`
//* `      <td>28</td>`
//* `      <td>Sumqayit</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu cədvəldə, `<thead>` başlıq hissəsini, `<tbody>` isə cədvəlin əsas hissəsini təmsil edir. Cədvəl məlumatlarını bu şəkildə təşkil edirik.

//* Cədvəli Stil Vermək

//? Cədvələ vizual olaraq daha yaxşı görünüş vermək üçün CSS-dən istifadə edə bilərik. Aşağıdakı nümunədə cədvəli stilizə edəcəyik:

//* `table {`
//* `  width: 100%;`
//* `  border-collapse: collapse;`
//* `}`

//* `th, td {`
//* `  border: 1px solid #ddd;`
//* `  padding: 8px;`
//* `  text-align: left;`
//* `}`

//* `th {`
//* `  background-color: #f2f2f2;`
//* `}`

//? Bu stil ilə cədvəlin hüceyrələrinə sərhəd əlavə edirik, başlıq hüceyrələrini fərqləndiririk və hüceyrələrə düzgün bir dolgu təmin edirik.

//* Praktika

//? İndi bir neçə cədvəl nümunəsi hazırlayaq. Bu cədvəllər fərqli məlumatları təşkil edəcək və biz bunları vizual olaraq düzəldəcəyik.

//? 1. **Şagirdlərin Siyahısı Cədvəli:**

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th>Ad</th>`
//* `      <th>Sinif</th>`
//* `      <th>İmtahan Nəticəsi</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>Əli</td>`
//* `      <td>5-ci sinif</td>`
//* `      <td>80</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>İsmayıl</td>`
//* `      <td>6-cı sinif</td>`
//* `      <td>90</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Nigar</td>`
//* `      <td>5-ci sinif</td>`
//* `      <td>85</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu cədvəl şagirdlərin adlarını, siniflərini və imtahan nəticələrini göstərir.

//? 2. **Əmək Haqqı Cədvəli:**

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th>İşçi Adı</th>`
//* `      <th>Vəzifə</th>`
//* `      <th>Əmək Haqqı</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>Səməd</td>`
//* `      <td>Frontend Developer</td>`
//* `      <td>2500 AZN</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Rəşad</td>`
//* `      <td>Backend Developer</td>`
//* `      <td>3000 AZN</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Aysel</td>`
//* `      <td>UI/UX Designer</td>`
//* `      <td>2200 AZN</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu cədvəl əmək haqqı məlumatlarını və işçi vəzifələrini göstərir.

//? Cədvəllər məlumatları təşkil etmək və vizual şəkildə təqdim etmək üçün faydalıdır. Biz bu gün sadə cədvəlləri yaratdıq və bunları praktika olaraq istifadə etdik.

//* colspan və rowspan ilə HTML Cədvəlləri

//? HTML cədvəllərində, `colspan` və `rowspan` atributları, cədvəl hüceyrələrinin bir neçə sütun və ya sətir boyunca birləşdirilməsinə imkan verir.
//? Bu, daha mürəkkəb və strukturlaşdırılmış cədvəllər yaratmaq üçün çox faydalıdır.

//* **colspan**: Bu atribut, bir hüceyrənin neçə sütun boyunca uzanacağını təyin edir.
//? Məsələn, bir hüceyrə iki və ya daha çox sütunu əhatə edərək daha geniş bir hüceyrə yarada bilər.

//* `colspan` istifadə edərək, cədvəldəki hüceyrələri birləşdirək:

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th colspan="2">Əsas Başlıq</th>` //? Bu başlıq 2 sütun boyunca uzanacaq
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>Əli</td>`
//* `      <td>25</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td colspan="2">Bütün məlumatlar bir hüceyrədə</td>` //? Bu hüceyrə həm Yaş, həm də Şəhər məlumatını əhatə edir
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu nümunədə, birinci sətirdəki başlıq hüceyrəsi `colspan="2"` ilə 2 sütun boyunca uzanır.
//? Həmçinin, ikinci sətirdəki hüceyrə `colspan="2"` ilə iki sütunu birləşdirir.

//* **rowspan**: Bu atribut, bir hüceyrənin neçə sətir boyunca uzanacağını təyin edir.
//? Məsələn, bir hüceyrə bir neçə sətir boyunca yayıla bilər.

//* `rowspan` istifadə edərək, cədvəldəki hüceyrələri birləşdirək:

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th>Ad</th>`
//* `      <th>Yaş</th>`
//* `      <th>Şəhər</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td rowspan="2">Əli</td>` //? Bu hüceyrə iki sətir boyunca uzanır
//* `      <td>25</td>`
//* `      <td>Bakı</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>30</td>`
//* `      <td>Sumqayit</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu nümunədə, `rowspan="2"` ilə "Əli" adlı hüceyrə iki sətir boyunca yayıldı. Bu, məlumatların daha yaxşı təşkil edilməsinə kömək edir.

//* Praktika

//? İndi həm `colspan` və həm də `rowspan` istifadə edərək cədvəldə mürəkkəb strukturlar yaradacağıq:
//? 1. **Cədvəl Nümunəsi:** Başlıq və məzmunu birləşdirən bir cədvəl.

//* `<table>`
//* `  <thead>`
//* `    <tr>`
//* `      <th colspan="2">İnsanlar</th>`
//* `      <th rowspan="2">Yaş</th>` //? Bu başlıq 2 sətir boyunca uzanır
//* `    </tr>`
//* `    <tr>`
//* `      <th>Ad</th>`
//* `      <th>Şəhər</th>`
//* `    </tr>`
//* `  </thead>`
//* `  <tbody>`
//* `    <tr>`
//* `      <td>Əli</td>`
//* `      <td>Bakı</td>`
//* `      <td>25</td>`
//* `    </tr>`
//* `    <tr>`
//* `      <td>Aysel</td>`
//* `      <td>Gəncə</td>`
//* `      <td>30</td>`
//* `    </tr>`
//* `  </tbody>`
//* `</table>`

//? Bu nümunədə, başlıqda həm `colspan` həm də `rowspan` istifadə edərək cədvəlin başlığını təşkil etdik. Bu cədvəl həm məlumatları yaxşı bir şəkildə təşkil edir, həm də daha yaxşı oxunaqlı olur.
