import { useEffect, useRef } from "react"
import { Picture } from "./Picture"
import { Item } from "./Item"
import menu from "../assets/hamburger.svg"
import logo from "../assets/logo.svg"
import arrowLeft from "../assets/angle-left.svg"
import arrowRight from "../assets/angle-right.svg"
import mobileOne from "../assets/mobile-1.jpg"
import mobileTwo from "../assets/mobile-2.jpg"
import mobileThree from "../assets/mobile-2.jpg"
import desktopOne from "../assets/desktop-1.jpg"
import desktopTwo from "../assets/desktop-2.jpg"
import desktopThree from "../assets/desktop-3.jpg"

const menuList = ['home', 'shop', 'about', 'contact']

const Header = () => {
    const menuRef = useRef(null)


    const handleMenu = (event) => {
        menuRef.current.classList.toggle('hidden')
    }


    useEffect(() => {
        const menuDevices = () => menuRef.current.classList.add('hidden')
        window.matchMedia('(max-width: 900px)').addEventListener('change', menuDevices)
        return () => window.removeEventListener('change', menuDevices)
    }, [])


    return (
        <header className="w-full max-h-[50rem] relative aspect-square ts:flex">
            <nav className="w-90 h-10 mx-auto flex items-center justify-between ts:w-auto ts:pl-[5%]">
                <img className="w-3 cursor-pointer ts:hidden" src={menu} alt="menu icon" onClick={handleMenu} />
                <img className="mx-auto" src={logo} alt="logo icon" />
                <div className="flex items-center justify-center absolute bottom-0 right-0 cursor-pointer bg-black">
                    <img className="p-2.5 aspect-square" src={arrowLeft} alt="arrow left" />
                    <img className="p-2.5 aspect-square" src={arrowRight} alt="arrow right" />
                </div>
            </nav>
            <menu className="w-full h-10 pr-3 hidden absolute top-0 bg-white ts:p-0 ts:pl-5 ts:flex ts:gap-x-3 ts:relative ts:bg-transparent" ref={menuRef}>
                <ul className="h-full flex items-center justify-end gap-x-2">
                    {menuList.map((item, key) => <Item key={key} text={item} color="black" size="sm" />)}
                </ul>
            </menu>
            <Picture classPicture="w-full h-full absolute top-0 left-0 -z-10 aspect-square" classImage="w-full h-full" mobile={mobileOne} desktop={desktopOne} alt="Image number one" breakPoint="900px"  />
        </header>
    )
}

export { Header }