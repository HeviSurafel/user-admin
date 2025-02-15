
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Course Details</h2>
        <p className="text-muted-foreground">Course ID: {id}</p>
      </div>
      
      <div className="rounded-lg border border-border p-8 text-center text-muted-foreground">
        Course details coming soon...
      </div>
    </div>
  );
};

export default CourseDetail;
