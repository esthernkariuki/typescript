
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Recycle, Package, Users, MessageSquare } from "lucide-react";
import AuthModal from "@/components/AuthModal";
import TraderDashboard from "@/components/TraderDashboard";
import UpcyclerDashboard from "@/components/UpcyclerDashboard";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [userType, setUserType] = useState<"trader" | "upcycler" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleUserTypeSelect = (type: "trader" | "upcycler") => {
    setUserType(type);
    setShowAuth(true);
  };

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setShowAuth(false);
  };

  if (isLoggedIn && currentUser) {
    return currentUser.type === "trader" ? (
      <TraderDashboard user={currentUser} onLogout={() => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setUserType(null);
      }} />
    ) : (
      <UpcyclerDashboard user={currentUser} onLogout={() => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setUserType(null);
      }} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">EcoConnect</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowAuth(true)}
              className="hover:bg-green-50"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Connect. Trade. <span className="text-green-600">Upcycle.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Join the circular economy revolution. Connect traders who source recyclable materials 
          with creative upcyclers who transform waste into valuable products.
        </p>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-green-200 group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-800">I'm a Trader</CardTitle>
              <CardDescription className="text-gray-600">
                I source and supply recyclable materials
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                List your available materials, connect with upcyclers, and turn waste into profit.
              </p>
              <Button 
                onClick={() => handleUserTypeSelect("trader")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started as Trader
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-green-200 group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-800">I'm an Upcycler</CardTitle>
              <CardDescription className="text-gray-600">
                I transform materials into new products
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Find the perfect materials for your projects and connect with reliable traders.
              </p>
              <Button 
                onClick={() => handleUserTypeSelect("upcycler")}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started as Upcycler
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How EcoConnect Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">List Materials</h4>
              <p className="text-gray-600">
                Traders upload photos and details of available recyclable materials with quantities and pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Connect & Browse</h4>
              <p className="text-gray-600">
                Upcyclers discover materials through advanced search and filtering, then connect with traders.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Trade & Transform</h4>
              <p className="text-gray-600">
                Secure messaging enables negotiation and deal-making, creating a sustainable supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Recycle className="h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold">EcoConnect</span>
          </div>
          <p className="text-gray-400">
            Building a sustainable future through the circular economy
          </p>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuth && (
        <AuthModal
          userType={userType}
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default Index;
