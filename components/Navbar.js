import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Drawer } from "antd";
import { useState } from "react";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" justify-between flex w-full h-14 lg:h-16 pt-2 items-center">
      <Link href={"/"}>
        <div className=" flex text-white cursor-pointer">
          <img
            className="h-12"
            src={"/images/image 47.png"}
            alt="ХҮРЭЭ ПРОГРАМ ХАНГАМЖ"
          />
          <p className="ml-1 text-[8px] lg:text-xs flex flex-col justify-center">
            <span className="block text-xs lg:text-lg font-bold mt-1">
              ХҮРЭЭ
            </span>
            ПРОГРАМ ХАНГАМЖ
          </p>
        </div>
      </Link>
      <div className="hidden lg:block mt-2">
        <ul className="flex text-white space-x-12 ">
          <li className="cursor-pointer">
            <Link href="/#">
              <a className="text-white">Нүүр</a>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#about">
              <a className="text-white">Танилцуулагa</a>
            </Link>
          </li>
          <li className="cursor-pointer ">
            <Link href="/#goal">
              <a className="text-white">Үйл ажиллагаа </a>
            </Link>
          </li>
          <li className="cursor-pointer ">
            <Link href="/news">
              <a className="text-white">Мэдээ&Блог</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <div className="mt-2" onClick={showDrawer}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </div>
        <Drawer
          title={
            <div className="flex justify-center  h-12">
              <img src={"/images/image 47.png"} alt="ХҮРЭЭ ПРОГРАМ ХАНГАМЖ" />
              <p className="ml-1 mt-3 text-xs flex flex-col justify-center">
                <span className="block text-sm font-bold">ХҮРЭЭ</span>
                ПРОГРАМ ХАНГАМЖ
              </p>
            </div>
          }
          placement="right"
          onClose={onClose}
          open={open}
        >
          <ul className="flex text-black flex-col space-y-3">
            <li className="cursor-pointer">
              <Link href="/#">
                <a onClick={onClose} className="text-black">
                  Нүүр
                </a>
              </Link>
            </li>
            <li className="cursor-pointer  w-full">
              <Link href="/#about">
                <a onClick={onClose} className="text-black ">
                  Танилцуулагa
                </a>
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="/#goal">
                <a onClick={onClose} className="text-black">
                  Үйл ажиллагаа{" "}
                </a>
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="/news">
                <a onClick={onClose} className="text-black">
                  Мэдээ&Блог
                </a>
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
}
