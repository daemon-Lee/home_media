import "dotenv/config";
import path from "path";

const config = {
  POST: process.env.PORT || 3000,
  // static path
  VIEWS_PATH: path.join(__dirname, "../views"),
  STATIC_PATH: path.join(__dirname, "../src/static"),
  MEDIA_PATH: path.join(__dirname, "../media"),
  IMAGES_PATH: path.join(__dirname, "../media/images"),
  VIDEOS_PATH: path.join(__dirname, process.env.VIDEOS_PATH || "../media/videos"),
  // a little fun
  MESSAGE: "say hello",
}

export default config;