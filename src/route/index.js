import { createHashRouter, Navigate } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Account from "@/pages/account";

// 全局路由

export const globalRouters = createHashRouter([
  // 对精确匹配"/login"
  {
    path: "/login",
    element: <Login />,
  },
  // 对精确匹配"/account"
  {
    path: "/account",
    element: <Account />,
  },
  // 对/home路径都匹配
  {
    path: "/home",
    element: <Home />,
  },
  // 如果url没有#路由 跳转home页面
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
