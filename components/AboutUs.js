import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div
      className="flex flex-col items-center max-w-6xl mx-auto mt-3 md:mt-10 lg:mt-24 "
      id="about"
    >
      <div className="font-bold sm:text-2xl lg:text-4xl">
        Бидний <span className="text-[#49B3FF]">тухай</span>
      </div>
      <div className="md:my-6 my-2 sm:text-base mx-auto lg:max-w-3xl text-center sm:max-w-xl max-w-lg   px-4 md:px-0">
        Хүрээ МХТДС-ийн ууган тэнхимүүдийн нэг болох Компьютерийн програм
        хангамжийн тэнхим нь анх 2002 онд 30 оюутан 3 багштайгаар гараагаа
        эхэлсэн бол өнөөдөр тус сургуулийн шилдэг тэнхимүүдийн болон
        програмистууд төрүүлэн гаргасаар байна.
      </div>
      <div className="my-8 w-full flex items-center justify-evenly flex-col md:flex-row mx-auto px-2 ">
        <iframe
          className="rounded-xl lg:w-[560px] lg:h-[345px] w-full md:w-96 md:h-52 px-2 h-60 sm:h-72 sm:px-16 md:px-0"
          src="https://www.youtube.com/embed/zoh19bWOHHw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="mt-5 md:mt-0 px-2">
          <div className=" text-base sm:text-xl md:text-lg font-bold text-center">
            Миний төрсөн нутаг Монгоын сайхан орон
          </div>
          <div className="text-base md:text-sm">
            Ямар новшоо бичээд бгаа ийн бэ
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              className="text-lg"
              icon={faPeopleGroup}
              color="#49B3FF"
            />
            <div>
              <h1 className="sm:text-base md:text-base lg:text-lg font-bold ">
                Хаана юу болоод байна
              </h1>
              <p className="text-xs sm:text-xs md:text-sm">
                Энд гоё юм болж байна .
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              className="text-lg"
              icon={faGaugeSimpleHigh}
              color="#49B3FF"
            />
            <div>
              <h1 className=" sm:text-base md:text-lg font-bold ">
                Хаана юу болоод байна
              </h1>
              <p className="text-xs sm:text-xs md:text-base lg:text-sm">
                Энд гоё юм болж байна .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
