"use client";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
const apiUrl = "https://social-login.druckland.de/api/v1/user/signin";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!termsAgreed) {
      setErrorText("Please Agree to terms first!");
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setErrorText("");

    try {
      const response = await axios.post(apiUrl, formData);
    } catch (err) {
      console.log(err);
      setErrorText("Unknown email address. Try again!");
      setShowErrors(true);
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }
  function handleTermsAgreeChanged() {
    if (!termsAgreed) {
      setErrorText("");
      setShowErrors(false);
    }
    setTermsAgreed(!termsAgreed);
  }
  return (
    <div className="p-8 w-[404px] h-[524px] bg-secondary rounded-2xl flex flex-col items-center text-center">
      <h3 className="text-[32px] mb-8">Drukland.de</h3>
      <p className="text-[24px] mb-1">Sign In to your account</p>
      <p className="text-sm mb-4 text-[#292929]">
        Don’t you have an account?{" "}
        <span className="text-[#0b0b0b] text-[16px]">Register</span>
      </p>
      <div
        style={{ opacity: showErrors ? "1" : "0" }}
        className="mb-4 text-xs flex gap-1 items-center"
      >
        <Image src={"/icons/exclaim.svg"} alt="error" height={10} width={10} />
        {errorText}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-2 text-left text-sm w-full"
      >
        <div className="mb-4 flex flex-col w-full">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ background: "transparent" }}
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-foreground px-2 py-1 focus:outline-none focus:ring-none focus:border-b-2 bg-transparent w-full"
          />
        </div>
        <div className="mb-2 flex flex-col w-full">
          <label htmlFor="password" className="text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-b border-foreground px-2 py-1 focus:outline-none focus:ring-none focus:border-b-2 bg-transparent w-full"
          />
        </div>

        <div className="text-sm  text-[#292929] flex items-center gap-2 mt-2">
          <div
            onClick={handleTermsAgreeChanged}
            className="border border-foreground rounded-[2px] h-3 w-3 cursor-pointer"
          >
            {termsAgreed && (
              <div className="relative w-full h-full left-[1px]">
                <div className="h-[1px] w-[3px] top-[6px] left-[0px] bg-foreground rotate-[45deg] absolute" />
                <div className="h-[1px] w-[8px] top-[5px] right-[2px] bg-foreground -rotate-[45deg] absolute" />
              </div>
            )}
          </div>
          I agree to all{" "}
          <span className="text-[#0b0b0b] font-medium  ">
            Terms & Conditions
          </span>
        </div>
        <button
          type="submit"
          className="h-10 rounded-md bg-foreground text-center text-md w-full text-white"
        >
          Log In
        </button>
      </form>
      <div className="relative w-full mt-4">
        <div className="absolute h-[1px] w-full bg-foreground top-[50%] -translate-y-[50%] z-[1]"></div>
        <div className="mx-auto absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center text-xs bg-white px-2 w-[100px] z-[2]">
          or sign in with
        </div>
      </div>
      <div className="w-full flex justify-center mt-4 gap-1">
        <Image
          src={"/icons/linkedin.svg"}
          alt="linkedin"
          width={16}
          height={16}
        />
        <Image src={"/icons/google.svg"} alt="google" width={16} height={16} />
        <Image src={"/icons/fb.svg"} alt="facebook" width={16} height={16} />
      </div>
    </div>
  );
}
