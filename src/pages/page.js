import Home from "../../components/HomePage/home";
import About from "../../components/AboutPage/about";
import Contact from "../../components/ContactPage/contact";
import Project from "../../components/ProjectPage/project";
export default function Main() {
  return (
    <main className="relative mx-auto w-full">
       <Home/>
       <About />
       <Project />
       <Contact />
    </main>
  );
}
