import CTAFinal from '@/components/CTAFinal';
import FeaturesStrip from '@/components/FeaturesStrip';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/shared/navigation/Navbar';
import WhoIsItFor from '@/components/WhoIsItFor';

export default function Home() {
  return (
    <main className='bg-background text-foreground min-h-screen'>
      <Navbar />
      <Hero />
      <WhoIsItFor />
      <HowItWorks />
      <FeaturesStrip />
      <Pricing />
      <CTAFinal />
    </main>
  );
}
