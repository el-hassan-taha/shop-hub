import { AppProvider, useApp } from "@/contexts/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "./HomePage";
import { ShopPage } from "./ShopPage";
import { CategoriesPage } from "./CategoriesPage";
import { ProductDetailPage } from "./ProductDetailPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { AuthPage } from "./AuthPage";
import { AccountPage } from "./AccountPage";
import { WishlistPage } from "./WishlistPage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { useEffect } from "react";

const AppContent = () => {
  const { currentPage } = useApp();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    // Product detail pages
    if (currentPage.startsWith("product-")) {
      const productId = currentPage.replace("product-", "");
      return <ProductDetailPage productId={productId} />;
    }

    // Route to different pages
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "shop":
        return <ShopPage />;
      case "categories":
        return <CategoriesPage />;
      case "cart":
        return <CartPage />;
      case "checkout":
        return <CheckoutPage />;
      case "login":
        return <AuthPage />;
      case "account":
      case "orders":
        return <AccountPage />;
      case "wishlist":
        return <WishlistPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "order-confirmation":
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4 max-w-md p-8">
              <div className="h-20 w-20 mx-auto rounded-full bg-success/20 flex items-center justify-center">
                <svg
                  className="h-12 w-12 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold">Order Confirmed!</h1>
              <p className="text-muted-foreground">
                Thank you for your purchase. You'll receive a confirmation email shortly.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="text-primary hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default Index;
