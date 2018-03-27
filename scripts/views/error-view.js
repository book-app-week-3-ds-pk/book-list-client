'use strict'

var app = app || {};
var errorView={};
(function(module){
  errorView.initErrorPage=function(err){
    let errorTemplate=Handlebars.compile('#error-template')
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').html('');
    $('#error-message').append(errorTemplate(err));

  }
  errorView.errorCallback = function(err) {
    console.error(err);
    errorView.initErrorPage(err);
  }
  module.errorView = errorView;
})(app);