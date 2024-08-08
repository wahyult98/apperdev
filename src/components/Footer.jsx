/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0 text-xl">
          <h1 className="text-5xl">
            <span className="font-bold">Apper </span>Studio
          </h1>
          <p className=" text-gray-600 mt-5 sm:text-lg">
            Where UX Drives Innovation, Empowering Businesses with User-Centric
            Solutions
          </p>
        </div>
        <div className="md:flex-row ">
          <div className="mb-8 md:mb-5">
            <h2 className="text-lg font-medium text-slate-600">
              LET&apos;S COLLABORATE TOGETHER
            </h2>
            <p className="mt-2 text-xl font-bold hover:underline">
              team@apperdev.com
            </p>
          </div>
          <div className="mt-4 md:mb-0">
            <h2 className="text-lg font-medium text-slate-600">FOLLOW US</h2>
            <p className="mt-4 text-xl font-bold hover:underline">Linkedin</p>
            <p className=" text-xl font-bold hover:underline">Instagram</p>
          </div>
          <div className="mt-4 md:mb-0">
            <h2 className="text-lg font-medium text-slate-600">ADDRESS</h2>
            <p className="mt-2 text-gray-600 ">Jl. Karet Belakang I no. 18</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12">
        <p className="text-center text-gray-600 py-4">
          © 2024 Apper Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
