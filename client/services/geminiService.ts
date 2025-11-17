import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface GenerationParams {
  character: string;
  expression: string;
  action: string;
  outfit: string;
}

export const generateCharacterImage = async ({
  character,
  expression,
  action,
  outfit,
}: GenerationParams): Promise<string> => {
  const prompt = `Generate a high-resolution, studio-quality, Pixar-style 3D rendered image of a cute, anthropomorphic ${character}.
The character should have a ${expression}.
The character should be in the middle of ${action}.
The character is wearing ${outfit}.
The background should be a natural and fitting environment for the character's action and mood.
The image should be vibrant, detailed, and have a cinematic feel, centered in the frame.`;

  try {
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image.imageBytes) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error('Image generation failed: No image data was returned from the API.');
    }
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    throw error;
  }
};
