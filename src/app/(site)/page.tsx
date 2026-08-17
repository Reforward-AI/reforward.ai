import BenefitsGrid from '@/components/sections/benefits-grid';
import HeroSection from '@/components/sections/hero-section';
import { CoreFeatures } from '@/components/sections/core-features';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CoreFeatures />
      <BenefitsGrid />
    </>
  );
}
