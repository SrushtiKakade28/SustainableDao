import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x359133ee9e7f8FfF8b959c601c0387b6bBe9BF17",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Trees",
        description: "This NFT will give you access to SustaianbleDAO!",
        image: readFileSync("scripts/assets/forest.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()


