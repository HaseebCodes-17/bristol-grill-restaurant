import React from "react";

const HeaderLeft = () => {
  return (
    <div className="max-w-[500px] w-full grid place-items-center z-10">
      <div>
        <h2 className="text-3xl text-orange-500 font-semibold mb-2">
          Fast Food Restaurant
        </h2>
        <h2 className="text-5xl/[40px] text-zinc-300 font-semibold mb-6">
          A taste you'll love so give us a taste
        </h2>
        <p className="text-zinc-200 mb-8">
          Welcome to our restaurant! Enjoy fresh, flavorful dishes crafted with
          care, from hearty meals to gourmet delights. Savor every bite and
          experience the joy of great food!
        </p>
        <a
          href="#reviews"
          className="text-white bg-orange-500 py-2 px-6 rounded-3xl ring ring-orange-500 ring-offset-2 hover:ring-offset-0 transition-all"
        >
          Reviews
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
