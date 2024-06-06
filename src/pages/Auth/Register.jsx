import { Card, Flex } from "antd";
import styles from "./styles.module.css";
import { Input, Button } from "antd";

function Register() {
  return (
    <div className={styles.root}>
      <Card hoverable title="Register" bordered={false} style={{ width: 300 }}>
        <form action="">
          <Flex gap="middle" vertical>
            <div>
              <Input placeholder="Name" />
            </div>
            <div>
              <Input placeholder="Email" />
            </div>
            <div>
              <Input placeholder="Password" />
            </div>
            <div>
              <Button type="primary">Register</Button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default Register;
