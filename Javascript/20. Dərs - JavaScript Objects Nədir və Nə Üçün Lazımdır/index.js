//* 20. Gün - JavaScript Objects: Nədir və Nə Üçün Lazımdır?

//? **JavaScript Objects Nədir?**
//? Object (obyekt) - JavaScript-də müxtəlif məlumatları və funksiyaları bir yerə toplamaq üçün istifadə edilən məlumat strukturu növüdür.
//? Objeklər, bir və ya daha çox **property** (özəllik) və **method** (funksiya) ehtiva edə bilər.
//? Object-lər, müxtəlif məlumat növlərini bir yerə toplamaq və təşkil etmək üçün istifadə olunur.
//? Objektin hər bir xüsusiyyəti bir **key** (açar) və ona uyğun olan **value** (dəyər) ilə müəyyən edilir.

//* **Sintaksis**:
//? Object yaratmaq üçün aşağıdakı sintaksis istifadə edilir:
//* let person = {
//*     key1: value1,
//*     key2: value2,
//*     // ...,
//* };

//* **Nümunə**:
//? Bir şəxs haqqında məlumatları saxlayan bir obyekt yaratmaq:
let person = {
    firstName: "Əli",  //? Key: firstName, Value: "Əli"
    lastName: "Məmmədov",  //? Key: lastName, Value: "Məmmədov"
    age: 30,  //? Key: age, Value: 30
    isStudent: false,  //? Key: isStudent, Value: false
    greet: function() {  //? Bu, bir method-dur (funksiya), person obyektinə aid
        console.log("Salam, mənim adım " + this.firstName + " " + this.lastName);
    }
};

//* **Object-in Xüsusiyyətlərinə Giriş və Çıxış**:
//? Object-in xüsusiyyətlərinə iki yolla daxil ola bilərsiniz:
//? 1. **Dot notation**: `objectName.propertyName` ilə
//* console.log(person.firstName);  //? "Əli"

//? 2. **Bracket notation**: `objectName["propertyName"]` ilə
//* console.log(person["lastName"]);  //? "Məmmədov"

//* **Obyektdən Funksiyanı Çağırmaq**:
//? Objektin daxilindəki funksiyanı çağırmaq üçün, dot notation və ya bracket notation istifadə edə bilərsiniz:
//* person.greet();  //? "Salam, mənim adım Əli Məmmədov" mesajını ekrana yazdıracaq

//? **Nə Üçün Objects Lazımdır?**
//? 1. **Məlumatın Təşkili və Saxlanması**: Obyektlər müxtəlif məlumatları bir yerdə saxlamağa və qruplaşdırmağa kömək edir. Məsələn, bir şəxsin adını, yaşını, təhsil vəziyyətini və digər məlumatları bir obyektə daxil etmək mümkündür.
//? 2. **Məlumatın Rahat İstifadəsi**: Obyektlər, mürəkkəb məlumat strukturunu daha asan başa düşülən və istifadə edilən formada təqdim etməyə imkan verir.
//? 3. **Qruplaşdırılmış Məlumatlar**: Əgər çox sayda əlaqəli məlumat varsa, obyektlər bu məlumatları daha yaxşı qruplaşdırmağa kömək edir.
//? 4. **Daha Təmiz və Təşkilatlanmış Kod**: Obyektlər kodu daha təmiz və oxunaqlı edir. Məlumatın hər bir xüsusiyyətini və funksiyasını sadə şəkildə təyin edə bilərsiniz.

//* **Object-lər və Məlumatın Qruplaşdırılması**:
//? Məsələn, bir işçi haqqında məlumatları obyektlərdə saxlaya bilərik:
//* let employee = {
//*     name: "Rəhim",  //? Şəxsin adı
//*     position: "Mühəndis",  //? Vəzifə
//*     salary: 5000,  //? Maaş
//*     isActive: true,  //? Aktivlik vəziyyəti
//*     address: {
//*         street: "Nərimanov küçəsi",  //? Ünvanın küçə adı
//*         city: "Bakı",  //? Şəhər
//*         zip: 1000  //? Poçt kodu
//*     }
//* };
//* Bu nümunədə bir işçi obyektinin daxilində həmçinin başqa bir obyekt (`address`) də saxlanılır.
//* Bu üsulla əlaqəli məlumatları bir yerdə saxlamaq mümkündür.


//? **Obyektlər və Dinamik Məlumat Təşkili**:
//? Obyektlər çox güclü və çevikdir. Biz onlara yeni keylər əlavə edə bilərik və ya mövcud keyləri dəyişdirə bilərik.
//* person.city = "Bakı";  //? Yeni key əlavə edirik
//* console.log(person.city);  //? "Bakı"

//? **Obyektdə Mövcud Keyin Dəyişdirilməsi**:
//? Məsələn, obyektin yaşını dəyişdirmək:
person.age = 35;  //? Yaşını yeniləyirik
console.log(person.age);  //? 35

//? **Obyektdən Xüsusiyyət Silmək**:
//? Həmçinin obyektin içindən müəyyən bir xüsusiyyəti silmək də mümkündür:
//* delete person.age;  //? Yaş xüsusiyyətini silirik
//* console.log(person.age);  //? undefined olacaq

//? **Objects və Mürəkkəb Məlumatlar**:
//? Obyektlər çox mürəkkəb məlumat strukturları yaratmağa imkan verir. Məsələn, iki ölçülü (2D) və üç ölçülü (3D) obyektlər yaratmaq mümkündür.

//* **Nümunə: 2D Object**:
//? Təsəvvür edək ki, iki tələbə haqqında məlumatı saxlayan obyektimiz var:
let students = {
    student1: {
        name: "Əli",
        age: 20,
        grade: "A"
    },
    student2: {
        name: "Leyla",
        age: 22,
        grade: "B"
    }
};

console.log(students.student1.name);  //? "Əli"

//* **Nümunə: 3D Object**:
//? Təsəvvür edək ki, üç ölçülü obyekt (3D) yaradırıq:
let locations = {
    city1: {
        country: "Azərbaycan",
        city: "Bakı",
        landmarks: {
            place1: "İçəri Şəhər",
            place2: "Qız Qalası"
        }
    },
    city2: {
        country: "Türkiyə",
        city: "İstanbul",
        landmarks: {
            place1: "Aya Sofya",
            place2: "Topkapı Sarayı"
        }
    }
};

console.log(locations.city1.landmarks.place1);  //? "İçəri Şəhər"

//? **Obyektdən Məlumat Çıxarmaq və Manipulyasiya Etmək**:
//? Obyektlərdə məlumatı manipulyasiya edərək müxtəlif əməliyyatlar aparmaq mümkündür. Bu xüsusiyyətləri istifadə edərək məlumatları asanlıqla təşkil edə və istədiyiniz kimi çıxara bilərsiniz.

//? **Obyektlərin Faydaları**:
//? 1. **Əlaqəli Məlumatların Təşkili**: Obyektlər bir-biri ilə əlaqəli məlumatları bir yerdə saxlamağa kömək edir.
//? 2. **Daha Təmiz Kod**: Obyektlər kodu daha səliqəli və təşkil olunmuş edər, beləliklə kodun başa düşülməsi və idarə olunması asanlaşır.
//? 3. **Dinamik Dəyişikliklər**: Obyektlərə yeni məlumatlar əlavə etmək və ya mövcud məlumatları dəyişdirmək çox asandır.

//* **Qısa Yekun**:
//? Obyektlər, JavaScript-də məlumatları strukturlaşdırmaq və əlaqələndirmək üçün güclü bir vasitədir. Onlar kodu təmizləyir, asanlaşdırır və məlumatları daha səmərəli şəkildə idarə etməyə kömək edir.
