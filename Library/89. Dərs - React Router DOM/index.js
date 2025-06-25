//* 📘 React Router DOM nədir?

//? React Router – React tətbiqlərində **sayt içində səhifələr arasında keçid** yaratmaq üçün istifadə olunur.
//? Əgər SPA (Single Page Application) içində bir neçə "səhifə" yaratmaq istəyirsinizsə – məsələn, Ana Səhifə, Haqqımızda, Əlaqə – bu zaman `react-router-dom` istifadə olunur.

//? React Router DOM – browser mühitində işləməsi üçün hazırlanmış xüsusi versiyadır (DOM üçün).

//* Quraşdırma:
//? npm install react-router-dom

//* Əsas Komponentlər:
//? 🔹 <BrowserRouter> – Router sistemini aktiv edir, tətbiqin əsas sarmalayıcı komponentidir
//? 🔹 <Routes> – bütün <Route> komponentlərini saxlayır
//? 🔹 <Route> – bir ünvan (path) üçün bir komponenti göstərir
//? 🔹 <Link> – yönləndirmə etmək üçün istifadə olunur (a tag əvəzinə)

//* Sadə Misal:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Ana Səhifə</h2>;
}

function About() {
  return <h2>Haqqımızda</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Ana Səhifə</Link> | <Link to="/about">Haqqımızda</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

//? Bu kodda:
//? - `/` ünvanı üçün `Home` komponenti göstərilir
//? - `/about` üçün `About` komponenti
//? - <Link> ilə səhifə yenilənmədən keçid edirik (SPA prinsipi)

//* Nested Routing – iç içə keçidlər

function Products() {
  return (
    <div>
      <h2>Məhsullar</h2>
      <Link to="phones">Telefonlar</Link>
      <Link to="laptops">Noutbuklar</Link>

      <Routes>
        <Route path="phones" element={<div>Telefonlar siyahısı</div>} />
        <Route path="laptops" element={<div>Noutbuklar siyahısı</div>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

//? `products/*` deyərək içində əlavə path-lərin gələcəyini bildiririk
//? Nested route-lar isə Products komponenti içində göstərilir

//* Dinamik Route – parametr ötürmək

function ProductDetail() {
  const { id } = useParams();
  return <h2>Seçilmiş məhsulun ID-si: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

//? useParams hook-u vasitəsilə URL-dən `id` kimi dinamik məlumatı alırıq

//* useNavigate – proqramatik keçid

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const daxilOl = () => {
    // Məsələn, login uğurlu olduqda yönləndirmək
    navigate("/dashboard");
  };

  return <button onClick={daxilOl}>Daxil ol</button>;
}

//? useNavigate istifadə edərək kod vasitəsilə digər səhifəyə keçə bilərik

//* useLocation və useSearchParams

//? useLocation – cari URL haqqında məlumat verir (pathname, search, hash və s.)
//? useSearchParams – URL query string-ləri oxumaq və dəyişmək üçün

//? 🔹 React Router DOM – SPA içində səhifələrarası keçid yaratmaq üçündür
//? 🔹 <BrowserRouter> ilə başlatılır
//? 🔹 <Routes> içində <Route> ilə yollar göstərilir
//? 🔹 <Link> və ya useNavigate ilə keçid edilir
//? 🔹 Dinamik və nested routing üçün `:id`, `*` və digər xüsusiyyətlər istifadə olunur
