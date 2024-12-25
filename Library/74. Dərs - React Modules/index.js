//* React ES6 Modulyar
//? JavaScript modulları kodunuzu fərqli fayllara ayırmağa imkan verir.
//? Bu, kodu daha asanlıqla idarə etməyə və saxlamamağa kömək edir.
//? ES modulları `import` və `export` bəyanatlarına əsaslanır.

//* Export (İxrac)
//? İxrac (export) bir funksiyanı və ya dəyişkəni bir fayldan başqa bir fayla göndərməyə imkan verir.
//? Gəlin, "person.js" adlı bir fayl yaradaq və burada ixrac etmək istədiyimiz dəyişkənləri müəyyən edək.

//* İki növ ixrac var: Adlı İxrac (Named Export) və Default İxrac (Default Export).

//? Adlı İxrac (Named Exports):
//? Adlı ixracda dəyişkənləri və ya funksiyaları adları ilə ixrac edirik. 
//? Bunu iki şəkildə edə bilərik: Faylın daxilində hər birini ayrıca ixrac etmək və ya faylın altında bütün dəyişkənləri bir anda ixrac etmək.

//* Fayl daxilində hər biri ayrı-ayrı ixrac edilə bilər:
person.js;
export const name = "Jesse";
export const age = 40;
//? Burada `name` və `age` dəyişkənləri ayrıca olaraq ixrac olunur.

//* Faylın sonunda bir dəfəlik ixrac etmək:
person.js;
const name = "Jesse";
const age = 40;

export { name, age };
//? Bu formada dəyişkənlər faylın sonunda bir yerdə ixrac edilir.

//* Default İxrac (Default Exports):
//? Default ixracda isə yalnız bir defa ixrac edilə bilən bir dəyişkən və ya funksiya olur.
//? Yəni, bir faylda yalnız bir default ixrac ola bilər.

//* Məsələn, "message.js" adlı bir fayl yaradaq və orada default ixracı göstərək:

message.js;
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + ' years old.';
};

export default message;
//? Bu funksiya `message.js` faylında default olaraq ixrac edilir. Yəni, başqa fayllar bu funksiyanı `message` adı ilə istifadə edə bilər.

//* Import (İdxal)
//? İdxal (import) ilə modulları başqa fayllardan istifadə etməyə imkan verir.
//? Modulların ixrac formasına görə onları müxtəlif yollarla idxal edə bilərik.

//? Adlı ixracları idxal etmək üçün, dəyişkənləri açıq şəkildə daxil etməliyik (curly braces istifadə edirik).

//* Məsələn, "person.js" faylındakı adlı ixracları idxal etmək:

import { name, age } from "./person.js";
//? Burada `name` və `age` adlı dəyişkənləri `person.js` faylından idxal edirik. İxracda olduğu kimi, `import` bəyanatında da `curly braces` istifadə edirik.

//? Default ixracları idxal etmək isə sadədir və `curly braces` istifadə etməyə ehtiyac yoxdur:

//* "message.js" faylından default ixracı idxal etmək:
import message from "./message.js";
//? Burada `message.js` faylındakı default funksiyanı idxal edirik və `message` adı ilə istifadə edirik. Əgər bir faylda default ixrac varsa, onu birbaşa adı ilə idxal edirik.

//* Ümumi Qeyd
//? Modullar, böyük layihələrdə kodu daha təmiz və təşkilatlanmış şəkildə saxlamağa kömək edir.
//? Həm array-ləri, həm də obyektləri sadəcə ixrac və idxal edərək, funksiyalarınızı daha rahat şəkildə bir fayldan digərinə daşıya bilərsiniz.
//? Modulları istifadə edərək, bir çox faylı bir-birinə bağlamaq, kodunuzu daha oxunaqlı və asan başa düşülən etmək olur.
//? Bu metod həmçinin, layihə üzərində bir neçə nəfərin işləməsi zamanı kodun asanlıqla bölüşdürülməsi və yenilənməsi üçün çox vacibdir.
