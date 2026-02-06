'use client'
import { useState } from "react"
import NavLinks from "./NavLinks"
import { MenuBurger } from "./menuBurger"
import CloseIcon from "./CloseIcon"
export const NavBar = () => {
    const [isopen, setIsOpen] = useState<Boolean>(false)
    function ToggleBar() {
        setIsOpen(!isopen)
    }
    return (
        <header className="sticky top-0 z-20 mx-auto backdrop-blur-2xl p-4 flex flex-wrap w-full items-center justify-between">
            <span className="sm:text-4xl  font-extrabold 
            bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text
             text-transparent">/AscendoByArchon</span>
            <div className="w-1/3 justify-end">
                <div className="hidden md:flex justify-between">
                    <NavLinks></NavLinks>
                </div>
            </div>
            <div>
                <div className="md:hidden ">
                    <button onClick={ToggleBar} className="">{isopen ? <CloseIcon /> : <MenuBurger />}</button>
                </div>
            </div>
            {isopen && (
                <div className="flex flex-col items-center basis-full md:hidden pt-4">
                    <NavLinks></NavLinks>
                </div>
            )}

        </header>
    )
}