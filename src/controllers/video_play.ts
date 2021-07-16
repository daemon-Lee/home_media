import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import ffmpeg from 'ffmpeg';

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
    imgs_src = imgs_src.filter( (item) => {
      return item !== "thumb"
    })
    for (let img_src of imgs_src)
      if (!fs.existsSync(path.join(dir_path,"thumb/"+img_src+'.jpg'))) {
        create_thunb(img_src, dir_path)
      }
      // console.log(imgs_src)
    return imgs_src
}

const create_thunb = (video_name: string, dir_path: string) => {
  try {
    const process = new ffmpeg(path.join(dir_path, video_name));
    process.then(function (video) {
      // console.log('The video is ready to be processed');
          video.addCommand('-ss', '00:00:20')
          video.addCommand('-vframes', '1')
          video.save(path.join(dir_path, "thumb/"+video_name+".jpg"), (err, file)=> {
              if (!err)
                  console.log("video file:" + file)
              else
                  console.log(err)
          })
      }, function (err) {
        console.log('Error: ' + err);
      });
  } catch (e: any) {
    console.log(e.code);
    console.log(e.msg);
  }
}

export const player_center = (req: Request, res: Response) => {
  const vlist = get_list_video(process.env.VIDEOS_PATH)
  // res.send(vlist)
  res.render("fileHandle/video_center",{
    title: "Video Center",
    vlist: vlist,
  })
}