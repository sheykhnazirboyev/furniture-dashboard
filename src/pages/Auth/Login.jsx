import { Card, Flex } from "antd";
import styles from "./styles.module.css";
import { Input, Button } from "antd";

function Login() {
  return (
    <div className={styles.root}>
      <Card hoverable title="Login" bordered={false} style={{ width: 300 }}>
        <form action="">
          <Flex gap="middle" vertical>
            <div>
              <Input placeholder="Email" />
            </div>
            <div>
              <Input placeholder="Password" />
            </div>
            <div>
              <Button type="primary">Login</Button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default Login;
