import { Card, Col, Row, Tag, Typography } from "antd";
import moment from "moment";
import Link from "next/link";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAllPosts, urlFor } from "../../lib/api";
const { Title, Text } = Typography;

export default function News({ allPosts }) {
  return (
    <>
      <div className="bg-[#2A35A7]  h-16  block w-full font-Roboto">
        <div className="mx-auto max-w-5xl px-2">
          <Navbar />
        </div>
      </div>
      <div className="mx-auto max-w-5xl  mt-10 px-4">
        <Title level={2}>Мэдээ&Блог</Title>
        <h1 className="text-slate-400">ХҮРЭЭ ПРОГРАМ ХАНГАМЖ</h1>
        <div className="border-t h-1 "></div>
      </div>
      <div className="mx-auto max-w-5xl mb-52 mt-10 px-4">
        <Row gutter={[30, 30]}>
          {allPosts?.map((e, i) => (
            <Col key={i} xl={8} md={12} xs={24} className="">
              <Link key={i} href={`/news/${e.slug.current}`}>
                <Card style={{ borderRadius: 15 }} className="h-[355px]">
                  <div>
                    <img
                      className="rounded-lg mx-auto"
                      src={urlFor(e.mainImage).height(200)}
                      alt="mainImage"
                    />
                    <div className="mt-6">
                      <p className="font-medium text-base">
                        <Text ellipsis={{ tooltip: e.title }}>{e.title}</Text>
                      </p>
                      {e.category?.map((cat, i) => (
                        <Tag key={i} color={cat?.color}>
                          {cat.title}
                        </Tag>
                      ))}
                      <div className="text-[#777181] mt-1">
                        {moment(e.publishedAt).format("YYYY.MM.DD")} {e.author}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  return { props: { allPosts } };
};
