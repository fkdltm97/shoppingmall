import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//pages
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoingPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./layout/NavBar";
import Footer from "./layout/Footer";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <Navbar/>
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
