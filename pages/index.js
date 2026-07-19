import Banner from "../components/Banner";
import BodyContainer from "../components/BodyContainer";
import Layout from "../components/Layout";
import YoutubeVideoGrid from "../components/YoutubeVideoGrid";
import { getSortedPosts, getYoutubeVideos } from "../lib/logic";

// The homepage shows a short teaser of the channel; the full list lives on the
// section pages and on YouTube itself.
const HOMEPAGE_VIDEO_COUNT = 3;

export default function Home({ posts, popularPosts, youtubeVideos }) {
  return (
    <Layout
      title="Irtiza Hafiz - Programmer, Engineering Manager and Credit Card Enthusiast."
      description="This site is about programming tutorials, software engineering, AI programming, credit card reviews, credit card setup and travel tips."
      marginBottom={-10}
    >
      <Banner />
      <BodyContainer posts={posts} popularPosts={popularPosts} />
      <YoutubeVideoGrid videos={youtubeVideos} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getSortedPosts();
  const popularPosts = posts.filter(
    (post) => post.frontMatter.isPopular === true
  );
  const youtubeVideos = await getYoutubeVideos(HOMEPAGE_VIDEO_COUNT);

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
      youtubeVideos: youtubeVideos,
    },
  };
};
