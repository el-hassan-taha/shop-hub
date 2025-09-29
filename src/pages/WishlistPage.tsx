import { useApp } from "@/contexts/AppContext";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const WishlistPage = () => {
  const { wishlist, setCurrentPage } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center space-y-4">
          <Heart className="h-24 w-24 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
          <p className="text-muted-foreground">Save products you love to view them later</p>
          <Button onClick={() => setCurrentPage("shop")}>
            Browse Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
