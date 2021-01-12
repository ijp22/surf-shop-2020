const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dysu2ctc9',
    api_key: '922687758451428',
    api_secret: process.env.CLOUDINARY_SECRET
});
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
      folder: 'surf-shop',
      allowedFormats: ['jpeg', 'png', 'jpg']
  }
});
module.exports = {
    cloudinary,
    storage
}