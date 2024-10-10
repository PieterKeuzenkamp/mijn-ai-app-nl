"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageSquare, Zap, Users, Tool } from 'lucide-react';

const templates = [
  {
    title: 'Customer Support Chat Agent',
    description: 'An AI-powered chatbot for handling customer inquiries.',
    icon: MessageSquare,
  },
  {
    title: 'Email Autoresponder',
    description: 'Automated email responses for efficient communication.',
    icon: Zap,
  },
  {
    title: 'Lead Generation Assistant',
    description: 'AI tool for capturing and qualifying potential leads.',
    icon: Users,
  },
  {
    title: 'Custom AI Tool',
    description: 'Create your own AI-powered tool from scratch.',
    icon: Tool,
  },
];

export default function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <section id="templates" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your AI Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {templates.map((template, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              {template.icon && <template.icon className="w-10 h-10 mb-4 text-primary" />}
              <CardTitle>{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{template.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedTemplate(template)}>Preview</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedTemplate?.title}</DialogTitle>
                    <DialogDescription>{selectedTemplate?.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p>Template preview and customization options will be displayed here.</p>
                    <Button className="mt-4">Customize This Template</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}