import "./Devices.css";
import { deviceContext } from "../../../context/Devices-context/Devices-context";
import { useContext } from "react";
import DeviceCard from "../../features/Device-Card/Device-Card";

function Devices() {
  const { device, setDevice } = useContext(deviceContext);
  return (
    <div className="devices">
      <h1>{device.length}</h1>
      {device.map((deviceItem) => (
        <DeviceCard deviceItem={deviceItem} />
      ))}
    </div>
  );
}

export default Devices;
