import ButtonPrimary from "@/components/singleComponents/ButtonPrimary/ButtonPrimary";
import React from "react";

const LoginModal = () => {
  return (
    <dialog id="login_modal" className="modal">
      <form
        method="dialog"
        className="modal-box bg-white rounded-md min-h-[20vh] h-fit"
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-medium text-lg lg:text-xl text-primary">
          Welcome back!
        </h3>
        <div className="space-y-2 md:space-y-2.5 mt-3">
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="name"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="Registered Email"
            ></input>
          </div>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="name"
            >
              Business Code (PIN) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="8540956"
            ></input>
          </div>
        </div>
        <div className="w-full flex justify-center h-full mt-4 md:mt-5 items-end">
          <ButtonPrimary>LogIn</ButtonPrimary>
        </div>
      </form>
    </dialog>
  );
};

export default LoginModal;
