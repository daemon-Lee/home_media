import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const index = (rep: Request, res: Response) => {
  res.render("fileHandle/video_play", {
    title: "video player",

  })
}