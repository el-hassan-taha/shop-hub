import { ShoppingCart, User, Heart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApp } from "@/contexts/AppContext";
import { useState, useEffect } from "react";

export const Header = () => {
  const { cart, user, setCurrentPage, wishlist, searchQuery, setSearchQuery } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Shop", page: "shop" },
    { label: "Categories", page: "categories" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'glass border-b border-white/10 shadow-glow' 
        : 'bg-background/80 backdrop-blur-sm border-b border-border/40'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover-glow rounded-lg p-2 transition-all duration-300"
            onClick={() => handleNavigate("home")}
          >
            <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center glow-primary">
              <ShoppingCart className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text text-glow">ShopHub</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 glass-card border-white/20 hover-glass focus:glow-primary transition-all duration-300"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    handleNavigate("shop");
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigate("wishlist")}
              className="relative hover-glow glass-card border-white/10 transition-all duration-300"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigate("cart")}
              className="relative hover-glow glass-card border-white/10 transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full gradient-bg text-foreground text-xs flex items-center justify-center animate-bounce-in glow-primary">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigate(user ? "account" : "login")}
              className="hover-glow glass-card border-white/10 transition-all duration-300"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-glow glass-card border-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 glass-card border-white/20 hover-glass focus:glow-primary transition-all duration-300"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) {
                  handleNavigate("shop");
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu with enhanced animations */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 glass-card animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2 animate-stagger">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:text-primary hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
