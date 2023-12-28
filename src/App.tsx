import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Frontend } from "./frontend";
import { Home } from "./frontend/Home";
import { Blog } from "./frontend/Blog";
import Login from "./backend/Login";
import { Dashboard } from "./backend";
import { BlogPost } from "./backend/BlogPost";
import { UpdateDetails } from "./backend/UpdateDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        <Route path="/backend/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<UpdateDetails />} />
          <Route path="/dashboard/update-details" element={<UpdateDetails />} />
          <Route path="/dashboard/blog" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
