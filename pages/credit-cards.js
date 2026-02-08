import { Box } from "@chakra-ui/react";
import CreditCardGrid from "../components/CreditCardGrid";
import BlogGrid from "../components/BlogGrid";
import Layout from "../components/Layout";
import { getSortedPosts } from "../lib/logic";

export default function CreditCards({ posts }) {
  return (
    <Layout
      title="Credit Cards"
      description="Travel credit cards, cashback credit cards, redemption strategies, travel stories, award booking tips, and more."
      color="white"
      width="100vw"
    >
      <Box padding={{ base: "3vw", md: "5vw" }}>
        <CreditCardGrid />
        <BlogGrid posts={posts} maxColumnCount={4} />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getSortedPosts().filter(
    (post) => post.frontMatter.tags[0] === "credit-cards"
  );

  return {
    props: {
      posts: posts,
    },
  };
};
