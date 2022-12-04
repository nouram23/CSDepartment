import { PortableText } from "@portabletext/react";
import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAllPosts, getPostBySlug, urlFor } from "../../lib/api";
export default function News({ post }) {
  const components = {
    types: {
      image: (props) => (
        <div className="flex justify-center">
          <img
            src={urlFor(props.value.asset).height(600)}
            //   alt={props.value.alt || " "}
            loading="lazy"
          />
        </div>
      ),
      youtube: ({ value }) => {
        const { url } = value;
        const id = getYouTubeID(url);
        return (
          <div>
            <YouTube iframeClassName="w-full" videoId={id} />
          </div>
        );
      },
    },
  };
  return (
    <>
      <div className="bg-[#2A35A7]  md:h-56  h-48 block w-full font-Roboto">
        <div className="mx-auto max-w-5xl px-2">
          <Navbar />
          <div className="border-t h-1 "></div>
          <h1 className="text-white font-medium md:text-3xl text-xl md:mt-6 mt-4  text-center md:max-w-3xl   sm:max-w-md  max-w-sm mx-auto">
            {post.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl mb-60 px-4 mt-5 ">
        <PortableText value={post.content} components={components} />
      </div>
      <Footer />
    </>
  );
}
export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return { props: { post: post[0] } };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const data = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return { paths: data, fallback: false };
};
