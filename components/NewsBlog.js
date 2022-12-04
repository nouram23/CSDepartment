import { Button, Card, Col, Row } from "antd";
import Link from "next/link";

import { urlFor } from "../lib/api";
import moment from "moment";

export default function NewsBlog({ lastPosts }) {
  return (
    <div className="bg-[#F5F5F5]" id="news">
      <div className=" mx-auto max-w-screen-xl pb-36  md:px-20 sm:px-14 px-8">
        <Row className="mb-3 ">
          <Button className="bg-[#2A35A7]" href="/news" shape="round">
            Мэдээ&Блог
          </Button>
        </Row>
        <Row gutter={[40, 0]}>
          <Col xl={16}>
            <div>
              <Link href={`/news/${lastPosts[0].slug.current}`}>
                <Card
                  style={{ borderRadius: 15 }}
                  className="w-full hidden lg:block cursor-pointer"
                >
                  <Row gutter={[40, 0]}>
                    <Col span={12}>
                      <img
                        className="rounded-lg mx-auto"
                        src={urlFor(lastPosts[0].mainImage).height(200)}
                        alt="mainImage"
                      />
                    </Col>
                    <Col span={12}>
                      <h2 className="text-base font-medium">
                        {lastPosts[0].title}
                      </h2>
                      <p>{lastPosts[0].description}</p>
                      <div className="text-[#777181]">
                        {moment(lastPosts[0].publishedAt).format("YYYY.MM.DD")}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </div>

            <Row gutter={[40, 0]} className="lg:mt-10">
              <Col md={12}>
                <Link href={`/news/${lastPosts[1].slug.current}`}>
                  <Card style={{ borderRadius: 15 }}>
                    <div>
                      <img
                        className="rounded-lg"
                        src={urlFor(lastPosts[1].mainImage).height(200)}
                        alt="mainImage"
                      />
                      <div className="mt-6">
                        <p className="font-medium text-base">
                          {lastPosts[1].title}
                        </p>

                        <p>{lastPosts[1].author}</p>
                        {/* <p>California University of Pennsylvania</p> */}
                        <div className="text-[#777181]">
                          {" "}
                          {moment(lastPosts[1].publishedAt).format(
                            "YYYY.MM.DD"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col md={12} className="mt-6 md:mt-0">
                <Link href={`/news/${lastPosts[2].slug.current}`}>
                  <Card style={{ borderRadius: 15 }}>
                    <div>
                      <img
                        className="rounded-lg"
                        src={urlFor(lastPosts[2].mainImage).height(200)}
                        alt="mainImage"
                      />
                      <div className="mt-6">
                        <p className="font-medium  text-base">
                          {lastPosts[2].title}
                        </p>

                        <p>{lastPosts[2].author}</p>
                        {/* <p>California University of Pennsylvania</p> */}
                        <div className="text-[#777181]">
                          {" "}
                          {moment(lastPosts[2].publishedAt).format(
                            "YYYY.MM.DD"
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xl={8} className="hidden lg:block">
            <Link href={`/news/${lastPosts[3].slug.current}`}>
              <Card style={{ borderRadius: 15 }} className="h-full">
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-lg"
                    src={urlFor(lastPosts[3].mainImage).height(200)}
                    alt="mainImage"
                  />
                  <div className="mt-6">
                    <h2 className="font-medium text-base">
                      {lastPosts[3].title}
                    </h2>
                    <p className="mt-10">{lastPosts[3].description}</p>
                    <div className="">
                      <p>{lastPosts[3].author}</p>
                      <div className="text-[#777181]">
                        {moment(lastPosts[3].publishedAt).format("YYYY.MM.DD")}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
