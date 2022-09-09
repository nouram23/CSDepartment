import "antd/dist/antd.css";
import AboutUs from "../components/AboutUs";
import Comments from "../components/Comments";
import CommonQuestions from "../components/CommonQuestions";
import { Footer } from "../components/Footer";
import Goals from "../components/Goals";

import Header from "../components/Header";
export default function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Goals />
      <CommonQuestions />
      <Comments />
      <Footer />
    </>
  );
}
