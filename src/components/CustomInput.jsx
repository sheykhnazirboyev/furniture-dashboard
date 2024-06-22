import { Input, Typography } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const { Text } = Typography;

function CustomInput(props) {
  return (
    <div>
      <Controller
        name={props.name}
        control={props.control}
        rules={props.rules}
        render={({ field, fieldState }) => {
          console.log(field, fieldState);
          return (
            <Input
              {...field}
              placeholder={props.placeholder}
              status={!!props.error ? "error" : ""}
            />
          );
        }}
      />
      {props.error && <Text type="danger">{props.error.message}</Text>}
    </div>
  );
}

export default CustomInput;
