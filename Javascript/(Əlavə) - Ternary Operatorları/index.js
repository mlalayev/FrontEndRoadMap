//* **Ternary Operator (Şərtli Operator)**

// Ternary operator (üçlü operator) JavaScript-də şərtli ifadələri qısa və asan şəkildə yazmaq üçün istifadə olunur.
// Bu operator `if...else` strukturu ilə eyni funksiyanı yerinə yetirir, amma daha qısa və təmiz bir sintaksisə sahibdir.

// Ternary operator iki hissədən ibarətdir:
// 1. Şərt (ilk hissə)
// 2. Şərt doğru (true) olduqda icra olunacaq ifadə
// 3. Şərt səhv (false) olduqda icra olunacaq ifadə

//* **Sintaksis:**
//? condition ? exprIfTrue : exprIfFalse;

let age = 18;

// Ternary operator ilə şərt yoxlanılır:
let canVote = age >= 18 ? "You can vote" : "You cannot vote";

console.log(canVote); //? "You can vote"

//* **Nümunələr:**
// 1. Bir dəyişənin dəyəri əsasında nəticə əldə etmək:
let x = 10;
let result = x % 2 === 0 ? "Even" : "Odd";
console.log(result); //? "Even"

// 2. Ternary operator istifadə edərək funksiya içində şərtli əməliyyat:
function checkEligibility(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

console.log(checkEligibility(20)); //? "Eligible to vote"
console.log(checkEligibility(16)); //? "Not eligible to vote"

// 3. Bir neçə şərtin təhlili:
let time = 10;
let greeting =
  time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";
console.log(greeting); //? "Good morning"

//* **Ternary Operator Nə Zaman İstifadə Edilməlidir?**
// Ternary operator, sadə şərtli ifadələri yazmaq üçün idealdır, amma daha mürəkkəb şərtlər üçün `if...else`-ə üstünlük verilməlidir.
// Bu, kodun oxunaqlığını artırar və idarə etməni asanlaşdırar. Əgər şərt çox mürəkkəbdirsə və çox sayda əməliyyat varsa,
// o zaman `if...else` daha yaxşı seçim olacaq.
