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

  const renderedLinks = links.map((link, index) => {
    return (
      <li className="mt-2" key={index}>
        <Link
          key={link.label}
          to={link.path}
          className="p-4 m-2 cursor-pointer"
          activeClassName="font-bold pl-2"
        >
          {link.label}
        </Link>
      </li>
    )
  });

  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-auto text-3xl font-bold text-black'>AK.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex flex-nowrap'>
        {renderedLinks}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav
          ? <IoMdClose className="text-black" size={20} />
          : <FiMenu className="text-black" size={20} />
        }
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-black m-4'>AK.</h1>
          {renderedLinks}
      </ul>
    </div>
  );
};
export default Navbar;