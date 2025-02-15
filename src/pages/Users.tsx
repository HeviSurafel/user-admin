
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Eye, Ban, UserCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import UserForm from "@/components/UserForm";

const Users = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with actual API calls
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: true },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", isActive: false },
  ];

  const handleCreateUser = async (data: any) => {
    setIsLoading(true);
    try {
      // Implement API call here
      console.log("Creating user:", data);
      toast({
        title: "Success",
        description: "User created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create user",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateUser = async (data: any) => {
    setIsLoading(true);
    try {
      // Implement API call here
      console.log("Updating user:", { ...data, id: selectedUser.id });
      toast({
        title: "Success",
        description: "User updated successfully",
      });
      setIsUpdateModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleStatus = async (userId: number, currentStatus: boolean) => {
    try {
      // Implement API call here
      console.log("Toggling user status:", { userId, newStatus: !currentStatus });
      toast({
        title: "Success",
        description: `User ${currentStatus ? "suspended" : "activated"} successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user status",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage your system users.</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New User</DialogTitle>
            </DialogHeader>
            <UserForm onSubmit={handleCreateUser} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    user.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {user.isActive ? "Active" : "Suspended"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigate(`/users/${user.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedUser(user);
                        setIsUpdateModalOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleStatus(user.id, user.isActive)}
                    >
                      {user.isActive ? (
                        <Ban className="h-4 w-4 text-destructive" />
                      ) : (
                        <UserCheck className="h-4 w-4 text-green-600" />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <UserForm
              onSubmit={handleUpdateUser}
              initialData={selectedUser}
              isLoading={isLoading}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
