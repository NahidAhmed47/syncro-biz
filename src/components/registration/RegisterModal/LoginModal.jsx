"use client"
import ButtonPrimary from "@/components/singleComponents/ButtonPrimary/ButtonPrimary";
import React from "react";
import RegisterModalBtn from "../registerModalBtn.jsx/RegisterModalBtn";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (!data.email && !data.pin) {
      toast.error("Please provide required info!");
      form.reset();
      return;
    } else if (!data.email || !data.pin) {
      toast.error("Required field is missing!");
      return;
    }
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        pin: data.pin,
      })
      if(res.error){
        toast.error("Invalid Email or PIN")
        return;
      }
      else{
        toast.success("Login Successful")
        router.push("/dashboard")
        form.reset();
        window.login_modal.close();
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <dialog id="login_modal" className="modal">
      <form
        onSubmit={handleFormSubmit}
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
              name="email"
            ></input>
          </div>
          <div>
            <label
              className="text-base lg:text-lg lg:font-medium text-neutral"
              htmlFor="pin"
            >
              Business Code (PIN) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="8540956"
              name="pin"
            ></input>
          </div>
          <RegisterModalBtn></RegisterModalBtn>
        </div>
        <div className="w-full flex justify-center h-full mt-4 md:mt-5 items-end">
          <ButtonPrimary>LogIn</ButtonPrimary>
        </div>
      </form>
    </dialog>
  );
};

export default LoginModal;
