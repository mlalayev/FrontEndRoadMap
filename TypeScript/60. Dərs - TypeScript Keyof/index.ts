//* TypeScript `keyof` Açar Sözü
//? `keyof` TypeScript-də istifadə olunan bir açar sözüdür və obyekt tipindən açarların (keys) tipini çıxarmaq üçün istifadə olunur.
//? Bu açar söz, obyektin mövcud açarlarını birləşdirilmiş (union) tip olaraq çıxarır, yəni həmin obyektin xüsusiyyətlərinin adlarını birləşdirir.

//* `keyof` ilə Açıq Açarlar (Explicit Keys)
//? Əgər `keyof` açıq tərif edilmiş (explicitly defined) obyekt tipi ilə istifadə olunarsa, bu zaman həmin obyektin açarlarını birləşdirilmiş tip olaraq yaradır.

interface Person {
    name: string; //? `Person` obyektinin "name" açarı `string` tipindədir.
    age: number;  //? `Person` obyektinin "age" açarı `number` tipindədir.
  }
  
  //? `keyof Person` burada "name" və "age" açarlarının birləşdirilmiş tipi olan `"name" | "age"` tipini yaradır.
  //? Digər açarlar icazəsiz olacaq, yəni yalnız obyektin tərif edilmiş açarlarına icazə veriləcək.
  
  function printPersonProperty(person: Person, property: keyof Person) {
    //* `property` parametrinin tipi yalnız "name" və "age" ola bilər.
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Max", //? `name` xüsusiyyəti "Max" dəyərini saxlayır.
    age: 27,     //? `age` xüsusiyyəti 27 dəyərini saxlayır.
  };
  
  printPersonProperty(person, "name"); // Printing person property name: "Max"
  //? Burada "name" xüsusiyyətini çap edirik. Nəticə: "Max".
  //! Əgər "name" və ya "age" xaricində bir açar təyin etsəniz, TypeScript səhv verəcək.
  
  //* Əsas Məqam:
  //? `keyof` ilə yalnız obyektin mövcud açarları üzərində işləyə bilərsiniz. Bu, səhvləri azaltmaq və tipləri daha təhlükəsiz etmək üçün istifadə olunur.
  
  //* `keyof` ilə İndeks İmzası (Index Signatures)
  //? `keyof` indeks imzası (index signature) ilə istifadə edilə bilər və bu, obyekt tipindən indeks tipini çıxarmağa imkan verir.
  
  type StringMap = { [key: string]: unknown };
  //? Burada `StringMap` tərifi, açarları `string` tipində, dəyərləri isə `unknown` tipində olan bir obyekt yaradır.
  //? `keyof StringMap` bu obyekt tipinin açarlarının tipi kimi `string` tipini qaytarır.
  
  function createStringPair(property: keyof StringMap, value: string): StringMap {
    //* `property` parametrinin tipi yalnız `string` olacaq.
    //* Bu funksiya, verilmiş açar (property) və dəyərdən (value) ibarət bir obyekt qaytarır.
    return { [property]: value };
  }
  
  const stringPair = createStringPair("greeting", "Hello");
  //? Burada "greeting" açarı və "Hello" dəyəri ilə yeni bir obyekt yaradırıq.
  //? Nəticə: { greeting: "Hello" }.
  
  //* İndeks İmzası haqqında Əsas Məqam:
  //? İndeks imzası ilə işləyərkən `keyof` bütün mümkün indeksləri təmsil edir. Bu halda, `StringMap` üçün `keyof` tipi `string` olur.
  
  //* Nəticə
  //? `keyof` açar sözü obyektlərin açar tiplərini çıxarmaq üçün çox faydalıdır.
  //? - Açıq açarlar ilə, yalnız müəyyən edilmiş xüsusiyyətlərə icazə verir.
  //? - İndeks imzası ilə, mümkün indekslərin tipini müəyyən edir.
  //? `keyof` kodunuzu daha təhlükəsiz edir və səhvlərin qarşısını alır, beləliklə TypeScript-də tip təhlükəsizliyi artırır.
  