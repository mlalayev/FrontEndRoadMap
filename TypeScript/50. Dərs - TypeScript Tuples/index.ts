//* TypeScript Tuples

//? **Tuples nədir və nə üçün istifadə olunur?**
//? Tuples, TypeScript-də tipli array-lardır ki, onların uzunluğu və hər indeksdə saxlanılan məlumatın tipi əvvəlcədən təyin olunur.
//? Bu, verilənlərin dəqiqliyini artırır və tipləri yanlış istifadə etməkdən qoruyur.

//* **1. Tuple-nin Təyini və İstifadəsi**
//? Tuple təyin etmək üçün hər elementin tipini [] kvadrat mötərizədə təyin edirik.

// Nümunə:
let ourTuple: [number, boolean, string]; //? Bu, yalnız birinci elementin number, ikinci elementin boolean, üçüncünün string olmasını tələb edir.

// Tuple-ni düzgün şəkildə initialize edirik
ourTuple = [42, true, 'Hello World']; //? Bu, doğrudur.

//? Sıra pozulsa, xəta yaranır:
// ourTuple = [true, 'Wrong Order', 42]; //todo Xəta: "Type 'boolean' is not assignable to type 'number'."

//* **2. Tuple-lərin İmkanları və Məhdudiyyətləri**
//? Tuple-lər yalnız müəyyən edilmiş tip və sıradakı dəyərləri qəbul edir.

// Nümunə:
let studentData: [string, number, boolean];
studentData = ['John Doe', 23, true]; //? Bu doğru tərtib olunmuş tuple-dir.

// Əlavə dəyər əlavə etmək xəta yaratmaz, lakin bu dəyərin tipi yoxlanmaz:
studentData.push('Extra Value'); //? Bu qəbul edilir, amma təhlükəsiz deyil.
console.log(studentData); //todo Nəticə: ["John Doe", 23, true, "Extra Value"]

//* **3. Readonly Tuples (Oxunabilən Tuple-lər)**
//? Readonly tuple-lər əlavə dəyişikliklərin qarşısını alır. Bu yaxşı təcrübədir.

const readonlyTuple: readonly [string, number] = ['TypeScript', 2024];
// readonlyTuple.push('New Value'); //todo Xəta: "Property 'push' does not exist on type 'readonly [string, number]'."

//* **4. React və Tuple-lər**
//? React-da tuple-lər `useState` kimi hook-lar vasitəsilə tez-tez istifadə olunur.

// const [name, setName] = useState('Dylan'); //? Bu tuple-dur. Birinci element dəyər, ikinci element isə setter funksiyadır.

//* **5. Named Tuples (Adlandırılmış Tuple-lər)**
//? Tuple-lərə daha çox kontekst vermək üçün indekslər adlandırıla bilər. Bu, kodu oxumağı asanlaşdırır.

// Nümunə:
const graphPoint: [x: number, y: number] = [10.5, 20.3]; //? Birinci element x koordinatı, ikinci isə y-dir.
console.log(`X: ${graphPoint[0]}, Y: ${graphPoint[1]}`);

//* **6. Tuple-lərin Destructuring-i**
//? Tuple-lər array olduğu üçün destructuring istifadə edilə bilər.

const position: [number, number] = [100, 200];
const [x1, y1] = position;
console.log(`X koordinatı: ${x}, Y koordinatı: ${y}`);

//* **7. Tuple ilə Funksiyalar**
//? Tuple-lər funksiyalarda həm giriş, həm də çıxış tipi kimi istifadə edilə bilər.

// Funksiya Tuple qaytarır
function getPersonData(): [string, number, boolean] {
  return ['Alice', 30, true];
}

const [personName, personAge, isActive] = getPersonData();
console.log(`${personName}, ${personAge} yaşında, aktivlik: ${isActive}`);

// Funksiya Tuple qəbul edir
function displayCoordinates(coords: [number, number]): void {
  console.log(`X: ${coords[0]}, Y: ${coords[1]}`);
}
displayCoordinates([15, 25]);

//* **8. Tuple-lərin Məhdudiyyətləri**
//? Tuple-lər yalnız müəyyən edilmiş uzunluqda və tiplərdə dəyərləri qəbul edir.
//? Əlavə indekslər üçün tip yoxlanması yoxdur (readonly olmadığı halda).

//* **9. Real Həyatda İstifadə Nümunələri**
//? a. API-dən gələn məlumatlarda koordinatları təyin etmək üçün:
const locationData: [latitude: number, longitude: number] = [40.7128, -74.0060];

//? b. HTML elementlərinin ölçülərini təyin etmək üçün:
const elementDimensions: [width: number, height: number] = [1920, 1080];

//* **10. Tuple ilə Mürəkkəb Məlumat Strukturları**
//? Tuple-lər array-lər və ya obyektlərlə birlikdə mürəkkəb məlumat strukturları yaratmaq üçün istifadə edilə bilər.

const students: [string, [number, boolean]][] = [
  ['Alice', [85, true]],
  ['Bob', [72, false]],
  ['Charlie', [90, true]],
];

students.forEach(([name, [score, passed]]) => {
  console.log(`${name}: Bal - ${score}, Keçdi - ${passed}`);
});

//todo Bu geniş izahat və nümunələr tələbələrinizə Tuple-lərin necə işlədiyini və onları necə tətbiq edə biləcəklərini aydınlaşdıracaq. İstənilən əlavə sual üçün müraciət edə bilərsiniz!
