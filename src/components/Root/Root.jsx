import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <section >
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Root;