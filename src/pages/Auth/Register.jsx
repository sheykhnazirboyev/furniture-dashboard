import { Card, Flex, Input, Typography } from "antd";
import styles from "./styles.module.css";
import { useForm, Controller } from "react-hook-form";
import { registerUser } from "../../api";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await registerUser(data);
    if(response) {
      navigate("/login")
    }
  };

  return (
    <div className={styles.root}>
      <Card hoverable title="Register" bordered={false} style={{ width: 300 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex vertical gap={10}>
            
            <div>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name must not be empty" }}
                render={({ field }) => (
                  <Input
                    placeholder="Name..."
                    {...field}
                    status={errors.name ? "error" : ""}
                  />
                )}
              />
              {errors.name && <Text type="danger">{errors.name.message}</Text>}
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email must not be empty" }}
                render={({ field }) => (
                  <Input placeholder="Email..." {...field}   status={errors.email ? "error" : ""}/>
                )}
              />
              {errors.email && (
                <Text type="danger">{errors.email.message}</Text>
              )}
            </div>
           
            <div>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password must not be empty" }}
                render={({ field }) => (
                  <Input placeholder="Password..." {...field}   status={errors.password ? "error" : ""} />
                )}
              />
              {errors.password && (
                <Text type="danger">{errors.password.message}</Text>
              )}
            </div>
            <div>
              <button className={styles.button} type="submit">Send</button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default Register;
