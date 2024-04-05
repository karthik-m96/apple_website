import { appleImg, bagImg, searchImg } from "../utils"
import {navLists} from "../constants"

const Navbar = () => {
    return (
        <header className="w-full py-10 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="apple" width={12} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray-500 transition-all hover:text-white">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="">
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar