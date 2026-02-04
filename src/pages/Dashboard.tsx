
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authReducer"; // adjust path
import { persistor } from "../store/storeConfig"; // adjust path
import type { AppDispatch } from "../store/storeConfig";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());       // reset auth slice
    await persistor.purge();  // clear localStorage
    navigate("/", { replace: true }); // go to Home
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;