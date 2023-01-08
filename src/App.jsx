import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { setUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
      }
    });
  }, []);

  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
