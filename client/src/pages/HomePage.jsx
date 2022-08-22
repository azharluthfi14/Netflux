import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";

export default function HomePage() {
  return (
    <div className="overflow-hidden h-screen bg-black">
      <Navbar />
      <Featured type={"movies"} />
    </div>
  );
}
