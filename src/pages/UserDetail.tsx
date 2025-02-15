
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">User Details</h2>
        <p className="text-muted-foreground">User ID: {id}</p>
      </div>
      
      <div className="rounded-lg border border-border p-8 text-center text-muted-foreground">
        User details coming soon...
      </div>
    </div>
  );
};

export default UserDetail;
