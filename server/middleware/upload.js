import multer from "multer";

const MAX_LIMIT = 1024 * 100000;

const storage = multer.diskStorage({
  destination: "./Images/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_LIMIT }
}).single("file");

export const uploader = (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      res.status(400).send({ err: "failed while uploading" });
    } else next();
  });
};
