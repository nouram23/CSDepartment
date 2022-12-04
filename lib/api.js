import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
export const getAllComments = async () => {
  const comments = await client.fetch(
    `*[_type=="comments"]{name,comment, rate}`
  );
  return comments;
};
export const getLastPosts = async () => {
  const lastPosts = await client.fetch(
    `*[_type=="post"]{slug, mainImage, title , description, publishedAt,'author':author->name}[0...4] `
  );
  return lastPosts;
};
export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{...,'author':author->name}`,
    { slug }
  );
  return post;
};
export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{...,'author':author->name, "category":categories[]->{title, color}}`
  );
  return posts;
};
export const getCommonQuestions = async () => {
  const commonQuestions = await client.fetch(
    `*[_type=="commonQuestions"]{answer, question}[0...5]`
  );
  return commonQuestions;
};
