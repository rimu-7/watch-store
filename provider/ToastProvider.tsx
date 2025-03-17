import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"  // Toast should appear on the top-right
      toastOptions={{
        style: {
          position: "fixed",   // Ensuring it's fixed in position
          top: "20px",         // Adjust the distance from the top
          right: "20px",       // Adjust the distance from the right
          zIndex: 9999,        // Ensure it's above other content
        },
      }}
    />
  );
};

export default ToastProvider;
