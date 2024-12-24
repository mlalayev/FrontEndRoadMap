//* **TypeScript Enum-lar**  
//? Enum (enumeration) sabit (dəyişməz) dəyərləri idarə etmək üçün istifadə edilən xüsusi bir "sinifdir".  
//? Enum-lar kodun oxunmasını və idarə edilməsini asanlaşdırır, çünki sabitlərin məna kəsb edən adlarını istifadə etməyə imkan verir.

//todo TypeScript-də Enum-lar iki əsas növə ayrılır:  
//? 1. **Rəqəmsal Enum-lar** (Numeric Enums)  
//? 2. **Yazısal Enum-lar** (String Enums)

//* **Rəqəmsal Enum-lar**  
//? Rəqəmsal Enum-lar dəyərləri rəqəm olaraq saxlayır. İlk dəyər standart olaraq `0` olur, digər dəyərlər isə avtomatik artırılır.

//* **Default (Standart İlkin Dəyərlər) Rəqəmsal Enum-lar**
//? Gəlin bir rəqəmsal enum nümunəsinə baxaq:

enum CardinalDirections {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
  }
  
  let currentDirection = CardinalDirections.North; // 0 dəyərinə bərabərdir.
  console.log(currentDirection); // logs: 0
  
  //todo `currentDirection`-a uyğunsuz dəyər təyin etmək mümkün deyil:
  //currentDirection = 'North'; // Error: "North" dəyəri 'CardinalDirections' tipinə uyğun deyil.
  
  //* **İlkin Dəyərlərin Müəyyənləşdirilməsi (Initialized Numeric Enum-lar)**  
  //? İlk dəyəri özümüz təyin edə bilərik. Digər dəyərlər avtomatik artırılacaq:
  
  enum CardinalDirectionsWithStart {
    North = 1, // 1
    East,      // 2
    South,     // 3
    West       // 4
  }
  
  console.log(CardinalDirectionsWithStart.North); // logs: 1
  console.log(CardinalDirectionsWithStart.West);  // logs: 4
  
  //* **Tam Təyin Edilmiş Dəyərlər (Fully Initialized Numeric Enum-lar)**  
  //? Hər bir dəyəri əl ilə təyin edərək avtomatik artımı söndürmək mümkündür:
  
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  
  console.log(StatusCodes.NotFound); // logs: 404
  console.log(StatusCodes.Success);  // logs: 200
  
  //* **Sətir Enum-lar**  
  //? Sətir Enum-lar dəyərləri string olaraq saxlayır və daha oxunaqlı olur. Onlar oxuma və məqsədyönlülük baxımından daha geniş yayılmışdır.
  
  enum CardinalDirectionsStrings {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
  }
  
  console.log(CardinalDirectionsStrings.North); // logs: "North"
  console.log(CardinalDirectionsStrings.West);  // logs: "West"
  
  //todo Mümkün olsa da, rəqəmsal və sətir dəyərlərini bir enum daxilində qarışdırmaq məsləhət görülmür.
  
  //* **Enum və Obrazlar Arasında Konvertasiya**  
  //? Enum-lar və onların dəyərləri arasında qarşılıqlı əlaqə asanlıqla həyata keçirilə bilər.
  
  enum Colors {
    Red = "red",
    Blue = "blue",
    Green = "green"
  }
  
  const colorName: string = Colors.Red;
  console.log(colorName); // logs: "red"
  
  //* **Enum-ların Dönməsi (Iteration)**  
  //? Enum-ların açarlarını və dəyərlərini iterasiya ilə oxumaq mümkündür.
  
  enum Fruits {
    Apple = 1,
    Banana = 2,
    Orange = 3
  }
  
  for (const fruit in Fruits) {
    if (isNaN(Number(fruit))) {
      console.log(fruit); // logs: "Apple", "Banana", "Orange"
    }
  }
  
  //* **Enum İstifadə Sahələri**  
  //? Enum-ların istifadə sahələri olduqca genişdir:
  //? - HTTP Status kodları (məsələn, `StatusCodes` nümunəsi)
  //? - İstiqamətlər (məsələn, `CardinalDirections` nümunəsi)
  //? - Rejimlər və vəziyyətlər (məsələn, bir tətbiqin iş rejimi)
  //? - Fərqli vəziyyətlərin təmsili (məsələn, oyun mərhələləri)
  
  //* **Enum-lar ilə Tip Təhlükəsizliyi**  
  //? Enum-lar kodda mümkün səhvləri azaldır. Onlar yalnız öncədən təyin edilmiş dəyərlərin istifadəsinə icazə verir.
  
  //* **Əlavə Qeyd**  
  //todo Enum-lar daha mürəkkəb ssenarilər üçün genişləndirilmiş şəkildə TypeScript sənədlərində izah edilmişdir. Onları dərindən öyrənmək üçün rəsmi sənədləri araşdırmağı unutmayın!
  