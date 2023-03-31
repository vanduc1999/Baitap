import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import { Coundition } from "./styles";
const ModalWeather = ({ open, setOpen, name }) => {

  const [data, setData] = useState({});

  useEffect(() => {
    if (open) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=36fd8fcb617b44948a6133138232403&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
        });
    }
  }, [name]);

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <Modal open={open} footer={null} onCancel={onCancel}>
      {data.location && data.current && (
        <div>
          <div>Thành phố: {data.location.name}</div>
          <div>
            lon: {data.location.lon}, lat: {data.location.lat}
          </div>
          <div>Nhiệt độ: {data.current.temp_c}</div>
          <div>Thời tiết: {data.current.condition.text}</div>
          <Coundition>
            <div>
              {data.current.condition.text}
              <img src={data.current.condition.icon} />
            </div>
          </Coundition>

        </div>
      )}
    </Modal>
  );
};

export default ModalWeather;
