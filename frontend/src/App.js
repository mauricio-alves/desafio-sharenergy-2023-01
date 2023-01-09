import { Routes, Route } from "react-router-dom";
import "./global.css";
import { AuthContextComponent } from "./contexts/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { RandomUser } from "./pages/RandomUser";
import { Login } from "./pages/Login";
import { Cats } from "./pages/Cats";
import { RandomDog } from "./pages/RandomDog";
import { Clients } from "./pages/Clientes";
import { ClientDetails } from "./pages/ClientDetails";
import { EditClient } from "./pages/EditClient";

export function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/random-user"
            element={<ProtectedRoute component={RandomUser} />}
          />
          <Route path="/cats" element={<ProtectedRoute component={Cats} />} />
          <Route
            path="/random-dog"
            element={<ProtectedRoute component={RandomDog} />}
          />
          <Route
            path="/clients"
            element={<ProtectedRoute component={Clients} />}
          />
          <Route
            path="/client/details/:id"
            element={<ProtectedRoute component={ClientDetails} />}
          />
          <Route
            path="/client/edit/:id"
            element={<ProtectedRoute component={EditClient} />}
          />
        </Routes>
      </AuthContextComponent>
    </>
  );
}
