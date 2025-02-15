
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Courses = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Courses</h2>
          <p className="text-muted-foreground">Manage your course catalog.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>
      
      {/* We'll implement the courses grid in the next iteration */}
      <div className="rounded-lg border border-border p-8 text-center text-muted-foreground">
        Courses grid coming soon...
      </div>
    </div>
  );
};

export default Courses;
