const multer = require ('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {

    cb(null, `$(file.fieldname)-$(Date.now()}`)
  }
})

const upload = multer({ storage: storage })
