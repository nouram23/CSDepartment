export default function Goals() {
  return (
    <div
      className="bg-[#f4f4f4] md:pt-10 pt-3 md:pb-24 pb-12 sm:mt-5"
      id="goal"
    >
      <div className="flex mx-auto flex-col mt-5  items-center text-center lg:max-w-6xl md:max-w-4xl sm:max-w-3xl max-w-xl  px-4">
        <div className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#49B3FF]">
          Зорилго
        </div>
        <p className="sm:mt-8 mt-2  text-xs sm:text-base  max-w-4xl">
          Зах зээлийн эрэлт хэрэгцээтэй уялдан мэдлэг, чадвараараа дотоод,
          гадаадад өрсөлдөх чадвартай үндэсний болон компьютерийн хөгжилд нэн
          шаардлагатай бүтээлч, хүнлэг, даяарчлагч мэргэжилтэн бэлтгэх бөгөөд
          улс орны үйлдвэр, эдийн засаг, техник технологийн салбарын хөгжилд
          бодит хувь нэмэр оруулахад чиглэсэн чанартай, үр ашигтай бодит
          үйлчилгээ үзүүлэх явдал мөн.
        </p>
        <img
          style={{ pointerEvents: "none" }}
          className="md:mt-16 mt-8"
          src={"/images/Group 11088.png"}
        />
      </div>
    </div>
  );
}
