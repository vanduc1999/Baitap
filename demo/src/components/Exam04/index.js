import { Form, Input, Button, Select } from "antd";
// tao form dang ky voi email, passsword, confirm, phone, country
const Exam04 = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // do somethings
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
    <Select
      style={{ width: 70 }}
      options={[
        { value: "84", label: "+84" },
        { value: "65", label: "+65" },
      ]}
    />
  </Form.Item>
  );
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your Email!" },
            { type: "email" },
          ]}
        >
          <Input style={{ width: "350px" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password style={{ width: "350px" }} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(); //true
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password style={{ width: "350px" }} />
        </Form.Item>

        

      

        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "350px" }} />
      </Form.Item>

        <Form.Item label="Country" name="country" rules={[]}>
          <Select style={{ width: "150px" }}
            options={[
              { value: "VN", label: "Vietnam" },
              { value: "US", label: "USA" },
            ]}
          />
        </Form.Item>

        

        <Form.Item>
          <Button type="primary" onClick={onSubmit}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Exam04;
