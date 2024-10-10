import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Empower Your Business with AI
      </h1>
      <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
        Discover and customize AI-powered SaaS applications to streamline your business operations and boost productivity.
      </p>
      <div className="space-x-4">
        <Link href="#templates">
          <Button size="lg">Explore Templates</Button>
        </Link>
        <Link href="/sign-up">
          <Button size="lg" variant="outline">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}