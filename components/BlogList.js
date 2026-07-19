import React from "react";
import Link from "next/link";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { colors, TOPICS } from "../lib/constants";

// Groups at least this large split into two columns on wide screens. Smaller
// groups stay single-column, where a split would leave a lopsided stub.
const TWO_COLUMN_MIN_POSTS = 8;

function BlogListRow({ post }) {
  const { frontMatter, slug } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      data-umami-event="Blog List Click"
      data-umami-event-post={slug}
      style={{ display: "block", breakInside: "avoid" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "baseline" }}
        gap={{ base: 1, md: 6 }}
        paddingY={3}
        borderBottom="1px solid"
        borderColor={colors.borderSubtle}
        role="group"
      >
        <Text
          color={colors.accentRed}
          fontSize="sm"
          minWidth={{ md: "8.5rem" }}
          flexShrink={0}
        >
          {frontMatter?.date}
        </Text>
        <Heading
          as="h3"
          color={colors.accentGreen}
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          whiteSpace="normal"
          _groupHover={{ textDecoration: "underline" }}
          textUnderlineOffset="4px"
        >
          {frontMatter?.title}
        </Heading>
      </Flex>
    </Link>
  );
}

export default function BlogList({
  posts,
  customHeading,
  headingCta,
  // Section pages group by topic; the homepage groups by the high-level tag.
  groups = TOPICS,
  groupBy = (frontMatter) => frontMatter?.topic,
  // When set, each group is truncated to this many posts and links out to its
  // own page for the rest. Used on the homepage, where the full list is noise.
  maxPerGroup,
  groupHref,
}) {
  // Follow the key order of `groups` so group order is controlled in one place
  // rather than by post dates.
  const grouped = Object.keys(groups)
    .map((key) => {
      const all = posts?.filter((post) => groupBy(post.frontMatter) === key) ?? [];
      return {
        key,
        label: groups[key],
        total: all.length,
        posts: maxPerGroup ? all.slice(0, maxPerGroup) : all,
      };
    })
    .filter((group) => group.posts.length > 0);

  // Anything without a recognized group still needs somewhere to show up.
  const ungrouped = posts?.filter((post) => !groups[groupBy(post.frontMatter)]) ?? [];
  if (ungrouped.length > 0) {
    grouped.push({
      key: "other",
      label: "More Posts",
      total: ungrouped.length,
      posts: maxPerGroup ? ungrouped.slice(0, maxPerGroup) : ungrouped,
    });
  }

  return (
    <Box>
      {customHeading && (
        <Heading
          color={colors.textPrimary}
          textAlign="center"
          mb={headingCta ? 4 : 6}
        >
          {customHeading}
        </Heading>
      )}
      {headingCta && (
        <Flex justify="center" mb={10}>
          {headingCta}
        </Flex>
      )}

      <VStack align="stretch" spacing={12}>
        {grouped.map((group) => (
          <Box key={group.key}>
            <Flex align="baseline" gap={3} mb={2}>
              <Heading
                as="h2"
                color={colors.textPrimary}
                fontSize={{ base: "lg", md: "xl" }}
              >
                {group.label}
              </Heading>
              <Text color={colors.textLight} opacity={0.5} fontSize="sm">
                {group.total}
              </Text>
            </Flex>
            <Box
              borderTop="1px solid"
              borderColor={colors.borderSubtle}
              // CSS multi-column flows down the first column before wrapping to
              // the second, so posts stay in date order. A grid would read
              // left-to-right and scramble that.
              sx={{
                columnCount: {
                  base: 1,
                  lg: group.posts.length >= TWO_COLUMN_MIN_POSTS ? 2 : 1,
                },
                columnGap: 12,
              }}
            >
              {group.posts.map((post) => (
                <BlogListRow key={post.slug} post={post} />
              ))}
            </Box>
            {groupHref?.(group.key) && group.total > group.posts.length && (
              <Flex justify="flex-start" mt={4}>
                <Link
                  href={groupHref(group.key)}
                  data-umami-event="Blog List See All"
                  data-umami-event-group={group.key}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    color={colors.accentGreen}
                    borderColor={colors.accentGreen}
                    _hover={{ bg: colors.accentGreen, color: colors.textDark }}
                  >
                    {`All ${group.total} ${group.label} posts`}
                  </Button>
                </Link>
              </Flex>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
