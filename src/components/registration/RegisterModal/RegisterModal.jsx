"use client";
import ButtonPrimary from "@/components/singleComponents/ButtonPrimary/ButtonPrimary";
import FormHeader from "@/components/singleComponents/formHeader/FormHeader";
import React from "react";
import LoginModalBtn from "../loginModalBtn/LoginModalBtn";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
  const router = useRouter();
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (
      !data.businessName &&
      !data.employee &&
      !data.profit & !data.firstName &&
      !data.email &&
      !data.ein &&
      !data.lastName &&
      !data.address
    ) {
      form.reset();
      return;
    } else if (
      !data.businessName ||
      !data.employee ||
      !data.profit ||
      !data.firstName ||
      !data.email ||
      !data.businessType
    ) {
      toast.error("Required field is missing!");
      return;
    }
    try {
      const resUserIsExist = await fetch('api/userExist', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.email),
      })
      const {user} = await resUserIsExist.json();
      if(user){
        toast.error('User already exist!')
        return;
      }
      else{
        const res = await fetch('api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({data}),
        })
        if(res.ok){
          toast.success('Registration Successful')
          form.reset();
          window.my_modal_2.close();
          router.push('/dashboard')
        }else{
          toast.error('Business Registration Failed!')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        onSubmit={handleFormSubmit}
        className="modal-box bg-white rounded-md min-h-fit"
      >
        <button
          onClick={() => window.my_modal_2.close()}
          name="close"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
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
              name="businessName"
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
              <select className="form-input " name="businessType">
                <option value="" disabled>
                  Select
                </option>
                <option value="wholesale">Wholesale</option>
                <option value="Small Company">Small Company</option>
                <option value="Retailer">Retailer</option>
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
                name="ein"
                placeholder="EIN-4549"
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
                name="employee"
                placeholder="10-15"
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
                name="profit"
                placeholder="150,000 USD"
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
                name="firstName"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="form-input"
                name="lastName"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
          <div className="w-full h-fit gap-2 grid md:grid-cols-2">
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
                name="email"
                placeholder="Enter Email"
              ></input>
            </div>
            <div>
              <label
                className="text-base lg:text-lg lg:font-medium text-neutral"
                htmlFor="name"
              >
                Set PIN <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="form-input"
                name="pin"
                placeholder="*****"
              ></input>
            </div>
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
              name="address"
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
