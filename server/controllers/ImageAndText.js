const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");


const genAI = new GoogleGenerativeAI("AIzaSyBWlnzJlvhg5mJVFVo-By40ASfs3OupjiQ");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

exports.runImage = async (req,res) => {

    try {
        // For text-and-image input (multimodal), use the gemini-pro-vision model
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const prompt = req.body.text;
        console.log(req.body);

        const image_path = "/Users/navansh/Web_Dev_Projects/SIH/dashboard-sih/server/assets/exp_1.png";

        const imageParts = [
            fileToGenerativePart(image_path, "image/png"),
            // fileToGenerativePart("image2.jpeg", "image/jpeg"),
        ];

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        console.log(text);

        res.status(200).json({
            success: true,
            message: text
        })
    } catch (error) {
        console.log(error);
    }
  
}

