import React, { useState } from "react";

export default function Hero() {
  const [state, setstate] = useState(() => "");

  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    );
  }
  return (
    <div className="flex justify-between items-center">
      <div className="w-full md:w-1/2 md:mt-0 ml-5">
        <h1 className="text-5xl text-white mb-5 font-semibold" id="HeroText">
          <span className="text-green-900 font-black">Merdeka Belajar!</span> Siapkan dirimu,
          <br className="hidden md:block" /> Belajar berbagai ilmu{" "}
          <span className="">Baru</span>
        </h1>
        <p className="text-white font-light text-lg mb-3">
          Belajar di Universitas Islam Sultan Agung{" "}
          <br className="hidden md:block" /> Agama Yes!, Prestasi Oke!
        </p>

        <form onSubmit={submit} className="flex">
          <input
            type="text"
            onChange={(event) => setstate(event.target.value)}
            className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
            value={state}
            placeholder="Your email addres"
          />
          <button className="bg-yellow-400 hover:bg-orange-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">
            Daftar
          </button>
        </form>
      </div>
      <div className="hidden w-1/2 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 500, height: 500 }}>
          {/* <div
            className="absolute border-green-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          ></div> */}
          <div className="absolute mt-20 -mb-8 -ml-8">
            <img
              src="/images/header.svg"
              alt="Muslim Girl 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
