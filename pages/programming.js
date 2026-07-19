import { Box } from "@chakra-ui/react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import SubscribeButton from "../components/SubscribeButton";
import YouTubeHorizontalCarousel from "../components/YouTubeHorizontalCarousel";
import { getSortedPosts, getYoutubeVideos } from "../lib/logic";

export default function Programming({ posts, youtubeVideos }) {
  return (
    <Layout
      title="Programming"
      description="Programming tutorials, system design, software development tips and tricks, and more."
      marginBottom={-10}
    >
      <Box padding={{ base: "3vw", md: "5vw" }}>
        <YouTubeHorizontalCarousel youtubeVideos={youtubeVideos} />
        <BlogList
          posts={posts}
          customHeading="Blog Posts"
          headingCta={<SubscribeButton />}
        />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getSortedPosts().filter(
    (post) => post.frontMatter.tags[0] === "programming"
  );
  const youtubeVideos = await getYoutubeVideos();

  return {
    props: {
      posts: posts,
      youtubeVideos: youtubeVideos,
    },
  };
};
