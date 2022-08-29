import { createContext, useEffect, useState } from "react";
import { devicesApi } from "../../service/devices.service";
export const deviceContext = createContext();

export default function DeviceProvider({ children }) {
  const [device, setDevice] = useState([]);

  useEffect(() => {
    devicesApi().then((res) => setDevice(res));
  }, []);

  return (
    <deviceContext.Provider value={{ device, setDevice }}>
      {children}
    </deviceContext.Provider>
  );
}
