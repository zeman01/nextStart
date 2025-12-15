"use client";
import React from "react";
import { useState } from "react";
import {useForm} from "react-hook-form"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
  });

  const {register} =useForm

  // const onChange = (e:React,) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setFormData({ ...formData, [name]: value });
  // };

  console.log(formData);

  // const onSubmit = (e:React, FormEvent</HTMLFormElement>)=>{

  // }

  return (
    <div>
      <form onSubmit={onsubmit} className="flex flex-col gap-5">
        {/* name */}
        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" placeholder="John" />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" placeholder="Doe" />
          </div>
        </div>
        {/* gender */}
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        {/* phone */}
        <div>
          <label htmlFor="Phone">Phone</label>
          <input type="number" id="number" />
        </div>
        {/* email input */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
            id={"email"}
            type="text"
            placeholder="johndoe@mail.com"
          />
        </div>
        {/* Password input */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="border border-grey-400 rounded-sm px-2 py-3 focus:outline-blue-400"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>
        {/* submit button */}
        <button type="submit" className="bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
