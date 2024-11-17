import { useState, memo, useCallback } from "react";
import { LINKS as links } from "../constants";
import List from "./List";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const LinkItem = memo(({ link }) => (
  <a href={link.href} className="hover:text-stone-400 transition duration-300">
    {link.label}
  </a>
));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav className="flex-between max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="logo">
          <a href="/" className="font-semibold text-lg uppercase">
            Prashant Dobariya
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <List
            data={links}
            getKey={(link) => link.href}
            getRow={(link) => <LinkItem link={link} />}
          />
        </div>
        <div className="md:hidden">
          <button onClick={handleLinkClick}>
            {isOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          <List
            data={links}
            getKey={(link) => link.href}
            getRow={(link) => <LinkItem link={link} />}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
