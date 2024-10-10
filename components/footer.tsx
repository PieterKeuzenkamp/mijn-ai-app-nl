export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI SaaS Marketplace</h3>
            <p className="text-sm text-muted-foreground">Empowering businesses with AI-powered tools.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-sm hover:underline">Features</a></li>
              <li><a href="/#templates" className="text-sm hover:underline">Templates</a></li>
              <li><a href="/#pricing" className="text-sm hover:underline">Pricing</a></li>
              <li><a href="/sign-up" className="text-sm hover:underline">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">support@aisaasmarketplace.com</p>
            <p className="text-sm text-muted-foreground">1234 AI Street, Tech City, 12345</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2023 AI SaaS Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}