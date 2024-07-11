import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-black-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="h-10 w-[auto]" src="https://w7.pngwing.com/pngs/426/895/png-transparent-google-logo-google-doodle-google-search-design-tshirt-company-text-trademark-thumbnail.png" alt="" />
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-red-600 cursor-pointer">First Link</a>
            <a className="mr-5 hover:text-red-600 cursor-pointer">Second Link</a>
            <a className="mr-5 hover:text-red-600 cursor-pointer">Third Link</a>
            <a className="mr-5 hover:text-red-600 cursor-pointer">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 hover:text-white rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
