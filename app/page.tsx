"use client";

import DateAndDay from "@/components/date";

import { useEffect, useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(33);

  return (
    <div className="container py-10 mx-auto text-unselectable">
      <nav>
        <h1 className="text-3xl mb-10 text-gray-800 font-playfair-b tracking-tight">
          resonate.
        </h1>
      </nav>

      <div className="flex justify-between items-center">
        <DateAndDay />
      </div>
    </div>
  );
};

export default Home;
