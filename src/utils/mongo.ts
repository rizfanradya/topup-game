import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:root@ac-mz4mfej-shard-00-00.gcvlgt6.mongodb.net:27017,ac-mz4mfej-shard-00-01.gcvlgt6.mongodb.net:27017,ac-mz4mfej-shard-00-02.gcvlgt6.mongodb.net:27017/?ssl=true&replicaSet=atlas-dgsxkt-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb,", error);
  }
};
