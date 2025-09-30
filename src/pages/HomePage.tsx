import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/contexts/AppContext";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

export const HomePage = () => {
  const { products, setCurrentPage } = useApp();

  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly with our express shipping options"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Shop with confidence using our secure payment processing"
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive prices and regular discounts on all products"
    }
  ];

  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Products", value: "10k+" },
    { label: "Support", value: "24/7" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Layer */}
      <div className="fixed inset-0 gradient-animated opacity-80 -z-10" />
      <div className="fixed inset-0 floating-shapes -z-10" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 pointer-events-none" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce-in" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-lg rotate-45 blur-lg animate-bounce-in" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/20 rounded-full blur-lg animate-bounce-in" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm animate-fade-in">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-glow">Professional E-Commerce Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up">
              Scale Your{" "}
              <span className="gradient-text text-glow">Digital Commerce</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up text-shadow" style={{ animationDelay: '0.2s' }}>
              A scalable and user-friendly solution designed for modern businesses. 
              Enable seamless product listing, secure payments, and personalized shopping experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => setCurrentPage("shop")}
                className="gap-2 ripple hover-glow"
              >
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => setCurrentPage("about")}
                className="glass-card hover-glass"
              >
                Learn More
              </Button>
            </div>

            {/* Stats with glassmorphism */}
            <div className="flex flex-wrap justify-center gap-12 pt-12 animate-stagger">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center glass-card p-6 rounded-xl hover-glow">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 text-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with glassmorphism */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-4 p-8 rounded-xl glass-card hover-lift border border-white/10"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl gradient-bg glow-primary mx-auto">
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-glow">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with modern styling */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-glow">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our hand-picked selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-stagger">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="hover-lift"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => setCurrentPage("shop")}
              className="gap-2 ripple hover-glow glass-card"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced glassmorphism */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-2xl glass-card border border-white/20 glow-primary animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-glow">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers and discover amazing deals today
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setCurrentPage("shop")}
              className="gap-2 ripple hover-glow"
            >
              Browse Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
