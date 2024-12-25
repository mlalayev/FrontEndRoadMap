//* TypeScript 5.x Yenilikləri
//? TypeScript mütəmadi olaraq Microsoft tərəfindən yenilənir və hər yeni versiyada istifadəçilərin işini asanlaşdırmaq üçün yeni xüsusiyyətlər təqdim olunur.
//? 5.x versiyası TypeScript-in istifadəsini daha rahat və tip təhlükəsizliyini daha güclü edən yeniliklər təqdim edir.
//? Bu xüsusiyyətlər yalnız TypeScript-in 5.x və daha yuxarı versiyalarında mövcuddur, buna görə layihənizdə istifadə etməzdən əvvəl versiyanızı yoxlayın.

//* Şablon Sətir Tipləri (Template Literal Types)
//? Şablon sətir tipləri TypeScript-də tipləri daha dəqiq və xüsusi etmək üçün istifadə olunur.
//? Bu yeniliklə kompilyasiya zamanı sətir dəyərlərinə əsaslanan xüsusi tiplər təyin edə bilərsiniz.

//? Məsələn, rənglərin hex kodlarını ifadə edən bir tip yaratmaq istəyirsinizsə:
type Color = "red" | "green" | "blue"; // Yalnız üç rəng qəbul edilir: qırmızı, yaşıl və mavi.
type HexColor<T extends Color> = `#${string}`; 
//? Bu, rəng tipini (# işarəsi ilə başlayan) sətirlərə çevirən xüsusi bir tipdir.

//? İstifadə nümunəsi:
let myColor: HexColor<"blue"> = "#0000FF"; 
//? `myColor` yalnız mavi rəngin hex kodunu qəbul edə bilər. Əgər başqa bir rəng yazsanız, TypeScript səhv verəcək.

//* İndeks İmza Etiketləri (Index Signature Labels)
//? 5.x versiyasında indeks imzalarına etiket əlavə etmək imkanı əlavə edildi.
//? Bu, dinamik obyektlərlə işləyərkən daha təsvirli tip məlumatları təmin edir və kodunuzu daha oxunaqlı edir.

//? Məsələn, hər bir açarı "dynamic_" ilə başlayan bir obyekt yaratmaq istəyirsinizsə:
//type DynamicObject = { [key: string as `dynamic_${string}`]: string }; 
//? Bu, obyektin açarlarının "dynamic_" ilə başlamasını məcburi edir.

//? İstifadə nümunəsi:
//let obj: DynamicObject = { dynamic_key: "value" }; 
//? Bu obyektin açarı "dynamic_" ilə başlayır və dəyəri bir sətir olur.

//* Yerli JavaScript Şəxsi Sahələr (Native JavaScript Private Fields)
//? 5.x versiyası JavaScript-in yerli "şəxsi sahələrini" dəstəkləyir.
//? Şəxsi sahələr "#" işarəsi ilə başlayır və yalnız sinifin daxilində əlçatandır.
//? Məsələn:
class MyClass {
  #privateField = 42; // Yerli JS şəxsi sahəsi.
  public getPrivateField() {
    return this.#privateField; // Bu sahəyə yalnız sinif daxilində giriş mümkündür.
  }
}
let instance = new MyClass();
console.log(instance.getPrivateField()); // 42
// console.log(instance.#privateField); // TypeScript səhv verəcək, çünki sahə şəxsi sahədir.

//* Əlavə Məlumatlar
//? TypeScript-in "private" açarı da əvvəlki kimi işləməyə davam edir, lakin 5.x versiyasında yerli JavaScript şəxsi sahələrindən də istifadə edə bilərsiniz.
//? Hər ikisi eyni məqsədə xidmət edir, lakin fərqli şəkildə tətbiq olunur. TypeScript-in "private" açarı yalnız TypeScript səviyyəsində işləyir və JavaScript-ə çevrildikdə tamamilə çıxarılır.

//* Nəticə
//? TypeScript 5.x versiyasının yenilikləri kod yazmağı daha səmərəli və təhlükəsiz edir:
//? - Şablon sətir tipləri kodunuzda daha dəqiq tiplər yaratmağa imkan verir.
//? - İndeks imza etiketləri obyekt strukturlarını daha təsvirli edir.
//? - Yerli JavaScript şəxsi sahələri məlumatlarınızı daha yaxşı qoruyur.
//? Bu yeniliklərdən istifadə edərək, daha güclü və oxunaqlı kod yaza bilərsiniz.
