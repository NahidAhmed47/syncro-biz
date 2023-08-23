import ButtonPrimary from "@/components/singleComponents/ButtonPrimary/ButtonPrimary";
import FormHeader from "@/components/singleComponents/formHeader/FormHeader";
import React from "react";
import LoginModalBtn from "../loginModalBtn/LoginModalBtn";

const RegisterModal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box bg-white rounded-md min-h-fit">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-medium text-lg lg:text-xl text-primary">
          Welcome! Please give the following information.{" "}
        </h3>
        <div className="mt-3 space-y-2 lg:space-y-2.5">
          <FormHeader>Business Info</FormHeader>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="name"
            >
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Type your business name here"
            ></input>
          </div>
          <div className="w-full h-fit gap-2 grid md:grid-cols-2">
            <div>
              <label
                className="text-base lg:text-lg lg:font-medium text-neutral"
                htmlFor="name"
              >
                Type of Business <span className="text-red-500">*</span>
              </label>
              <select
                type="text"
                className="form-input "
                placeholder="Type your business name here"
              >
                <option value="1">Select</option>
                <option value="2">Select</option>
                <option value="3">Select</option>
              </select>
            </div>
            <div>
              <label
                className="text-base lg:text-lg lg:font-medium text-neutral"
                htmlFor="name"
              >
                EIN (Optional)
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Type your business name here"
              ></input>
            </div>
          </div>
          <div className="w-full h-fit gap-2 grid md:grid-cols-2">
            <div>
              <label
                className="text-base lg:text-lg lg:font-medium text-neutral"
                htmlFor="name"
              >
                Number of Employee <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Type your business name here"
              ></input>
            </div>
            <div>
              <label
                className="text-base lg:text-lg lg:font-medium text-neutral"
                htmlFor="name"
              >
                Annual Profit <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Type your business name here"
              ></input>
            </div>
          </div>
          <FormHeader>Ownership</FormHeader>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral "
              htmlFor="name"
            >
              Owner/Principal Name <span className="text-red-500">*</span>
            </label>
            <div className="w-full h-fit flex gap-2">
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="form-input"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="name"
            >
              Owner Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Email"
            ></input>
          </div>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="name"
            >
              Address (Optional)
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="City name, Country"
            ></input>
          </div>
          <LoginModalBtn></LoginModalBtn>
        </div>
        <div className="w-full flex justify-center h-full mt-4 md:mt-5 items-end">
          <ButtonPrimary>Submit</ButtonPrimary>
        </div>
      </form>
    </dialog>
  );
};

export default RegisterModal;
