import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Package, Heart, LogOut, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export const AccountPage = () => {
  const { user, logout, setCurrentPage, orders } = useApp();

  if (!user) {
    setCurrentPage("login");
    return null;
  }

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    setCurrentPage("home");
  };

  const menuItems = [
    {
      icon: Package,
      title: "My Orders",
      description: "View order history and track shipments",
      count: orders.length,
      onClick: () => setCurrentPage("orders"),
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "View your saved products",
      onClick: () => setCurrentPage("wishlist"),
    },
    {
      icon: User,
      title: "Profile Settings",
      description: "Update your personal information",
      onClick: () => toast.info("Profile settings coming soon"),
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your account and view your orders</p>
        </div>

        {/* User Info Card */}
        <Card className="p-6 mb-6 bg-card border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-foreground">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Card
              key={item.title}
              className="p-6 cursor-pointer hover-lift bg-card border-border group"
              onClick={item.onClick}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.count !== undefined && item.count > 0 && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        {orders.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {orders.slice(0, 3).map((order) => (
                <Card key={order.id} className="p-6 bg-card border-border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "delivered"
                          ? "bg-success text-success-foreground"
                          : order.status === "shipped"
                          ? "bg-primary text-primary-foreground"
                          : "bg-warning text-warning-foreground"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {order.items.length} {order.items.length === 1 ? "item" : "items"}
                    </p>
                    <p className="font-bold">${order.total.toFixed(2)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
