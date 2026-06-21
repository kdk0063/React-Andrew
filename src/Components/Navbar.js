import Link from "./Link";
import useNavigation from '../hooks/use-navigation';

import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar() {

  const { handleNav, nav } = useNavigation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Personal Projects', path: '/sideprojects' }
  ];

  const renderedLinks = links.map((link, index) => (
    <li key={index}>
      <Link
        to={link.path}
        className="block px-5 py-2 rounded-full text-sm font-medium text-black transition-all duration-200 hover:bg-[#F58426] hover:text-white"
        activeClassName="bg-[#F58426] text-white"
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6'>
      {/* Logo */}
      <h1 className='w-auto text-3xl font-bold text-[#F58426]'>AK.</h1>

      {/* Desktop Navigation — pill group */}
      <ul className='hidden md:flex items-center border-2 border-[#F58426] rounded-full px-1 py-1 gap-1'>
        {renderedLinks}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav
          ? <IoMdClose className="text-[#F58426]" size={22} />
          : <FiMenu className="text-[#F58426]" size={22} />
        }
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r-2 border-r-[#F58426] bg-[#F0EBE3] ease-in-out duration-500 z-50 p-6'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
        }
      >
        <h1 className='text-3xl font-bold text-[#F58426] mb-6'>AK.</h1>
        {renderedLinks}
      </ul>
    </div>
  );
}
export default Navbar;
