import { Routes, Route } from "react-router-dom";
import { Devices, Home } from "./components/index";
import DeviceProvider from "./context/Devices-context/Devices-context";

export default function Router() {
  return (
    <Routes>
      <Route
        path="Devices"
        element={
          <DeviceProvider>
            <Devices />
          </DeviceProvider>
        }
      />
      <Route path="Home" element={<Home />} />
    </Routes>
  );
}
