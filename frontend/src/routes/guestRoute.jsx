import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

const guestRoute = {
  path: "/auth",
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
}

export default guestRoute
