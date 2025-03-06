// src/components/Alert.jsx
import React, { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { Alert as FlowbiteAlert } from "flowbite-react";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <FlowbiteAlert color={alert.type} className="shadow-lg">
        <span className="font-medium">{alert.message}</span>
      </FlowbiteAlert>
    </div>
  );
};

export default Alert;
