import { ShoppingCart, Mail, Phone, MapPin } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export const Footer = () => {
  const { setCurrentPage } = useApp();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "All Products", page: "shop" },
        { label: "Electronics", page: "shop" },
        { label: "Fashion", page: "shop" },
        { label: "Home & Garden", page: "shop" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "Contact Us", page: "contact" },
        { label: "Shipping Info", page: "about" },
        { label: "Returns", page: "about" },
        { label: "FAQ", page: "about" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", page: "about" },
        { label: "Careers", page: "about" },
        { label: "Privacy Policy", page: "about" },
        { label: "Terms of Service", page: "about" },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0 glass-card border-t border-white/20" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 animate-stagger">
          {/* Brand Section with Enhanced Styling */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center glow-primary">
                <ShoppingCart className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text text-glow">ShopHub</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Your one-stop destination for quality products at amazing prices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Mail className="h-4 w-4 group-hover:glow-primary transition-all duration-300" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Phone className="h-4 w-4 group-hover:glow-primary transition-all duration-300" />
                <span>1-800-SHOP-HUB</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <MapPin className="h-4 w-4 group-hover:glow-primary transition-all duration-300" />
                <span>123 Commerce St, NY</span>
              </div>
            </div>
          </div>

          {/* Footer Links with Enhanced Hover Effects */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h3 className="font-semibold mb-4 gradient-text text-glow">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Enhanced Styling */}
        <div className="pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 ShopHub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative group">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
