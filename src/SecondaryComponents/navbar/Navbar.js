import Modal from "../Modal";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" id="NAVBAR">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {/* <a href="#">Instruction</a> */}
              <label htmlFor="my-modal-4" className="btn">
                Instruction
              </label>
            </li>
            <li>
              {/* <a href="#">About Us</a> */}
              <label htmlFor="my-modal-5" className="btn">
              About us
            </label>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl">
          NoiseCape
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <a>Instruction</a> */}
            <label htmlFor="my-modal-4" className="">
              Instruction
            </label>
          </li>
          <li>
            {/* <a>About us</a> */}
            <label htmlFor="my-modal-5" className="">
              About us
            </label>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn"><a href="https://github.com/Sarthakw001/NoiseCape " target="_blank" rel="noreferrer"> Github repo</a></button>
      </div>
      <Modal data1={"Instruction"} data2={"my-modal-4"} />
      <Modal data1={"About Us"}  data2={"my-modal-5"}/>
    </div>
  );
};

export default Navbar;

