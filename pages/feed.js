import fs from "fs";
import path from "path";

export default function FeedPage({ xml }) {
  return <div dangerouslySetInnerHTML={{ __html: xml }} />;
}

export async function getStaticProps() {
  // Path to the XML file
  const filePath = path.join(process.cwd(), "public", "feed.xml");

  // Read the XML file
  const xml = fs.readFileSync(filePath, "utf-8");

  return {
    props: {
      xml,
    },
  };
}
