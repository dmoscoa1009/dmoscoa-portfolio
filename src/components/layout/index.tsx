import { Outlet } from "react-router";
import Header from "@/components/custom/header";
import CrosshairPointer from "@/components/custom/crosshair_pointer";
import BinaryBackground from "@/components/custom/binary-background";
import PageTransition from "@/components/custom/page-transition";

const Layout = () => {
  return (
    <div className="relative h-svh w-full overflow-hidden">
      <BinaryBackground />
      <div className="relative z-10 h-full pointer-events-none">
        <div className="pointer-events-auto h-full overflow-y-auto">
          <Header />
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
        <CrosshairPointer />
      </div>
    </div>
  );
};

export default Layout;
