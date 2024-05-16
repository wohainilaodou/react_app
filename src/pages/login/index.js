import { Button, Input } from "antd";
import "./login.styl";
import tubiao from "./tubiao.jpg";
export default function Login() {
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
          <Button type="primary" block={true}>
            登录
          </Button>
        </div>
      </div>
    </>
  );
}
