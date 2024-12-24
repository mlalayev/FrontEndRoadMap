//* **TypeScript Object Types**

//? **TypeScript obyektlərin tiplərini təyin etməyə imkan verir.**
//? Bu, obyektlərdəki hər bir xüsusiyyətin dəqiq hansı tipdə olacağını əvvəlcədən müəyyən edir.
//? Beləliklə, səhvlərin qarşısı alınır və kod daha aydın olur.

//* **Obyektin Tipini Təyin Etmək**
//? Aşağıdakı nümunədə obyektin hər bir xüsusiyyətinin tipi müəyyən edilib:
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  
  //? Bu obyektin `type`, `model` və `year` xüsusiyyətləri var:
  //? - `type` - string tipində olmalıdır.
  //? - `model` - string tipində olmalıdır.
  //? - `year` - number tipində olmalıdır.
  
  // car.year = "Two Thousand Nine"; //todo Error: Type 'string' is not assignable to type 'number'.
  
  //* **Tipi Ayrı Yazmaq**
  //? Daha mürəkkəb obyektlərdə və ya bir neçə yerdə istifadə edilən tiplər üçün ayrı bir tip yaradın:
  type Car = { type: string; model: string; year: number };
  
  const anotherCar: Car = {
    type: "Ford",
    model: "Mustang",
    year: 2023
  };
  
  //? Bu üsul həm kodunuzu oxunaqlı edir, həm də təkrar istifadəyə imkan yaradır.
  
  //* **Tip İnferensiyası (Type Inference)**
  //? TypeScript avtomatik olaraq obyekt xüsusiyyətlərinin tiplərini müəyyən edə bilər:
  const inferredCar = {
    type: "Honda",
  };
  
  inferredCar.type = "Nissan"; //? No error
  // inferredCar.type = 123; //todo Error: Type 'number' is not assignable to type 'string'.
  
  //? **Qeyd:** TypeScript obyektə baxaraq `type` xüsusiyyətinin string olduğunu təyin etdi.
  
  //* **Opsional (Seçimli) Xüsusiyyətlər**
  //? `?` işarəsi ilə bəzi xüsusiyyətləri opsional edə bilərsiniz:
  const optionalCar: { type: string; mileage?: number } = {
    type: "Toyota",
  };
  
  //? `mileage` opsional olduğundan, bu obyektin yaradılmasında tələb edilmir.
  optionalCar.mileage = 20000; //? No error
  // optionalCar.mileage = "High"; //todo Error: Type 'string' is not assignable to type 'number'.
  
  //* **Index Signatures (İndeks İmzaları)**
  //? Obyektin xüsusiyyətləri əvvəlcədən müəyyən edilməmişdirsə, indeks imzaları istifadə olunur:
  const nameAgeMap: { [index: string]: number } = {};
  
  nameAgeMap["Jack"] = 25; //? No error
  // nameAgeMap["Mark"] = "Thirty"; //todo Error: Type 'string' is not assignable to type 'number'.
  
  //? Alternativ olaraq `Record` köməkçi tipindən istifadə edə bilərsiniz:
  const alternativeMap: Record<string, number> = {
    Alice: 30,
    Bob: 45,
  };
  