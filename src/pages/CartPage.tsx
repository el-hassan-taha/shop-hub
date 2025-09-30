import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart, cartTotal, setCurrentPage } = useApp();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />
        <div className="text-center space-y-6 glass-card p-12 rounded-2xl border-white/10 max-w-md mx-auto animate-fade-in">
          <div className="w-24 h-24 mx-auto rounded-full glass-card border-white/20 flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold gradient-text text-glow">Your cart is empty</h2>
          <p className="text-muted-foreground">Add some products to get started</p>
          <Button 
            onClick={() => setCurrentPage("shop")} 
            className="gap-2 glass-card border-white/20 hover-glow ripple"
          >
            Browse Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  const shippingCost = cartTotal > 50 ? 0 : 10;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;

  return (
    <div className="min-h-screen py-8 relative">
      <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-glow text-center animate-fade-in-up">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.product.id} className="p-4 bg-card border-border">
                <div className="flex gap-4">
                  <div
                    className="w-24 h-24 rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => setCurrentPage(`product-${item.product.id}`)}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3
                          className="font-semibold hover:text-primary cursor-pointer transition-colors"
                          onClick={() => setCurrentPage(`product-${item.product.id}`)}
                        >
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.product.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.product.id, item.product.name)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-4 text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold">
                          ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${(item.product.salePrice || item.product.price).toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card border-border sticky top-20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cart.length} items)</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              {cartTotal < 50 && (
                <div className="mb-4 p-3 bg-accent/10 border border-accent/20 rounded-lg text-sm">
                  Add ${(50 - cartTotal).toFixed(2)} more for FREE shipping!
                </div>
              )}

              <div className="pt-4 border-t border-border mb-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full gap-2 mb-3"
                onClick={() => setCurrentPage("checkout")}
              >
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => setCurrentPage("shop")}
              >
                Continue Shopping
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
