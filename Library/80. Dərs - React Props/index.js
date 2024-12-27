//* React Props
//? **Props** React komponentlərinə göndərilən arqumentlərdir.
//? **Props**, HTML atributları vasitəsilə komponentlərə ötürülür.
//? **Props** İngilis dilində "properties" (xüsusiyyətlər) sözünün qısaldmasıdır.

//? **React Props** JavaScript-dəki funksiya arqumentləri və HTML-dəki atributlar kimidir.
//? Props göndərmək üçün, eyni HTML atributları sintaksisindən istifadə edirik:
//? Məsələn, "Car" komponentinə **brand** adlı bir atribut əlavə edək:

const myElement = <Car brand="Ford" />; // Burada "brand" atributu "Ford" dəyəri ilə komponentə göndərilir

//? Komponent bu atributu **props** obyektində alır və ona daxil olur:

//* Misal
//? **props** obyektini istifadə edərək, komponentdə "brand" atributunu necə istifadə edəcəyimizə baxaq:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>; // props.brand vasitəsilə, "Ford" dəyərini göstəririk
}

//* Verilənlərin Keçirilməsi (Passing Data)
//? **Props**, məlumatları bir komponentdən digərinə keçirmək üçün istifadə olunur.
//? Yəni, bir komponent digərinə **props** vasitəsilə verilənlər göndərə bilər.
//? Məsələn, **Garage** komponentindən **Car** komponentinə **brand** adlı xüsusiyyəti necə göndəririk:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>; // props vasitəsilə gələn "brand" dəyərini göstəririk
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" /> {/* "brand" atributu ilə "Ford" dəyəri göndərilir */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // "Garage" komponentini render edirik

//* Dəyişkən Göndərmək (Passing Variables)
//? Əgər bir dəyişkən göndərmək istəyirsinizsə, yuxarıdakı misaldakı kimi birbaşa **string** göndərmək əvəzinə, sadəcə dəyişkənin adını mötərizələr içində yazmalısınız:
//? Məsələn, **carName** adlı bir dəyişkəni **Car** komponentinə göndərək:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>; // props vasitəsilə dəyişkən dəyərini alırıq
}

function Garage() {
  const carName = "Ford"; // carName adlı dəyişkəni yaratdıq
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />{" "}
      {/* carName dəyişkənini "Car" komponentinə göndəririk */}
    </>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // "Garage" komponentini render edirik

//* Obyekt Göndərmək (Passing Objects)
//? Əgər bir obyekt göndərmək istəyirsinizsə, dəyişkənə obyekt təyin edib, onu komponentə göndərə bilərsiniz:
//? Məsələn, **carInfo** adlı obyektini **Car** komponentinə göndərək:

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>; // Burada obyektin "model" xüsusiyyətini istifadə edirik
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" }; // carInfo adlı obyekt yaradılır
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />{" "}
      {/* carInfo obyektini "Car" komponentinə göndəririk */}
    </>
  );
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // "Garage" komponentini render edirik

//* Diqqət Edilməli Nüans
//? **React Props** yalnız **oxunur** (read-only) və onların dəyərini dəyişdirmək mümkün deyil!
//? Əgər **props** dəyərini dəyişməyə çalışsanız, bir xəta alarsınız.
//? Bu səbəbdən, **props** yalnız məlumatları göndərmək və oxumaq üçün istifadə olunur.

//* Qısa İzah:
//? **Props**-lar komponentlərə məlumat göndərmək üçün istifadə olunur.
//? **Props** vasitəsilə HTML atributları kimi komponentlərə **string**, **dəyişkənlər** və hətta **obyektlər** göndərə bilərsiniz.
//? **Props**-lar yalnız **oxunur**, yəni bir dəfə göndərildikdən sonra onları dəyişdirmək mümkün deyil.
//? Bu, komponentlərinizi daha təmiz və təhlükəsiz etməyə kömək edir.
