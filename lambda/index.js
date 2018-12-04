var absolutify = require('absolutify');
var axios = require('axios');
var cheerio = require('cheerio');

exports.handler = function(event, context, callback) {

    // get site url from API Gateway param
    var site = event.params.querystring.site;
    
    // hande for possible trailing slash in source url
    if(site.substr(-1) == '/') {
    site = site.substr(0, site.length - 1);
    }

    // Get site html
    var getHtml = axios.get(site)
    .then(function (response) {
        var html = response.data
        var parsed = absolutify(html, site)
        const $ = cheerio.load(parsed);
        
        // replace elements in the html. The main content for start and stop tags and the call to external SVG.
        $('#content').html('<div id="idxStart"></div><div id="idxStop"></div>');
        $('.Icon--hamburger').html('<line fill="none" stroke-miterlimit="10" x1="0" y1="1.5" x2="24" y2="1.5"></line><line fill="none" stroke-miterlimit="10" x1="0" y1="8.5" x2="24" y2="8.5"></line><line fill="none" stroke-miterlimit="10" x1="0" y1="15.5" x2="24" y2="15.5"></line>');
        $('.Icon--close').html('<line fill="none" stroke-miterlimit="10" x1="0" y1="1.5" x2="24" y2="1.5"></line><line fill="none" stroke-miterlimit="10" x1="0" y1="8.5" x2="24" y2="8.5"></line><line fill="none" stroke-miterlimit="10" x1="0" y1="15.5" x2="24" y2="15.5"></line>');
    
        
        $('body').append('<script>switch(Static.SQUARESPACE_CONTEXT.templateId){case "55dccafee4b04b8e0d7b6d4d": console.log("jasper"); var styles = "https://s3.amazonaws.com/idx-squarespace/jasper.css";var newSS=document.createElement("link");newSS.rel="stylesheet";newSS.href=styles;document.getElementsByTagName("head")[0].appendChild(newSS);  break;default: console.log("default"); var styles = "https://s3.amazonaws.com/idx-squarespace/default.css";var newSS=document.createElement("link");newSS.rel="stylesheet";newSS.href=styles;document.getElementsByTagName("head")[0].appendChild(newSS); };</script>');

        
        // lambda call back returning html
        callback(null, $.html());
       // console.log();
    })
    .catch(function (error) {
        console.log(error);
    });

}
