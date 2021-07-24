import fs from "fs";
import path from "path";
import config from "../config";
import ffmpeg from "ffmpeg";

const check_video_thumbnail = (videos_path: string) => {
  let videos_src: string[] = fs.readdirSync(videos_path)

  if (!fs.existsSync(videos_path + '/thumb')){
      fs.mkdirSync(videos_path + '/thumb')
  }
  videos_src = videos_src.filter( (item) => {
    return item !== "thumb"
  })
  if (videos_src.length == 0) {
    console.log("No video in path")
    return
  }
  for (let vid_src of videos_src)
    if (!fs.existsSync(path.join(videos_path,"thumb/"+vid_src+'.jpg'))) {
      create_thunb(vid_src, videos_path)
    }
  console.log(`Pre-load ${videos_src.length} vidoes`)
}

const create_thunb = (video_name: string,
                      dir_path: string,
                      time: string = '00:00:30') => {
  try {
    const process = new ffmpeg(path.join(dir_path, video_name));
    process.then(function (video) {
      // console.log('The video is ready to be processed');
          video.addCommand('-ss', time)
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

export const setup_sever = () => {
  check_video_thumbnail(config.VIDEOS_PATH)
  return "hello"
}