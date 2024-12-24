//* TypeScript-də Tip Alias-ları və İnterfeyslər
//? TypeScript dəyişənlərdən müstəqil şəkildə tipləri təyin etməyə imkan verir. 
//? Tip Alias-ları və İnterfeyslər müxtəlif dəyişənlər/obyektlər arasında tipləri asanlıqla paylaşmağa imkan verir.

//* Tip Alias-ları (Type Aliases)
//? Tip Alias-ları tipləri xüsusi bir adla (Alias) təyin etməyə imkan verir.
//? Tip Alias-ları sadə tiplər (məsələn, string, number) və ya daha mürəkkəb tiplər (obyektlər, massivlər) üçün istifadə oluna bilər.

//? Tip Alias-ı yaradın, məsələn, `CarYear` tipi `number` tipi kimi təyin olunur
type CarYear = number  //? Burada `CarYear` alias-ı `number` tipini təmsil edir

//? `CarType` tipi `string` kimi təyin olunub
type CarType = string  //? Burada `CarType` alias-ı `string` tipini təmsil edir

//? `CarModel` tipi də `string` kimi təyin olunur
type CarModel = string  //? Burada `CarModel` alias-ı da `string` tipini təmsil edir

//? `Car` tipini obyekt olaraq təyin edirik, burada `CarYear`, `CarType`, və `CarModel` alias-larını istifadə edirik
type Car1 = { //? `Car` tipinin strukturu
  year: CarYear,  //? `year` sahəsi `CarYear` tipində olacaq (yəni `number`)
  type: CarType,  //? `type` sahəsi `CarType` tipində olacaq (yəni `string`)
  model: CarModel  //? `model` sahəsi `CarModel` tipində olacaq (yəni `string`)
}

//? Car tipində obyekt yaradılır
const carYear: CarYear = 2001  //? `carYear` dəyişəni `CarYear` tipində təyin olunur və `2001` dəyəri verilir
const carType: CarType = "Toyota"  //? `carType` dəyişəni `CarType` tipində təyin olunur və `"Toyota"` dəyəri verilir
const carModel: CarModel = "Corolla"  //? `carModel` dəyişəni `CarModel` tipində təyin olunur və `"Corolla"` dəyəri verilir

//? `Car` tipində bir obyekt yaradılır və uyğun olaraq əvvəlki dəyişənlər təyin olunur
const car1: Car = {  //? Burada `car` obyekti `Car` tipində olacaq
  year: carYear,   //? `year` sahəsi `carYear` dəyişəninə təyin olunur
  type: carType,   //? `type` sahəsi `carType` dəyişəninə təyin olunur
  model: carModel  //? `model` sahəsi `carModel` dəyişəninə təyin olunur
};

//* İnterfeyslər (Interfaces)
//? İnterfeyslər, tip alias-larına bənzər, lakin yalnız obyekt tipləri üçün istifadə olunur.
//? İnterfeyslər obyekti müəyyənləşdirir və onu digər obyektlərə tətbiq etməyə imkan verir.

//? Məsələn, `Rectangle` interfeysi obyektin `height` və `width` sahələrini müəyyənləşdirir
interface Rectangle {  //? Burada `Rectangle` interfeysi obyektin strukturunu təyin edir
  height: number,  //? `height` sahəsi `number` tipində olmalıdır
  width: number  //? `width` sahəsi `number` tipində olmalıdır
}

//? `Rectangle` tipində obyekt yaradılır
const rectangle: Rectangle = {  //? `rectangle` obyekti `Rectangle` interfeysinə uyğun olmalıdır
  height: 20,   //? `height` sahəsi `20` olaraq təyin olunur
  width: 10     //? `width` sahəsi `10` olaraq təyin olunur
};

//* İnterfeysləri Uzatmaq (Extending Interfaces)
//? İnterfeyslər bir-birini genişləndirmək (extend) yolu ilə tiplərini artıra bilərlər.
//? İnterfeysin genişləndirilməsi, mövcud interfeysin sahələrini qoruyaraq yeni sahələr əlavə etmək deməkdir.

//? Məsələn, `Rectangle` interfeysi genişlədiləcək və yeni `color` sahəsi əlavə ediləcək
interface Rectangle {  //? Əvvəlki `Rectangle` interfeysi
  height: number,  //? `height` sahəsi `number` tipində olmalıdır
  width: number  //? `width` sahəsi `number` tipində olmalıdır
}

//? Yeni interfeys `ColoredRectangle` adı ilə yaradılır və `Rectangle` interfeysi genişləndirilir
interface ColoredRectangle extends Rectangle {  //? `ColoredRectangle` interfeysi `Rectangle` interfeysini genişləndirir
  color: string  //? Yeni `color` sahəsi əlavə edilir, hansı ki, `string` tipində olacaq
}

//? `ColoredRectangle` tipində obyekt yaradılır
const coloredRectangle: ColoredRectangle = {  //? `coloredRectangle` obyekti `ColoredRectangle` interfeysinə uyğun olmalıdır
  height: 20,    //? `height` sahəsi `20` olaraq təyin olunur
  width: 10,     //? `width` sahəsi `10` olaraq təyin olunur
  color: "red"   //? `color` sahəsi `"red"` olaraq təyin olunur
};

//* Tip Alias-ları və İnterfeyslər Arasındakı Fərqlər
//? Tip Alias-ları və İnterfeyslər oxşar funksionallıq təmin edir, amma bəzi fərqlər vardır:
//? 1. İnterfeyslər yalnız obyekt tipləri ilə işləyir, Tip Alias-ları isə həm sadə tiplər, həm də obyektlər üçün istifadə edilə bilər.
//? 2. İnterfeyslər genişlənə bilər (`extends`), amma Tip Alias-ları təkrarlana və ya genişləndirilə bilməz.
//? 3. Tip Alias-ları sadəcə tipləri müəyyən edir, amma İnterfeyslər həmçinin obyektin strukturunu təmin edir.

//* Əlavə Məlumat
//? Tip Alias-ları çox vaxt sadə tipləri adlandırmaq və mürəkkəb tipləri daha oxunaqlı etmək üçün istifadə olunur.
//? İnterfeyslər isə xüsusi olaraq obyektlərin və onların sahələrinin strukturunu təyin etmək üçün nəzərdə tutulub.
//? Tip Alias-ları və İnterfeyslərin hər ikisi də kodu təkrarlamamaq və daha təmiz kod yazmaq məqsədilə istifadə edilə bilər.

