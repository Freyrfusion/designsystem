// purify.js
const purify = require("purify-css")
const htmlFiles = ['*.html'];
//var content = ['**/src/js/*.js', '**/src/html/*.html'];
const cssFiles = ['**/css/app.css'];
const options = {
    //minify: true,
    output: 'purified.css'
    // Will minify CSS code in addition to purify.
 

};

purify(htmlFiles, cssFiles, options, function (res) {
    log(res);
});