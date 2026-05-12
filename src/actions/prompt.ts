"use client"; // Note: This is usually for the client but the user wants actions in /actions. 
// Actually, Server Actions should NOT have "use client" at the top if they are in separate files.
// They should have "use server".

export const createPromptAction = async (formData: FormData) => {
  "use server";
  
  const title = formData.get("title");
  const prompt = formData.get("prompt");
  
  // Logic to save to DB using PromptService
  console.log("Creating prompt:", title);
  
  return { success: true };
};
