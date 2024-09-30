import { Card, Flex } from "antd";
import styles from "./styles.module.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await loginUser({ email, password });
    if (response.data) {
      localStorage.setItem("token", response.data);
      navigate("/");
    }
  };

  return (
    <div className={styles.root}>
      <Card hoverable title="Login" bordered={false} style={{ width: 300 }}>
        <form action="">
          <Flex gap="middle" vertical>
            <div>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </div>
            <div>
              <Button onClick={handleSubmit} type="primary">
                Login
              </Button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default Login;
