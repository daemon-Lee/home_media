import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const player = (req: Request, res: Response) => {
  res.render("fileHandle/video_play", {
    title: "video player",
    video_path: req.query.video_path,
  })
}

const get_list_video = (dir_path = "media/videos") => {
    dir_path = path.join("../..", dir_path)
    dir_path = path.join(__dirname, dir_path)
    let imgs_src: string[] = fs.readdirSync(dir_path)
    return imgs_src
}

const videoThumb = (video_url: string = 'None') => {
  console.log(video_url)
  return video_url
}

export const player_center = (req: Request, res: Response) => {
  const vlist = get_list_video(process.env.VIDEOS_PATH)
  // res.send(vlist)
  res.render("fileHandle/video_center",{
    title: "Video Center",
    vlist: vlist,
  })
}