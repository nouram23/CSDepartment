import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className=" justify-between flex w-full h-14 lg:h-16 p-2 ">
      <div className=" flex text-white ">
        <img className="h-full" src={"/images/image 47.png"} alt="logo" />
        <p className="ml-1 text-[8px] lg:text-xs flex flex-col justify-center">
          <span className="block text-xs lg:text-lg font-bold ">ХҮРЭЭ</span>
          ПРОГРАМ ХАНГАМЖ
        </p>
      </div>
      <div className="hidden lg:block ">
        <ul className="flex text-white space-x-12 ">
          <li className="cursor-pointer">
            <Link href="#">
              <a className="text-white">Нүүр</a>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#about">
              <a className="text-white">Танилцуулагa</a>
            </Link>
          </li>
          <li className="cursor-pointer ">
            <Link href="#goal">
              <a className="text-white">Үйл ажиллагаа </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">sideBar</div>
    </div>
  );
}
