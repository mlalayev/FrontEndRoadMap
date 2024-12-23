//* Git, GitHub və GitLab ilə İşləmək

//? **Git Nədir?**
//? Git, versiya nəzarət sistemidir və proqram təminatının inkişafını izləməyə imkan verir. Bu, kodun dəyişiklik tarixçəsini saxlayır və müxtəlif versiyaları arasında asanlıqla keçid etməyə imkan verir.
//? Git proqram təminatında fərqli inkişaf qruplarının eyni fayl üzərində paralel işləməsini asanlaşdırır, həmçinin geriyə gedərək əvvəlki versiyalara qayıtmağı təmin edir.

//? **Git-ə Nə Üçün Ehtiyac Var?**
//? - **Kodun versiyasını izləmək**: Kodda edilmiş dəyişiklikləri izləmək və dəyişiklikləri bərpa etmək üçün Git istifadə olunur.
//? - **Əməkdaşlıq**: Bir neçə inkişafçı eyni layihədə paralel işləyərkən Git müxtəlif versiyaları birləşdirərək əməkdaşlıq etməyə imkan verir.
//? - **Dəyişiklikləri geri qaytarmaq**: Git, kodun əvvəlki versiyalarına asanlıqla qayıtmağa imkan verir.
//? - **Kodun tarixçəsini saxlamaq**: Kodun hansı tarixdə necə dəyişdiyini izləmək mümkündür.

//? **Git və GitHub Fərqləri**
//? - **Git**: Git, bir versiya nəzarət sistemidir və yerli kompüterinizdə işləyir. Yəni, Git yalnız sizin kompüterinizdəki layihə üzərində işləyir.
//? - **GitHub**: GitHub, Git-in onlayn xidmətidir və Git-in nəzarət etdiyi layihəni uzaqdan saxlamağa və əməkdaşlıq etməyə imkan verir. GitHub kodunuzu saxlayıb paylaşmanızı təmin edir.

//? **GitLab**:
//? GitLab, GitHub-a alternativ bir onlayn platformadır. Həmçinin, öz serverlərinizdə GitLab instansiyasını qura bilərsiniz və layihənizi öz infrastrukturunuzda saxlayaraq daha çox idarəetmə imkanı əldə edirsiniz.
//? GitLab və GitHub arasında əsas fərq GitLab-ın öz serverində yerləşdirilə bilməsi, GitHub-un isə yalnız bulud əsaslı olmasıdır.

//? **Git GUI vs Git CLI**:
//? - **Git CLI** (Command Line Interface): Git-i komandalar vasitəsilə idarə etmək üçün terminaldan istifadə olunur. Daha güclü və sürətli idarəetmə imkanı verir, amma öyrənmək biraz çətin ola bilər.
//? - **Git GUI** (Graphical User Interface): Git üçün qrafik interfeysi təqdim edən tətbiqlərdir. Məsələn, GitKraken, SourceTree və ya GitHub Desktop. Git GUI, istifadəçi üçün daha sadə və vizual bir idarəetmə təcrübəsi təmin edir.

//? **Əsas Git Komandaları**
//? Git-in işləməsi üçün bəzi əsas komandalar var. Bu komandalarla Git-də kodun versiyasını izləyəcək və dəyişiklikləri idarə edəcəksiniz.

//* **1. Git Repo Yaratmaq**:
//? Yeni bir Git deposu yaratmaq üçün aşağıdakı komandadan istifadə edilir:
//* `git init`  //? Bu komanda yeni bir Git depoları yaratmaq üçün istifadə olunur.

//* **2. Git-də Dəyişiklikləri Yoxlamaq**:
//? Git-in hazırki vəziyyətini yoxlamaq üçün aşağıdakı komandanı istifadə edə bilərsiniz:
//* `git status`  //? Bu komanda dəyişiklikləri izləməyə kömək edir və hansı faylların dəyişdiyini göstərir.

//* **3. Git-də Fayl Əlavə Etmək**:
//? Git-də dəyişiklikləri izləmək üçün əvvəlcə bu dəyişiklikləri "staging" sahəsinə əlavə etməlisiniz. Bu, dəyişiklikləri yığmaq və onlardan əvvəlki versiya ilə müqayisə etmək üçün lazımdır.
//* `git add <file>`  //? Tək bir faylı staging sahəsinə əlavə edir.
//* `git add .`  //? Bütün dəyişiklikləri staging sahəsinə əlavə edir.

//* **4. Git Commit**:
//? Dəyişiklikləri commit etmək üçün, staging sahəsində olan dəyişiklikləri Git-ə qeyd etməlisiniz. Bu, dəyişiklikləri tarixçəyə daxil edir.
//* `git commit -m "Commit mesajı"`  //? Dəyişiklikləri commit edərək mesaj əlavə etmək.

//* **5. Git-də Dəyişiklikləri Göndərmək (Push)**:
//? Git commit etdikdən sonra, dəyişiklikləri uzaq serverə (məsələn, GitHub-a) göndərmək lazımdır.
//* `git push origin main`  //? Bu komanda dəyişiklikləri `main` adlı branch-ə göndərir (başqa branch adı varsa, onu yazmalısınız).

//* **6. Git-də Dəyişiklikləri Yükləmək (Pull)**:
//? Uzaq serverdən (GitHub və ya GitLab) yeni dəyişiklikləri yükləmək üçün `git pull` komandasından istifadə olunur.
//* `git pull origin main`  //? Bu komanda, `main` branch-ından yeni dəyişiklikləri yükləyir.

//* **7. Git-də Şaxə Yaratmaq (Branch)**:
//? Yeni bir şaxə (branch) yaratmaq, layihədə paralel inkişaf etmək üçün vacibdir.
//* `git branch <branch_adı>`  //? Yeni bir şaxə yaradacaq.
//* `git checkout <branch_adı>`  //? Bu komanda yeni şaxəyə keçid edir.
//* `git checkout -b <branch_adı>`  //? Yeni şaxə yaratmaq və ona keçmək.

//* **8. Git Merge**:
//? İki şaxəni birləşdirmək üçün `git merge` komandasını istifadə edirik. Bu komanda iki branch-ı birləşdirir.
//* `git merge <branch_adı>`  //? Bu komanda işlədilən branch-a digər branch-dakı dəyişiklikləri gətirir.

//* **9. Git Revert və Reset**:
//? Git-də dəyişiklikləri geri qaytarmaq üçün `git revert` və `git reset` istifadə olunur:
//* `git revert <commit_id>`  //? Bir commit-ı geri qaytarmaq üçün istifadə olunur.
//* `git reset --hard <commit_id>`  //? Dəyişiklikləri bütünlükdə geri qaytarır və seçilmiş commit-ə qayıdır.

//* **10. Git Remote**:
//? Uzaq server ilə əlaqə qurmaq üçün `git remote` istifadə edilir. Bu, GitHub və ya GitLab kimi uzaq repolarla işləməyə imkan verir.
//* `git remote add origin <url>`  //? Uzaq depo əlavə etmək.
//* `git remote -v`  //? Uzaq depoları göstərmək.

//? **Gitdə Staging və Commit**:
//? - **Staging Area**: Fayllar staging sahəsinə əlavə olunduqda, bu fayllar commit edilməyə hazır olur. Yəni, staging, commit edilmədən əvvəlki mərhələdir.
//? - **Commit**: Dəyişiklikləri qeyd etmək, tarixçəyə daxil etməkdir. Commit edilən fayllar versiya tarixçəsinə daxil olur.

//? **Qısaca Git Komandalarına Nəzər Yetirək**:
//? - `git init`: Yeni depo yaradır.
//? - `git status`: Dəyişiklikləri izləyir.
//? - `git add`: Faylları staging sahəsinə əlavə edir.
//? - `git commit`: Dəyişiklikləri commit edir.
//? - `git push`: Dəyişiklikləri uzaq serverə göndərir.
//? - `git pull`: Dəyişiklikləri uzaq serverdən yükləyir.
//? - `git branch`: Yeni şaxə yaradır.
//? - `git merge`: İki şaxəni birləşdirir.
//? - `git revert`: Commit dəyişikliklərini geri qaytarır.
//? - `git remote`: Uzaq depolarla əlaqə yaradır.
