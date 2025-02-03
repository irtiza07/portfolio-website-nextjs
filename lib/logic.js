import matter from "gray-matter";
import path from "path";
import fs from "fs";

export const comparePublicationDates = (a, b) => {
  const dateA = new Date(a.frontMatter.date);
  const dateB = new Date(b.frontMatter.date);
  return dateB - dateA;
};

export const getSortedPosts = () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files?.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  posts.sort(comparePublicationDates);
  return posts;
};
