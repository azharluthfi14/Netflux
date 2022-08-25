import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from "../components/List";

export default function HomePage() {
  return (
    <div className="overflow-hidden h-screen bg-white">
      <Navbar />
      <Featured />
      <List />
    </div>
  );
}
