import express, { response } from "express";
import compression from "compression";
import "dotenv/config";
import path from "path";
import serveIndex from "serve-index";

// Controllers (routers handle)
import * as home from "./controllers/home"
import * as media from "./controllers/media"
import * as gallery from "./controllers/gallery"

// Create Express sever
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());

// Use middleware to serve static files
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(
    '/static',
    express.static(
        path.join(__dirname, "../src/static"),
        {maxAge: 31557600001}
    )
);
app.use(
    '/medias',
    express.static(path.join(__dirname, process.env.MEDIA_PATH || "../media"))
);
app.use(
    '/medias',
    serveIndex(path.join(__dirname, process.env.MEDIA_PATH || "../media"))
)

// Primary app router.
app.get('/', home.index)
app.get('/media', media.index)
app.get('/gallery', gallery.index)
app.get('/sample', (req,res) => {
    res.send("Here is home.")
})

export default app;