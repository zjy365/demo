export const openaiBaseUrl =
  process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";

export const baseUrl = process.env.ONEAPI_URL || openaiBaseUrl;

export const systemAIChatKey = process.env.CHAT_API_KEY || "";

/* openai axios config */
export const axiosConfig = () => {
  return {
    baseURL: baseUrl,
    // httpsAgent: global.httpsAgent,
    headers: {
      Authorization: `Bearer ${systemAIChatKey}`,
      auth: process.env.OPENAI_BASE_URL_AUTH || "",
    },
  };
};
