import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/login";
//ant 中文包
import "@/common/styles/frame.styl";
import zhCn from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCn}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
