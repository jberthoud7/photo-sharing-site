const util = require("util");
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    // fix the URL, should be the URL connecting to the MongoDB database
    url: process.env.DB,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-image-${file.originalname}`;
            return filename
        }

        return {
            
        };
    }
});

uploadFiles = multer({ storage: storage }).single("file");
uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;