"use client";
import { IoMdSearch } from "react-icons/io";

export default function SearchInput() {
  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
          <label htmlFor="search" className="sr-only"> Movie search </label>
          <input type="search" id="movie-search" className="block w-full rounded-full border border-gray-300 p-4 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-yellow-400" placeholder="Search Movies" required />
          <button type="submit" className="text-white absolute end-2 bottom-2 p-2 font-medium rounded-full text-sm hover:border hover:border-gray-300 hover:ring hover:ring-yellow-400 focus:ring focus:bg-yellow-500">
            <IoMdSearch className="text-lg" />
          </button>
        </div>
    </form>
  );
}
7
