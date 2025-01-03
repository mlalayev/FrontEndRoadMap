//* 45. Gün - TypeScript Başlamaq

//? **TypeScript Compiler-i**
//? TypeScript, JavaScript-ə çevrilmək üçün bir kompilyatordan istifadə edir.
//? TypeScript kodunun transpile edilməsi (JavaScript-ə çevrilməsi) onu JavaScript-in işlədiyi hər yerdə işlətmək imkanı verir.

//* **Kompilyatorun Qurulması**:
//? TypeScript-in rəsmi kompilyatoru `npm` vasitəsilə qurula bilər.
//? Npm layihəniz daxilində aşağıdakı kodu işlədərək kompilyatoru quraşdıra bilərsiniz:

//* `npm install typescript --save-dev`

//? Bu koddan sonra aşağıdakı kimi bir nəticə görəcəksiniz:

//* ```
//* added 1 package, and audited 2 packages in 2s
//* found 0 vulnerabilities
//* ```

//? Kompilyator `node_modules` qovluğuna quraşdırılacaq və `npx tsc` kodu ilə işlədilə bilər.

//* **Kompilyatorun İstifadəsi**:
//? Kompilyatoru işə salmaq üçün aşağıdakı kodu işlədin:

//* `npx tsc`

//? Bu kod ilə aşağıdakı kimi bir nəticə görəcəksiniz:

//* ```
//* Version 4.5.5
//* tsc: The TypeScript Compiler - Version 4.5.5
//* ```

//? Sonra **Common Commands**-in siyahısını görə bilərsiniz.

//* **Kompilyatorun Konfiqurasiyası**:
//? By default, TypeScript kompilyatoru boş bir layihə içində işlədildikdə yardım mesajı göstərir.
//? Kompilyatoru konfiqurasiya etmək üçün `tsconfig.json` faylından istifadə edə bilərsiniz.

//? `tsconfig.json` faylını yaratmaq üçün aşağıdakı kodu işlədin:

//* `npx tsc --init`

//? Bu əmrlə aşağıdakı kimi bir nəticə alacaqsınız:

//* ```
//* Created a new tsconfig.json with:
//* TS
//* target: es2016
//* module: commonjs
//* strict: true
//* esModuleInterop: true
//* skipLibCheck: true
//* forceConsistentCasingInFileNames: true
//* ```

//? **tsconfig.json** faylı, TypeScript kompilyatorunun necə işləyəcəyini müəyyən edir. Faylın nümunəsi:

//* ```json
// * {
// *   "include": ["src"],
// *   "compilerOptions": {
// *     "outDir": "./build"
// *   }
// * }
// ```

//? Burada, **src/** qovluğunda yerləşən TypeScript fayllarının JavaScript-ə çevrilməsi üçün `build/` qovluğunda saxlanması tələb olunur.
//? Bu fayl konfiqurasiya TypeScript kompilyatorunun çıxış fayllarını təyin edir.

//* **Başlamaq üçün Daha Çox Seçim**:
//? TypeScript-i tez bir şəkildə başlamaq üçün çoxlu variantlar mövcuddur. Bunlara **create-react-app** şablonu, **node starter** layihəsi və **webpack plugin** daxil olmaqla bir çox seçim mövcuddur.
//? Bu vasitələr TypeScript-i layihələrə tez və effektiv şəkildə əlavə etməyə kömək edir.
