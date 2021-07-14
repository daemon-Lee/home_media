import { Request, Response } from "express";
import path from "path";
import fs from "fs";


const get_list_images = (dir_path = "../../media/images") => {
    dir_path = path.join(__dirname, dir_path)
    let imgs_src: string[] = fs.readdirSync(dir_path)
    for (let i in imgs_src) {
        imgs_src[i] = "images/" + imgs_src[i]
    }
    // console.log(imgs_src)
    return imgs_src
}

export const index = (req: Request, res: Response) => {
    res.render("fileHandle/gallery", {
        title: "Gallery",
        imgs_src: get_list_images()

    })
}