import { useState } from 'react';

const Exam01 = () => {
  const [numbers, setNumbers] = useState([1, 1, 4, 6, 8, 3, 5, 5, 9, 17, 15]);

  const onClick = () => {
    // lọc ra những số chẵn
    const newNumber2 = numbers.filter((item) => item % 2 === 0);
    // lọc ra những số chia hết cho 3
    const newNumber3 = numbers.filter((item) => item % 3 === 0);
    // lọc ra những số duy nhất
    const uniqueNumbers = [...new Set(numbers)];

    // cập nhật state mới
    setNumbers(uniqueNumbers);
  };

  return (
    <div>
      {numbers.map((item) => {
        return <div>{item}</div>;
      })}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Exam01;
