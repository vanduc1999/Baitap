const SreachBox = ({keyword, setKeyword}) => {
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  return <input value={keyword} onChange={onChange} />;
};

export default SreachBox;
