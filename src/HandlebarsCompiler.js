var $ = require('jquery');
var Handlebars = require('handlebars');

function HandlebarsCompiler() {

}

HandlebarsCompiler.prototype.load = function(templateName, onCompletion) {
  $.ajax({
      url: "../partials/" + templateName + ".html",
      cache: true,
      success: function(data) {
          var source    = data;
          var template  = Handlebars.compile(source);
          $('#' + templateName + "-container").html(template);
          onCompletion();
      }
  });
}

module.exports = HandlebarsCompiler;
