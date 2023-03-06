import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb("../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload",upload.single("file"), function(req,res){
    const file = req.file
    res.status(200).json(file.filename)
})

app.listen(3001,function(){
    console.log("Conected")
})