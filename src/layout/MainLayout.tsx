import React, {ReactNode} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type MainLayoutProps = {
  children: ReactNode;
  headerTransition: boolean;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, headerTransition }) => {
  return (
    <>
      <Header headerTransition={headerTransition} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;