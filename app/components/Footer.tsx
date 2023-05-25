'use client';

import Container from "./Container";
import { usePathname, useRouter } from "next/navigation";
import { SafeUser } from "../types";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GrFavorite, GrCircleInformation } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BiCode, BiCodeAlt, BiHome } from "react-icons/bi";
import useSearchModal from "../hooks/useSearchModal";
import useRegisterModal from "../hooks/useRegisterModal";
import { BiHomeAlt2 } from "react-icons/bi";

interface FooterProps {
  currentUser?: SafeUser | null;
}

const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const searchModal = useSearchModal();
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    setIsMobile(window.innerWidth <= 550);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let bodyContent = (
        <div className="flex flex-row justify-between items-center">
          <span onClick={() => router.push("/")} className="cursor-pointer px-3 py-1 rounded-full hover:bg-neutral-100 transition">© 2023 MERIT, Inc.</span>
          <div className="cursor-pointer hover:bg-custom-soft-red transition p-2 rounded-full" onClick={() => router.push("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={24}
              height={24}
              className="fill-custom-red"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>

          <div className="flex flex-row justify-between items-center">

            <div onClick={() => router.push("/about")} className="flex flex-row justify-center items-center text-base font-medium hover:bg-neutral-100 transition cursor-pointer px-3 py-1 rounded-full">
                <span className="pr-2">
                    About us
                </span>
                <GrCircleInformation size={18}/>
            </div>

            {!currentUser ? (
              <div onClick={registerModal.onOpen} className="flex flex-row justify-center items-center hover:bg-neutral-100 transition font-medium cursor-pointer text-base px-3 py-1 rounded-full">
                <span className="pr-2">
                    Register
                </span>
                <CgProfile size={18}/>
              </div>
            ) : (
              <div onClick={() => router.push("/favorites")} className="flex flex-row justify-center items-center hover:bg-neutral-100 transition font-medium cursor-pointer text-base px-3 py-1 rounded-full">
                <span className="pr-2">
                    Favorites
                </span>
                <GrFavorite size={14}/>
              </div>
            )}
          </div>
        </div>
  );

  if (isMobile) {
    let about = (
      <div onClick={() => router.push("/about")} className="flex flex-col px-2 justify-center items-center hover:bg-neutral-100 transition cursor-pointer">
         <BiCodeAlt size={22}/>
          <div className="text-sm font-light mt-1">About us</div> 
      </div>
    )
    if (isAboutPage) {
      about = (
        <div onClick={() => router.push("/")} className="flex flex-col px-2 justify-center items-center hover:bg-neutral-100 transition cursor-pointer">
          <BiHomeAlt2 size={22}/>
          <div className="text-sm font-light mt-1">Home</div> 
        </div>
      )
    }


    if (!currentUser) {
      var right = (
        <div
          onClick={registerModal.onOpen}
          className="flex flex-col px-2 justify-center items-center hover:bg-neutral-100 transition cursor-pointer"
        >
          <CgProfile size={22} />
          <div className="text-sm font-light mt-1">Register</div>
        </div>
      );
    } else {
      right = (
        <div
          onClick={() => router.push("/favorites")}
          className="flex flex-col px-2 justify-center items-center hover:bg-neutral-100 transition cursor-pointer"
        >
          <GrFavorite size={22} />
          <div className="text-sm font-light mt-1">Favorites</div>
        </div>
      );
    }
    bodyContent = (
      <>
        <div className="flex flex-row justify-around items-center">
          <div
            onClick={searchModal.onOpen}
            className="flex flex-col px-2 justify-center items-center hover:bg-neutral-100 transition cursor-pointer"
          >
            <IoSearch size={22} />
            <div className="text-sm font-light mt-1">Search</div>
          </div>
          {about}
          {right}
        </div>
      </>
    );
  }

  return (
    <div className="border-t-[1px] bg-white py-2 fixed right-0 bottom-0 w-full z-10">
      <Container>{bodyContent}</Container> 
    </div>
  );
};

export default Footer;