import fs from 'fs-extra';
import path from "path";
import resizeProcess from './resizeProcess'
interface ImageQuery {
  filename?: string;
  width?: any;
  height?: any;
}
export default class Image {
static imagesPath: any = './images';
static thumbsPath: any = './thumbs';
static async ImageUrlPath(params: ImageQuery){
const imagePath: string =params.width && params.height? path.resolve(Image.thumbsPath,`${params.filename}-${params.width}x${params.height}.jpg`)
: path.resolve(Image.imagesPath, `${params.filename}.jpg`);
try {
  await fs.access(imagePath);
    return imagePath;
  } catch {
    return null;
  }
} 
static async createThumbs(){
    try {
      await fs.access(Image.thumbsPath);
    } catch {
      fs.mkdir(Image.thumbsPath);
    }
  }
static async createThumbsFile(params: ImageQuery) {
const filePathFull: string = path.resolve(Image.imagesPath,`${params.filename}.jpg`);
const filePathThumb: string = path.resolve(Image.thumbsPath,`${params.filename}-${params.width}x${params.height}.jpg`);

    return await resizeProcess({
      source: filePathFull,
      target: filePathThumb,
      width: parseInt(params.width),
      height: parseInt(params.height)
    });
  }
}































