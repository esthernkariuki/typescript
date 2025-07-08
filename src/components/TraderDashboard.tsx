
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, MessageSquare, User, ArrowUp, Plus, Recycle } from "lucide-react";

interface TraderDashboardProps {
  user: any;
  onLogout: () => void;
}

const TraderDashboard = ({ user, onLogout }: TraderDashboardProps) => {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "High-Quality Plastic Bottles",
      type: "plastics",
      quantity: "500 kg",
      price: "$2.50/kg",
      location: "New York, NY",
      description: "Clean PET bottles, perfect for upcycling projects",
      status: "available",
      inquiries: 3
    },
    {
      id: 2,
      title: "Aluminum Cans - Food Grade",
      type: "metals",
      quantity: "200 kg",
      price: "$3.20/kg",
      location: "New York, NY",
      description: "Food-grade aluminum cans in excellent condition",
      status: "pending",
      inquiries: 1
    }
  ]);

  const [showAddMaterial, setShowAddMaterial] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    title: "",
    type: "",
    quantity: "",
    price: "",
    description: ""
  });

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    const material = {
      id: materials.length + 1,
      ...newMaterial,
      location: user.location || "Location not set",
      status: "available",
      inquiries: 0
    };
    setMaterials([...materials, material]);
    setNewMaterial({ title: "", type: "", quantity: "", price: "", description: "" });
    setShowAddMaterial(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "sold": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Trader Dashboard</h1>
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
                  <p className="text-sm text-gray-600">Active Listings</p>
                  <p className="text-2xl font-bold text-gray-900">{materials.length}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {materials.reduce((sum, m) => sum + m.inquiries, 0)}
                  </p>
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Items</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {materials.filter(m => m.status === "available").length}
                  </p>
                </div>
                <ArrowUp className="h-8 w-8 text-purple-600" />
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

        <Tabs defaultValue="materials" className="space-y-6">
          <TabsList>
            <TabsTrigger value="materials">My Materials</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Material Listings</h2>
              <Button onClick={() => setShowAddMaterial(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Material
              </Button>
            </div>

            {showAddMaterial && (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Material</CardTitle>
                  <CardDescription>List new recyclable materials for upcyclers to discover</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddMaterial} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Material Title</Label>
                        <Input
                          id="title"
                          value={newMaterial.title}
                          onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                          placeholder="e.g., High-Quality Plastic Bottles"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Material Type</Label>
                        <Select onValueChange={(value) => setNewMaterial({...newMaterial, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select material type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plastics">Plastics</SelectItem>
                            <SelectItem value="metals">Metals</SelectItem>
                            <SelectItem value="textiles">Textiles</SelectItem>
                            <SelectItem value="paper">Paper & Cardboard</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="mixed">Mixed Materials</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          value={newMaterial.quantity}
                          onChange={(e) => setNewMaterial({...newMaterial, quantity: e.target.value})}
                          placeholder="e.g., 100 kg"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          value={newMaterial.price}
                          onChange={(e) => setNewMaterial({...newMaterial, price: e.target.value})}
                          placeholder="e.g., $2.50/kg"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newMaterial.description}
                        onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                        placeholder="Describe the material condition, quality, and any special notes..."
                        rows={3}
                      />
                    </div>
                    <div className="flex space-x-3">
                      <Button type="submit">Add Material</Button>
                      <Button type="button" variant="outline" onClick={() => setShowAddMaterial(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-6">
              {materials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{material.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="capitalize">{material.type}</span>
                          <span>•</span>
                          <span>{material.quantity}</span>
                          <span>•</span>
                          <span className="font-medium text-green-600">{material.price}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(material.status)}>
                          {material.status}
                        </Badge>
                        {material.inquiries > 0 && (
                          <Badge variant="outline">
                            {material.inquiries} inquiries
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{material.location}</span>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Messages
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
                <CardDescription>Messages and requests from upcyclers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">No new inquiries at the moment</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your trader profile</CardDescription>
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

export default TraderDashboard;
