import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  AuthContext
} from "../context/AuthContext";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleLogin = () => {

    login({
      name: "Emran",
      email
    });

    navigate(
      "/dashboard"
    );
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >

      <div
        className="
        glass
        p-10
        rounded-3xl
        w-[450px]
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          mb-4
          "
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          mb-4
          "
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={
            handleLogin
          }
          className="
          w-full
          bg-purple-600
          p-4
          rounded-xl
          "
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;