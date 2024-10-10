import Hero from '@/components/hero';
import FeatureSection from '@/components/feature-section';
import TemplateSelection from '@/components/template-selection';
import PricingSection from '@/components/pricing-section';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <FeatureSection />
      <TemplateSelection />
      <PricingSection />
    </div>
  );
}