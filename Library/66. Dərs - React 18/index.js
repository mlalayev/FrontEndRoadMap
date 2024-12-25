//* React-u React 18-ə yüksəltmək
//* React 18-ə yüksəltmə prosesi mövcud React tətbiqləri üçün sadə iki addımdan ibarətdir.
//* Əgər artıq React 18 versiyasını istifadə edən ən son `create-react-app` versiyasını işlədirsinizsə, bu bölümü keçə bilərsiniz.

///** 1-ci Addım: React 18-in Quraşdırılması
//* İlk olaraq, layihənizin qovluğuna daxil olun. Terminalda aşağıdakı əmri çalışdıraraq React-in ən son versiyasını yükləyin:
//* npm i react@latest react-dom@latest
//* Bu əmrlə həm `react`, həm də `react-dom` paketlərinin son versiyası quraşdırılacaq.

///** 2-ci Addım: Yeni Root API-dən istifadə edin
//* React 18, xüsusilə asinxron və paralel işləmə imkanları təklif edir. Bu imkanlardan yararlanmaq üçün yeni `root` API-dən istifadə etməlisiniz.

//! React 18-dən əvvəlki üsul (Köhnə üsul)
//* ReactDOM modulu import olunur və `.render` metodu istifadə olunur.
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));

//! React 18-dən sonra istifadə olunan yeni üsul
//* ReactDOM əvəzinə `ReactDOM.createRoot` API-sindən istifadə edilir.
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//** Diqqət:
//* Əgər köhnə `ReactDOM.render` metodundan istifadə etməyə davam etsəniz, tətbiqiniz React 17 kimi işləyəcək.
//* Yəni yeni xüsusiyyətlər aktiv olmayacaq. Bu səbəbdən yeni `root` API-yə keçmək tövsiyə olunur.

//* Yeni API-nin üstünlükləri:
//? 1. Paralel işləmə xüsusiyyətləri: React 18-də asinxron yenilənmə imkanları daha yaxşı dəstəklənir.
//? 2. Daha çevik performans: React 18 ilə performans optimallaşdırmaları həyata keçirilir.
//? 3. Gələcəkdə çıxacaq yeniliklərə uyğun: Yeni API istifadə edərək React-in gələcək versiyalarına keçmək daha rahat olacaq.

//** Əlavə Məlumat:
//* Əgər React 18-ə keçdikdən sonra hər hansı problem yaşasanız, layihədə istifadə etdiyiniz paketlərin uyğunluğunu yoxlayın.
//* React 18 yeni xüsusiyyətlər təklif etsə də, bəzi köhnə paketlər uyğun olmaya bilər. Paketlərin ən son versiyalarını quraşdırmaq tövsiyə edilir.
//* Həmçinin, React 18 yenilikləri ilə bağlı rəsmi sənədləri öyrənməklə tətbiqinizə əlavə üstünlüklər qazandıra bilərsiniz.

//* Dərs Məlumatı:
//* Bu keçid addımları ilə şagirdlər React 18-ə rahat keçid etməyi öyrənəcəklər.
//* Əgər hər hansı sual yaranarsa, dərs zamanı nümunələrlə izah edə bilərsiniz.
