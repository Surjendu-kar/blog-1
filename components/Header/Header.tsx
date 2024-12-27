import Logo from "@/public/header-img/logo.svg";
import LightDark from "@/public/header-img/lightDark.svg";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white w-full">
      <div className="container flex p-4 justify-between w-full">
        <div>
          <Image src={Logo} alt="logo" />
        </div>

        <div className="flex items-center space-x-4 text-black">
          <p>AI Consulting</p>
          <p>AI Toolbox</p>
          <p>Content Health</p>
          <p>Resources</p>
        </div>

        <div className="flex items-center space-x-2 ">
          <button className="border border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-md capitalize	">
            login
          </button>
          <button className="bg-[#00C7BE] text-white px-4 py-3 rounded-md capitalize	">
            register now
          </button>
          <Image src={LightDark} alt="lightDark mode" />
        </div>
      </div>
    </header>
  );
}
