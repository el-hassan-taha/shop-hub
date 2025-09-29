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
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">ShopHub</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your one-stop destination for quality products at amazing prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-SHOP-HUB</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, NY</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
