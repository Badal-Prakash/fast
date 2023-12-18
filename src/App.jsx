import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./feature/cart/Cart";
import Menu, { loader as menuLoader } from "./feature/menu/Menu";
import Order from "./feature/order/Order";
import CreateOrder from "./feature/order/CreateOrder";
import Applayout from "./ui/Applayout";
const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {path: "/cart",element: <Cart />,},
      {path: "/order/:orderId",element: <Order />,},
      {path: "/order/new", element: <CreateOrder />,},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
