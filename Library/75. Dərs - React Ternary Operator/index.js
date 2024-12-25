//* React ES6 Ternary Operator (Üçlü Operator)
//? Üçlü operator, `if` / `else` kimi şərtli operatorun sadələşdirilmiş bir formasıdır.
//? Bu operatoru istifadə edərək, şərtlərə görə fərqli əməliyyatları qısa yolla yerinə yetirə bilərik.
//? Üçlü operatorun sintaksisi aşağıdakı kimidir:
//* condition ? <do something if true> : <do something if false>

//? Gəlin əvvəlcə `if` / `else` istifadə edərək bir nümunə görək:

//* `if / else` ilə:
const authenticated = true;

if (authenticated) {
  renderApp(); // Əgər istifadəçi autentifikasiyadan keçibsə, `renderApp()` funksiyası işə düşəcək.
} else {
  renderLogin(); // Əgər istifadəçi autentifikasiyadan keçməyibsə, `renderLogin()` funksiyası işə düşəcək.
}

//? İndi isə, eyni nümunəni üçlü operator ilə yazmağa çalışaq:

//* Üçlü operator ilə:
const authenticated1 = true;

authenticated ? renderApp() : renderLogin();
//? Burada, `authenticated` şərtini yoxlayırıq.
//? Əgər `authenticated` doğru (true) olsa, `renderApp()` işləyəcək, əgər yanlış (false) olsa, `renderLogin()` işləyəcək.

//* Üçlü operatorun iş prinsipi:
//? 1. `condition` - Bu, şərtimizdir. Hər hansı bir doğru (true) və ya yanlış (false) qiymət ala bilər.
//? 2. `expression if true` - Əgər şərt doğru (true) olarsa, bu ifadə işə düşəcək.
//? 3. `expression if false` - Əgər şərt yanlış (false) olarsa, bu ifadə işə düşəcək.

//* Üçlü operatorun faydaları:
//? - Kod daha qısa və oxunaqlı olur.
//? - Sadə şərtlər üçün daha rahat və tez yazılabilir.
//? - Əsasən kiçik şərtlər və qısa əməliyyatlar üçün istifadə edilir.

//? Üçlü operatoru sadə və oxunaqlı edən əsas səbəb, `if` / `else` operatorunun daha uzun və çox satırlı olmasını qarşısını alır.
//? Məsələn, bir çox zaman şərtləri qısa şəkildə yoxlayıb müəyyən bir dəyər və ya funksiya qaytarmalı oluruq. Bu zaman üçlü operator çox işə yarayır.

//? Üçlü operator çox güclü olsa da, çox mürəkkəb şərtlər üçün istifadə etməkdən çəkinmək lazımdır. Çünki kodun oxunmasını çətinləşdirə bilər.
//? Buna görə də, yalnız sadə şərtlərdə istifadə etmək daha yaxşıdır.
