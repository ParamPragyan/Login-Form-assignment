import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ username, panNumber, file });
    navigate("/home");
  };

  return (
    <div className="container-1 h-[100vh] flex flex-col  justify-center items-center">
      <form
        className="flex flex-col p-10 rounded-2xl w-fit gap-5  justify-center items-center"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          placeholder="username:"
          className="input text-xl text-slate-900 placeholder:pl-2 bg-transparent border-3 rounded-full px-10 py-4 max-md:text-xl"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <input
          className="input text-xl text-slate-900 placeholder:pl-2 bg-transparent border-3 rounded-full px-10 py-4 max-md:text-xl"
          placeholder="PAN no:"
          type="text"
          id="panNumber"
          name="panNumber"
          value={panNumber}
          onChange={handlePanNumberChange}
          required
        />

        <input
          className="w-[13rem]"
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          accept=".pdf, .jpg, .png"
          required
        />

        <button
          className="submit text-xl text-slate-300 placeholder:pl-2 bg-[black] border-3 rounded-full px-10 py-4 max-md:text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
