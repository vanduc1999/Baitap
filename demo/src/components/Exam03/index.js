import { Form, Input, Button } from "antd";

///Form Login
const Exam03 = (props) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // do somethings
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Exam03;
