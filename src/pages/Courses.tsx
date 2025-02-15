
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, FileText, LogOut, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Courses = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchId, setSearchId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  // Mock data - replace with API calls
  const courses = [
    { id: "1", title: "React Basics", description: "Learn React fundamentals", students: 24 },
    { id: "2", title: "Advanced JavaScript", description: "Master JavaScript concepts", students: 18 },
    { id: "3", title: "TypeScript Deep Dive", description: "Explore TypeScript features", students: 15 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const course = courses.find(c => c.id === searchId);
    if (course) {
      navigate(`/courses/${searchId}`);
    } else {
      toast({
        title: "Not Found",
        description: "No course found with that ID",
        variant: "destructive",
      });
    }
  };

  const handleUpdateCourse = async (data: any) => {
    try {
      // Implement API call here
      console.log("Updating course:", { ...data, id: selectedCourse.id });
      toast({
        title: "Success",
        description: "Course updated successfully",
      });
      setIsUpdateModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update course",
        variant: "destructive",
      });
    }
  };

  const handleGenerateCertificate = async (courseId: string) => {
    try {
      // Implement PDF generation here
      // This is a mock implementation
      toast({
        title: "Success",
        description: "Certificate generated successfully",
      });
      // In a real implementation, you would:
      // 1. Make an API call to generate the PDF
      // 2. Receive the PDF data or URL
      // 3. Either open it in a new tab or download it
      console.log("Generating certificate for course:", courseId);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate certificate",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/");
    toast({
      title: "Success",
      description: "Logged out successfully",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Courses</h2>
          <p className="text-muted-foreground">Manage your course catalog.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Course</DialogTitle>
              </DialogHeader>
              {/* Add course form here */}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex gap-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder="Search by Course ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">{course.title}</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsUpdateModalOpen(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleGenerateCertificate(course.id)}
                >
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{course.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {course.students} students enrolled
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Course</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleUpdateCourse({
                title: formData.get('title'),
                description: formData.get('description'),
              });
            }} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={selectedCourse.title}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <Input
                  id="description"
                  name="description"
                  defaultValue={selectedCourse.description}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Save Changes</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
