import React from "react";

const Home = ({ username, panNumber, fileName }) => (
  <div className="h-[100vh] home flex items-center justify-center">
    <div className=" p-20 input flex flex-col font-bold justify-center text-2xl max-md:text-xl items-center">
      <h1>Welcome, {username || "Guest"}!</h1>
      <p>PAN Number: {panNumber || "N/A"}</p>
      <p>File Uploaded: {fileName || "No file uploaded"}</p>
    </div>
  </div>
);

export default Home;
