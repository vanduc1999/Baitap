import { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";

const Exam02 = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open && props.formData.id) {
      form.setFieldsValue(props.formData);
    }
  }, [props.open, props.formData]);

  const onSubmit = async () => {
    const values = await form.validateFields();
    props.onSubmit(props.formData.id, values);
  };

  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Không đúng định dạng Email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="studentId"
          label="Mã số học sinh"
          rules={[{ required: true, message: "Vui lòng nhập mã số học sinh!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="score"
          label="Điểm số"
          rules={[
            { required: true, message: "Vui lòng nhập điểm số học sinh!" },
          ]}
        >
          <InputNumber min={8} max={12} />
        </Form.Item>

        <Form.Item
          name="className"
          label="Lớp"
          rules={[
            { required: true, message: "Vui lòng nhập lớp của học sinh!" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Exam02;
