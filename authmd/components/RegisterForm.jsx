"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log("res:", res);
      const form = e.target;
      form.reset();
      if (res.ok) {
        formRef.current.reset();
        console.log("target:", e.target);
      } else {
        console.log("register failed");
      }
    } catch (error) {
      console.log("Error registreation :,", error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col gap-3"
        >
          <input
            // value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-sm py-1 px-3 rounded-md mt-2 text-white w-fit">
              {error}
            </div>
          )}
          <Link href={"/"} className="text-sm mt-3 text-right">
            Already have an account?<span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
