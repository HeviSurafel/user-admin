
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface UserFormProps {
  onSubmit: (data: any) => void;
  initialData?: {
    name: string;
    email: string;
    isActive: boolean;
  };
  isLoading?: boolean;
}

const UserForm = ({ onSubmit, initialData, isLoading }: UserFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    onSubmit({
      name: formData.get('name'),
      email: formData.get('email'),
      isActive: formData.get('isActive') === 'on'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          defaultValue={initialData?.name}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={initialData?.email}
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="isActive"
          name="isActive"
          defaultChecked={initialData?.isActive}
        />
        <Label htmlFor="isActive">Active Account</Label>
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save User"}
      </Button>
    </form>
  );
};

export default UserForm;
