import React from "react";

function Hero() {
  return (
    <div className="shadow-lg rounded w-full mt-8 py-14 px-8 flex flex-col gap-4 md:flex-row md: items-center">
     <div>
     <h1 className="font-bold text-xl"> Welcome to ECS Vending – </h1>
      <p className="mt-5">
        Elevate your snacking game with ECS Vending – where innovation meets
        flavor. Explore our offerings and experience the future of vending
        today.
      </p>
      <p>Contact us to learn more and savor the convenience!</p>
     </div>
     <div className="w-full">
      <img src="logo.png" alt="logo" className="w-full" />
     </div>
    </div>
  );
}

export default Hero;
