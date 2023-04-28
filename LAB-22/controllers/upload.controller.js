const uploaded_file = require('../models/upload.model');

exports.getMain = (request, response, next) => {
    response.render('main', {
        titulo: 'MainUpload',
    });
};

exports.getUpload = (request, response, next) => {
    response.render('uploadview', {
        titulo: 'Upload',
    });
};

exports.postUpload = async (req, res, next) => {
    try {
      const { file } = req.files;
      const { name, data, mimetype } = file;
      const fileData = {
        name,
        data,
        mimetype
      };
      const savedFile = await File.create(fileData);
      res.status(200).send('File uploaded successfully');
    } catch (error) {
      next(error);
    }
  };

exports.getServices = (request, response, next) => {
    response.render('services', {
        titulo: 'Services',
    });
};

exports.getContact = (request, response, next) => {
    response.render('contact', {
        titulo: 'Contact',
    });
};

