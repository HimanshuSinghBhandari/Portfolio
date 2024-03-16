import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Himanshu from "../Header/Himanshu";

export default function Layout({children}) {
return (
    <>
    <Himanshu />
    <Header />
    <div className="select-none ">{children}</div>
    <Footer />
    </>
);
}