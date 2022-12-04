import React from "react";
import Slider from "react-slick";
import { Card } from "antd";
import { Rate } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Comments = ({ comments }) => {
  return (
    <div className="bg-[#F5F5F5] md:pt-20 sm:pt-12  pt-6 pb-28 px-7">
      <div className="flex flex-col md:max-w-3xl mx-auto ">
        <h1 className="text-center text-xl md:mb-8">Төгсөгчдийн сэтгэгдэл</h1>
        <Slider
          autoplay
          dots={false}
          infinite={true}
          speed={400}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {comments?.map((el, i) => (
            <Card key={i}>
              <div className="flex flex-col items-center">
                <div className="font-bold text-base sm:text-lg">
                  {el.rate}.0
                </div>
                <div className="mb-6 text-xs">
                  <Rate disabled count={5} value={el.rate} />
                </div>
                <div className="text-xs sm:text-base">{el.comment}</div>
              </div>
              <div className=" flex justify-end  mt-5 mr-10 text-xs sm:text-base">
                {el.name}
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Comments;
