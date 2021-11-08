import { NextFunction, Request, Response } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { GenericResponseError, HttpStatusCode } from '../utils';

const MB_1 = 1000;

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'files')
  },
  filename (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
    console.log(file)
  }
})
const uploadFile = multer({
  storage,
  fileFilter(req: Express.Request, file: Express.Multer.File, cb: FileFilterCallback) {
    if (!file.originalname.match(/\.(csv|xlsx)$/)) {
      cb(null, false);
      return cb(new GenericResponseError('Only CSV or Excel files are allowed!', HttpStatusCode.BAD_REQUEST));
    }
    cb(null, true);
  },
  limits: {
    fileSize: MB_1,
  }
}).single('file')

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err) {
    console.error(err.message);
    return res.status(400).send({
      status: 'error',
      message: err.message,
    });
  }

  next();
}

export { uploadFile, errorHandler };
