//? **Rekursiya (Recursion) Nədir və Niyə Lazımdır?**

//? Rekursiya bir funksiyanın özünü çağırmasıdır. Döngülərə alternativ kimi istifadə oluna bilər.
//? Rekursiya xüsusilə ağac strukturlarını işləmək, problemləri kiçik hissələrə bölmək üçün faydalıdır.

//? **Bitiş Nöqtəsi (Base Case)**
//? Rekursiv funksiyanın sonsuz dövrə düşməməsi üçün bitiş nöqtəsi olmalıdır.
//? Əgər bitiş nöqtəsi olmazsa, funksiya sonsuz dəfə özünü çağırar və stack overflow (yaddaş dolması) baş verər.

//* **1. Fibonacci Ədədinin Tapılması**

//? Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//? f(n) = f(n-1) + f(n-2)
//? f(0) = 0, f(1) = 1

//? **1.1 - For Loop ilə Fibonacci (O(n))**
function fibonacciLoop(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibonacciLoop(10)); //? 55

//? **1.2 - Rekursiya ilə Fibonacci (O(2^n))**
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10)); //? 55

//? **Big O Notasiyası:**
//? - For loop versiyası O(n) - hər addımda yeni ədəd hesablamaq üçün yalnız 1 keçid edir.
//? - Rekursiv versiya O(2^n) - hər çağırışda iki yeni çağırış edir, eksponensial artan mürəkkəblik yaradır.

//* **2. Faktorial Hesablanması**

//? Faktorial: n! = n * (n-1) * (n-2) * ... * 1
//? 5! = 5 * 4 * 3 * 2 * 1 = 120

//? **2.1 - For Loop ilə Faktorial (O(n))**
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialLoop(5)); //? 120

//? **2.2 - Rekursiya ilə Faktorial (O(n))**
function factorialRecursive(n) {
  if (n === 1) return 1; //? Bitiş nöqtəsi
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); //? 120

//? **Big O Notasiyası:**
//? - Hər iki üsul O(n) mürəkkəbliyə malikdir, çünki hər biri n dəfə əməliyyat aparır.
//? - Rekursiv versiyada call stack istifadəsi olduğuna görə əlavə yaddaş istifadəsi var.

//* **Nəticə:**
//? - Rekursiya problemləri daha kiçik hissələrə ayıraraq həll etməyə kömək edir.
//? - Ancaq lazımsız halda rekursiyadan istifadə etmək performans problemləri yarada bilər.
//? - Fibonacci üçün rekursiya istifadə etmək səmərəsizdir, ancaq faktorial üçün effektivdir.
