// node --version # Should be >= 18
// npm install @google/generative-ai
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBWlnzJlvhg5mJVFVo-By40ASfs3OupjiQ");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    "Extract the text from the images and and calculate : Clay / Silt (-75 micron) percent, Sand (-4.75 mm + 75 micron) percent: and Gravel (-100 mm + 4.75 mm) percent:";

  const imageParts = [
    fileToGenerativePart("F:/downloady.png", "image/png"),
    fileToGenerativePart("F:/result.png", "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
