const multer = require('multer')

const storage = multer.diskStorage({
  //kun folder ma file haru halne
  destination: function (req, file, cb) {
    //cb(null- error huda k garne , folderpath- sucess huda k garne)
    cb(null, "./storage");
  },
//   filename kasari save garne to avoid confusion on file name
  filename: function(req,file,cb){
    cb(null,Date.now() + file.originalname)
  }
});

module.exports = {multer , storage}