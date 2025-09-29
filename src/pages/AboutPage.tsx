import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { Zap, Shield, TrendingUp, Users, Award, Globe } from "lucide-react";

export const AboutPage = () => {
  const { setCurrentPage } = useApp();

  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Express shipping options available for all orders with real-time tracking."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and payments are protected with industry-leading security measures."
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and exclusive deals for members."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "24/7 customer support ready to help with any questions or concerns."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every product is carefully selected and quality-checked before shipping."
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      description: "We ship to over 100 countries with reliable delivery partners."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">ShopHub</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're on a mission to make online shopping easier, faster, and more enjoyable for everyone. 
            With thousands of products and a commitment to customer satisfaction, we're building the 
            future of e-commerce.
          </p>
          <Button variant="hero" size="lg" onClick={() => setCurrentPage("shop")}>
            Start Shopping
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Products", value: "10,000+" },
            { label: "Customers", value: "50,000+" },
            { label: "Countries", value: "100+" },
            { label: "Satisfaction", value: "99.9%" }
          ].map((stat) => (
            <Card key={stat.label} className="p-6 text-center bg-card border-border">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="p-6 bg-card border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of happy customers who trust ShopHub for their shopping needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => setCurrentPage("shop")}>
                Browse Products
              </Button>
              <Button variant="outline" size="lg" onClick={() => setCurrentPage("contact")}>
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
