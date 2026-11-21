import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

    const token = localStorage.getItem("access_token");
    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (!user || !user.is_staff) {
        return <Navigate to="/home" replace />;
    }
    return children;
}
export default AdminRoute;