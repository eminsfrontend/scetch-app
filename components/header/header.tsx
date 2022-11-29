import Image from "next/image"
import Link from "next/link"
import Container, { ContainerStyle } from "../container"
import logo from "./logo.png"

export default function Header() {
  return (
    <header
      className="
        container mx-auto max-w-6xl
        grid grid-cols-3 items-center fixed lg:absolute lg:left-1/2 lg:-translate-x-1/2
      bg-white lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none bg-opacity-80 
        border-b lg:border-b-0 border-b-neutral-300"
    >
      {/* Menu burger */}
      <div className="p-4 justify-self-start">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" />
          <rect y="14" width="24" height="2" rx="1" fill="black" />
          <rect y="8" width="24" height="2" rx="1" fill="black" />
        </svg>
      </div>

      {/* Logo area */}
      <Link href="/" className="p-4 justify-self-center">
        <Image src={logo} alt="logo" />
      </Link>

      {/* Call to Action Area */}
      <Link className="p-4 justify-self-end font-semibold text-[16px]" href="/">
        Sign In
      </Link>
    </header>
  )
}
