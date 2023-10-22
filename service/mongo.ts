import mongoose from "mongoose";

export async function connectToDatabase(): Promise<void> {
  if (global.mongodb) {
    return;
  }

  try {
    mongoose.set("strictQuery", true);
    global.mongodb = await mongoose.connect(process.env.MONGODB_URI as string, {
      bufferCommands: true,
      dbName: process.env.MONGODB_NAME,
      maxConnecting: Number(process.env.DB_MAX_LINK || 5),
      maxPoolSize: Number(process.env.DB_MAX_LINK || 5),
      minPoolSize: 2,
    });

    console.log("mongo connected");
  } catch (error) {
    console.log("===error===", "mongo connect error");
    global.mongodb = null;
  }
}
