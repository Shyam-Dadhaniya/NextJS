import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>The Home Page.</div>
      <Link href="/portfolio">Portfolio</Link>
    </>
  );
};

export default HomePage;
