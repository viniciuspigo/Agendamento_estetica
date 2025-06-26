import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/',
    element: <LoginForm />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
