"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">AI SaaS Marketplace</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#templates">Templates</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/sign-up"><Button>Sign Up</Button></Link></li>
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}