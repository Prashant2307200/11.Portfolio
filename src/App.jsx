import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"; 
import List from "./components/List";
import Section from "./components/Section";

const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const Contact = lazy(() => import("./components/Contact"));

const section_data = [
  { id: "work",heading: "Work",getComponent: <Projects /> },
  { id: "about",heading: "About",getComponent: <About /> },
  { id: "experience",heading: "Experience",getComponent: <Experience /> },
  { id: "testimonials",heading: "What People Are Saying",getComponent: <Testimonial /> },
  { id: "contact",heading: "Contact",getComponent: <Contact /> },
];

const SectionList = () => (
  <>
    <List 
      data={section_data}
      getKey={item => item.id}
      getRow={item => <Section id={item.id} heading={item.heading} getComponent={() => item.getComponent} />}
    />
  </>
);

export default function App() {
  return (
    <>
      <BlurBackground />
      <header className="fixed-w-full z-50"><Navbar /></header>
      <main className="antialiased overflow-x-hidden mx-auto relative z-10">
        <Hero />
        <div><Suspense fallback={<Loader />}><SectionList /></Suspense></div>
      </main>
    </>
  );
}
