import { Button, Input } from "antd";
import "./login.styl";
import tubiao from "./tubiao.jpg";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // 创建路由钩子
  const navigate = useNavigate();

  return (
    <>
      <div className="P-login">
        <img className="logo" src={tubiao} alt=""></img>
        <div className="ipt-con">
          <Input type="text" placeholder="请输入用户名" />
        </div>

        <div className="ipt-con">
          <Input type="password" placeholder="请输入密码" />
        </div>
        <div className="ipt-con">
          <Button
            type="primary"
            block={true}
            onClick={() => {
              navigate("/home");
            }}
          >
            登录
          </Button>
        </div>
      </div>
    </>
  );
}
