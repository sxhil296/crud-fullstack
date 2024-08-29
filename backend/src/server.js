import "dotenv/config";
import connecDB from "./db/index.js";
import { app } from "./app.js";
const PORT = process.env.PORT || 4000;

connecDB().then(() => {
  app.on("ERROR : ", (error) => {
    console.log("ERROR: ", error);
    throw error;
  });

  app
    .listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    })
    .catch((error) => {
      console.log("MongoDB Connection Failed!!", error);
    });
});
