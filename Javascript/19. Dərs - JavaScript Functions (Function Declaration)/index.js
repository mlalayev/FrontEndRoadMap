//* 19. Gün - JavaScript Functions: Function Declaration və Təmiz Kod Yazmaq

//? **Function Nədir?**
//? Function (funksiya) - müəyyən bir vəzifəni yerinə yetirən bir kod blokudur.
//? Funksiyalar, təkrarlanan əməliyyatları sadələşdirmək, kodun təkrarlanmasının qarşısını almaq və kodun daha oxunaqlı olmasına kömək etmək üçün istifadə olunur.
//? Funksiyalar, eyni kodu bir neçə dəfə çağırmaq və istifadə etmək üçün çox faydalıdır.

//? **Function Declaration (Funksiya Təyin Edilməsi) Nədir?**
//? Function declaration, bir funksiyanı yaratmaq üçün istifadə edilən ən yaygın üsuldur.
//? Funksiyanı adlandırırıq və daxilindəki əməliyyatları təyin edirik.
//? Function declaration, funksiyanı çağırmadan əvvəl də istifadə oluna bilər.

//* **Sintaksis**:
//* function functionName(parameter1, parameter2, ...) {
//*     //? Funksiya daxilindəki əməliyyatlar
//*     return result;  //? Əgər nəticə lazımdırsa, onu qaytarırıq
//* }

//? **Nümunə**: Sadə bir funksiyanın təyini:
function greet() {
  console.log("Salam, dünyam!"); //? "Salam, dünyam!" mesajı ekrana yazılacaq
}

//? **Funksiyanın çağırılması**:
greet(); //? Funksiyanı çağırırıq, "Salam, dünyam!" mesajı ekrana yazılır

//? **Funksiyaların Nəyə Ehtiyacı var?**
//? 1. **Parametrlər (Parameters)**: Funksiyaya verilən giriş dəyərləridir. Parametrlər funksiya daxilində istifadə oluna bilər.
//? 2. **Argümentlər (Arguments)**: Funksiya çağırılarkən parametr olaraq verilən real dəyərlərdir. Parametrlər ilə argumentlər arasındakı fərq budur ki, parametr funksiyanın təyini zamanı verilir, argument isə funksiyanı çağırarkən verilir.

//* **Parametr və Argument Nümunəsi**:
function greetPerson(name) {
  console.log("Salam, " + name + "!"); //? Parametr olaraq verilən `name`-i ekrana yazır
}

//* **Argüment ilə Funksiya Çağırmaq**:
greetPerson("Əli"); //? "Salam, Əli!" mesajı ekrana yazılacaq

//? **Funksiyaların Faydaları**
//? 1. **Təkrarlanan Kodları Azaltmaq**: Funksiyalar, təkrarlanan kodları bir yerdə toplayaraq, kodun daha təmiz və qısa olmasına kömək edir.
//? 2. **Kodun Yenidən İstifadəsi**: Funksiyaları bir neçə dəfə çağıraraq eyni əməliyyatı yerinə yetirmək mümkündür.
//? 3. **Kodun Təşkili və Qruplaşdırılması**: Funksiyalar kodu daha oxunaqlı və başa düşülən edir.
//? 4. **Təmiz və Səliqəli Kod Yazmaq**: Funksiyalar kodu daha mütəşəkkil edir və təkrarlanan əməliyyatları asanlıqla idarə etməyə imkan verir.

//? **Funksiyalarla Təmiz Kod Yazmaq**
//? 1. **Kodun Qruplaşdırılması**: Funksiyalarla kodu funksional bir şəkildə qruplaşdırmaq, oxumağı və idarə etməyi asanlaşdırır.
//? 2. **Qısa və Dəqiq Funksiyalar Yazın**: Funksiyalar yalnız bir məqsəd üçün yazılmalıdır və mümkün olduğunca qısa olmalıdır.
//? 3. **İsmi Anlayışlı Funksiyalar**: Funksiyaların adı, nə iş görəcəyi haqqında aydın bir fikir verməlidir.
//? 4. **Yaxşı Parametr İstifadəsi**: Funksiyalar daxilindəki parametr və argümentlər sadə və başa düşülən olmalıdır. Çox parametrlərdən çəkinin.

//* **Funksiya Yaratma Nümunəsi**:
function add(a, b) {
  return a + b; //? iki ədədi toplamaq
}

console.log(add(5, 7)); //? 12 ekrana yazılacaq

//* **Doğru Funksiya Yazmaq üçün Məsləhətlər**:
//? 1. **Bir Funksiya, Bir Məqsəd**: Funksiyanın yalnız bir məsələni həll etməsi çox vacibdir. Məsələn, bir funksiya yalnız iki ədəd toplamalıdır.
//? 2. **Qısa və Anlayışlı Olun**: Funksiya mümkün qədər qısa və aydın olmalıdır. Çox uzun funksiyalar oxunmasını çətinləşdirir.
//? 3. **Parametrlərin Sayını Azaltmaq**: Çox sayda parametr funksiyanı qarışıq hala gətirə bilər. Əgər bir çox parametr lazımdırsa, onları obyekt olaraq göndərmək daha yaxşıdır.
//? 4. **Return ilə Nəticə Qaytarmaq**: Funksiyaların nəticə qaytarmağı (return) onların effektivliyini artırır, beləliklə funksiyanı daha müstəqil və test edilə bilən edər.

//? **Funksiyalarla Kodun Təşkili**:
//? Funksiyalar, böyük kod layihələrində təşkilatı saxlamağa kömək edir. Məsələn, bir istifadəçi adı yoxlamaq, formu təsdiqləmək və ya verilənlər bazası ilə əlaqə yaratmaq kimi tapşırıqları müxtəlif funksiyalarla təşkil etmək olar.
//? Funksiyaları istifadə edərək kodu qruplaşdırmaq, həmçinin test və düzəlişləri asanlaşdırır.

//* **Kodun Təkrarı və Funksiya Yaradılması**:
//? Əgər eyni əməliyyatı bir neçə dəfə yerinə yetirməyiniz lazım olursa, funksiya yaratmaq daha düzgün və təmiz bir yanaşmadır.
//? Funksiyanı çağırmaq və eyni əməliyyatı fərqli yerlərdə istifadə etmək asan olacaqdır.
//? Məsələn, əgər hər dəfə ədədləri toplamaq lazımdırsa, hər dəfə yeni kod yazmaq əvəzinə sadəcə bir funksiya yaradın.

//* **Qısa Kod Məsələsi**:
function multiply(x, y) {
  return x * y; //? Bu funksiya yalnız iki ədədin hasilini qaytarır
}

console.log(multiply(2, 4)); //? 8 ekrana yazılacaq
