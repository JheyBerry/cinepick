"use client";

import React from "react";
import { IoMdFilm, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import Link from "next/link";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="z-50 absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 text-sm  text-white font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>CinePick</title>
      </Head>
      <Link href={`/`}>
        <div className="flex items-center gap-2 font-medium tracking-[4px]">
          <IoMdFilm  className="text-2xl" />
          CinePick
        </div>
      </Link>
      <div className="w-lg gap-6">
        <SearchInput />
      </div>
      <div className="gap-6">
        <IoMdPerson className="text-2xl" />
      </div>
    </div>
  );
}

export default Header;
