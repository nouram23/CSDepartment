import { BackTop } from "antd";
import AboutUs from "../components/AboutUs";
import Comments from "../components/Comments";
import CommonQuestions from "../components/CommonQuestions";
import { Footer } from "../components/Footer";
import Goals from "../components/Goals";

import Header from "../components/Header";
import NewsBlog from "../components/NewsBlog";
import { getAllComments, getCommonQuestions } from "../lib/api";
import { getLastPosts } from "../lib/api";
export default function App({ comments, lastPosts, commonQuestions }) {
  return (
    <>
      <Header />
      <AboutUs />
      <Goals />
      <CommonQuestions commonQuestions={commonQuestions} />
      <Comments comments={comments} />
      <NewsBlog lastPosts={lastPosts} />
      <Footer />
    </>
  );
}
export const getStaticProps = async () => {
  // buh comment
  const comments = await getAllComments();
  //suuliin 4n post
  const lastPosts = await getLastPosts();
  //ehnii 5n niitleg asuult awcirna
  const commonQuestions = await getCommonQuestions();
  return { props: { comments, lastPosts, commonQuestions } };
};
