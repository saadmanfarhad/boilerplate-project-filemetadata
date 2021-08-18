const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = (app) => {
  app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    const { originalname, mimetype, size } = req.file;
    res.send({ name: originalname, type: mimetype, size: size });
  });
};
