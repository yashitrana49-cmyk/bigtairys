import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Lazy-loaded so three.js (~600 kB) stays out of the main bundle;
// the chunk is fetched only when this layout first renders.
const LaserFlow = lazy(() => import('../components/LaserFlow'));

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
        <Suspense fallback={null}>
          <LaserFlow />
        </Suspense>
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