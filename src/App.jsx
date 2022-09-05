import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import NotFound from "./pages/NotFound";
import { getAuth } from "./features/authSlice";

function App() {
  const isAuth = getAuth();

  if (isAuth)
    return (
      <Routes>
        <Route path="/">
          <Route element={<Todo />} index />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );

  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
