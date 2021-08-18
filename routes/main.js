const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = (app) => {
  app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    const { originalname, mimetype, size } = req.file;
    res.send({ name: originalname, type: mimetype, size: size });
  });
};
