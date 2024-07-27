import AIModel from "../models/aiModel.js";

export const getAIResponse = async (req, res) => {
  try {
    const { input } = req.body;

    const result = await AIModel.generateContent(input);
    const response = await result.response;
    const text = response.text();
    res.json({ success: true, text });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
