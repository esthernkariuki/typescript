
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User } from "lucide-react";

interface AuthModalProps {
  userType: "trader" | "upcycler" | null;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

const AuthModal = ({ userType, onClose, onLogin }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    location: "",
    specialization: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/registration
    const userData = {
      ...formData,
      type: userType,
      id: Math.random().toString(36).substr(2, 9)
    };
    onLogin(userData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-2 p-2 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-600" />
          </div>
          <CardTitle className="text-xl">
            {isLogin ? "Sign In" : "Create Account"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Welcome back!" : `Join as ${userType}`}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <Label htmlFor="specialization">
                    {userType === "trader" ? "Material Types" : "Specialization"}
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("specialization", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your focus area" />
                    </SelectTrigger>
                    <SelectContent>
                      {userType === "trader" ? (
                        <>
                          <SelectItem value="plastics">Plastics</SelectItem>
                          <SelectItem value="metals">Metals</SelectItem>
                          <SelectItem value="textiles">Textiles</SelectItem>
                          <SelectItem value="paper">Paper & Cardboard</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="mixed">Mixed Materials</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="furniture">Furniture Design</SelectItem>
                          <SelectItem value="fashion">Fashion & Accessories</SelectItem>
                          <SelectItem value="art">Art & Decor</SelectItem>
                          <SelectItem value="packaging">Packaging Solutions</SelectItem>
                          <SelectItem value="construction">Construction Materials</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder={
                      userType === "trader" 
                        ? "Tell us about your business and material sourcing..." 
                        : "Describe your upcycling projects and expertise..."
                    }
                    rows={3}
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:underline"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
