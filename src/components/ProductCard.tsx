import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useApp } from "@/contexts/AppContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, toggleWishlist, isInWishlist, setCurrentPage } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
    toast.success(
      isInWishlist(product.id)
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  const handleViewProduct = () => {
    setCurrentPage(`product-${product.id}`);
  };

  const displayPrice = product.salePrice || product.price;
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  return (
    <Card 
      className="group cursor-pointer overflow-hidden glass-card border-white/10 hover-glow transition-all duration-500 relative"
      onClick={handleViewProduct}
    >
      {/* Image Container with Enhanced Effects */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Sale Badge with Pulse Animation */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 gradient-bg text-foreground px-3 py-1 rounded-full text-xs font-semibold glow-primary animate-pulse">
            SALE
          </div>
        )}
        
        {/* Heart Button with Glass Effect */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 glass-card border-white/20 hover-glow transition-all duration-300 ${
            isInWishlist(product.id) ? "text-destructive glow-accent" : "text-white"
          }`}
          onClick={handleWishlist}
        >
          <Heart className={`h-4 w-4 transition-all duration-300 ${
            isInWishlist(product.id) ? "fill-current scale-110" : ""
          }`} />
        </Button>
        
        {/* Stock Warning */}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute bottom-3 left-3 bg-warning/90 backdrop-blur-sm text-warning-foreground px-3 py-1 rounded-full text-xs font-semibold animate-bounce-in">
            Only {product.stock} left
          </div>
        )}
        
        {/* Out of Stock Overlay */}
        {product.stock === 0 && (
          <div className="absolute inset-0 glass-card backdrop-blur-md flex items-center justify-center">
            <span className="text-lg font-semibold text-muted-foreground">Out of Stock</span>
          </div>
        )}

        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-3 bottom-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full glass-card border-white/20 hover-glow gap-2 ripple"
          >
            <ShoppingCart className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content Section with Enhanced Typography */}
      <div className="p-5 space-y-3">
        {/* Rating Stars with Glow */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-200 ${
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary glow-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">({product.reviewCount})</span>
        </div>

        {/* Product Name with Gradient on Hover */}
        <h3 className="font-semibold line-clamp-2 text-foreground group-hover:gradient-text transition-all duration-300 text-glow">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price Section with Enhanced Styling */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text text-glow">
              ${displayPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through opacity-70">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Hidden on Mobile, Shown on Hover */}
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="gap-2 glass-card border-white/20 hover-glow ripple hidden sm:flex transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>

        {/* Mobile Add Button */}
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full gap-2 glass-card border-white/20 hover-glow ripple sm:hidden mt-3"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>

      {/* New Badge for Recent Products */}
      {product.isNew && (
        <div className="absolute top-3 right-16 bg-gradient-to-r from-accent to-primary text-foreground px-3 py-1 rounded-full text-xs font-semibold glow-accent animate-pulse">
          NEW
        </div>
      )}
    </Card>
  );
};
