import { promises as fs } from "fs";
import path from "path";

export default async (req, res) => {
  const filePath = path.join(process.cwd(), "public", "feed.xml");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(fileContents);
  } catch (error) {
    res.status(500).send("Error reading the XML file.");
  }
};
