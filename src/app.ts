import express, { response } from "express";
import compression from "compression";
import "dotenv/config";
import path from "path";
import serveIndex from "serve-index";

// config env
import config from "./config";

import { setup_sever } from "./utils/utils";

// Controllers (routers handle)
import * as home from "./controllers/home"
import * as media from "./controllers/media"
import * as gallery from "./controllers/gallery"
import * as Hvideo from "./controllers/video_play"

// setup media files
setup_sever()

// Create Express sever
const app = express();

// Express configuration
app.set("port", config.POST);
app.use(compression());

// Use middleware to serve static files
app.set("views", config.VIEWS_PATH);
app.set("view engine", "pug");
app.use(
    '/static',
    express.static(
        config.STATIC_PATH,
        {maxAge: 31557600001}
    )
);
app.use('/medias', express.static(config.MEDIA_PATH));
app.use('/medias', serveIndex(config.MEDIA_PATH));
app.use('/videos', express.static(config.VIDEOS_PATH));

// Primary app router.
app.get('/', home.index)
app.get('/media', media.index)
app.get('/gallery', gallery.index)
app.get('/video_center', Hvideo.player_center)
app.get('/video_play', Hvideo.player)
app.get('/sample', (req,res) => {
    res.send("Here is home.")
})

export default app;