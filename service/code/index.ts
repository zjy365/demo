import mongoose, { Schema, Document } from "mongoose";
import { CodeModel } from "@/service/model";
// Add or Update Code
export async function addOrUpdateCode({
  type,
  contact,
  code,
}: {
  type: string;
  contact: string;
  code: string;
}) {
  try {
    const currentTime = new Date().getTime();
    const result = await CodeModel.findOneAndUpdate(
      { type, contact },
      { type, contact, code, createdTime: currentTime },
      { upsert: true, new: true },
    ).exec();

    return result;
  } catch (error) {
    console.error("Error in addOrUpdateCode:", error);
    throw error;
  }
}

// Check if code is sendable
export async function checkSendable({
  type,
  contact,
}: {
  type: string;
  contact: string;
}) {
  try {
    const currentTime = new Date().getTime();
    const result = await CodeModel.findOne({
      type,
      contact,
      createdTime: {
        $gt: currentTime - 60 * 1000,
        $lt: currentTime,
      },
    }).exec();

    return !result;
  } catch (error) {
    console.error("Error in checkSendable:", error);
    throw error;
  }
}

// Check Code
export async function checkCode({
  type,
  contact,
  code,
}: {
  type: string;
  contact: string;
  code: string;
}) {
  try {
    const currentTime = new Date().getTime();
    const result = await CodeModel.findOne({
      type,
      contact,
      code,
      createdTime: {
        $gt: currentTime - 5 * 60 * 1000,
      },
    }).exec();

    return !!result;
  } catch (error) {
    console.error("Error in checkCode:", error);
    throw error;
  }
}
