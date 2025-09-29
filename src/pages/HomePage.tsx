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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>Professional E-Commerce Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Scale Your{" "}
              <span className="gradient-text">Digital Commerce</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A scalable and user-friendly solution designed for modern businesses. 
              Enable seamless product listing, secure payments, and personalized shopping experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => setCurrentPage("shop")}
                className="gap-2"
              >
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => setCurrentPage("about")}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-4 p-6 rounded-lg bg-card border border-border hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg gradient-bg">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our hand-picked selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => setCurrentPage("shop")}
              className="gap-2"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers and discover amazing deals today
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setCurrentPage("shop")}
              className="gap-2"
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
