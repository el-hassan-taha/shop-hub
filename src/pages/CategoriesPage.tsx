import { useApp } from "@/contexts/AppContext";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Package, Shirt, Watch, Footprints, Laptop, Heart } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "Electronics": Laptop,
  "Clothing": Shirt,
  "Accessories": Watch,
  "Shoes": Footprints,
  "Home & Living": Package,
  "Beauty": Heart,
};

const categoryDescriptions: Record<string, string> = {
  "Electronics": "Latest gadgets and tech essentials",
  "Clothing": "Fashion-forward apparel for every occasion",
  "Accessories": "Complete your look with premium accessories",
  "Shoes": "Step up your style with our footwear collection",
  "Home & Living": "Transform your space with quality home goods",
  "Beauty": "Premium beauty and personal care products",
};

export const CategoriesPage = () => {
  const { setCurrentPage, setSelectedCategory, products } = useApp();

  const getCategoryCount = (category: string) => {
    return products.filter(p => p.category === category).length;
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage("shop");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Shop by Category
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Package;
            const count = getCategoryCount(category);
            
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 text-left transition-all hover:shadow-elegant hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {count} {count === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {categoryDescriptions[category]}
                    </p>
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Browse collection
                    <svg
                      className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-3">Can't decide?</h2>
            <p className="text-muted-foreground mb-4">Browse our entire collection</p>
            <Button 
              onClick={() => {
                setSelectedCategory("All");
                setCurrentPage("shop");
              }}
              size="lg"
              className="gap-2"
            >
              <Package className="h-5 w-5" />
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
