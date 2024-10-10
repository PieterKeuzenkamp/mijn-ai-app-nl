import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    title: 'Starter',
    price: '$49',
    description: 'Perfect for small businesses',
    features: ['1 AI Template', 'Basic Customization', 'Email Support', '10,000 API Calls/month'],
  },
  {
    title: 'Pro',
    price: '$99',
    description: 'Ideal for growing companies',
    features: ['3 AI Templates', 'Advanced Customization', 'Priority Support', '50,000 API Calls/month'],
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: ['Unlimited AI Templates', 'Full Customization', 'Dedicated Support', 'Custom API Calls'],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}