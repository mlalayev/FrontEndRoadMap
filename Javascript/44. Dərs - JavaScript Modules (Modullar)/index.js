//* **JavaScript Modules (Modullar)**
//? JavaScript-də modullar, kodu daha təşkilatlı, çevik və təkrar istifadə oluna bilən etmək üçün istifadə olunur. Modullar, kodun bölünməsini təmin edərək, hər bir modulu fərdi bir hissə kimi təyin edir və bu hissələri istədiyimiz yerdə istifadə etməyə imkan verir.

//? **Modul nədir?**
//? Modul, müəyyən bir məqsəd üçün yazılmış kod blokudur. JavaScript-də modulların əsas məqsədi kodu daha sadə, çevik və təkrarlana bilən etməkdir.
//? Hər modul yalnız öz məqsədinə xidmət edir və müəyyən bir funksionallığı təmsil edir. Bu sayədə böyük proqramları kiçik hissələrə ayıraraq asan idarə etmək mümkündür.

//* **Modul İxracı (Export)**

/**
 * **Export** və **Export Default** JavaScript-də modulları başqa fayllara ixrac etmək üçün istifadə olunur.
 * `export` və `export default` arasındakı fərqlər və istifadələri müxtəlifdir.
 */

//* 1. **Export**:
//? `export` - Bu, modulda müəyyən bir dəyəri və ya funksiyanı başqa fayllara ixrac etməyə imkan verir.
//? Bir neçə dəyəri və funksiyanı ixrac etmək üçün istifadə olunur. Bütün ixrac edilən obyektlərdən hər biri `import` ilə istənilən vaxt istifadə oluna bilər.

export const name = "Murad"; //? `name` dəyişəni ixrac edilir
export function greet() {
  //? `greet` funksiyası ixrac edilir
  console.log("Hello, " + name);
}

export class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}

//? `export` bir modulda bir neçə funksiyanı, dəyişəni, sinfi ixrac etməyə imkan verir.

//* 2. **Export Default**:
//? `export default` - Bu, bir modulda yalnız bir dəyərin, obyektin və ya funksiyanın ixracını təmin edir.
//? Hər modul yalnız bir `default` ixracına sahib ola bilər. `default` ixracı daha rahat şəkildə import edilə bilər.

export default function greet() {
  console.log("Hello, World!");
}

//? `export default` ilə sadəcə bir dəyəri ixrac edirik, və bu dəyəri import edərkən istədiyimiz adı istifadə edə bilərik.

//* **Modul İdxalı (Import)**

/**
 * Modulları idxal etmək üçün `import` istifadə edirik. `import` ilə bir moduldakı obyektləri, funksiyaları və ya dəyişənləri başqa faylda istifadə edə bilərik.
 */

//* 1. **Normal İdxal (Import)**:
//? Birbaşa `export` edilmiş dəyərləri idxal etmək üçün `import` istifadə edirik.
//? Burada idxal olunan dəyər, idxal edildiyi modulda yazıldığı adla eyni olmalıdır.

import { name, greet } from "./module.js"; //? `name` və `greet` funksiyasını `module.js` modulundan idxal etdik

greet(); //? "Hello, Murad"

//* 2. **Import Default**:
//? `export default` ilə ixrac edilən dəyəri idxal edərkən, istədiyimiz adı istifadə edə bilərik. Bu dəyəri idxal edərkən adlandırmada azadıq.

import greet from "./module.js"; //? `greet` funksiyasını `module.js` modulundan idxal etdik

greet(); //? "Hello, World!"

//* 3. **Import * as**:
//? Bir modulun bütün ixrac edilmiş dəyərlərini bir obyekt kimi idxal etmək üçün `import * as` istifadə edə bilərik.
//? Bu üsul ilə modulun bütün funksiyalarını, dəyişənlərini və siniflərini bir obyektin içində əldə edirik.

import * as myModule from "./module.js"; //? `module.js` modulunun bütün ixrac edilmiş dəyərlərini `myModule` obyektində idxal etdik

myModule.greet(); //? "Hello, Murad"

//* 4. **Import as**:
//? `import as` ilə spesifik bir ixracı fərqli bir adla idxal etmək mümkündür. Bu, adların toqquşmasının qarşısını alır.

import { greet as sayHello } from "./module.js"; //? `greet` funksiyasını `sayHello` adı ilə idxal etdik

sayHello(); //? "Hello, Murad"

//* **Niyə Modullar Lazımdır?**

/**
 * Modulların istifadə edilməsi bir neçə üstünlük təmin edir:
 */

//* 1. **Kodun Daha Təşkilatlı Olması**:
//? Modulların istifadəsi ilə böyük və mürəkkəb kod bazasını daha kiçik və təşkilatlanmış hissələrə ayırırıq. Bu, kodu daha asan oxumağa və başa düşməyə imkan verir.

//* 2. **Yenidən İstifadə Edilə Bilən Kod**:
//? Modulların məqsədi bir funksionallığı təkrarlaya bilməkdir. Yəni bir dəfə yazdığınız funksiyanı və ya obyekti bir neçə yerdə istifadə edə bilərsiniz.

//* 3. **Təkrarlanan Kodun Qarşısını Almaq**:
//? Kodun təkrarlanması səhvlərə yol açır və kodu idarə etmək çətinləşir. Modulların istifadəsi ilə hər bir funksiyanı yalnız bir dəfə yazır və digər hissələrdə istifadə edirik.

//* 4. **Təhlükəsizlik**:
//? Modulların içindəki dəyişənlər və funksiyalar yalnız həmin modula məxsusdur. Digər modullar və ya kod hissələri bu dəyişənlərə müdaxilə edə bilmir.

//* 5. **Asan Test Etmə**:
//? Modulların izolyasiyası test etməyi asanlaşdırır. Hər bir modul ayrıca test edilə bilər, bu da proqramın etibarlılığını artırır.

//* **`export` və `import` İstifadə Edilməsinin Üstünlükləri**:
// - Kodun təkrarlanmasını və qarışıqlığını azaldır.
// - Modulların müxtəlif layihələrdə istifadə edilməsinə imkan verir.
// - Kodun asanlıqla test edilməsini və saxlanmasını təmin edir.
// - Kodun daha çevik olmasına kömək edir.

//* **Xülasə:**
//? JavaScript modulları, kodu daha idarəedilən və yenidən istifadə oluna bilən etmək üçün güclü vasitədir. `export` və `import` ilə modulların istifadəsi layihələrin daha asan inkişaf etdirilməsini və idarə olunmasını təmin edir.
//? Bu yanaşma kodun sadələşdirilməsinə, genişlənməsinə və asanlıqla saxlanmasına kömək edir.



