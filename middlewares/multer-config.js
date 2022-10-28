import multer,{diskStorage} from "multer";
import {join, dirname} from "path"; 
import { fileURLToPath } from "url";


const MIME_TYPES={
"image/jpg":"jpg",
"image/jpeg": "jpeg", 
"image/png":"png"
};

export default multer ({
    storage:diskStorage({
        destination:(req,file,callback)=>{
            const _dirname=dirname(fileURLToPath(import.meta.url));
            callback(null,join(_dirname,"../public/images")); 

        }, 
        filename : (req,file,callback)=>{
            const name = file.originalname.split(" ").join("-");
            const extension= MIME_TYPES[file.mimetype]; 
            callback(null, name+Date.now()+"."+extension); 
        }
    }),
    limits:10*1024*1024
}).single("image");
