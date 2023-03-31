import { useEffect } from "react";
import { Form, Input, Select, Modal } from "antd";
import { PageNumber } from './styles'

const ModalFormBook = ({ loading,open, setOpen, formData, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    onSubmit(formData.id, values);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} confirmLoading={loading} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Tiêu đề"
          rules={[{ required: true, message: "Tiêu đề là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="author"
          label="Tác giả"
          rules={[{ required: true, message: "Tác giả là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            { required: true, message: "Mô tả là bắt buộc" },
            { max: 100, message: "Mô tả không quá 100 ký tự" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="type"
          label="Thể loại"
          rules={[{ required: true, message: "Thể loại là bắt buộc" }]}
        >
          <Select
            options={[
              { value: "001", label: "Kinh dị" },
              { value: "002", label: "Tình cảm" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="page"
          label="Số trang"
          rules={[{ required: true, message: "Số trang là bắt buộc" }]}
        >
          <PageNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormBook;
