import { Button, Collapse, Modal } from "antd";
import { useState } from "react";

const { Panel } = Collapse;

export default function CommonQuestions({ commonQuestions }) {
  const [tmp, setTmp] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const readMore = (e) => {
    setTmp(e);
    setIsModalOpen(true);
  };
  return (
    <div className="max-w-6xl flex mx-auto lg:pt-20 py-6 lg:pb-28   lg:px-10 px-4 justify-between lg:flex-row flex-col shadow-xl ">
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <div className="hidden lg:block">
          <div className="h-14 top-24 right-20 absolute">
            <img className="h-full" src={"/images/Ellipse 10.png"} alt="" />
          </div>
          <div className="h-44 top-40 left-0 absolute">
            <img className="h-full" src={"/images/Ellipse 11.png"} alt="" />
          </div>
        </div>

        <p className="text-2xl z-50">Нийтлэг асуулт</p>
      </div>
      <div className="w-full lg:w-1/2 relative ">
        <div className="hidden lg:block h-10 -top-10 right-64 absolute">
          <img className="h-full" src={"/images/Ellipse 12.png"} alt="" />
        </div>
        <Collapse
          accordion
          defaultActiveKey={["0"]}
          bordered={false}
          expandIconPosition="end"
        >
          {commonQuestions?.map((e, i) => (
            <Panel header={e.question} key={i}>
              <p>
                {e.answer.length > 30 ? (
                  <Button type="text" onClick={() => readMore(e)}>
                    {e.answer.substring(0, 20)}...{" "}
                    <span className="ml-1 font-medium">дэлгэрэнгүй</span>
                  </Button>
                ) : (
                  e.answer
                )}
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
      <Modal
        title={tmp?.question}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <p>{tmp.answer}</p>
      </Modal>
    </div>
  );
}
