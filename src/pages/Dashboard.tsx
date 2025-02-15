
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, UserPlus, BookOpen } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      description: "Active users in the system",
    },
    {
      title: "Total Courses",
      value: "56",
      icon: GraduationCap,
      description: "Available courses",
    },
    {
      title: "New Users",
      value: "+12",
      icon: UserPlus,
      description: "New users this week",
    },
    {
      title: "Course Enrollments",
      value: "789",
      icon: BookOpen,
      description: "Total enrollments",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome to your admin dashboard.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
