"use client"
import React from "react";

const LoginModalBtn = () => {
  return (
    <div className="text-sm">
      If you want manage exist business, please{" "}
      <button
        onClick={() => {window.login_modal.showModal(), window.my_modal_2.close()}}
        className="text-red-500 underline"
      >
        Login
      </button>
    </div>
  );
};

export default LoginModalBtn;
