import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/account";
import { Router, RouterProvider } from "react-router-dom";
//ant 中文包
import "@/common/styles/frame.styl";
import zhCn from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import { globalRouters } from "./route";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCn}>
    <App />
    <RouterProvider router={globalRouters} />
  </ConfigProvider>
);
