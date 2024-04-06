import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Himanshu from "../Header/Himanshu";
import Home from "../HomePage/home";
import Contact from "../ContactPage/contact";
import About from "../AboutPage/about";

export default function Layout({children}) {
return (
    <>
    <Himanshu />
    <Header />
    <Home />
    <About />
    <div className="select-none ">{children}</div>
    <Contact />
    <Footer />
    </>
);
}