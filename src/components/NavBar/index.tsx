"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import ThemeSwap from "../ThemeBtn";

export default function NavBar() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar bg-base-100 mb-20 justify-around">
        <div className="navbar-start">

          <Link href="/" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>

        <div className="navbar-end ">
          <ThemeSwap handleOnClick={changeTheme} />
        </div>
      </div>
    </>
  );
}
