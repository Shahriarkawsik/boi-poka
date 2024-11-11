import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
// import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <section >
      {/* <Header></Header> */}
      <NavBar></NavBar>
      {/* <Banner></Banner> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Root;