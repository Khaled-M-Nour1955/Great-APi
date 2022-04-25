import sharp from 'sharp';
interface resizeParams {
  source: string;
  target: string;
  width: any;
  height: any;
}
const resizeProcess = async (params: resizeParams) => {
  try {
    await sharp(params.source).resize(params.width, params.height).toFormat('jpeg').toFile(params.target);
    return null;
  } catch(error){
    return error;
  }
};
export default resizeProcess;
