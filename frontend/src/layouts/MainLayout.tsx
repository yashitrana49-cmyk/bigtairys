import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LaserFlow } from '../components/LaserFlow';

export default function MainLayout() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: "#000",
        }}
      >
        {/* @ts-expect-error LaserFlow provides defaults for all props internally */}
        <LaserFlow />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "transparent",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}