import { Request, Response } from "express";

export const index = (req: Request, rep: Response) => {
    rep.render("fileHandle/media", {
        title: "media"
    })
}