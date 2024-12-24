//* **Fetch API nədir və nə üçün yaradılmışdır?**
//* Fetch API, JavaScript-də HTTP sorğularını etmək üçün asinxron və daha müasir bir yol təqdim edir.
//* XMLHttpRequest-in bəzi məhdudiyyətlərini həll etmək və daha təmiz kod yazmağa imkan vermək üçün yaradılmışdır.

//* **Fetch API-nin üstünlükləri:**
//* 1. Daha Oxunaqlı və Asinxron Kod: Promise əsaslı olduğu üçün `then` və `catch` ilə asanlıqla idarə olunur, həmçinin `async/await` dəstəkləyir.
//* 2. Header və Response İdarəetməsi: Fetch başlıqlar və cavabları idarə etmək üçün daha çevikdir.
//* 3. Daha Sadə və Standart API: Kod daha təmizdir və yeni layihələrdə istifadə etmək asandır.
//* 4. Asinxron Təbiət: Bloklama olmadan arxa planda sorğular həyata keçirə bilir.
//* 5. JSON ilə Rahat İş: Məlumat JSON olaraq göndərilib və qəbul edilə bilər.

//* **Fetch ilə CRUD Əməliyyatları Tətbiqi (Sinif Yanaşması)**

class Students {
  //* Constructor: Tələbə adı və fənnini təyin edir
  constructor(name, subject) {
    this.name = name; //* Tələbənin adı
    this.subject = subject; //* Tələbənin fənni
  }

  //* **GET (Bütün Məlumatları Əldə Etmək)**
  static getAllData = async () => {
    //? Serverdən bütün tələbələrin məlumatlarını əldə edir
    try {
      const response = await fetch("http://localhost:3000/person");
      const data = await response.json(); //* JSON cavabı alırıq
      console.log("Bütün məlumatlar:", data); //* Cavabı konsola yazdırırıq
    } catch (error) {
      console.error("Məlumat əldə edilərkən xəta baş verdi:", error);
    }
  };

  //* **GET (ID-yə görə məlumat əldə etmək)**
  static getUserById = async (id) => {
    //? Müəyyən ID-li tələbənin məlumatını əldə edir
    try {
      const response = await fetch(`http://localhost:3000/person/${id}`);
      const data = await response.json(); //* JSON cavabı alırıq
      console.log(`ID-si ${id} olan tələbə:`, data);
    } catch (error) {
      console.error("Məlumat əldə edilərkən xəta baş verdi:", error);
    }
  };

  //* **DELETE (ID-yə görə istifadəçi silmək)**
  static deleteUserById = async (id) => {
    //? Müəyyən ID-li tələbəni silmək üçün serverə sorğu göndərir
    try {
      const response = await fetch(`http://localhost:3000/person/${id}`, {
        method: "DELETE", //* DELETE metodu ilə sorğu göndəririk
      });
      const data = await response.json(); //* JSON cavabı alırıq
      console.log(`ID-si ${id} olan istifadəçi silindi:`, data);
    } catch (error) {
      console.error("İstifadəçi silinərkən xəta baş verdi:", error);
    }
  };

  //* **POST (Yeni istifadəçi yaratmaq)**
  static createNewUser = async (user) => {
    //? Yeni tələbə məlumatını serverə göndərir
    try {
      const response = await fetch("http://localhost:3000/person", {
        method: "POST", //* POST metodu ilə sorğu göndəririk
        headers: {
          "Content-Type": "application/json", //* Məlumatın JSON olduğunu göstərir
        },
        body: JSON.stringify(user), //* Göndərilən məlumatı JSON formatına çevirir
      });
      const data = await response.json(); //* JSON cavabı alırıq
      console.log("Yeni tələbə yaradıldı:", data);
    } catch (error) {
      console.error("Yeni tələbə yaradılarkən xəta baş verdi:", error);
    }
  };

  //* **PATCH (ID-yə görə istifadəçi məlumatını yeniləmək)**
  static patchUserById = async (id, updates) => {
    //? Müəyyən ID-li tələbənin məlumatlarını yeniləyir
    try {
      const response = await fetch(`http://localhost:3000/person/${id}`, {
        method: "PATCH", //* PATCH metodu ilə sorğu göndəririk
        headers: {
          "Content-Type": "application/json", //* Yenilənən məlumatın JSON olduğunu göstərir
        },
        body: JSON.stringify(updates), //* Yenilənən məlumatları JSON formatına çevirir
      });
      const data = await response.json(); //* JSON cavabı alırıq
      console.log(`ID-si ${id} olan tələbənin məlumatları yeniləndi:`, data);
    } catch (error) {
      console.error("Məlumat yenilənərkən xəta baş verdi:", error);
    }
  };
}

//* **Nümunə İstifadə:**
const student1 = new Students("Murad", "Frontend"); //* Yeni tələbə yaradırıq
Students.getAllData(); //* Bütün tələbələri əldə etmək üçün metod çağırırıq
Students.getUserById(1); //* ID-si 1 olan istifadəçini əldə edirik
Students.deleteUserById(2); //* ID-si 2 olan istifadəçini silirik
Students.createNewUser({ name: "Elvin", subject: "Backend" }); //* Yeni tələbə yaradırıq
Students.patchUserById(1, { subject: "Fullstack" }); //* ID-si 1 olan tələbənin fənnini yeniləyirik
