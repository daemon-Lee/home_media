import express, { response } from "express";
import compression from "compression";
import "dotenv/config";
import path from "path";

// Create Express sever
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(
    express.static(
        path.join(__dirname, "../src/static"),
        {maxAge: 31557600001}
    )
);

// Primary app router.
app.get('/', (req,res) => {
    res.send("Here is home.")
})

export default app;