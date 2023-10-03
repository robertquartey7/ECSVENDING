import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="flex gap-5">
      <span className="text-white bg-gray-400 p-2 rounded">
        <Link
          href={"#contact"}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
