import { POST } from "@/service/request";
import { Session } from "@/types/user";

export const signInByProvider = (provider: string, code: string | string[]) =>
  POST<Session>(`/api/auth/oauth/${provider}`, {
    code,
  });

export const sendCodeByPhone = (phoneNumbers: string) =>
  POST("/api/auth/phone/sms", {
    phoneNumbers: phoneNumbers,
  });
