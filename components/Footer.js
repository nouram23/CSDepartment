import { Col, Row } from "antd";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <Row className="mt-24 flex max-w-screen-2xl mx-auto" id="footer">
        <Col lg={12} className="hidden lg:flex justify-center px-10 ">
          <iframe
            height={400}
            className="w-full  rounded-3xl"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Huree%20University%20of%20ICT,%20WVGM+HH3,%20Ulaanbaatar%20Ulan%20Bator+(Huree%20University%20of%20ICT)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </Col>
        <Col
          xs={24}
          lg={12}
          className="bg-[#2A35A7]  w-full sm:rounded-t-[72px] rounded-t-[50px] -mt-40"
        >
          <Row className=" flex text-white space-x-5 ml-6 mt-6">
            <img
              className="h-full"
              src={"/images/image 47.png"}
              alt="HureeICT"
            />
            <Col className="ml-1 text-xs  flex flex-col justify-center">
              <span className="block text-base lg:text-lg font-bold ">
                ХҮРЭЭ
              </span>
              ПРОГРАМ ХАНГАМЖИЙН ТЭНХИМ
            </Col>
          </Row>
          <Row className="bg-white h-1 my-6"></Row>
          <Row className="flex text-white m-4 sm:p-7 p-3">
            <Row className="w-1/2">
              <Row>
                <p className="font-bold sm:text-xl text-base">МЭДЭЭ МЭДЭЭЛЭЛ</p>
                <Row className="font-light">
                  <p>Тэнхимийн Танилцуулагa </p>
                  <p>Хөтөлбөрийн Зорилго</p>
                  <p>Сургалтын Хөтөлбөр</p>
                </Row>
              </Row>
              <Row className="font-light mt-6">
                <p className="font-bold sm:text-xl text-base mb-2">
                  ЦАХИМ БҮРТГЭЛ
                </p>
                <a
                  href="https://elselt.huree.edu.mn/register.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400"
                >
                  Онлайнаар бүртгүүлэх бол{" "}
                  <span className="underline underline-offset-4">энд</span>{" "}
                  дарна уу!
                </a>
              </Row>
            </Row>
            <Row className="w-1/2 px-3 ">
              <p className="font-bold sm:text-xl text-base">Холбоо барих</p>
              <Row className="font-light space-y-3">
                <p>
                  Хасбаатрын гудамж, 11-р хороо, Бичил хороолол, Баянгол дүүрэг,
                  Улаанбаатар, Монгол улс.
                </p>
                <p>Утас: (976) 88123-890, 8966-3927</p>
                <p>Цахим хаяг: gloriaym@yahoo.co.kr</p>
                <p> Фэйсбүүк хуудас: CS & SE Department</p>
              </Row>
            </Row>
          </Row>

          <Row className="flex justify-evenly mt-16  text-white sm:text-2xl text-xl">
            <Link href={"/"}>
              <a>Facebook</a>
            </Link>
            <Link href={"/"}>
              <a>Instagram</a>
            </Link>
            <Link href={"/"}>
              <a>Youtube</a>
            </Link>
          </Row>
          <Row className=" flex justify-center mt-14 mb-5 font-Roboto text-[#7D82C3]">
            © 2022 NOURAM
          </Row>
        </Col>
      </Row>
    </>
  );
};
