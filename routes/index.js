var express = require('express');
var router = express.Router();
var phantom = require('phantom');

/* GET home page. */
router.get('/:w/:h/:timeout/:url', function (req, res, next) {
  var url = decodeURIComponent(req.params.url);
  var viewport = {
    width: req.params.w,
    height: req.params.h,
  };
  var timeout = req.params.timeout;

  phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(instance => {
    phInstance = instance;
    return instance.createPage();
  })
    .then(page => {
      // use page
      page.property('viewportSize', viewport).then(function () {
        page.open(url).then(function () {
          console.log('page opened');
          setTimeout(function () {
            console.log('done');
            var filename = '/data/' + Date.now() + '.pdf';
            page.render('public/' + filename).then(function () {
              res.redirect(filename);
            });
          }, parseInt(timeout, 10));
        });
      }).catch(function (error) {
        console.log(error);
        phInstance.exit();
        res.send(error);
      });
    })
    .catch(error => {
      console.log(error);
      phInstance.exit();
      res.send(error);
    });
});

module.exports = router;
