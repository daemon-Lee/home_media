import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const player = (req: Request, res: Response) => {
  res.render("fileHandle/video_play", {
    title: "video player",
    video_path: req.query.video_path,
  })
}