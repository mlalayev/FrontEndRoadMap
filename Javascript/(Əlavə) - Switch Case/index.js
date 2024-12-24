//* **Switch Case (Dəyişən Dəyər üzrə Seçim)**

// `switch` ifadəsi, bir dəyişənin bir neçə mümkün dəyərini yoxlamaq və ona uyğun əməliyyatlar yerinə yetirmək üçün istifadə olunur.
// `if...else` bloklarından fərqli olaraq, `switch` bir neçə şərti qısa və aydın şəkildə yoxlamağa imkan verir.

//* **Sintaksis:**
//? switch (expression) {
//?     case value1:
//?         // expression `value1` ilə uyğun gəlirsə buradakı əməliyyat yerinə yetiriləcək
//?         break;
//?     case value2:
//?         // expression `value2` ilə uyğun gəlirsə buradakı əməliyyat yerinə yetiriləcək
//?         break;
//?     default:
//?         // Əgər heç bir `case` uyğun gəlmirsə, bu blok işə düşəcək
//?         break;
//? }

let day = 3;
let dayName;

// `switch` ilə `day` dəyərinin uyğun olduğu nəticə seçilir
switch (day) {
  case 1:
    dayName = "Monday";
    break; // Hər bir case sonrası `break` istifadə olunur ki, digər hallara keçməsin
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day"; // Əgər `day` heç bir `case` ilə uyğun gəlməzsə, default işə düşəcək
}

console.log(dayName); //? "Wednesday"

//* **Nümunələr:**

let fruit = "apple";

// `switch` ilə `fruit` dəyəri yoxlanılır
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  case "orange":
    console.log("It's an orange");
    break;
  default:
    console.log("Unknown fruit");
    break;
}

//? Nəticə: "It's an apple"

//* **`switch` İstifadə Edilən Hallar:**
// - `switch` ifadəsi, bir çox şərti yoxlamaq və nəticəni seçmək istədiyiniz hallarda istifadə olunur.
// - Daha çox sabitlər və sadə müqayisələr üçün idealdır.
// - `switch` istifadə edərkən bir neçə şərt varsa və şərtlərin sayısı çoxdursa, kodun oxunaqlığını artırır.

//* **`switch` ilə `break` və `default`:**
// - `break` sözü, uyğun gələn `case` blokunun icra edildikdən sonra `switch`-i bitirir və kodun digər hissələrinə keçməyə imkan verir.
// - `default` isə, heç bir `case` şərti ilə uyğun gəlmədikdə işə düşəcək blokdur.
