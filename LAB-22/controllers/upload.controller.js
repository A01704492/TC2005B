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

