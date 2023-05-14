import { Logo } from "../Logo";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [ menu, setMenu ] = useState<boolean>(false);

  return(
    <nav className="overflow-hidden pt-5 bg-black">
      <div className="flex justify-between py-2 px-7">
        <div onClick={() => setMenu(!menu)} className=" sm:hidden rotate-90 font-bold text-2xl cursor-pointer">
          |||
        </div>

        <div className="hidden sm:block">
          <div className="flex">
            <Link href='/Users'>
              <p className="sm:mb-0 mb-5 flex hover:bg-[#444] rounded-md px-5 py-2">
                <span className="pr-2">
                  <BiUserCircle size={30} />  
                </span>
                Usuários
              </p>
            </Link>

            <Link href='/DashBoards'>
              <p className="sm:mb-0 mb-5 flex px-5 py-2 hover:bg-[#444] transition-all duration-300 rounded-md">
                <span className="pr-2">
                  <RiDashboardFill size={30} />  
                </span>
                Dashboards
              </p>
            </Link>

            <Link href='/CashFlow'>
              <p className="sm:mb-0 mb-5 flex px-5 py-2 hover:bg-[#444] rounded-md">
                <span className="pr-2">
                  <TbArrowsLeftRight size={30} />  
                </span>
                Fluxo de Caixa
              </p>
            </Link>

            <Link href='/Admin'>
              <p className="sm:mb-0 mb-5 flex px-5 py-2 hover:bg-[#444] rounded-md text-white">
                <span className="pr-2">
                  <RiAdminLine size={30} className="text-white" />  
                </span>
                Conta
              </p>
            </Link>
          </div>
        </div>

        <div className="text-5xl">
          <Logo font='5' />
        </div>
      </div>

      <div className={`
        bg-[#222] 
        transition-all 
        ease-in duration-500 
        w-8/12 sm:w-1/2 
        md:w-1/2 
        lg:w-1/6 
        sm:min-[h-100] 
        h-screen
        p-7
        text-lg 
        ${menu ? 'block' : 'hidden'}`
      }>
        <Link href='/Users'>
          <p className="mb-5 flex hover:bg-[#444] rounded-md px-5 py-2">
            <span className="pr-2">
              <BiUserCircle size={30} />  
            </span>
            Usuários
          </p>
        </Link>
        
        <Link href='/Dashboards'>
          <p className="mb-5 flex px-5 py-2 hover:bg-[#444] transition-all duration-300 rounded-md">
            <span className="pr-2">
              <RiDashboardFill size={30} />  
            </span>
            Dashboards
          </p>
        </Link>

        <Link href='/Caixa'>
          <p className="mb-5 flex px-5 py-2 hover:bg-[#444] rounded-md">
            <span className="pr-2">
              <TbArrowsLeftRight size={30} />  
            </span>
            Fluxo de Caixa
          </p>
        </Link>

        <Link href='/Admin'>
          <p className="mb-5 flex px-5 py-2 hover:bg-[#444] rounded-md text-white">
            <span className="pr-2">
              <RiAdminLine size={30} className="text-white" />  
            </span>
            Conta
          </p>
        </Link>

      </div>
    </nav>
  );
}