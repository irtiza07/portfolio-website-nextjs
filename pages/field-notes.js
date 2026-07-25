import { Box } from "@chakra-ui/react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import SubscribeButton from "../components/SubscribeButton";
import { getSortedPosts } from "../lib/logic";

export default function FieldNotes({ posts }) {
  return (
    <Layout
      title="Field Notes"
      description="Hands-on experiments with AI tools, productivity workflows, and the software I use every day."
      marginBottom={-10}
    >
      <Box padding={{ base: "3vw", md: "5vw" }}>
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
    (post) => post.frontMatter.tags[0] === "field-notes"
  );

  return {
    props: {
      posts: posts,
    },
  };
};
