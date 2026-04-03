import { Outlet } from "react-router-dom";
import GlobalBackground from "../components/GlobalBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <GlobalBackground />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
        <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}