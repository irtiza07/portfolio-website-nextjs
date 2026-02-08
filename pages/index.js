import Banner from "../components/Banner";
import BodyContainer from "../components/BodyContainer";
import Layout from "../components/Layout";
import { getSortedPosts } from "../lib/logic";

export default function Home({ posts, popularPosts }) {
  return (
    <Layout
      title="Irtiza Hafiz - Programmer, Engineering Manager and Credit Card Enthusiast."
      description="This site is about programming tutorials, software engineering, AI programming, credit card reviews, credit card setup and travel tips."
      marginBottom={-10}
    >
      <Banner />
      <BodyContainer posts={posts} popularPosts={popularPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getSortedPosts();
  const popularPosts = posts.filter(
    (post) => post.frontMatter.isPopular === true
  );

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
    },
  };
};
