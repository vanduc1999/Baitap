
const FormUser = ({ formData, setFormData, onSubmit }) => {
  
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
        <input name="name" value={formData.name} onChange={onChange} />
        <input name="email" value={formData.email} onChange={onChange} />
        <input name="phone" value={formData.phone} onChange={onChange} />
        <button onClick={onSubmit}>{formData.id ? "Edit" : "Create"}</button>
    </div>
  );
};

export default FormUser;
