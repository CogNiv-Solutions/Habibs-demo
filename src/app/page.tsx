import { SalonNavbar } from "@/components/salon/salon-navbar";
import { SalonHero } from "@/components/salon/salon-hero";
import { SalonServices } from "@/components/salon/salon-services";
import { SalonAbout } from "@/components/salon/salon-about";
import { SalonGallery } from "@/components/salon/salon-gallery";
import { SalonTrustStrip } from "@/components/salon/salon-trust-strip";
import { SalonContact } from "@/components/salon/salon-contact";
import { SalonFooter } from "@/components/salon/salon-footer";
import { SalonMobileCta } from "@/components/salon/salon-mobile-cta";
import { SalonWhatsAppFloat } from "@/components/salon/salon-whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-full bg-white text-[#1c1917]">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SalonNavbar />
      <main id="main" className="pb-24 lg:pb-0">
        <SalonHero />
        <SalonServices />
        <SalonAbout />
        <SalonGallery />
        <SalonTrustStrip />
        <SalonContact />
        <SalonFooter />
      </main>
      <SalonMobileCta />
      <SalonWhatsAppFloat />
    </div>
  );
}
