import { SalonNavbar } from "@/components/salon/salon-navbar";
import { SalonHero } from "@/components/salon/salon-hero";
import { SalonTrustStrip } from "@/components/salon/salon-trust-strip";
import { SalonAbout } from "@/components/salon/salon-about";
import { SalonServices } from "@/components/salon/salon-services";
import { SalonFeatured } from "@/components/salon/salon-featured";
import { SalonGallery } from "@/components/salon/salon-gallery";
import { SalonWhyUs } from "@/components/salon/salon-why-us";
import { SalonPackages } from "@/components/salon/salon-packages";
import { SalonTestimonials } from "@/components/salon/salon-testimonials";
import { SalonAppointment } from "@/components/salon/salon-appointment";
import { SalonVisit } from "@/components/salon/salon-visit";
import { SalonFinalCta, SalonFooter } from "@/components/salon/salon-footer";
import { SalonMobileCta } from "@/components/salon/salon-mobile-cta";
import { SalonWhatsAppFloat } from "@/components/salon/salon-whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-full bg-blush text-[#1c1917]">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SalonNavbar />
      <main id="main" className="pb-24 lg:pb-0">
        <SalonHero />
        <SalonTrustStrip />
        <SalonAbout />
        <SalonServices />
        <SalonFeatured />
        <SalonGallery />
        <SalonWhyUs />
        <SalonPackages />
        <SalonTestimonials />
        <SalonAppointment />
        <SalonVisit />
        <SalonFinalCta />
        <SalonFooter />
      </main>
      <SalonMobileCta />
      <SalonWhatsAppFloat />
    </div>
  );
}
