const multer = require("multer");
const app = require("../../rootes");


app.use(express.static('static'));


app.use(express.static('public'));

app.use(express.static('files'));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./static/img");
  },
  filename: function (req, file, cb) {

    cb(null, `${file.fieldname}-${Date.now()}`)
  }
})

const upload = multer({ storage })


module.exports = upload
