import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./home.styl";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="P-home">
      <h1>Welcome to Home Page</h1>
      <div className="ipt-con">
        <Button type="primary" onClick={() => navigate("/login")}>
          返回登录
        </Button>
      </div>
    </div>
  );
}

export default Home;
