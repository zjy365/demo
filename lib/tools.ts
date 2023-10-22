import crypto from "crypto";
import dayjs from "dayjs";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const createHashPassword = (text: string) => {
  const hash = crypto.createHash("sha256").update(text).digest("hex");
  return hash;
};

export const formatTimeToChatTime = (time: Date) => {
  const now = dayjs();
  const target = dayjs(time);

  if (now.diff(target, "second") < 60) {
    return "刚刚";
  }

  if (now.isSame(target, "day")) {
    return target.format("HH:mm");
  }

  if (now.subtract(1, "day").isSame(target, "day")) {
    return "昨天";
  }

  if (now.subtract(2, "day").isSame(target, "day")) {
    return "前天";
  }

  if (now.isSame(target, "year")) {
    return target.format("M月D日");
  }

  return target.format("YYYY/M/D");
};
