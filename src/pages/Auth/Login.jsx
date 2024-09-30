import { Card, Flex } from "antd";
import styles from "./styles.module.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth`, {
        email: email,
        password: password,
      });
      if (response.data) {
        localStorage.setItem("token", response.data);
        console.log(response.data);
        navigate("/");
      }
    } catch (error) {
      alert("Foydalanuvchi ma'lumotlari xato!");
      console.log("xatolik yuz berdi");
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
              <Button onClick={handleSubmit} type="primary">Login</Button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default Login;
