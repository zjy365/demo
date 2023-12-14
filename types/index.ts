import type { Mongoose } from "mongoose";

export type PagingData<T> = {
  pageNum: number;
  pageSize: number;
  data: T[];
  total?: number;
};

declare global {
  var mongodb: Mongoose | null;
}

export * from "./code";
export * from "./user";
