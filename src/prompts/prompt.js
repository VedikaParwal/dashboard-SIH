// node --version # Should be >= 18
// npm install @google/generative-ai
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBWlnzJlvhg5mJVFVo-By40ASfs3OupjiQ");

// Converts local file information to a GoogleGenerativeAI.Part object.
async function fileToGenerativePart(path, mimeType) {
  const file = await fetch(path).then((response) => response.blob());

  const data = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });

  return {
    inlineData: {
      data: data.split(',')[1], // Extract the base64-encoded data part
      mimeType,
    },
  };
}
export async function runImage(chat, image) {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    chat ||
    "Extract the text from the images and and calculate : Clay / Silt (-75 micron) percent, Sand (-4.75 mm + 75 micron) percent: and Gravel (-100 mm + 4.75 mm) percent:";

  const imageParts = [
    fileToGenerativePart(
      "/Users/navansh/Web_Dev_Projects/SIH/dashboard-sih/src/assets/report.png",
      "image/png"
    ),
    // fileToGenerativePart("F:/result.png", "image/jpeg"),
  ];

  console.log("Generating...");
  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return response.text();
}

