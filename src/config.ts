import "dotenv/config";
import path from "path";

const config = {
  POST: process.env.PORT || 3000,
  // static path
  VIEWS_PATH: "",
  STATIC_PATH: "",
  IMAGES_PATH: "",
  VIDEOS_PATH: "",
  // a little fun
  MESSAGE: "say hello",
}

export default config;