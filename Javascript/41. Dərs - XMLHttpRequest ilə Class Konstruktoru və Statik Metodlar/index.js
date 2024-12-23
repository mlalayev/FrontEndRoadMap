//? **Students Sinfi**
//? Bu sinf bir tələbəni təmsil edir və statik metodlar vasitəsilə mock API ilə əlaqə qurmağı təmin edir. Tələbənin adı və fənni vardır.
class Students {
  //? **Konstruktor Metodu** - Tələbənin adını və fənnini müəyyən edən metod.
  constructor(name, subject) {
    this.name = name; // Verilən 'name' dəyərini instansiyanın 'name' özəlliyinə təyin edir.
    this.subject = subject; // Verilən 'subject' dəyərini instansiyanın 'subject' özəlliyinə təyin edir.
  }

  //? **Statik Metod: getAllData** - API-dən bütün məlumatları çəkmək üçün XMLHttpRequest istifadə edən statik metod.
  static getAllData = () => {
    const xhr = new XMLHttpRequest(); // Yeni XMLHttpRequest obyekti yaradılır.
    xhr.onload = () => {
      // Request tamamlandıqda işləyəcək callback funksiyası.
      const data = JSON.parse(xhr.response); // Serverdən gələn JSON cavabını JavaScript obyektinə çevirir.
      console.log(data); // Gələn məlumatı konsola çap edir.
    };
    xhr.open(`${method}`, `http://localhost:3000/${endPoint}`); // 'method' və 'endPoint' dəyərləri ilə URL qurulub açılır.
    xhr.send(); // Request göndərilir.
  };

  //? **Statik Metod: getUserById** - Verilən ID-yə görə istifadəçi məlumatlarını çəkmək üçün statik metod.
  static getUserById = (id) => {
    try {
      const xhr = new XMLHttpRequest(); // Yeni XMLHttpRequest obyekti yaradılır.
      xhr.onload = () => {
        // Request tamamlandıqda işləyəcək callback funksiyası.
        const data = JSON.parse(xhr.response); // Cavabı JSON formatında JavaScript obyektinə çevirir.
        console.log(data); // İstifadəçi məlumatını konsola çap edir.
      };
      xhr.open("GET", `http://localhost:3000/person/${id}`); // API-ə GET sorğusu göndərilir, URL-də ID istifadə edilir.
      xhr.send(); // Request göndərilir.
    } catch (error) {
      console.error(error); // Hər hansı bir səhv baş verərsə, xətanı konsola yazdırır.
    }
  };

  //? **Statik Metod: deleteUserById** - Verilən ID-yə görə istifadəçini silmək üçün statik metod.
  static deleteUserById = (id) => {
    const xhr = new XMLHttpRequest(); // Yeni XMLHttpRequest obyekti yaradılır.
    xhr.onload = function () {
      // Request tamamlandıqda işləyəcək callback funksiyası.
      const data = JSON.parse(xhr.response); // Cavabı JSON formatında obyektə çevirir.
      console.log(data); // Silinmiş istifadəçi məlumatını konsola çap edir.
    };
    xhr.open("DELETE", `http://localhost:3000/person/${id}`); // API-ə DELETE sorğusu göndərilir, ID ilə istifadəçi silinir.
    xhr.send(); // Request göndərilir.
  };

  //? **Statik Metod: createNewUser** - Yeni istifadəçi yaratmaq üçün metod. Əgər istifadəçi artıq mövcuddursa, yeni istifadəçi yaratmaqdan qaçır.
  static createNewUser = (user) => {
    const xhr = new XMLHttpRequest(); // Yeni XMLHttpRequest obyekti yaradılır.
    let davam = true; // Yeni istifadəçi əlavə etmək üçün 'davam' flaqı təyin edilir.
    const newUser = JSON.stringify(user); // Yeni istifadəçi məlumatını JSON formatına çevirir.
    xhr.onload = () => {
      const data = JSON.parse(xhr.response); // Serverin cavabını JSON formatında obyektə çevirir.

      //? Bütün istifadəçiləri yoxlayırıq, əgər verilən istifadəçi artıq mövcuddursa 'davam' flaqını 'false' edirik.
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == user.name && data[i].subject == user.subject) {
          davam = false; // İstifadəçi artıq mövcuddur, davam etməyə ehtiyac yoxdur.
          console.error("Bele istifadeci artiq movcuddur"); // Konsola xətanı çap edir.
          break; // Dövrü dayandırır.
        }
      }

      //? Əgər istifadəçi mövcud deyilsə, yeni istifadəçi yaradılır.
      if (davam) {
        const postXhr = new XMLHttpRequest(); // Yeni XMLHttpRequest obyekti yaradılır.
        postXhr.onload = function () {
          // Request tamamlandıqda işləyəcək callback funksiyası.
          console.log(JSON.parse(postXhr.response)); // Yaradılmış istifadəçi məlumatını konsola çap edir.
          console.warn("Istifadeci yaradildi"); // Yeni istifadəçi yaradıldığına dair xəbərdarlıq edir.
        };
        postXhr.open("POST", "http://localhost:3000/person"); // API-ə POST sorğusu göndərilir, yeni istifadəçi əlavə edilir.
        postXhr.setRequestHeader("Content-Type", "application/json"); // Request başlığında JSON formatı təyin edilir.
        postXhr.send(newUser); // Yeni istifadəçi məlumatını göndərir.
      }
    };
    xhr.open("GET", "http://localhost:3000/person"); // İlk olaraq mövcud istifadəçiləri əldə etmək üçün GET sorğusu göndərilir.
    xhr.send(); // Request göndərilir.
  };
}

//? **Tələbə Objekti Yaradılması**
//? Burada "Murad" adında və "Frontend" fənnində bir tələbə obyekti yaradılır.
const person1 = new Students("Murad", "Frontend");
