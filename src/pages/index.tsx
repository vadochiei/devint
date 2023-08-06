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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <SectionTitle
        pretitle="Meet the Team">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Team />
      
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      <SectionTitle
        pretitle="Services">
        We seamlessly navigate the entire spectrum, encompassing design, implementation, testing, integration, deployment, and ongoing support of tailor-made systems and frameworks. Our unwavering focus remains attuned to the most current industry trends.
      </SectionTitle>
      <Services />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
