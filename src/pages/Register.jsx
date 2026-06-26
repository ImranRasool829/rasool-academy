function Register() {

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
          Register
        </h1>

        <input
          placeholder="Name"
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          mb-4
          "
        />

        <input
          placeholder="Email"
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-900
          mb-4
          "
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
        />

        <button
          className="
          w-full
          bg-blue-600
          p-4
          rounded-xl
          "
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default Register;