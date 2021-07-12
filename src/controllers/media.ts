import { Request, Response } from "express";
import path from "path";

export const index = (req: Request, rep: Response) => {
    rep.render("fileHandle/media", {
        title: "media",
        img_path: "medias/images/lion.jpg",
        img_name: "lion" 
    })
}