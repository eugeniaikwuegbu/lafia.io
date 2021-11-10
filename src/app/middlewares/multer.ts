import { NextFunction, Request, Response } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { GenericResponseError, HttpStatusCode } from '../utils';
import * as path from "path";


const storage = multer.diskStorage({
  destination: (req, file, cb)  => {
    cb(null, 'files')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
  }
})

const uploadFile = multer({
  storage,
  fileFilter(req: Express.Request, file: Express.Multer.File, cb: FileFilterCallback) {
    // if (!file.fieldname) {
    //   cb(null, false)
    //   return cb(new GenericResponseError('Must upload CSV/Excel File', HttpStatusCode.BAD_REQUEST))
    // }
    if (!file.originalname.match(/\.(csv|xlsx)$/)) {
      cb(null, false);
      return cb(new GenericResponseError('Only CSV or Excel files are allowed!', HttpStatusCode.BAD_REQUEST));
    }
    return cb(null, true);


  },
}).single('field')

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err) {
    return res.status(400).send({
      status: 'error',
      message: err.message,
    });
  }
  next();
}

export { uploadFile, errorHandler };
