const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const keys = require("../config/keys");

aws.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY_ID,
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  region: keys.REGION,
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: keys.AWS_BUCKET,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString() + file.originalname);
    },
  })
});

function uploadFile(req, res, next) {
  const uploadfn = upload.single("photo");

  uploadfn(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }],
      });
    }
    next();
  });
}


module.exports = uploadFile;
