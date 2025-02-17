import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionTitle
        pretitle="Meet the Team"
        id="about"> 
        Our dedicated team is a fusion of diverse talents, each contributing their unique expertise to create innovative solutions. With a shared commitment to excellence, we collaboratively navigate challenges and inspire growth. Discover the faces behind our success, as we introduce the driving force that brings your visions to life.
      </SectionTitle>
      <Team />

      <SectionTitle
        pretitle="Services"
        id="services">
        We seamlessly navigate the entire spectrum, encompassing design, implementation, testing, integration, deployment, and ongoing support of tailor-made systems and frameworks. Our unwavering focus remains attuned to the most current industry trends.
      </SectionTitle>
      <Services />

      <SectionTitle
        pretitle="Testimonials"
        id="testimonials"
        title="Here&apos;s what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      <SectionTitle
        pretitle="Contact"
        id="contact">
        Feel free to compose a message outlining the type of services you&apos;re interested in. We&apos;ll be sure to respond promptly and discuss your requirements further.
      </SectionTitle>
      <ContactForm />

      {/* <Cta /> */}

      <Footer />

    </>
  );
}
