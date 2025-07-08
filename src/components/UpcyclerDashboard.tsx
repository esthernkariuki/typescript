
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Recycle, MessageSquare, User, Search, Filter, Package, ArrowUp } from "lucide-react";

interface UpcyclerDashboardProps {
  user: any;
  onLogout: () => void;
}

const UpcyclerDashboard = ({ user, onLogout }: UpcyclerDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [savedMaterials, setSavedMaterials] = useState<number[]>([]);

  // Sample materials from traders
  const availableMaterials = [
    {
      id: 1,
      title: "High-Quality Plastic Bottles",
      type: "plastics",
      quantity: "500 kg",
      price: "$2.50/kg",
      location: "New York, NY",
      description: "Clean PET bottles, perfect for upcycling projects",
      trader: "EcoSupply Co.",
      distance: "5 miles away"
    },
    {
      id: 2,
      title: "Aluminum Cans - Food Grade", 
      type: "metals",
      quantity: "200 kg",
      price: "$3.20/kg",
      location: "Brooklyn, NY",
      description: "Food-grade aluminum cans in excellent condition",
      trader: "Metro Recycling",
      distance: "12 miles away"
    },
    {
      id: 3,
      title: "Cotton Fabric Scraps",
      type: "textiles",
      quantity: "50 kg",
      price: "$1.80/kg",
      location: "Queens, NY",
      description: "Mixed cotton fabrics from garment production",
      trader: "Textile Surplus",
      distance: "8 miles away"
    },
    {
      id: 4,
      title: "Cardboard Sheets - Premium",
      type: "paper",
      quantity: "300 kg",
      price: "$0.90/kg",
      location: "Manhattan, NY",
      description: "Large cardboard sheets, perfect for packaging design",
      trader: "Paper Solutions",
      distance: "3 miles away"
    }
  ];

  const filteredMaterials = availableMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || material.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleSaveMaterial = (materialId: number) => {
    setSavedMaterials(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  const getTypeColor = (type: string) => {
    const colors = {
      plastics: "bg-blue-100 text-blue-800",
      metals: "bg-gray-100 text-gray-800", 
      textiles: "bg-purple-100 text-purple-800",
      paper: "bg-yellow-100 text-yellow-800",
      electronics: "bg-green-100 text-green-800",
      mixed: "bg-orange-100 text-orange-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Upcycler Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <User className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Materials</p>
                  <p className="text-2xl font-bold text-gray-900">{availableMaterials.length}</p>
                </div>
                <Package className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Saved Materials</p>
                  <p className="text-2xl font-bold text-gray-900">{savedMaterials.length}</p>
                </div>
                <ArrowUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Specialization</p>
                  <p className="text-sm font-medium text-gray-900 capitalize">
                    {user.specialization || "Not set"}
                  </p>
                </div>
                <Recycle className="h-8 w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList>
            <TabsTrigger value="browse">Browse Materials</TabsTrigger>
            <TabsTrigger value="saved">Saved Materials</TabsTrigger>
            <TabsTrigger value="inquiries">My Inquiries</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <Label htmlFor="search">Search Materials</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Search by material type, description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="filter">Filter by Type</Label>
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-48">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="All materials" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Materials</SelectItem>
                        <SelectItem value="plastics">Plastics</SelectItem>
                        <SelectItem value="metals">Metals</SelectItem>
                        <SelectItem value="textiles">Textiles</SelectItem>
                        <SelectItem value="paper">Paper & Cardboard</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="mixed">Mixed Materials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materials Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{material.title}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getTypeColor(material.type)}>
                            {material.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{material.distance}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{material.quantity}</span>
                          <span>•</span>
                          <span className="font-medium text-green-600">{material.price}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSaveMaterial(material.id)}
                        className={savedMaterials.includes(material.id) ? "bg-blue-50 text-blue-600" : ""}
                      >
                        {savedMaterials.includes(material.id) ? "Saved" : "Save"}
                      </Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Trader: {material.trader}</p>
                        <p className="text-sm text-gray-500">{material.location}</p>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Saved Materials</CardTitle>
                <CardDescription>Materials you've saved for later consideration</CardDescription>
              </CardHeader>
              <CardContent>
                {savedMaterials.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No saved materials yet</p>
                ) : (
                  <div className="grid gap-4">
                    {availableMaterials
                      .filter(material => savedMaterials.includes(material.id))
                      .map(material => (
                        <div key={material.id} className="p-4 border rounded-lg">
                          <h4 className="font-semibold">{material.title}</h4>
                          <p className="text-sm text-gray-600">{material.description}</p>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>My Inquiries</CardTitle>
                <CardDescription>Track your material requests and communications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">No active inquiries</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your upcycler profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <p className="text-gray-800">{user.email}</p>
                  </div>
                  <div>
                    <Label>Company</Label>
                    <p className="text-gray-800">{user.company || "Not specified"}</p>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <p className="text-gray-800">{user.location || "Not specified"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <Label>Specialization</Label>
                    <p className="text-gray-800 capitalize">{user.specialization || "Not specified"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <Label>Description</Label>
                    <p className="text-gray-800">{user.description || "No description provided"}</p>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UpcyclerDashboard;
