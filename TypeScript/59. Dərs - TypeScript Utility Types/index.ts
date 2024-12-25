//* TypeScript Utility Types
//? TypeScript, ən çox istifadə olunan tip manipulyasiya əməliyyatları üçün çoxsaylı utility (yardımçı) tipləri təqdim edir. Bu tiplər, daha çevik və təkrar istifadə oluna bilən kod yazmağa kömək edir.
//? Bu dərsdə, utility tiplərinin ən məşhur olanları haqqında danışacağıq.
//? Utility tipləri, tip təhlükəsizliyini artırmaq və verilənlər üzərində müxtəlif əməliyyatları həyata keçirmək üçün istifadə olunur.

/* 
  Partial
  - Partial utility tipi, obyektin bütün xüsusiyyətlərini opsional (istəyə bağlı) edir. 
  - Bu, obyektin yalnız bəzi xüsusiyyətləri ilə işləməyə imkan verir, yəni bəzilərini təyin etmədən obyekt yarada bilərsiniz.
*/

interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` ilə x və y xüsusiyyətləri opsional oldu.
pointPart.x = 10; // Bu sətir işləyəcək, çünki `x` artıq opsionaldır.

//? `Partial` tipi obyektin hər hansı bir xüsusiyyətinin olmamasına imkan verir və beləliklə daha çevik kod yazmağa kömək edir.

/*
    Required
    - `Required` utility tipi, obyektin bütün xüsusiyyətlərini məcburi edir.
    - Bu, bəzi xüsusiyyətlərin opsional olduğu hallarda, onların hamısını tələb etməyə imkan verir.
  */

interface Car {
  make: string;
  model: string;
  mileage?: number; // `mileage` burada opsional olub, istifadəçi tərəfindən verilməyə bilər.
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` sayəsində `mileage` burada məcburi olaraq təyin edilir.
};
//? `Required`, opsional xüsusiyyətləri məcburi hala gətirir, beləliklə bütün xüsusiyyətlər tələb olunur.

/*
    Record
    - `Record` utility tipi, müəyyən bir açar tipi və dəyər tipi ilə obyekt yaratmağa imkan verir.
    - Bu, müxtəlif açarlarla uyğun gələn dəyər tiplərini təyin etməyə kömək edir.
  */

const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
//? `Record<string, number>` istifadə edərək, açarın tipi `string` və dəyərin tipi `number` olaraq təyin edilir.
//? `Record<string, number>` eyni zamanda `{ [key: string]: number }` tipinə bərabərdir.

/*
    Omit
    - `Omit` utility tipi, obyekt tipindən müəyyən açarları çıxarmağa imkan verir.
    - Bu, bəzı xüsusiyyətləri tipdən silmək üçün istifadə olunur.
  */

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
  // `Omit` sayəsində `age` və `location` xüsusiyyətləri tipdən çıxarılıb və burada istifadə oluna bilməz.
};
//? `Omit` istənilən açarları obyekt tipindən çıxarmağa imkan verir.

/*
    Pick
    - `Pick` utility tipi, obyektin yalnız müəyyən açarlarını saxlamağa imkan verir.
    - Bu, obyektin yalnız müəyyən xüsusiyyətləri ilə işləməyə imkan yaradır.
  */

const bobPick: Pick<Person, "name"> = {
  name: "Bob",
  //? Burada, `Pick` yalnız `name` xüsusiyyətini saxlayır, buna görə də `age` və `location` tipdən çıxarılıb və burada istifadə edilə bilməz.
};
//? `Pick`, müəyyən açarları obyekt tipində saxlamağa imkan verir, qalan xüsusiyyətləri isə silir.

/*
    Exclude
    - `Exclude` utility tipi, union tiplərindən müəyyən tipləri çıxarmağa imkan verir.
    - Bu, müəyyən tipləri birləşdirməkdən çəkinmək üçün istifadə olunur.
  */

type Primitive = string | number | boolean;

const valueVal: Exclude<Primitive, string> = true; // `Exclude`, `string`-i `Primitive` tipindən çıxarıb. Burada `value` yalnız `number` və `boolean` tipində ola bilər.
//? Bu, union tipindən müəyyən növlərin çıxarılmasına imkan verir, beləliklə yalnız uyğun növ qalmış olur.

/*
    ReturnType
    - `ReturnType` utility tipi, bir funksiyanın qaytarma tipini çıxarmağa imkan verir.
    - Bu, funksiyaların qaytardığı dəyərləri təyin etmək və onlara əsaslanaraq yeni tiplər yaratmaq üçün istifadə edilir.
  */

type PointGenerator = () => { x: number; y: number };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
//? `ReturnType<PointGenerator>` ilə `PointGenerator` funksiyasının qaytaracağı tip çıxarılır və bu, `point` obyektinə təyin edilir.

/*
    Parameters
    - `Parameters` utility tipi, bir funksiyanın parametr tiplərini massiv şəklində çıxarmağa imkan verir.
    - Bu, funksiya parametrlərini idarə etmək və onlardan yeni tiplər yaratmaq üçün istifadə olunur.
  */

type PointPrinter = (p: { x: number; y: number }) => void;

const pointParam: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20,
};
//? `Parameters<PointPrinter>` ilə `PointPrinter` funksiyasının parametr tipi çıxarılır və bu, `pointParam` obyektinə tətbiq edilir.

/*
    Readonly
    - `Readonly` utility tipi, obyektin bütün xüsusiyyətlərini yalnız oxumağa imkan verir, yəni təyin edildikdən sonra dəyişdirilə bilməzlər.
    - Bu, xüsusiyyətlərin təhlükəsizliyini təmin etmək və onlara yalnız oxuma əməliyyatları etməyə imkan verir.
  */
{
interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};

//person.name = "Israel"; // Error: Cannot assign to 'name' because it is a read-only property.
//? `Readonly`, obyektin xüsusiyyətlərini dəyişdirilməz edir, amma unutmayın ki, TypeScript-də yalnız kompilasiya zamanında bu dəyişikliklər qarşısı alınır. JavaScript-də isə, səhvlər proqramın işlədiyi zaman baş verə bilər.
}
/*
    Nəticə
    - `Utility Types`, TypeScript-də çox faydalı alətlər təqdim edir və bu tiplər kodunuzu daha çevik, təhlükəsiz və oxunaqlı etməyə kömək edir.
    - `Partial`, `Required`, `Record`, `Omit`, `Pick`, `Exclude`, `ReturnType`, `Parameters`, və `Readonly` tipləri ilə müxtəlif obyektlər və funksiyalar üzərində müxtəlif əməliyyatlar həyata keçirə bilərsiniz.
    - Bu dərsdə öyrəndiyiniz utility tipləri ilə, layihələrinizdə daha səmərəli və effektiv kodlar yaza bilərsiniz.
  */
