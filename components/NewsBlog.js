import { Card, Col, Row } from "antd";
import Link from "next/link";

export default function NewsBlog(params) {
  return (
    <div className="bg-[#F5F5F5]">
      <div className=" mx-auto max-w-screen-xl pb-36 pt-10 ">
        <Row gutter={[40, 0]}>
          <Col span={16}>
            <Row>
              <Link href={"/"}>
                <Card style={{ borderRadius: 15 }} className="w-full">
                  <Row>
                    <Col span={12}>
                      <img
                        className="rounded-lg"
                        //   src={props.allPostData[3].mainImage.asset.url}
                        alt="mainImage"
                      />
                    </Col>
                    <Col span={12}>
                      <h2 className="text-base">
                        “МУИС- Хакатон 2022” оюутны санаачилгын уралдааны
                        бүртгэл эхэллээ
                      </h2>
                      <p>
                        МУИС-ийн оюутан залуусын дунд “МУИС-аас гарааны бизнес”
                        уриатай шинэ санаа, санаачилгыг шалгаруулах. Энэхүү
                        уралдааныг бидний амьдралд тулгамдаж буй асуудлыг
                        шинэлэг арга....
                      </p>
                      <div className="text-[#777181]">2022.02.24</div>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </Row>
            <Row gutter={[40, 0]} className="mt-10">
              <Col span={12}>
                <Link href={"/"}>
                  <Card style={{ borderRadius: 15 }}>
                    <div>
                      <img
                        className="rounded-lg"
                        //   src={props.allPostData[2].mainImage.asset.url}
                        alt="mainImage"
                      />
                      <div className="mt-6">
                        <h2>
                          We make it simple to find, apply and enroll at the
                          most suitable university abroad
                        </h2>
                        <p>Jeffrey Adams</p>
                        {/* <p>California University of Pennsylvania</p> */}
                        <div className="text-[#777181]">2022.02.24 </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col span={12}>
                <Link href={"/"}>
                  <Card style={{ borderRadius: 15 }}>
                    <div>
                      <img
                        className="rounded-lg"
                        //   src={props.allPostData[2].mainImage.asset.url}
                        alt="mainImage"
                      />
                      <div className="mt-6">
                        <h2>
                          We make it simple to find, apply and enroll at the
                          most suitable university abroad
                        </h2>
                        <p>Jeffrey Adams</p>
                        {/* <p>California University of Pennsylvania</p> */}
                        <div className="text-[#777181]">2022.02.24 </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Link href={"/"}>
              <Card style={{ borderRadius: 15 }} className="h-full">
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-lg"
                    //   src={props.allPostData[2].mainImage.asset.url}
                    alt="mainImage"
                  />
                  <div className="mt-6">
                    <h2>
                      We make it simple to find, apply and enroll at the most
                      suitable university abroad
                    </h2>
                    <p>Jeffrey Adams</p>
                    <p>California University of Pennsylvania</p>
                    <div className="text-[#777181]">2022.02.24 </div>
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
