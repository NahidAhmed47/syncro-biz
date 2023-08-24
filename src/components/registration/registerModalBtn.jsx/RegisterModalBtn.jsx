"use client"
import React from 'react';

const RegisterModalBtn = () => {
    return (
        <div className="text-sm">
      If you haven&apos;t registered business, please{" "}
      <button
        onClick={() => window.my_modal_2.showModal()}
        className="text-red-500 underline"
      >
        Registration
      </button>
    </div>
    );
};

export default RegisterModalBtn;