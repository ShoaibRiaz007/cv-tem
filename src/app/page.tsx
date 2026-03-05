import Contact from "@/components/global/contact";
import DitherSplitter from "@/components/global/dither-splitter";
import About from "@/components/landing/about";
import Companies from "@/components/landing/companies";
import Education from "@/components/landing/education";
import Experience from "@/components/landing/experience";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Services from "@/components/landing/services";
import Skills from "@/components/landing/skills";
import Testimonials from "@/components/landing/testimonials";
import { SITE_URL } from "@/lib/constants";
import {
  PERSON_SCHEMA_ID,
  safeJsonLdStringify,
  WEBSITE_SCHEMA_ID,
} from "@/lib/json-ld";

export const revalidate = 3600;

const Home = () => {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}#webpage`,
    url: SITE_URL,
    name: "Shoaib Riaz | Senior Game Engineer",
    description:
      "Senior Game Engineer specializing in Unity, Unreal Engine, immersive gaming experiences, AR/VR, and cross-platform game development.",
    inLanguage: "en-US",
    isPartOf: {
      "@id": WEBSITE_SCHEMA_ID,
    },
    about: {
      "@id": PERSON_SCHEMA_ID,
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {safeJsonLdStringify(homePageJsonLd)}
      </script>
      <Hero />
      <Companies />
      <Experience />
      <DitherSplitter />
      <Projects />
      <Services />
      <DitherSplitter />
      <Testimonials />
      <Skills />
      <Education />
      <About />
      <Contact />
    </>
  );
};

export default Home;
