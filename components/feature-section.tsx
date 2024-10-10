import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Zap, Users, Palette } from 'lucide-react';

const features = [
  {
    title: 'Chat Agents',
    description: 'Intelligent chatbots to handle customer inquiries and support.',
    icon: MessageSquare,
  },
  {
    title: 'Autoresponders',
    description: 'Automated email and message responses for efficient communication.',
    icon: Zap,
  },
  {
    title: 'Lead Generators',
    description: 'AI-powered tools to capture and qualify potential leads.',
    icon: Users,
  },
  {
    title: 'No-Code Customization',
    description: 'Easy-to-use interface for personalizing AI tools without coding.',
    icon: Palette,
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}